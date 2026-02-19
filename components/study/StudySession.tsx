"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { FlattenedVocabWord } from "@/lib/vocabulary/flatten";
import type { SrsCard, ReviewRating } from "@/lib/srs/types";
import type { StudySettings } from "@/lib/study/settings";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import {
  answerRecorded,
  endSession,
  nextCard,
  reveal as revealAction,
} from "@/lib/redux/studyUiSlice";
import { Flashcard } from "./Flashcard";
import { Button } from "@/components/ui/button";
import { isoNow } from "@/lib/srs/engine";
import { reviewSrsCard } from "@/lib/srs/service";
import { isCorrect, xpForRating } from "@/lib/study/sessionEngine";
import { getAnalytics, setAnalytics } from "@/lib/db/studyRepo";
import {
  DEFAULT_ANALYTICS,
  type StudyAnalyticsAggregate,
} from "@/lib/study/analytics";

function buildVocabMap(vocab: FlattenedVocabWord[]) {
  return new Map(vocab.map((w) => [w.id, w] as const));
}

function todayKeyUtc(d = new Date()) {
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function weekKeyUtc(d = new Date()) {
  const date = new Date(
    Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())
  );
  const dayNum = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(
    ((date.getTime() - yearStart.getTime()) / 86400000 + 1) / 7
  );
  return `${date.getUTCFullYear()}-${String(weekNo).padStart(2, "0")}`;
}

function mergeAnalyticsAfterReview(
  prev: StudyAnalyticsAggregate,
  rating: ReviewRating,
  xp: number,
  transition?: { prevState?: string; nextState?: string }
) {
  const next: StudyAnalyticsAggregate = {
    ...(prev ?? DEFAULT_ANALYTICS),
  };
  next.totalXP += xp;
  next.totalReviews += 1;
  if (rating === "again") next.totalAgain += 1;
  if (rating === "hard") next.totalHard += 1;
  if (rating === "good") next.totalGood += 1;
  if (rating === "easy") next.totalEasy += 1;

  const day = todayKeyUtc();
  next.dailyXP[day] = (next.dailyXP[day] ?? 0) + xp;
  const week = weekKeyUtc();
  next.weeklyXP[week] = (next.weeklyXP[week] ?? 0) + xp;

  if (!next.lastActiveDate) {
    next.dailyStreak = 1;
    next.lastActiveDate = day;
  } else if (next.lastActiveDate === day) {
  } else {
    const last = new Date(next.lastActiveDate + "T00:00:00Z");
    const now = new Date(day + "T00:00:00Z");
    const diffDays = Math.round(
      (now.getTime() - last.getTime()) / 86400000
    );
    if (diffDays === 1) next.dailyStreak += 1;
    else next.dailyStreak = 1;
    next.lastActiveDate = day;
  }

  if (
    transition?.prevState !== "known" &&
    transition?.nextState === "known"
  ) {
    next.wordsLearned += 1;
  }

  return next;
}

