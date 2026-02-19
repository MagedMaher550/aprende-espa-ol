"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Settings2, Zap, RefreshCw, CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import type { FlattenedVocabWord } from "@/lib/vocabulary/flatten";
import type { SrsCard } from "@/lib/srs/types";
import type { StudyAnalyticsAggregate } from "@/lib/study/analytics";
import { getLevelFromXP } from "@/lib/study/analytics";
import type { StudySettings } from "@/lib/study/settings";
import { buildStudyQueue } from "@/lib/study/modeEngine";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { setMode, startSession } from "@/lib/redux/studyUiSlice";
import { isoNow } from "@/lib/srs/engine";
import { StudySettingsModal } from "./StudySettingsModal";
import { getAllCollectionTags } from "@/lib/vocabulary/flatten";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { isFirebaseConfigured } from "@/lib/firebase/client";
import { onUserChanged, signInWithGoogle, signOutUser } from "@/lib/firebase/auth";
import { syncStudyData } from "@/lib/firebase/sync";
import type { User } from "firebase/auth";

function countDue(cardsById: Map<string, SrsCard>, nowIso: string) {
  let due = 0;
  for (const c of cardsById.values()) {
    if (c.nextReview <= nowIso) due += 1;
  }
  return due;
}

function countWeak(cardsById: Map<string, SrsCard>) {
  let weak = 0;
  for (const c of cardsById.values()) {
    if (c.state === "weak" || c.confidence < 30) weak += 1;
  }
  return weak;
}

