/**
 * NLP utilities for Spanish article learning
 */

let compromisePromise: Promise<typeof import("compromise")["default"] | null> | null =
  null;

const PROCESS_CACHE = new Map<string, Promise<ProcessedArticle>>();
const COMMON_VERBS = new Set([
  "ser",
  "estar",
  "tener",
  "hacer",
  "decir",
  "ir",
  "ver",
]);
const STOPWORDS = new Set([
  "sobre",
  "desde",
  "hasta",
  "entre",
  "durante",
  "porque",
  "aunque",
  "tambien",
  "también",
  "contra",
  "segun",
  "según",
  "mientras",
  "donde",
  "cuando",
  "quien",
  "quienes",
  "estas",
  "estos",
  "esta",
  "este",
  "aquel",
  "aquella",
  "ellos",
  "ellas",
  "nosotros",
  "vosotros",
  "usted",
  "ustedes",
  "luego",
  "ademas",
  "además",
  "mismo",
  "misma",
  "todos",
  "todas",
  "cada",
  "tras",
  "solo",
  "sólo",
]);

export interface VocabItem {
  word: string;
  frequency: number;
  translation?: string;
  exampleSentence?: string;
  exampleTranslation?: string;
}

export interface GrammarItem {
  label: string;
  examples: string[];
}

export interface SentenceItem {
  text: string;
  translation?: string;
}

export interface ProcessedArticle {
  vocab: VocabItem[];
  grammar: GrammarItem[];
  sentences: SentenceItem[];
}

async function getCompromise() {
  if (typeof window === "undefined") {
    return null;
  }

  if (!compromisePromise) {
    compromisePromise = import("compromise")
      .then((mod) => mod.default)
      .catch((error) => {
        console.error("Failed to load compromise", error);
        return null;
      });
  }

  return compromisePromise;
}

export function splitParagraphs(text: string): string[] {
  return text
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

export function normalizeWord(word: string): string {
  return word
    .toLowerCase()
    .normalize("NFC")
    .replace(/^[^\p{L}]+|[^\p{L}]+$/gu, "");
}

function isValidLearningWord(word: string): boolean {
  return (
    word.length > 4 &&
    /^[\p{L}]+$/u.test(word) &&
    !COMMON_VERBS.has(word) &&
    !STOPWORDS.has(word)
  );
}

export async function extractSentences(
  text: string,
  limit: number = 18,
): Promise<SentenceItem[]> {
  const compromise = await getCompromise();
  if (!compromise) {
    return text
      .split(/(?<=[.!?])\s+/)
      .map((sentence) => sentence.trim())
      .filter((sentence) => sentence.length > 30)
      .slice(0, limit)
      .map((sentence) => ({ text: sentence }));
  }

  const doc = compromise(text);
  return (doc.sentences().out("array") as string[])
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 30)
    .slice(0, limit)
    .map((sentence) => ({ text: sentence }));
}

export async function extractVocabulary(
  text: string,
  limit: number = 12,
): Promise<VocabItem[]> {
  const compromise = await getCompromise();
  if (!compromise) {
    return [];
  }

  const doc = compromise(text);
  const terms = doc.terms().out("array") as string[];
  const frequency = new Map<string, number>();

  for (const term of terms) {
    const normalized = normalizeWord(term);
    if (!isValidLearningWord(normalized)) {
      continue;
    }

    frequency.set(normalized, (frequency.get(normalized) || 0) + 1);
  }

  return Array.from(frequency.entries())
    .map(([word, count]) => ({ word, frequency: count }))
    .sort((left, right) => {
      if (right.frequency !== left.frequency) {
        return right.frequency - left.frequency;
      }

      return left.word.localeCompare(right.word, "es");
    })
    .slice(0, limit);
}

export function detectGrammar(text: string): GrammarItem[] {
  const results: GrammarItem[] = [];

  const seVerbExamples = Array.from(
    new Set(
      Array.from(
        text.matchAll(/\bse\s+[a-záéíóúüñ]+(?:ar|er|ir|a|e|o|as|es|os|an|en)\b/giu),
        (match) => match[0].trim(),
      ),
    ),
  ).slice(0, 4);

  if (seVerbExamples.length > 0) {
    results.push({
      label: "se + verb",
      examples: seVerbExamples,
    });
  }

  const infinitiveExamples = Array.from(
    new Set(
      Array.from(
        text.matchAll(/\b[a-záéíóúüñ]+(?:ar|er|ir)\b/giu),
        (match) => match[0].toLowerCase(),
      ),
    ),
  ).slice(0, 6);

  if (infinitiveExamples.length > 0) {
    results.push({
      label: "infinitives",
      examples: infinitiveExamples,
    });
  }

  return results;
}

function attachExampleSentences(
  vocab: VocabItem[],
  sentences: SentenceItem[],
): VocabItem[] {
  return vocab.map((item) => {
    const exampleSentence = sentences.find((sentence) =>
      normalizeWord(sentence.text).includes(item.word),
    )?.text;

    return {
      ...item,
      exampleSentence,
    };
  });
}

export async function processArticle(text: string): Promise<ProcessedArticle> {
  if (!PROCESS_CACHE.has(text)) {
    PROCESS_CACHE.set(
      text,
      Promise.all([
        extractVocabulary(text),
        extractSentences(text),
        Promise.resolve(detectGrammar(text)),
      ]).then(([vocab, sentences, grammar]) => ({
        vocab: attachExampleSentences(vocab, sentences),
        grammar,
        sentences,
      })),
    );
  }

  return PROCESS_CACHE.get(text)!;
}
