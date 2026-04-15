import { ArticleSkeleton } from "@/components/ArticleSkeleton";

export default function LoadingArticlePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.18),_transparent_30%),linear-gradient(180deg,#fffdf8_0%,#f8fafc_100%)] p-6">
      <div className="max-w-2xl mx-auto">
        <p className="mb-6 text-sm text-slate-500">Loading article...</p>
        <ArticleSkeleton variant="reader" />
      </div>
    </main>
  );
}