export function StudyDashboard(props: {
  vocab: FlattenedVocabWord[];
  cardsById: Map<string, SrsCard>;
  settings: StudySettings;
  analytics: StudyAnalyticsAggregate;
  onSettingsChange: (s: StudySettings) => void;
  onDataRefresh: () => Promise<void>;
}) {
  const dispatch = useAppDispatch();
  const uiMode = useAppSelector((s) => s.studyUi.mode);
  const customTagSlug = useAppSelector((s) => s.studyUi.customTagSlug);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [syncState, setSyncState] = useState<"idle" | "syncing" | "success" | "error">("idle");
  const [syncError, setSyncError] = useState<string | null>(null);
  const firebaseReady = isFirebaseConfigured();
  const lastAutoSyncUidRef = useRef<string | null>(null);
  const successTimeoutRef = useRef<number | null>(null);

  const nowIso = useMemo(() => isoNow(), []);

  const availableTags = useMemo(() => getAllCollectionTags(), []);

  useEffect(() => {
    let unsub: (() => void) | null = null;
    void (async () => {
      unsub = await onUserChanged(setUser);
    })();
    return () => {
      if (unsub) unsub();
    };
  }, []);

  // Requirement: when user logs in, local progress syncs automatically.
  useEffect(() => {
    if (!firebaseReady || !user) return;
    if (lastAutoSyncUidRef.current === user.uid) return;
    lastAutoSyncUidRef.current = user.uid;
    void (async () => {
      setSyncState("syncing");
      setSyncError(null);
      try {
        await syncStudyData(user);
        await props.onDataRefresh();
        setSyncState("success");
        // Clear success after 3 seconds
        if (successTimeoutRef.current) window.clearTimeout(successTimeoutRef.current);
        successTimeoutRef.current = window.setTimeout(() => {
          setSyncState("idle");
        }, 3000);
      } catch (err) {
        setSyncState("error");
        setSyncError(err instanceof Error ? err.message : "Sync failed");
      }
    })();
  }, [firebaseReady, user, props]);

  useEffect(() => {
    return () => {
      if (successTimeoutRef.current) {
        window.clearTimeout(successTimeoutRef.current);
      }
    };
  }, []);

  const stats = useMemo(() => {
    const due = countDue(props.cardsById, nowIso);
    const weak = countWeak(props.cardsById);
    const learned = props.analytics.wordsLearned;
    const total = props.vocab.length;
    const seen = props.cardsById.size;
    const fresh = Math.max(0, total - seen);
    return { due, weak, learned, total, seen, fresh };
  }, [props.cardsById, props.vocab.length, props.analytics.wordsLearned, nowIso]);

  const level = getLevelFromXP(props.analytics.totalXP);

  const last7Days = useMemo(() => {
    const days: { key: string; label: string; xp: number }[] = [];
    const now = new Date();
    for (let i = 6; i >= 0; i--) {
      const d = new Date(now);
      d.setUTCDate(d.getUTCDate() - i);
      const y = d.getUTCFullYear();
      const m = String(d.getUTCMonth() + 1).padStart(2, "0");
      const day = String(d.getUTCDate()).padStart(2, "0");
      const key = `${y}-${m}-${day}`;
      days.push({
        key,
        label: `${m}/${day}`,
        xp: props.analytics.dailyXP[key] ?? 0,
      });
    }
    return days;
  }, [props.analytics.dailyXP]);

  const start = (mode: typeof uiMode, tag?: string) => {
    dispatch(setMode({ mode, customTagSlug: tag }));
    const prompts = buildStudyQueue({
      mode,
      customTagSlug: tag,
      nowIso: isoNow(),
      vocab: props.vocab,
      cardsById: props.cardsById,
      settings: props.settings,
    }).map((p) => ({ vocabId: p.vocabId, direction: p.direction }));

    dispatch(
      startSession({
        prompts,
        startedAtIso: isoNow(),
        timeLimitSeconds: mode === "timed" ? props.settings.timedModeDuration : undefined,
      })
    );
  };

  const handleManualSync = async () => {
    if (!user || syncState === "syncing") return;
    setSyncState("syncing");
    setSyncError(null);
    try {
      await syncStudyData(user);
      await props.onDataRefresh();
      setSyncState("success");
      if (successTimeoutRef.current) window.clearTimeout(successTimeoutRef.current);
      successTimeoutRef.current = window.setTimeout(() => {
        setSyncState("idle");
      }, 3000);
    } catch (err) {
      setSyncState("error");
      setSyncError(err instanceof Error ? err.message : "Sync failed");
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-3xl font-semibold tracking-tight">Study</h1>
            <Badge variant="secondary" className="gap-1.5 rounded-full px-3 py-1">
              <Zap className="h-3.5 w-3.5" />
              Level {level}
            </Badge>
            {firebaseReady && user && (
              <div className="flex items-center gap-2">
                {syncState === "syncing" && (
                  <Badge variant="outline" className="gap-1.5 text-xs rounded-full">
                    <RefreshCw className="h-3 w-3 animate-spin" />
                    Syncing...
                  </Badge>
                )}
                {syncState === "success" && (
                  <Badge variant="outline" className="gap-1.5 text-xs bg-green-50 dark:bg-green-950/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800 rounded-full">
                    <CheckCircle2 className="h-3 w-3" />
                    Synced
                  </Badge>
                )}
                {syncState === "error" && (
                  <Badge variant="outline" className="gap-1.5 text-xs bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800 rounded-full">
                    <XCircle className="h-3 w-3" />
                    Sync failed
                  </Badge>
                )}
              </div>
            )}
          </div>
          <p className="text-base text-muted-foreground max-w-2xl">
            Anki-like spaced repetition, local-first and offline-capable. Your progress is stored on this device and can
            sync to Firebase when you sign in.
          </p>
        </div>

        <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="gap-2 rounded-xl w-full sm:w-auto">
              <Settings2 className="h-4 w-4" />
              Settings
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold">Study Settings</DialogTitle>
            </DialogHeader>
            <StudySettingsModal
              vocab={props.vocab}
              availableTags={availableTags}
              settings={props.settings}
              onSettingsChange={props.onSettingsChange}
              onClose={() => setSettingsOpen(false)}
              onDataRefresh={props.onDataRefresh}
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="rounded-2xl shadow-sm border p-6 hover:shadow-md transition-shadow duration-200">
          <div className="text-sm font-medium text-muted-foreground mb-1">Due today</div>
          <div className="text-3xl font-semibold mt-2">{stats.due}</div>
        </Card>
        <Card className="rounded-2xl shadow-sm border p-6 hover:shadow-md transition-shadow duration-200">
          <div className="text-sm font-medium text-muted-foreground mb-1">Weak words</div>
          <div className="text-3xl font-semibold mt-2">{stats.weak}</div>
        </Card>
        <Card className="rounded-2xl shadow-sm border p-6 hover:shadow-md transition-shadow duration-200">
          <div className="text-sm font-medium text-muted-foreground mb-1">New words available</div>
          <div className="text-3xl font-semibold mt-2">{stats.fresh}</div>
        </Card>
        <Card className="rounded-2xl shadow-sm border p-6 hover:shadow-md transition-shadow duration-200">
          <div className="text-sm font-medium text-muted-foreground mb-1">Total XP</div>
          <div className="text-3xl font-semibold mt-2">{props.analytics.totalXP}</div>
        </Card>
      </div>

      <Card className="rounded-2xl shadow-sm border p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-lg font-medium">Sync</div>
            <div className="text-sm text-muted-foreground">
              {firebaseReady ? (
                user ? (
                  <>
                    Signed in as <span className="font-medium text-foreground">{user.email ?? user.uid}</span>. Your data
                    stays local-first; sync only merges SRS + settings + aggregates.
                  </>
                ) : (
                  <>Sign in to sync progress across devices (optional). Anonymous users stay local-only.</>
                )
              ) : (
                <>Firebase is not configured (missing `NEXT_PUBLIC_FIREBASE_*`). Local-first mode only.</>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
            {!firebaseReady ? null : user ? (
              <>
                <Button
                  variant="outline"
                  disabled={syncState === "syncing"}
                  onClick={() => void handleManualSync()}
                  className="gap-2 rounded-xl"
                >
                  {syncState === "syncing" ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      Syncing...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="h-4 w-4" />
                      Sync now
                    </>
                  )}
                </Button>
                {syncState === "error" && syncError && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => void handleManualSync()}
                    className="gap-1.5 text-xs rounded-xl"
                  >
                    <AlertCircle className="h-3 w-3" />
                    Retry
                  </Button>
                )}
                <Button variant="outline" disabled={syncState === "syncing"} onClick={() => void signOutUser()} className="rounded-xl">
                  Sign out
                </Button>
              </>
            ) : (
              <Button disabled={!firebaseReady} onClick={() => void signInWithGoogle()} className="w-full sm:w-auto rounded-xl">
                Sign in with Google
              </Button>
            )}
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="rounded-2xl shadow-sm border p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xl font-medium">Core modes</div>
              <div className="text-sm text-muted-foreground">Fast start based on what matters most.</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
            <Button onClick={() => start("learn-new")} className="justify-between rounded-xl h-auto py-3 hover:scale-[1.02] transition-transform duration-200">
              <span className="font-medium">Learn New</span>
              <span className="text-xs opacity-70">cap {props.settings.newPerDay}/day</span>
            </Button>
            <Button variant="secondary" onClick={() => start("review-due")} className="justify-between rounded-xl h-auto py-3 hover:scale-[1.02] transition-transform duration-200">
              <span className="font-medium">Review Due</span>
              <span className="text-xs opacity-70">{stats.due}</span>
            </Button>
            <Button variant="secondary" onClick={() => start("weak-words")} className="justify-between rounded-xl h-auto py-3 hover:scale-[1.02] transition-transform duration-200">
              <span className="font-medium">Weak Words</span>
              <span className="text-xs opacity-70">{stats.weak}</span>
            </Button>
            <Button variant="secondary" onClick={() => start("mastery-push")} className="justify-between rounded-xl h-auto py-3 hover:scale-[1.02] transition-transform duration-200">
              <span className="font-medium">Mastery Push</span>
              <span className="text-xs opacity-70">familiar/weak</span>
            </Button>
          </div>
        </Card>

        <Card className="rounded-2xl shadow-sm border p-6">
          <div className="space-y-1">
            <div className="text-xl font-medium">Custom & practice</div>
            <div className="text-sm text-muted-foreground">Target a collection tag or just drill randomly.</div>
          </div>

          <div className="mt-6 grid gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Button variant="secondary" onClick={() => start("random-practice")} className="rounded-xl h-auto py-3 hover:scale-[1.02] transition-transform duration-200">
                Full random
              </Button>
              <Button variant="secondary" onClick={() => start("timed")} className="rounded-xl h-auto py-3 hover:scale-[1.02] transition-transform duration-200">
                Timed ({props.settings.timedModeDuration}s)
              </Button>
              <Button variant="outline" onClick={() => start("review-due")} className="rounded-xl h-auto py-3 hover:scale-[1.02] transition-transform duration-200">
                Mixed review
              </Button>
            </div>

            <div className="rounded-xl border border-border/60 p-4 bg-muted/30">
              <div className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wide">Custom by tag</div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Select
                  value={customTagSlug ?? ""}
                  onValueChange={(v) => dispatch(setMode({ mode: "custom-tag", customTagSlug: v }))}
                >
                  <SelectTrigger className="w-full rounded-xl">
                    <SelectValue placeholder="Pick a collection tag…" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    {availableTags.map((t) => (
                      <SelectItem key={t.slug} value={t.slug}>
                        {t.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  disabled={!customTagSlug}
                  onClick={() => start("custom-tag", customTagSlug)}
                  className="shrink-0 rounded-xl"
                >
                  Start
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="rounded-2xl shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-xl font-medium">Progress</div>
              <div className="text-sm text-muted-foreground">
                Streak: <span className="font-semibold text-foreground">{props.analytics.dailyStreak}</span> days • Words learned:{" "}
                <span className="font-semibold text-foreground">{props.analytics.wordsLearned}</span>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <ChartContainer
              className="h-[220px] w-full"
              config={{
                xp: { label: "XP", color: "hsl(var(--accent))" },
              }}
            >
              <BarChart data={last7Days} margin={{ left: 8, right: 8, top: 10, bottom: 0 }}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="label" tickLine={false} axisLine={false} className="text-xs" />
                <YAxis tickLine={false} axisLine={false} width={28} className="text-xs" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="xp" fill="var(--color-xp)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </div>
        </Card>
        <Card className="rounded-2xl shadow-sm border p-6">
          <div className="text-xl font-medium mb-4">Tips</div>
          <div className="text-sm text-muted-foreground space-y-3">
            <div>
              - Use <span className="font-medium text-foreground">Again</span> sparingly; it drops confidence faster and schedules a quick relearn.
            </div>
            <div>
              - Smart direction gradually shifts you toward <span className="font-medium text-foreground">recall</span> for known words.
            </div>
            <div>- Keep sessions short and consistent to build streaks.</div>
          </div>
        </Card>
      </div>

      <div className="text-xs text-muted-foreground">
        Keyboard: <span className="font-medium">Space</span> reveal, <span className="font-medium">1–4</span> answer.
      </div>
    </div>
  );
}


