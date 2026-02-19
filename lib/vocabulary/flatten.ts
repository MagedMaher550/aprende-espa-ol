import { slugifyAudioFilename, type Vocabulary, type VocabularyCollection } from "../utils";
import { VOCABULARY_COLLECTIONS } from ".";

export type VocabTag = {
  slug: string; // collection slug
  title: string;
  level: VocabularyCollection["level"];
};

export type FlattenedVocabWord = Vocabulary & {
  /** Stable deterministic id used for SRS card ids. */
  id: string;
  /** Collection slugs/titles this word belongs to (preserved across de-dupe). */
  tags: VocabTag[];
  /** Convenience: all tag slugs. */
  tagSlugs: string[];
  /** Normalized key used for de-duping/debugging. */
  dedupeKey: string;
  /** Resolved local audio path under /public. */
  resolvedAudioSrc: string;
};

function normalizeText(s: string) {
  return s
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function computeDedupeKey(word: Vocabulary) {
  // Prefer Spanish as the canonical identity; include English to reduce accidental collisions
  // for homographs with different meanings.
  return `${normalizeText(word.spanish)}::${normalizeText(word.english)}`;
}

export function computeVocabId(word: Vocabulary) {
  // Deterministic, URL-safe id (no crypto dependency).
  const key = computeDedupeKey(word);
  const safe = key.replace(/[^a-z0-9:_-]/g, "_");
  return `vocab:${safe}`;
}

function resolveAudioSrc(word: Vocabulary) {
  const fileName = word.audioUrl?.trim()
    ? word.audioUrl.trim()
    : `${slugifyAudioFilename(word.spanish)}.mp3`;
  return `/audio/vocab/${fileName}`;
}

export type FlattenOptions = {
  collections?: VocabularyCollection[];
};

/**
 * Flattens and de-duplicates all vocabulary collections at runtime.
 * - Automatically includes new words when added (collections are generated from filesystem).
 * - Removes duplicates (merges tags).
 * - Preserves collection metadata as tags.
 */
export function getFlattenedVocabulary(options: FlattenOptions = {}) {
  const collections = options.collections ?? VOCABULARY_COLLECTIONS;
  const map = new Map<string, FlattenedVocabWord>();

  for (const col of collections) {
    const tag: VocabTag = { slug: col.slug, title: col.title, level: col.level };
    for (const w of col.words) {
      const dedupeKey = computeDedupeKey(w);
      const existing = map.get(dedupeKey);
      if (existing) {
        if (!existing.tags.some((t) => t.slug === tag.slug)) existing.tags.push(tag);
        existing.tagSlugs = existing.tags.map((t) => t.slug);
        // Fill missing fields if a "better" entry appears later.
        if (!existing.audioUrl && w.audioUrl) existing.audioUrl = w.audioUrl;
        if ((!existing.examples || existing.examples.length === 0) && w.examples?.length) {
          existing.examples = w.examples;
        }
        continue;
      }

      const id = computeVocabId(w);
      const resolvedAudioSrc = resolveAudioSrc(w);
      map.set(dedupeKey, {
        ...w,
        id,
        tags: [tag],
        tagSlugs: [tag.slug],
        dedupeKey,
        resolvedAudioSrc,
      });
    }
  }

  return Array.from(map.values());
}

export function getAllCollectionTags(collections: VocabularyCollection[] = VOCABULARY_COLLECTIONS) {
  return collections.map((c) => ({ slug: c.slug, title: c.title, level: c.level } satisfies VocabTag));
}


