import type { FlattenedVocabWord } from "../vocabulary/flatten";
import type { SrsCard, SrsState } from "../srs/types";
import type { StudySettings } from "./settings";

export type StudyMode =
  | "learn-new"
  | "review-due"
  | "weak-words"
  | "mastery-push"
  | "custom-tag"
  | "random-practice"
  | "timed";

export type CardDirection = "spanish-front" | "meaning-front";

export type StudyPrompt = {
  vocabId: string;
  word: FlattenedVocabWord;
  direction: CardDirection;
  srs?: SrsCard;
};

export function pickDirection(settings: StudySettings, state: SrsState): CardDirection {
  if (settings.cardDirection === "spanish-front") return "spanish-front";
  if (settings.cardDirection === "meaning-front") return "meaning-front";

  // smart
  // new/learning => recognition (spanish-front)
  // familiar => mixed
  // known => recall (meaning-front)
  // weak => recognition
  if (state === "known") return "meaning-front";
  if (state === "familiar") return Math.random() < 0.5 ? "spanish-front" : "meaning-front";
  return "spanish-front";
}

function shuffleInPlace<T>(arr: T[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j]!, arr[i]!];
  }
  return arr;
}

function isDue(card: SrsCard, nowIso: string) {
  return card.nextReview <= nowIso;
}

function isWeak(card: SrsCard) {
  return card.state === "weak" || card.confidence < 30;
}

function isMasteryPush(card: SrsCard) {
  return (card.state === "familiar" || card.state === "weak") && card.state !== "known";
}

function effectiveState(card: SrsCard | undefined): SrsState {
  return card?.state ?? "new";
}

function filterBySelectedCollections(vocab: FlattenedVocabWord[], selected?: string[]) {
  if (!selected || selected.length === 0) return vocab;
  const set = new Set(selected);
  return vocab.filter((w) => w.tagSlugs.some((t) => set.has(t)));
}

/**
 * Learn Mode: Only words with no SRS record, respecting daily cap.
 * Must not mix with review words.
 */
function filterLearnNew(
  vocab: FlattenedVocabWord[],
  cardsById: Map<string, SrsCard>,
  settings: StudySettings
): StudyPrompt[] {
  const newWords = vocab.filter((w) => !cardsById.has(w.id));
  if (settings.randomizeNew) shuffleInPlace(newWords);
  const slice = newWords.slice(0, settings.newPerDay);
  return slice.map((w) => ({ vocabId: w.id, word: w, direction: "spanish-front" as CardDirection }));
}

/**
 * Review Due: Only cards where nextReview <= now.
 */
function filterReviewDue(
  vocab: FlattenedVocabWord[],
  cardsById: Map<string, SrsCard>,
  settings: StudySettings,
  nowIso: string
): StudyPrompt[] {
  const prompts: StudyPrompt[] = [];
  for (const w of vocab) {
    const card = cardsById.get(w.id);
    if (card && isDue(card, nowIso)) {
      prompts.push({
        vocabId: w.id,
        word: w,
        direction: pickDirection(settings, effectiveState(card)),
        srs: card,
      });
    }
  }
  shuffleInPlace(prompts);
  return prompts;
}

/**
 * Weak Mode: Only cards with confidence < threshold OR state=weak.
 */
function filterWeakWords(
  vocab: FlattenedVocabWord[],
  cardsById: Map<string, SrsCard>,
  settings: StudySettings
): StudyPrompt[] {
  const prompts: StudyPrompt[] = [];
  for (const w of vocab) {
    const card = cardsById.get(w.id);
    if (card && isWeak(card)) {
      prompts.push({ vocabId: w.id, word: w, direction: "spanish-front" as CardDirection, srs: card });
    }
  }
  shuffleInPlace(prompts);
  return prompts;
}

/**
 * Mastery Push: Only familiar + weak. Must not include known.
 */
function filterMasteryPush(
  vocab: FlattenedVocabWord[],
  cardsById: Map<string, SrsCard>,
  settings: StudySettings
): StudyPrompt[] {
  const prompts: StudyPrompt[] = [];
  for (const w of vocab) {
    const card = cardsById.get(w.id);
    if (card && isMasteryPush(card)) {
      prompts.push({
        vocabId: w.id,
        word: w,
        direction: pickDirection(settings, effectiveState(card)),
        srs: card,
      });
    }
  }
  shuffleInPlace(prompts);
  return prompts;
}

/**
 * Custom Mode: Filter by selected tags/collections correctly.
 */
