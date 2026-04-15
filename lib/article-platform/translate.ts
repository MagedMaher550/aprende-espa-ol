/**
 * Translation utilities using MyMemory API
 * Free API - no authentication required
 */

const MYMEMORY_API = "https://api.mymemory.translated.net/get";
const translationCache = new Map<string, string>();

export interface TranslationResult {
  text: string;
  translation: string;
  success: boolean;
}

/**
 * Translate a single word or sentence from Spanish to English
 */
export async function translate(
  text: string,
  sourceLang: string = "es",
  targetLang: string = "en"
): Promise<TranslationResult> {
  const cacheKey = `${sourceLang}-${targetLang}-${text}`;

  if (translationCache.has(cacheKey)) {
    return {
      text,
      translation: translationCache.get(cacheKey)!,
      success: true,
    };
  }

  try {
    const params = new URLSearchParams({
      q: text,
      langpair: `${sourceLang}|${targetLang}`,
    });

    const response = await fetch(`${MYMEMORY_API}?${params}`, {
      method: "GET",
      headers: {
        "User-Agent": "Learning-Platform/1.0",
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const data = (await response.json()) as {
      responseStatus: number;
      responseData?: {
        translatedText: string;
      };
    };

    if (data.responseStatus !== 200) {
      throw new Error("Translation failed");
    }

    const translation = data.responseData?.translatedText || text;
    translationCache.set(cacheKey, translation);

    return { text, translation, success: true };
  } catch (error) {
    console.error(`Translation error for "${text}":`, error);
    return { text, translation: text, success: false };
  }
}

/**
 * Batch translate multiple items with rate limiting
 */
export async function batchTranslate(
  items: string[],
  sourceLang: string = "es",
  targetLang: string = "en",
  delayMs: number = 100
): Promise<TranslationResult[]> {
  const results: TranslationResult[] = [];

  for (let i = 0; i < items.length; i += 5) {
    const batch = items.slice(i, i + 5);
    const batchResults = await Promise.all(
      batch.map((item) => translate(item, sourceLang, targetLang))
    );
    results.push(...batchResults);

    if (i + 5 < items.length) {
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }

  return results;
}

/**
 * Clear translation cache
 */
export function clearTranslationCache(): void {
  translationCache.clear();
}
