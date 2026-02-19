"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import type { FlattenedVocabWord, VocabTag } from "@/lib/vocabulary/flatten";
import type { StudySettings } from "@/lib/study/settings";
import { DEFAULT_STUDY_SETTINGS } from "@/lib/study/settings";
import { deleteAllProgress, getAllCards, getAnalytics, getSettings, setAnalytics, setSettings, upsertCards } from "@/lib/db/studyRepo";
import { DEFAULT_ANALYTICS } from "@/lib/study/analytics";
import type { SrsCard } from "@/lib/srs/types";

function downloadJson(fileName: string, data: unknown) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(url);
}

export function StudySettingsModal(props: {
  vocab: FlattenedVocabWord[];
  availableTags: VocabTag[];
  settings: StudySettings;
  onSettingsChange: (s: StudySettings) => void;
  onDataRefresh: () => Promise<void>;
  onClose: () => void;
}) {
  const [busy, setBusy] = useState(false);
  const [selected, setSelected] = useState<string[]>(props.settings.selectedCollections ?? []);

  const tagOptions = useMemo(() => props.availableTags, [props.availableTags]);

  const update = async (next: StudySettings) => {
    props.onSettingsChange(next);
    await setSettings(next);
  };

  const toggleCollection = async (slug: string) => {
    const nextSelected = selected.includes(slug) ? selected.filter((s) => s !== slug) : [...selected, slug];
    setSelected(nextSelected);
    const nextSettings: StudySettings = {
      ...props.settings,
      selectedCollections: nextSelected.length ? nextSelected : undefined,
    };
    await update(nextSettings);
  };

  const onExport = async () => {
    setBusy(true);
    try {
      const [cards, settings, analytics] = await Promise.all([getAllCards(), getSettings(), getAnalytics()]);
      downloadJson("study-progress-export.json", { version: 1, exportedAt: new Date().toISOString(), cards, settings, analytics });
    } finally {
      setBusy(false);
    }
  };

  const onImport = async (file: File) => {
    setBusy(true);
    try {
      const text = await file.text();
      const parsed = JSON.parse(text) as {
        cards?: SrsCard[];
        settings?: StudySettings;
        analytics?: unknown;
      };
      if (parsed.settings) await setSettings(parsed.settings);
      if (parsed.analytics) await setAnalytics(parsed.analytics as any);
      if (Array.isArray(parsed.cards)) await upsertCards(parsed.cards);
      await props.onDataRefresh();
    } finally {
      setBusy(false);
    }
  };

  const onReset = async () => {
    if (!confirm("Reset all study progress on this device? This cannot be undone.")) return;
    setBusy(true);
    try {
      await deleteAllProgress();
      await setSettings(DEFAULT_STUDY_SETTINGS);
      await setAnalytics(DEFAULT_ANALYTICS);
      await props.onDataRefresh();
      props.onClose();
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Daily new word limit</Label>
          <Input
            type="number"
            min={1}
            max={200}
            value={props.settings.newPerDay}
            onChange={(e) => {
              const val = Number(e.target.value);
              if (!isNaN(val) && val >= 1 && val <= 200) {
                void update({ ...props.settings, newPerDay: val });
              }
            }}
          />
        </div>

        <div className="space-y-2">
          <Label>Card direction</Label>
          <Select
            value={props.settings.cardDirection}
            onValueChange={(v) => void update({ ...props.settings, cardDirection: v as any })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="smart">Smart</SelectItem>
              <SelectItem value="spanish-front">Spanish front</SelectItem>
              <SelectItem value="meaning-front">Meaning front</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between rounded-lg border border-border/60 p-3">
          <div className="space-y-0.5">
            <div className="text-sm font-medium">Autoplay audio</div>
            <div className="text-xs text-muted-foreground">Play Spanish audio when revealing cards.</div>
          </div>
          <Switch checked={props.settings.autoPlayAudio} onCheckedChange={(v) => void update({ ...props.settings, autoPlayAudio: v })} />
        </div>

        <div className="flex items-center justify-between rounded-lg border border-border/60 p-3">
          <div className="space-y-0.5">
            <div className="text-sm font-medium">Randomize new words</div>
            <div className="text-xs text-muted-foreground">Shuffle the “Learn New” queue.</div>
          </div>
          <Switch checked={props.settings.randomizeNew} onCheckedChange={(v) => void update({ ...props.settings, randomizeNew: v })} />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label>Timed mode duration (seconds)</Label>
          <Input
            type="number"
            min={15}
            max={3600}
            value={props.settings.timedModeDuration}
            onChange={(e) => {
              const val = Number(e.target.value);
              if (!isNaN(val) && val >= 15 && val <= 3600) {
                void update({ ...props.settings, timedModeDuration: val });
              }
            }}
          />
        </div>
      </div>

      <Separator />

      <div className="space-y-3">
        <div className="text-sm font-medium">Collections</div>
        <div className="text-xs text-muted-foreground">Limit study to selected collection tags (optional).</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-56 overflow-y-auto pr-1">
          {tagOptions.map((t) => {
            const checked = selected.includes(t.slug);
            return (
              <button
                type="button"
                key={t.slug}
                onClick={() => void toggleCollection(t.slug)}
                className={`text-left rounded-lg border px-3 py-2 text-sm transition-colors ${
                  checked ? "border-accent bg-accent/10" : "border-border/60 hover:bg-secondary/30"
                }`}
              >
                <div className="font-medium">{t.title}</div>
                <div className="text-xs text-muted-foreground">{t.level}</div>
              </button>
            );
          })}
        </div>
      </div>

      <Separator />

      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <div className="flex gap-3">
          <Button variant="outline" disabled={busy} onClick={() => void onExport()}>
            Export progress JSON
          </Button>
          <label className="inline-flex">
            <input
              type="file"
              accept="application/json"
              className="hidden"
              disabled={busy}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) void onImport(file);
                e.currentTarget.value = "";
              }}
            />
            <Button asChild variant="outline" disabled={busy}>
              <span>Import JSON</span>
            </Button>
          </label>
        </div>
        <Button variant="destructive" disabled={busy} onClick={() => void onReset()}>
          Reset progress
        </Button>
      </div>

      <div className="flex justify-end">
        <Button onClick={props.onClose}>Done</Button>
      </div>
    </div>
  );
}


