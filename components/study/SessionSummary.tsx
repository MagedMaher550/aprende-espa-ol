"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { backToDashboard } from "@/lib/redux/studyUiSlice";
import type { StudyAnalyticsAggregate } from "@/lib/study/analytics";
import { getLevelFromXP } from "@/lib/study/analytics";

export function SessionSummary(props: { analytics: StudyAnalyticsAggregate }) {
  const dispatch = useAppDispatch();
  const session = useAppSelector((s) => s.studyUi.session);

  const reviewed = session?.stats.reviewed ?? 0;
  const correct = session?.stats.correct ?? 0;
  const accuracy = reviewed > 0 ? Math.round((correct / reviewed) * 100) : 0;
  const xp = session?.stats.xp ?? 0;
  const startedAt = session?.startedAtIso ? new Date(session.startedAtIso).getTime() : Date.now();
  const timeSpentSeconds = Math.max(0, Math.floor((Date.now() - startedAt) / 1000));
  const level = getLevelFromXP(props.analytics.totalXP);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Session Summary</h2>
        <p className="text-muted-foreground">
          Great work. Total XP: <span className="font-semibold text-foreground">{props.analytics.totalXP}</span> • Level{" "}
          <span className="font-semibold text-foreground">{level}</span>
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Card className="p-5">
          <div className="text-sm text-muted-foreground">Cards reviewed</div>
          <div className="text-3xl font-semibold mt-2">{reviewed}</div>
        </Card>
        <Card className="p-5">
          <div className="text-sm text-muted-foreground">Accuracy</div>
          <div className="text-3xl font-semibold mt-2">{accuracy}%</div>
        </Card>
        <Card className="p-5">
          <div className="text-sm text-muted-foreground">XP gained</div>
          <div className="text-3xl font-semibold mt-2">+{xp}</div>
        </Card>
        <Card className="p-5">
          <div className="text-sm text-muted-foreground">Time spent</div>
          <div className="text-3xl font-semibold mt-2">{timeSpentSeconds}s</div>
        </Card>
      </div>

      <Card className="p-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
          <div>
            <div className="text-muted-foreground">Again</div>
            <div className="font-semibold">{session?.stats.again ?? 0}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Hard</div>
            <div className="font-semibold">{session?.stats.hard ?? 0}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Good</div>
            <div className="font-semibold">{session?.stats.good ?? 0}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Easy</div>
            <div className="font-semibold">{session?.stats.easy ?? 0}</div>
          </div>
        </div>
      </Card>

      <div className="flex justify-end">
        <Button onClick={() => dispatch(backToDashboard())}>Back to dashboard</Button>
      </div>
    </div>
  );
}


