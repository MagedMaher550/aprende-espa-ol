"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ArticleSkeleton } from "@/components/ArticleSkeleton";
import { TabsLayout } from "@/components/TabsLayout";
import { VocabHighlight } from "@/components/VocabHighlight";
import { getFirebase } from "@/lib/firebase/client";
import {
  type GrammarItem,
  type SentenceItem,
  type VocabItem,
  normalizeWord,
  processArticle,
  splitParagraphs,
} from "@/lib/nlp";
import { translateSentences, translateWords } from "@/lib/translate";

interface ArticleDocument {
  id: string;
  title: string;
  content: string;
  vocab?: VocabItem[];
  grammar?: GrammarItem[];
  sentences?: SentenceItem[];
}

function hasProcessedLearningData(article: ArticleDocument) {
  return Boolean(
    Array.isArray(article.vocab) &&
      Array.isArray(article.grammar) &&
      Array.isArray(article.sentences) &&
      article.vocab.every((item) => typeof item.frequency === "number") &&
      article.grammar.every((item) => typeof item.label === "string"),
  );
}

function normalizeArticle(article: ArticleDocument): ArticleDocument {
  return {
    ...article,
    vocab: (article.vocab || []).map((item) => ({
      word: item.word,
      frequency: item.frequency ?? 0,
      translation: item.translation,
      exampleSentence: item.exampleSentence,
      exampleTranslation: item.exampleTranslation,
    })),
    grammar: (article.grammar || []).map((item) => ({
      label: item.label,
      examples: item.examples || [],
    })),
    sentences: (article.sentences || []).map((item) => ({
      text: item.text,
      translation: item.translation,
    })),
  };
}

function splitToken(token: string) {
  const match = token.match(/^([^\p{L}]*)([\p{L}]+)([^\p{L}]*)$/u);
  if (!match) {
    return null;
  }

  const [, prefix, core, suffix] = match;
  return { prefix, core, suffix, normalized: normalizeWord(core) };
}

function ReaderArticle({
  article,
  selectedWord,
  onSelectWord,
}: {
  article: ArticleDocument;
  selectedWord: string | null;
  onSelectWord: (word: string) => void;
}) {
  const vocabLookup = new Map((article.vocab || []).map((item) => [item.word, item]));
  const paragraphs = splitParagraphs(article.content);

  return (
    <article className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-8 shadow-sm">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
          Article
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
          {article.title}
        </h1>
      </div>

      <div className="space-y-6 text-lg leading-7 text-slate-700">
        {paragraphs.map((paragraph, paragraphIndex) => (
          <p key={`${paragraphIndex}-${paragraph.slice(0, 24)}`}>
            {paragraph.split(/(\s+)/).map((token, tokenIndex) => {
              if (!token.trim()) {
                return token;
              }

              const parsedToken = splitToken(token);
              if (!parsedToken) {
                return (
                  <span key={`${paragraphIndex}-${tokenIndex}-${token}`}>{token}</span>
                );
              }

              const vocabItem = vocabLookup.get(parsedToken.normalized);
              if (!vocabItem) {
                return (
                  <span key={`${paragraphIndex}-${tokenIndex}-${token}`}>{token}</span>
                );
              }

              return (
                <span key={`${paragraphIndex}-${tokenIndex}-${token}`}>
                  {parsedToken.prefix}
                  <VocabHighlight
                    word={parsedToken.core}
                    translation={vocabItem.translation}
                    exampleSentence={vocabItem.exampleSentence}
                    exampleTranslation={vocabItem.exampleTranslation}
                    isSelected={selectedWord === vocabItem.word}
                    onSelect={() => onSelectWord(vocabItem.word)}
                  />
                  {parsedToken.suffix}
                </span>
              );
            })}
          </p>
        ))}
      </div>
    </article>
  );
}

