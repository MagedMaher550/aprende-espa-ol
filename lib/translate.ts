/**
 * Translation utilities using MyMemory API
 */

const translationCache = new Map<string, string>();

async function translate(text: string): Promise<string> {
  if (!text) {
    return text;
  }

  if (translationCache.has(text)) {
    return translationCache.get(text)!;
  }

  try {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=es|en`,
    );

    if (!response.ok) {
      throw new Error("Translation API error");
    }

    const data = (await response.json()) as {
      responseData?: { translatedText?: string };
    };
    const translation = data.responseData?.translatedText || text;
    translationCache.set(text, translation);
    return translation;
  } catch (error) {
    console.error("Translation error:", error);
    translationCache.set(text, text);
    return text;
  }
}

async function translateBatch(items: string[]): Promise<Record<string, string>> {
  const translations: Record<string, string> = {};
  const uniqueItems = Array.from(new Set(items.filter(Boolean)));

  for (let index = 0; index < uniqueItems.length; index += 5) {
    const batch = uniqueItems.slice(index, index + 5);
    const results = await Promise.all(batch.map((item) => translate(item)));

    batch.forEach((item, batchIndex) => {
      translations[item] = results[batchIndex];
    });

    if (index + 5 < uniqueItems.length) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }

  return translations;
}

export async function translateWord(word: string): Promise<string> {
  return translate(word);
}

export async function translateSentence(sentence: string): Promise<string> {
  return translate(sentence);
}

export async function translateWords(words: string[]): Promise<Record<string, string>> {
  return translateBatch(words);
}

export async function translateSentences(
  sentences: string[],
): Promise<Record<string, string>> {
  return translateBatch(sentences);
}
