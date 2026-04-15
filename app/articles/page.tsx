"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { ArticleCard } from "@/components/ArticleCard";
import { ArticleSkeleton } from "@/components/ArticleSkeleton";
import { getFirebase } from "@/lib/firebase/client";

interface Article {
  id: string;
  title: string;
  content: string;
  createdAt?: number;
}

function sortArticles(articles: Article[]) {
  return [...articles].sort((left, right) => {
    const leftDate = left.createdAt || 0;
    const rightDate = right.createdAt || 0;

    if (rightDate !== leftDate) {
      return rightDate - leftDate;
    }

    return left.title.localeCompare(right.title);
  });
}

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;

    async function fetchArticles() {
      try {
        setLoading(true);
        setError(null);

        const firebase = await getFirebase();
        if (!firebase) {
          throw new Error("Firebase not initialized");
        }

        const snapshot = await getDocs(collection(firebase.db, "articles"));
        const nextArticles = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Article[];

        if (isActive) {
          setArticles(sortArticles(nextArticles));
        }
      } catch (fetchError) {
        if (isActive) {
          setError(
            fetchError instanceof Error ? fetchError.message : "Failed to load articles",
          );
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    }

    fetchArticles();

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.18),_transparent_30%),linear-gradient(180deg,#fffdf8_0%,#f8fafc_100%)] p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">
            Reading Lab
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
            Learn Spanish through real articles
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            Browse curated readings, open a lesson, and tap highlighted vocabulary
            when you want meaning and context.
          </p>
        </div>

        {loading ? (
          <section>
            <p className="mb-6 text-sm text-slate-500">Loading articles...</p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <ArticleSkeleton key={index} />
              ))}
            </div>
          </section>
        ) : null}

        {!loading && error ? (
          <section className="rounded-3xl border border-red-200 bg-red-50 p-6 text-red-700 shadow-sm">
            <h2 className="text-lg font-semibold">Failed to load articles</h2>
            <p className="mt-2 text-sm">{error}</p>
          </section>
        ) : null}

        {!loading && !error && articles.length === 0 ? (
          <section className="rounded-3xl border border-slate-200 bg-white/90 p-10 text-center shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">No articles found</h2>
            <p className="mt-3 text-slate-500">
              Add documents to the Firebase <code>articles</code> collection to start
              building lessons.
            </p>
          </section>
        ) : null}

        {!loading && !error && articles.length > 0 ? (
          <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </section>
        ) : null}
      </div>
    </main>
  );
}
