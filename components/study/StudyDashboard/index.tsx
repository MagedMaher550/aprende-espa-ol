"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { FlattenedVocabWord } from "@/lib/vocabulary/flatten";
import type { SrsCard } from "@/lib/srs/types";
import type { StudyAnalyticsAggregate } from "@/lib/study/analytics";
import { getLevelFromXP } from "@/lib/study/analytics";
import type { StudySettings } from "@/lib/study/settings";
import { buildStudyQueue } from "@/lib/study/modeEngine";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { setMode, startSession } from "@/lib/redux/studyUiSlice";
import { isoNow } from "@/lib/srs/engine";
import { getAllCollectionTags } from "@/lib/vocabulary/flatten";
import { isFirebaseConfigured } from "@/lib/firebase/client";
import { onUserChanged, signInWithGoogle, signOutUser } from "@/lib/firebase/auth";
import { syncStudyData } from "@/lib/firebase/sync";
import type { User } from "firebase/auth";
import StudyDashboardHeader from "./heaedr";
import Statuses from "./statuses";
import SyncUser from "./sync";
import PracticeModes from "./practiceModes";
import ChartAndTips from "./ChartAndTips";
import DashboardContainer from "./DashboardContainer";

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
    const [user, setUser] = useState<User | null>(null);
    const [syncState, setSyncState] = useState<"idle" | "syncing" | "success" | "error">("idle");
    const [syncError, setSyncError] = useState<string | null>(null);
    const firebaseReady = isFirebaseConfigured();
    const lastAutoSyncUidRef = useRef<string | null>(null);
    const successTimeoutRef = useRef<number | null>(null);

    const nowIso = useMemo(() => isoNow(), []);

    const availableTags = useMemo(() => getAllCollectionTags(), []);

    const [tagSearch, setTagSearch] = useState<string>("");

    const filteredTags = useMemo(() => {
        if (!tagSearch.trim()) return availableTags;

        const q = tagSearch.toLowerCase();
        return availableTags.filter(
            (t) =>
                t.title.toLowerCase().includes(q) ||
                t.slug.toLowerCase().includes(q)
        );
    }, [availableTags, tagSearch]);

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
        <DashboardContainer>
            <StudyDashboardHeader
                firebaseReady={firebaseReady}
                level={level}
                syncState={syncState}
                user={user}
                settings={{
                    vocab: props.vocab,
                    availableTags,
                    settings: props.settings,
                    onSettingsChange: props.onSettingsChange,
                    onDataRefresh: props.onDataRefresh,
                }}

            />

            <Statuses stats={stats} totalXP={props.analytics.totalXP} />

            <SyncUser
                firebaseReady={firebaseReady}
                handleManualSync={handleManualSync}
                signInWithGoogle={signInWithGoogle}
                signOutUser={signOutUser}
                syncError={syncError}
                syncState={syncState}
                user={user}
            />


            <PracticeModes
                availableTags={availableTags}
                customTagSlug={customTagSlug}
                dispatch={dispatch}
                filteredTags={filteredTags}
                timedModeDuration={props.settings.timedModeDuration}
                newPerDay={props.settings.newPerDay}
                setMode={setMode}
                tagSearch={tagSearch}
                setTagSearch={setTagSearch}
                start={start}
                stats={stats}
            />

            <ChartAndTips
                dailyStreak={props.analytics.dailyStreak}
                last7Days={last7Days}
                wordsLearned={props.analytics.wordsLearned}
            />

        </DashboardContainer>
    );
}
