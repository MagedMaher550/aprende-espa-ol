import type { ReviewRating, SrsCard, SrsState } from "./types";

export function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function isoNow() {
  return new Date().toISOString();
}

export function addDaysIso(iso: string, days: number) {
  const d = new Date(iso);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString();
}

export function addMinutesIso(iso: string, minutes: number) {
  const d = new Date(iso);
  d.setUTCMinutes(d.getUTCMinutes() + minutes);
  return d.toISOString();
}

function startOfUtcDay(d: Date) {
  const x = new Date(d);
  x.setUTCHours(0, 0, 0, 0);
  return x;
}

export function daysBetweenUtc(aIso: string, bIso: string) {
  const a = startOfUtcDay(new Date(aIso)).getTime();
  const b = startOfUtcDay(new Date(bIso)).getTime();
  return Math.max(0, Math.floor((b - a) / (24 * 60 * 60 * 1000)));
}

export function stateFromConfidence(confidence: number): Exclude<SrsState, "new"> {
  if (confidence <= 20) return "weak";
  if (confidence <= 50) return "learning";
  if (confidence <= 75) return "familiar";
  return "known";
}

export function applyDailyConfidenceDecay(card: SrsCard, nowIso: string): SrsCard {
  // Requirement: every day without review -> confidence -= 1
  // Use lastReviewed when available; otherwise use card.nextReview as a reasonable proxy.
  const anchor = card.lastReviewed ?? card.nextReview;
  const days = daysBetweenUtc(anchor, nowIso);
  if (days <= 0) return card;

  const confidence = clamp(card.confidence - days, 0, 100);
  const mapped = stateFromConfidence(confidence);

  // Preserve "new" state only until first review; after that it follows confidence mapping.
  const state: SrsState = card.reviewCount === 0 ? "new" : mapped;

  return { ...card, confidence, state };
}

function confidenceDelta(rating: ReviewRating) {
  switch (rating) {
    case "again":
      return -20;
    case "hard":
      return -5;
    case "good":
      return +10;
    case "easy":
      return +20;
  }
}

function ratingToQuality(rating: ReviewRating) {
  // SM-2 expects q in [0..5].
  switch (rating) {
    case "again":
      return 0;
    case "hard":
      return 3;
    case "good":
      return 4;
    case "easy":
      return 5;
  }
}

function updateEaseFactor(easeFactor: number, rating: ReviewRating) {
  // SM-2 formula
  const q = ratingToQuality(rating);
  const ef = easeFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  return Math.max(1.3, Number(ef.toFixed(2)));
}

function computeNextIntervalDays(prev: SrsCard, rating: ReviewRating) {
  // Hybrid: keep SM-2 style intervals for successful recalls.
  // - Again: immediate relearn (minutes), keep interval at 0.
  // - First success -> 1 day
  // - Second -> 3 days
  // - Then interval = interval * easeFactor
  if (rating === "again") return 0;

  const prevSuccessCount = prev.reviewCount; // we treat reviewCount as "successful reviews count"
  if (prevSuccessCount <= 0) return 1;
  if (prevSuccessCount === 1) return 3;

  const raw = prev.interval * prev.easeFactor;
  return Math.max(1, Math.round(raw));
}

export function createNewSrsCard(id: string, nowIso: string): SrsCard {
  return {
    id,
    state: "new",
    interval: 0,
    easeFactor: 2.5,
    confidence: 40,
    reviewCount: 0,
    lastReviewed: undefined,
    nextReview: nowIso,
    updatedAt: nowIso,
  };
}

export function reviewCard(prevCard: SrsCard, rating: ReviewRating, nowIso: string): SrsCard {
  const decayed = applyDailyConfidenceDecay(prevCard, nowIso);

  const confidence = clamp(decayed.confidence + confidenceDelta(rating), 0, 100);
  const mappedState = stateFromConfidence(confidence);

  const easeFactor = updateEaseFactor(decayed.easeFactor, rating);

  const intervalDays = computeNextIntervalDays(decayed, rating);
  const nextReview =
    rating === "again"
      ? addMinutesIso(nowIso, 10) // immediate relearn within session
      : addDaysIso(nowIso, intervalDays);

  const reviewCount = decayed.reviewCount + (rating === "again" ? 0 : 1);

  // Keep "new" until the first successful review.
  const state: SrsState = reviewCount === 0 ? "new" : mappedState;

  return {
    ...decayed,
    confidence,
    state,
    easeFactor,
    interval: intervalDays,
    reviewCount,
    lastReviewed: nowIso,
    nextReview,
    updatedAt: nowIso,
  };
}


