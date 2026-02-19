import {
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  writeBatch,
  type Firestore,
} from "firebase/firestore";
import type { User } from "firebase/auth";
import type { SrsCard } from "../srs/types";
import { getFirebase } from "./client";
import {
  getAllCards,
  getAnalyticsRecord,
  getSettingsRecord,
  setAnalytics,
  setSettings,
  upsertCards,
  setSyncMeta,
} from "../db/studyRepo";

type RemoteMetaDoc<T> = {
  updatedAt: string;
  value: T;
};

function newer(a?: string, b?: string) {
  if (!a) return b;
  if (!b) return a;
  return a >= b ? a : b;
}

function pickLatestByUpdatedAt<T extends { updatedAt?: string }>(
  local: T,
  remote: T
) {
  const lu = local.updatedAt ?? "";
  const ru = remote.updatedAt ?? "";
  return ru > lu ? remote : local;
}

function chunk<T>(arr: T[], size: number) {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size)
    out.push(arr.slice(i, i + size));
  return out;
}

/**
 * Removes undefined values recursively.
 * Firestore rejects undefined fields.
 */
function removeUndefined<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

function userRoot(db: Firestore, uid: string) {
  return doc(db, "users", uid, "study", "v1");
}

function settingsDoc(db: Firestore, uid: string) {
  return doc(db, "users", uid, "study", "v1", "meta", "settings");
}

function analyticsDoc(db: Firestore, uid: string) {
  return doc(db, "users", uid, "study", "v1", "meta", "analytics");
}

function cardsCol(db: Firestore, uid: string) {
  return collection(db, "users", uid, "study", "v1", "cards");
}

export async function syncStudyData(user: User) {
  const fb = await getFirebase();
  if (!fb) throw new Error("Firebase is not configured.");

  const uid = user.uid;

  // Ensure root exists
  await setDoc(
    userRoot(fb.db, uid),
    { updatedAt: new Date().toISOString() },
    { merge: true }
  );

  // Load local
  const [localCards, localSettingsRec, localAnalyticsRec] =
    await Promise.all([
      getAllCards(),
      getSettingsRecord(),
      getAnalyticsRecord(),
    ]);

  // Load remote
  const [
    remoteSettingsSnap,
    remoteAnalyticsSnap,
    remoteCardsSnap,
  ] = await Promise.all([
    getDoc(settingsDoc(fb.db, uid)),
    getDoc(analyticsDoc(fb.db, uid)),
    getDocs(cardsCol(fb.db, uid)),
  ]);

  const remoteSettings = remoteSettingsSnap.exists()
    ? (remoteSettingsSnap.data() as RemoteMetaDoc<
      typeof localSettingsRec.value
    >)
    : null;

  const remoteAnalytics = remoteAnalyticsSnap.exists()
    ? (remoteAnalyticsSnap.data() as RemoteMetaDoc<
      typeof localAnalyticsRec.value
    >)
    : null;

  const remoteCards: SrsCard[] = [];
  remoteCardsSnap.forEach((d) =>
    remoteCards.push(d.data() as SrsCard)
  );

  // Merge settings
  const settingsUpdatedAt =
    newer(
      localSettingsRec.updatedAt,
      remoteSettings?.updatedAt
    ) ?? new Date().toISOString();

  const settingsValue =
    remoteSettings &&
      remoteSettings.updatedAt > localSettingsRec.updatedAt
      ? remoteSettings.value
      : localSettingsRec.value;

  // Merge analytics
  const analyticsUpdatedAt =
    newer(
      localAnalyticsRec.updatedAt,
      remoteAnalytics?.updatedAt
    ) ?? new Date().toISOString();

  const analyticsValue =
    remoteAnalytics &&
      remoteAnalytics.updatedAt > localAnalyticsRec.updatedAt
      ? remoteAnalytics.value
      : localAnalyticsRec.value;

  // Merge cards
  const mergedById = new Map<string, SrsCard>();

  for (const c of localCards) {
    mergedById.set(c.id, c);
  }

  for (const c of remoteCards) {
    const existing = mergedById.get(c.id);
    if (!existing) {
      mergedById.set(c.id, c);
    } else {
      mergedById.set(
        c.id,
        pickLatestByUpdatedAt(existing, c)
      );
    }
  }

  const mergedCards = Array.from(mergedById.values());

  // Persist merged locally
  await Promise.all([
    setSettings(settingsValue),
    setAnalytics(analyticsValue),
    upsertCards(mergedCards),
  ]);

  // Clean data before Firestore writes
  const cleanedSettings = removeUndefined(settingsValue);
  const cleanedAnalytics = removeUndefined(analyticsValue);

  // Push merged to remote
  const nowIso = new Date().toISOString();

  await Promise.all([
    setDoc(
      settingsDoc(fb.db, uid),
      {
        updatedAt: settingsUpdatedAt,
        value: cleanedSettings,
      },
      { merge: true }
    ),
    setDoc(
      analyticsDoc(fb.db, uid),
      {
        updatedAt: analyticsUpdatedAt,
        value: cleanedAnalytics,
      },
      { merge: true }
    ),
  ]);

  // Cards in batches (Firestore limit: 500)
  for (const batchCards of chunk(mergedCards, 450)) {
    const b = writeBatch(fb.db);
    for (const c of batchCards) {
      b.set(
        doc(cardsCol(fb.db, uid), c.id),
        { ...c, updatedAt: c.updatedAt ?? nowIso },
        { merge: true }
      );
    }
    await b.commit();
  }

  await setSyncMeta({
    lastMergedAt: nowIso,
    lastUserId: uid,
  });

  return { mergedCardsCount: mergedCards.length };
}
