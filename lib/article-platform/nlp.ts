/**
 * NLP Processing Utilities (Client-side only)
 * Uses compromise.js for Spanish text analysis
 * No external API calls - everything local
 */

let nlp: any = null;

async function initNLP() {
  if (nlp) return nlp;
  if (typeof window === "undefined") return null;

  try {
    const mod = await import("compromise");
    nlp = mod.default;
    return nlp;
  } catch (error) {
    console.error("Failed to load compromise:", error);
    return null;
  }
}

// Spanish stopwords to filter out
const SPANISH_STOPWORDS = new Set([
  "el", "la", "de", "que", "y", "a", "en", "un", "ser", "se", "no", "haber",
  "por", "con", "su", "para", "es", "al", "lo", "como", "más", "o", "pero",
  "sus", "le", "ya", "este", "sí", "porque", "esta", "son", "entre", "está",
  "cuando", "muy", "sin", "sobre", "sido", "siendo", "otro", "otra", "este",
  "los", "las", "del", "durante", "mediante", "luego", "todo", "todos", "toda",
  "todas", "uno", "unos", "una", "unas", "me", "te", "nos", "os", "les", "mi",
  "tu", "nuestro", "vuestro", "mío", "tuyo", "suyo", "mismo", "misma", "mismos",
  "mismas", "tal", "tales", "cual", "cuales", "quien", "quienes", "alguno",
  "alguna", "algunos", "algunas", "ninguno", "ninguna", "mucho", "mucha",
  "muchos", "muchas", "poco", "poca", "pocos", "pocas", "demás", "si", "aunque",
  "pues", "ni", "somente", "solamente", "mal", "bien", "menos", "mas", "también",
  "tampoco", "aquí", "allí", "allá", "acá", "ahí", "hoy", "ayer", "mañana",
  "siempre", "nunca", "jamás", "apenas", "aun", "aún", "atrás", "adelante",
  "afuera", "adentro", "arriba", "abajo", "cerca", "lejos", "entonces", "después",
  "antes", "mientras", "ha", "han", "he", "hemos", "hay", "había", "habían",
]);

export interface VocabItem {
  word: string;
  frequency?: number;
}

export interface GrammarPattern {
  pattern: string;
  description: string;
  examples: string[];
}

export interface SentenceItem {
  text: string;
}

export interface ProcessedArticle {
  vocab: VocabItem[];
  grammar: GrammarPattern[];
  sentences: SentenceItem[];
}

/**
 * Extract vocabulary from Spanish text
 */
export async function extractVocabulary(
  text: string,
  limit: number = 20
): Promise<VocabItem[]> {
  try {
    const nlpLib = await initNLP();
    if (!nlpLib) return [];

    const doc = nlpLib(text);
    const nouns = doc.nouns().out("array") as string[];
    const verbs = doc.verbs().out("array") as string[];

    const vocabFreq = new Map<string, number>();

    nouns.forEach((noun) => {
      const lower = noun.toLowerCase();
      if (!SPANISH_STOPWORDS.has(lower) && lower.length > 2) {
        vocabFreq.set(lower, (vocabFreq.get(lower) || 0) + 2);
      }
    });

    verbs.forEach((verb) => {
      const lower = verb.toLowerCase();
      if (!SPANISH_STOPWORDS.has(lower) && lower.length > 2) {
        vocabFreq.set(lower, (vocabFreq.get(lower) || 0) + 1);
      }
    });

    return Array.from(vocabFreq.entries())
      .map(([word, frequency]) => ({ word, frequency }))
      .sort((a, b) => (b.frequency || 0) - (a.frequency || 0))
      .slice(0, limit)
      .map(({ word }) => ({ word }));
  } catch (error) {
    console.error("Error extracting vocabulary:", error);
    return [];
  }
}

/**
 * Extract sentences from Spanish text
 */