function VocabularyTab({
  vocab,
  selectedWord,
  onSelectWord,
  loading,
}: {
  vocab: VocabItem[];
  selectedWord: string | null;
  onSelectWord: (word: string) => void;
  loading: boolean;
}) {
  if (loading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="animate-pulse rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm"
          >
            <div className="h-6 w-28 rounded bg-gray-200" />
            <div className="mt-3 h-4 w-40 rounded bg-gray-200" />
            <div className="mt-4 h-16 rounded-2xl bg-gray-100" />
          </div>
        ))}
      </div>
    );
  }

  if (vocab.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 text-slate-500 shadow-sm">
        No vocabulary extracted
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {vocab.map((item) => {
        const isSelected = selectedWord === item.word;

        return (
          <button
            key={item.word}
            type="button"
            onClick={() => onSelectWord(item.word)}
            className="w-full rounded-3xl border border-slate-200 bg-white/90 p-5 text-left shadow-sm transition hover:border-amber-300 hover:shadow-md"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-slate-900">{item.word}</p>
                <p className="text-sm text-slate-500">
                  {item.frequency} {item.frequency === 1 ? "occurrence" : "occurrences"}
                </p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Tap for meaning
              </span>
            </div>

            {isSelected ? (
              <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                  Translation
                </p>
                <p className="mt-1 text-base font-semibold text-slate-900">
                  {item.translation || item.word}
                </p>
                {item.exampleSentence ? (
                  <>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Example sentence
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      {item.exampleSentence}
                    </p>
                    {item.exampleTranslation ? (
                      <p className="mt-2 text-sm text-slate-500">
                        {item.exampleTranslation}
                      </p>
                    ) : null}
                  </>
                ) : null}
              </div>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

function GrammarTab({
  grammar,
  loading,
}: {
  grammar: GrammarItem[];
  loading: boolean;
}) {
  if (loading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="animate-pulse rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm"
          >
            <div className="h-6 w-40 rounded bg-gray-200" />
            <div className="mt-4 space-y-2">
              <div className="h-4 w-full rounded bg-gray-200" />
              <div className="h-4 w-[84%] rounded bg-gray-200" />
              <div className="h-4 w-[62%] rounded bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (grammar.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 text-slate-500 shadow-sm">
        No grammar patterns detected
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {grammar.map((item) => (
        <section
          key={item.label}
          className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
            Grammar
          </p>
          <h2 className="mt-2 text-xl font-semibold text-slate-900">{item.label}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {item.examples.map((example) => (
              <span
                key={example}
                className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
              >
                {example}
              </span>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export function ArticleLesson() {
  const params = useParams();
  const articleId = params.slug as string;

  const [article, setArticle] = useState<ArticleDocument | null>(null);
  const [loading, setLoading] = useState(true);
  const [learningLoading, setLearningLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;

    async function loadArticle() {
      try {
        setLoading(true);
        setError(null);

        const firebase = await getFirebase();
        if (!firebase) {
          throw new Error("Firebase not initialized");
        }

        const articleRef = doc(firebase.db, "articles", articleId);
        const snapshot = await getDoc(articleRef);

        if (!snapshot.exists()) {
          throw new Error("Failed to load article");
        }

        const rawArticle = {
          id: snapshot.id,
          ...snapshot.data(),
        } as ArticleDocument;
        const alreadyProcessed = hasProcessedLearningData(rawArticle);
        const baseArticle = normalizeArticle(rawArticle);

        if (!isActive) {
          return;
        }

        setArticle(baseArticle);
        setLoading(false);

        if (alreadyProcessed) {
          return;
        }

        setLearningLoading(true);
        const processed = await processArticle(baseArticle.content);
        const exampleSentences = processed.vocab
          .map((item) => item.exampleSentence)
          .filter((sentence): sentence is string => Boolean(sentence));

        const [wordTranslations, exampleTranslations] = await Promise.all([
          translateWords(processed.vocab.map((item) => item.word)),
          translateSentences(exampleSentences),
        ]);

        const enrichedArticle = normalizeArticle({
          ...baseArticle,
          vocab: processed.vocab.map((item) => ({
            ...item,
            translation: wordTranslations[item.word] || item.word,
            exampleTranslation: item.exampleSentence
              ? exampleTranslations[item.exampleSentence] || item.exampleSentence
              : undefined,
          })),
          grammar: processed.grammar,
          sentences: processed.sentences,
        });

        await setDoc(
          articleRef,
          {
            vocab: enrichedArticle.vocab,
            grammar: enrichedArticle.grammar,
            sentences: enrichedArticle.sentences,
            processedAt: Date.now(),
          },
          { merge: true },
        );

        if (isActive) {
          setArticle(enrichedArticle);
        }
      } catch (loadError) {
        if (isActive) {
          setError(
            loadError instanceof Error ? loadError.message : "Failed to load article",
          );
        }
      } finally {
        if (isActive) {
          setLoading(false);
          setLearningLoading(false);
        }
      }
    }

    loadArticle();

    return () => {
      isActive = false;
    };
  }, [articleId]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.18),_transparent_30%),linear-gradient(180deg,#fffdf8_0%,#f8fafc_100%)] p-6">
        <div className="max-w-2xl mx-auto">
          <p className="mb-6 text-sm text-slate-500">Loading article...</p>
          <ArticleSkeleton variant="reader" />
        </div>
      </main>
    );
  }

  if (error || !article) {
    return (
      <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.18),_transparent_30%),linear-gradient(180deg,#fffdf8_0%,#f8fafc_100%)] p-6">
        <div className="max-w-2xl mx-auto rounded-3xl border border-red-200 bg-red-50 p-6 text-red-700 shadow-sm">
          <h1 className="text-xl font-semibold">Failed to load article</h1>
          <p className="mt-2 text-sm">{error || "This lesson is unavailable right now."}</p>
          <Link href="/articles" className="mt-4 inline-block text-sm font-medium underline">
            Back to articles
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.18),_transparent_30%),linear-gradient(180deg,#fffdf8_0%,#f8fafc_100%)] p-6">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/articles"
          className="mb-6 inline-flex text-sm font-medium text-slate-500 transition hover:text-slate-900"
        >
          Back to articles
        </Link>

        {learningLoading ? (
          <div className="mb-6 rounded-3xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800 shadow-sm">
            Building your vocabulary and grammar view...
          </div>
        ) : null}

        <TabsLayout
          tabs={[
            {
              id: "article",
              label: "Article",
              content: (
                <ReaderArticle
                  article={article}
                  selectedWord={selectedWord}
                  onSelectWord={(word) =>
                    setSelectedWord((current) => (current === word ? null : word))
                  }
                />
              ),
            },
            {
              id: "vocabulary",
              label: "Vocabulary",
              content: (
                <VocabularyTab
                  vocab={article.vocab || []}
                  selectedWord={selectedWord}
                  onSelectWord={(word) =>
                    setSelectedWord((current) => (current === word ? null : word))
                  }
                  loading={learningLoading}
                />
              ),
            },
            {
              id: "grammar",
              label: "Grammar",
              content: (
                <GrammarTab grammar={article.grammar || []} loading={learningLoading} />
              ),
            },
          ]}
        />
      </div>
    </main>
  );
}
