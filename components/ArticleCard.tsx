"use client";

import Link from "next/link";

interface ArticleCardProps {
  article: {
    id: string;
    title: string;
    content: string;
  };
}

function getPreview(content: string) {
  const plainText = content.replace(/\s+/g, " ").trim();
  if (plainText.length <= 120) {
    return plainText;
  }

  return `${plainText.slice(0, 120).trimEnd()}...`;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/articles/${article.id}`}
      className="group flex h-full flex-col rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70"
    >
      <div className="mb-4 inline-flex w-fit rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
        Article
      </div>
      <h2 className="mb-3 text-xl font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-amber-700">
        {article.title}
      </h2>
      <p className="text-sm leading-6 text-slate-600">{getPreview(article.content)}</p>
      <div className="mt-6 text-sm font-medium text-slate-500 transition-colors group-hover:text-slate-900">
        Open lesson
      </div>
    </Link>
  );
}
