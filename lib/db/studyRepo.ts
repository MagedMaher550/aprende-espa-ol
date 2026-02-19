import { getStudyDb } from "./studyDb";
import { DEFAULT_ANALYTICS, type StudyAnalyticsAggregate } from "../study/analytics";
import { DEFAULT_STUDY_SETTINGS, type StudySettings } from "../study/settings";
import type { SrsCard, SrsState } from "../srs/types";

function isoNow() {
  return new Date().toISOString();
}

export async function getSettings(): Promise<StudySettings> {
  const db = await getStudyDb();
  const rec = await db.get("meta", "settings");
  if (rec && rec.key === "settings") return rec.value;
  return DEFAULT_STUDY_SETTINGS;
}

export async function getSettingsRecord() {
  const db = await getStudyDb();
  const rec = await db.get("meta", "settings");
  if (rec && rec.key === "settings") return rec;
  return { key: "settings" as const, value: DEFAULT_STUDY_SETTINGS, updatedAt: new Date(0).toISOString() };
}

export async function setSettings(settings: StudySettings) {
  const db = await getStudyDb();
  await db.put("meta", { key: "settings", value: settings, updatedAt: isoNow() });
}

export async function getAnalytics(): Promise<StudyAnalyticsAggregate> {
  const db = await getStudyDb();
  const rec = await db.get("meta", "analytics");
  if (rec && rec.key === "analytics") return rec.value;
  return DEFAULT_ANALYTICS;
}

export async function getAnalyticsRecord() {
  const db = await getStudyDb();
  const rec = await db.get("meta", "analytics");
  if (rec && rec.key === "analytics") return rec;
  return { key: "analytics" as const, value: DEFAULT_ANALYTICS, updatedAt: new Date(0).toISOString() };
}

export async function setAnalytics(analytics: StudyAnalyticsAggregate) {
  const db = await getStudyDb();
  await db.put("meta", { key: "analytics", value: analytics, updatedAt: isoNow() });
}

export async function getSyncMeta() {
  const db = await getStudyDb();
  const rec = await db.get("meta", "sync");
  if (rec && rec.key === "sync") return rec.value;
  return {};
}

export async function setSyncMeta(value: Record<string, unknown>) {
  const db = await getStudyDb();
  await db.put("meta", { key: "sync", value: value as any, updatedAt: isoNow() });
}

export async function getCard(id: string): Promise<SrsCard | undefined> {
  const db = await getStudyDb();
  return db.get("srsCards", id);
}

export async function upsertCard(card: SrsCard) {
  const db = await getStudyDb();
  await db.put("srsCards", card);
}

export async function upsertCards(cards: SrsCard[]) {
  if (cards.length === 0) return;
  const db = await getStudyDb();
  const tx = db.transaction("srsCards", "readwrite");
  for (const c of cards) tx.store.put(c);
  await tx.done;
}

export async function deleteAllProgress() {
  const db = await getStudyDb();
  const tx = db.transaction(["srsCards", "meta"], "readwrite");
  await tx.objectStore("srsCards").clear();
  await tx.objectStore("meta").clear();
  await tx.done;
}

export async function getCardsByState(state: SrsState) {
  const db = await getStudyDb();
  return db.getAllFromIndex("srsCards", "state", state);
}

export async function getCardsByConfidenceAtMost(maxConfidence: number) {
  const db = await getStudyDb();
  return db.getAllFromIndex("srsCards", "confidence", IDBKeyRange.upperBound(maxConfidence));
}

/**
 * Returns cards due at or before `nowIso` (lexicographic ISO ordering works).
 * Requires `nextReview` to be stored as ISO date-time.
 */
export async function getDueCards(nowIso: string) {
  const db = await getStudyDb();
  return db.getAllFromIndex("srsCards", "nextReview", IDBKeyRange.upperBound(nowIso));
}

export async function getAllCards() {
  const db = await getStudyDb();
  return db.getAll("srsCards");
}


