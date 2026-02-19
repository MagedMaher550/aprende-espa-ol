"use client";

import { useEffect, useMemo, useState } from "react";
import { StudyDashboard } from "@/components/study/StudyDashboard";
import { StudySession } from "@/components/study/StudySession";
import { SessionSummary } from "@/components/study/SessionSummary";
import { useAppSelector } from "@/lib/redux/hooks";
import { getFlattenedVocabulary } from "@/lib/vocabulary/flatten";
import { getAllSrsCardsMap } from "@/lib/srs/service";
import { getAnalytics, getSettings } from "@/lib/db/studyRepo";
import type { StudyAnalyticsAggregate } from "@/lib/study/analytics";
import type { StudySettings } from "@/lib/study/settings";
import type { SrsCard } from "@/lib/srs/types";

export default function StudyPage() {
  const status = useAppSelector((s) => s.studyUi.status);

  const vocab = useMemo(() => getFlattenedVocabulary(), []);
  const [cardsById, setCardsById] = useState<Map<string, SrsCard> | null>(null);
  const [settings, setSettings] = useState<StudySettings | null>(null);
  const [analytics, setAnalytics] = useState<StudyAnalyticsAggregate | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const [cards, s, a] = await Promise.all([getAllSrsCardsMap(), getSettings(), getAnalytics()]);
      if (cancelled) return;
      setCardsById(cards);
      setSettings(s);
      setAnalytics(a);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-screen">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {status === "dashboard" && cardsById && settings && analytics && (
          <StudyDashboard
            vocab={vocab}
            cardsById={cardsById}
            settings={settings}
            analytics={analytics}
            onSettingsChange={setSettings}
            onDataRefresh={async () => {
              const [cards, s, a] = await Promise.all([getAllSrsCardsMap(), getSettings(), getAnalytics()]);
              setCardsById(cards);
              setSettings(s);
              setAnalytics(a);
            }}
          />
        )}

        {status === "session" && cardsById && settings && (
          <StudySession
            vocab={vocab}
            cardsById={cardsById}
            settings={settings}
            onCardMapUpdate={setCardsById}
            onAnalyticsUpdate={setAnalytics}
          />
        )}

        {status === "summary" && analytics && <SessionSummary analytics={analytics} />}
      </section>
    </div>
  );
}


