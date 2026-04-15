import { ArticleSkeleton } from "@/components/ArticleSkeleton";

export default function LoadingArticlesPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.18),_transparent_30%),linear-gradient(180deg,#fffdf8_0%,#f8fafc_100%)] p-6">
      <div className="max-w-6xl mx-auto">
        <p className="mb-6 text-sm text-slate-500">Loading articles...</p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <ArticleSkeleton key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
