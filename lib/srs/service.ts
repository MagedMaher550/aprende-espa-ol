import { getAllCards, getCard, getDueCards, getCardsByConfidenceAtMost, getCardsByState, upsertCard } from "../db/studyRepo";
import type { ReviewRating, SrsCard } from "./types";
import { createNewSrsCard, isoNow, reviewCard, applyDailyConfidenceDecay } from "./engine";

export async function getSrsCard(id: string) {
  return getCard(id);
}

export async function getAllSrsCards() {
  return getAllCards();
}

export async function getAllSrsCardsMap() {
  const cards = await getAllCards();
  return new Map(cards.map((c) => [c.id, c] as const));
}

export async function getOrCreateSrsCard(id: string, nowIso: string = isoNow()): Promise<SrsCard> {
  const existing = await getCard(id);
  if (existing) return applyDailyConfidenceDecay(existing, nowIso);
  return createNewSrsCard(id, nowIso);
}

export async function saveSrsCard(card: SrsCard) {
  await upsertCard(card);
}

export async function reviewSrsCard(id: string, rating: ReviewRating, nowIso: string = isoNow()) {
  const prev = (await getCard(id)) ?? createNewSrsCard(id, nowIso);
  const next = reviewCard(prev, rating, nowIso);
  await upsertCard(next);
  return { prev, next };
}

export async function getDueSrsCards(nowIso: string = isoNow()) {
  return getDueCards(nowIso);
}

export async function getWeakSrsCards() {
  const byState = await getCardsByState("weak");
  const byConfidence = await getCardsByConfidenceAtMost(29);
  const map = new Map<string, SrsCard>();
  for (const c of byState) map.set(c.id, c);
  for (const c of byConfidence) map.set(c.id, c);
  return Array.from(map.values());
}