export async function extractSentences(
  text: string,
  limit: number = 15
): Promise<SentenceItem[]> {
  try {
    const nlpLib = await initNLP();
    if (!nlpLib) return [];

    const doc = nlpLib(text);
    const sentences = doc.sentences().out("array") as string[];

    return sentences
      .filter((s) => s.trim().length > 10)
      .map((text) => ({ text: text.trim() }))
      .slice(0, limit);
  } catch (error) {
    console.error("Error extracting sentences:", error);
    return [];
  }
}

/**
 * Detect Spanish grammar patterns
 */
export function detectGrammarkPatterns(text: string): GrammarPattern[] {
  const patterns: GrammarPattern[] = [];

  // Pattern 1: se + verb (reflexive/passive)
  const seVerbRegex = /se\s+(\w+(?:ar|er|ir|o\s|\á|\é|\í|\ó|\ú)?(?:\w+)?)/gi;
  const seVerbMatches = Array.from(text.matchAll(seVerbRegex)).map((m) => m[0]);
  const uniqueSeVerbs = [...new Set(seVerbMatches)].slice(0, 5);
  if (uniqueSeVerbs.length > 0) {
    patterns.push({
      pattern: "se + verb",
      description: "Reflexive or passive construction",
      examples: uniqueSeVerbs,
    });
  }

  // Pattern 2: Infinitives
  const infinitiveRegex = /\b\w+(ar|er|ir)\b/gi;
  const infinitiveMatches = Array.from(text.matchAll(infinitiveRegex)).map(
    (m) => m[0]
  );
  const uniqueInfinitives = [...new Set(infinitiveMatches.map(w => w.toLowerCase()))].slice(
    0,
    5
  );
  if (uniqueInfinitives.length > 0) {
    patterns.push({
      pattern: "Infinitives (-ar, -er, -ir)",
      description: "Base verb forms used with modal verbs",
      examples: uniqueInfinitives,
    });
  }

  // Pattern 3: Preterite (past tense)
  const preteriteRegex = /\b\w+(é|aste|ó|amos|aron|í|iste|ió|imos|ieron)\b/gi;
  const preteriteMatches = Array.from(text.matchAll(preteriteRegex)).map(
    (m) => m[0]
  );
  const uniquePretrite = [...new Set(preteriteMatches.map(w => w.toLowerCase()))].slice(
    0,
    5
  );
  if (uniquePretrite.length > 0) {
    patterns.push({
      pattern: "Preterite Tense",
      description: "Simple past tense for completed actions",
      examples: uniquePretrite,
    });
  }

  // Pattern 4: Present Perfect (ha/han)
  const perfectRegex = /\b(ha|han)\s+\w+(ado|ido|cho)\b/gi;
  const perfectMatches = Array.from(text.matchAll(perfectRegex)).map((m) => m[0]);
  const uniquePerfect = [...new Set(perfectMatches)].slice(0, 5);
  if (uniquePerfect.length > 0) {
    patterns.push({
      pattern: "Present Perfect",
      description: "Recent past using ha/han + past participle",
      examples: uniquePerfect,
    });
  }

  // Pattern 5: Gerunds (-ando, -endo, -iendo)
  const gerundRegex = /\b\w+(ando|endo|iendo)\b/gi;
  const gerundMatches = Array.from(text.matchAll(gerundRegex)).map((m) => m[0]);
  const uniqueGerunds = [...new Set(gerundMatches.map(w => w.toLowerCase()))].slice(
    0,
    5
  );
  if (uniqueGerunds.length > 0) {
    patterns.push({
      pattern: "Gerunds (-ando, -endo, -iendo)",
      description: "Present participles for continuous actions",
      examples: uniqueGerunds,
    });
  }

  return patterns;
}

/**
 * Process entire article (all NLP operations)
 */
export async function processArticle(
  content: string
): Promise<ProcessedArticle> {
  const [vocab, sentences, grammar] = await Promise.all([
    extractVocabulary(content),
    extractSentences(content),
    Promise.resolve(detectGrammarkPatterns(content)),
  ]);

  return { vocab, sentences, grammar };
}