function filterCustomTag(
  vocab: FlattenedVocabWord[],
  cardsById: Map<string, SrsCard>,
  settings: StudySettings,
  customTagSlug?: string
): StudyPrompt[] {
  if (!customTagSlug) return [];
  const filtered = vocab.filter((w) => w.tagSlugs.includes(customTagSlug));
  const prompts: StudyPrompt[] = [];
  for (const w of filtered) {
    const card = cardsById.get(w.id);
    prompts.push({
      vocabId: w.id,
      word: w,
      direction: pickDirection(settings, effectiveState(card)),
      srs: card,
    });
  }
  shuffleInPlace(prompts);
  return prompts;
}

/**
 * Random Mode: Random subset, not entire dataset at once.
 */
function filterRandomPractice(
  vocab: FlattenedVocabWord[],
  cardsById: Map<string, SrsCard>,
  settings: StudySettings,
  maxSize: number = 100
): StudyPrompt[] {
  const prompts: StudyPrompt[] = [];
  const shuffled = [...vocab];
  shuffleInPlace(shuffled);
  const subset = shuffled.slice(0, Math.min(maxSize, shuffled.length));
  for (const w of subset) {
    const card = cardsById.get(w.id);
    prompts.push({
      vocabId: w.id,
      word: w,
      direction: pickDirection(settings, effectiveState(card)),
      srs: card,
    });
  }
  return prompts;
}

/**
 * Timed Mode: Select intelligent subset at session start.
 * Uses: Due words first, then weak, then random fallback.
 * Hard cap initial pool size (40-60 words).
 */
function filterTimedMode(
  vocab: FlattenedVocabWord[],
  cardsById: Map<string, SrsCard>,
  settings: StudySettings,
  nowIso: string,
  poolSize: number = 50
): StudyPrompt[] {
  const prompts: StudyPrompt[] = [];
  const usedIds = new Set<string>();

  // 1. Due words first (priority)
  for (const w of vocab) {
    if (prompts.length >= poolSize) break;
    const card = cardsById.get(w.id);
    if (card && isDue(card, nowIso) && !usedIds.has(w.id)) {
      prompts.push({
        vocabId: w.id,
        word: w,
        direction: pickDirection(settings, effectiveState(card)),
        srs: card,
      });
      usedIds.add(w.id);
    }
  }

  // 2. Weak words (secondary)
  if (prompts.length < poolSize) {
    for (const w of vocab) {
      if (prompts.length >= poolSize) break;
      const card = cardsById.get(w.id);
      if (card && isWeak(card) && !usedIds.has(w.id)) {
        prompts.push({
          vocabId: w.id,
          word: w,
          direction: pickDirection(settings, effectiveState(card)),
          srs: card,
        });
        usedIds.add(w.id);
      }
    }
  }

  // 3. Random fallback to fill remaining slots
  if (prompts.length < poolSize) {
    const remaining = vocab.filter((w) => !usedIds.has(w.id));
    shuffleInPlace(remaining);
    const needed = poolSize - prompts.length;
    for (let i = 0; i < needed && i < remaining.length; i++) {
      const w = remaining[i]!;
      const card = cardsById.get(w.id);
      prompts.push({
        vocabId: w.id,
        word: w,
        direction: pickDirection(settings, effectiveState(card)),
        srs: card,
      });
    }
  }

  shuffleInPlace(prompts);
  return prompts;
}

export type BuildQueueInput = {
  mode: StudyMode;
  nowIso: string;
  vocab: FlattenedVocabWord[];
  cardsById: Map<string, SrsCard>;
  settings: StudySettings;
  customTagSlug?: string;
};

/**
 * Build study queue based on mode with proper filtering logic.
 * No filtering inside components - all logic here.
 */
export function buildStudyQueue(input: BuildQueueInput): StudyPrompt[] {
  const { mode, nowIso, cardsById, settings } = input;
  const vocab = filterBySelectedCollections(input.vocab, settings.selectedCollections);

  switch (mode) {
    case "learn-new":
      return filterLearnNew(vocab, cardsById, settings);

    case "review-due":
      return filterReviewDue(vocab, cardsById, settings, nowIso);

    case "weak-words":
      return filterWeakWords(vocab, cardsById, settings);

    case "mastery-push":
      return filterMasteryPush(vocab, cardsById, settings);

    case "custom-tag":
      return filterCustomTag(vocab, cardsById, settings, input.customTagSlug);

    case "random-practice":
      return filterRandomPractice(vocab, cardsById, settings);

    case "timed":
      return filterTimedMode(vocab, cardsById, settings, nowIso);

    default:
      return [];
  }
}