export function StudySession(props: {
  vocab: FlattenedVocabWord[];
  cardsById: Map<string, SrsCard>;
  settings: StudySettings;
  onCardMapUpdate: (m: Map<string, SrsCard>) => void;
  onAnalyticsUpdate: (a: StudyAnalyticsAggregate | null) => void;
}) {
  const dispatch = useAppDispatch();
  const { session, mode } = useAppSelector((s) => ({
    session: s.studyUi.session,
    mode: s.studyUi.mode,
  }));

  const vocabMap = useMemo(
    () => buildVocabMap(props.vocab),
    [props.vocab]
  );
  const timeLimitSeconds = session?.timeLimitSeconds;

  const [secondsLeft, setSecondsLeft] = useState<number | null>(
    timeLimitSeconds ?? null
  );
  const timerRef = useRef<number | null>(null);

  const prompt = useMemo(() => {
    if (!session) return null;
    const ref = session.prompts[session.currentIndex];
    if (!ref) return null;
    const word = vocabMap.get(ref.vocabId);
    if (!word) return null;
    const srs = props.cardsById.get(ref.vocabId);
    return { ...ref, word, srs };
  }, [session, vocabMap, props.cardsById]);

  useEffect(() => {
    if (!timeLimitSeconds || !session) return;
    setSecondsLeft(timeLimitSeconds);
    if (timerRef.current) window.clearInterval(timerRef.current);
    const start = Date.now();
    timerRef.current = window.setInterval(() => {
      const elapsed = Math.floor((Date.now() - start) / 1000);
      const left = Math.max(0, timeLimitSeconds - elapsed);
      setSecondsLeft(left);
      if (left <= 0) {
        window.clearInterval(timerRef.current!);
        timerRef.current = null;
        dispatch(endSession());
      }
    }, 250);
    return () => {
      if (timerRef.current)
        window.clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [timeLimitSeconds, session, dispatch]);

  const busyRef = useRef(false);

  const handleAnswer = async (rating: ReviewRating) => {
    if (!session || !prompt) return;
    if (busyRef.current) return;
    busyRef.current = true;
    try {
      const xp = xpForRating(rating);
      const correct = isCorrect(rating);

      const { prev, next } = await reviewSrsCard(
        prompt.vocabId,
        rating,
        isoNow()
      );
      const nextMap = new Map(props.cardsById);
      nextMap.set(next.id, next);
      props.onCardMapUpdate(nextMap);

      const current = await getAnalytics();
      const merged = mergeAnalyticsAfterReview(
        current,
        rating,
        xp,
        { prevState: prev.state, nextState: next.state }
      );
      await setAnalytics(merged);
      props.onAnalyticsUpdate(merged);

      dispatch(answerRecorded({ rating, xp, correct }));
      dispatch(nextCard());
    } finally {
      busyRef.current = false;
    }
  };

  if (!session || !prompt) {
    return (
      <div className="text-sm text-muted-foreground">
        Session unavailable.
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col flex-1 justify-center gap-8">
      {/* Top meta */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="text-sm text-muted-foreground">
          Mode:{" "}
          <span className="font-medium text-foreground">
            {mode}
          </span>{" "}
          • Card{" "}
          <span className="font-medium text-foreground">
            {session.currentIndex + 1}
          </span>{" "}
          /{" "}
          <span className="font-medium text-foreground">
            {session.prompts.length}
          </span>
        </div>
        {secondsLeft !== null && (
          <div className="text-sm tabular-nums">
            Time left:{" "}
            <span className="font-semibold">
              {secondsLeft}s
            </span>
          </div>
        )}
      </div>

      {/* Flashcard */}
      <div className="flex items-center justify-center">
        <Flashcard
          key={`${prompt.vocabId}-${prompt.direction}`}
          prompt={prompt}
          revealed={session.revealed}
          autoPlayAudio={props.settings.autoPlayAudio}
          onReveal={() => dispatch(revealAction())}
        />
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Button
          variant="outline"
          disabled={!session.revealed}
          onClick={() => void handleAnswer("again")}
          className="justify-between min-h-[56px] rounded-xl border-red-200 dark:border-red-900/30 text-red-600 dark:text-red-400"
        >
          <span className="font-medium">Again</span>
          <span className="text-xs opacity-70">1</span>
        </Button>

        <Button
          variant="outline"
          disabled={!session.revealed}
          onClick={() => void handleAnswer("hard")}
          className="justify-between min-h-[56px] rounded-xl border-amber-200 dark:border-amber-900/30 text-amber-600 dark:text-amber-400"
        >
          <span className="font-medium">Hard</span>
          <span className="text-xs opacity-70">2</span>
        </Button>

        <Button
          disabled={!session.revealed}
          onClick={() => void handleAnswer("good")}
          className="justify-between min-h-[56px] rounded-xl bg-blue-600 text-white"
        >
          <span className="font-medium">Good</span>
          <span className="text-xs opacity-90">3</span>
        </Button>

        <Button
          disabled={!session.revealed}
          onClick={() => void handleAnswer("easy")}
          className="justify-between min-h-[56px] rounded-xl bg-green-600 text-white"
        >
          <span className="font-medium">Easy</span>
          <span className="text-xs opacity-90">4</span>
        </Button>
      </div>
    </div>
  );
}
