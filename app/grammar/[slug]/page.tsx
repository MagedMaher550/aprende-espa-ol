import Link from "next/link";
import { GRAMMAR_LESSONS } from "@/lib/grammar-lessons";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return GRAMMAR_LESSONS.map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = GRAMMAR_LESSONS.find((item) => item.slug === slug);
  if (!lesson) return {};

  return {
    title: `${lesson.title} - Aprende Español`,
    description: lesson.description,
  };
}

export default async function GrammarLesson({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = GRAMMAR_LESSONS.find((item) => item.slug === slug);
  if (!lesson) notFound();

  const LessonComponent = lesson.component;

  return (
    <article className="w-full px-4 py-8 sm:px-6 sm:py-10 lg:px-10 xl:px-12 2xl:px-16">
      <div className="w-full space-y-10">
        <LessonComponent />

        <footer className="border-t border-border/40 pt-8">
          <Link
            href="/grammar"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-medium transition-colors hover:bg-secondary"
          >
            ← Back to Grammar Lessons
          </Link>
        </footer>
      </div>
    </article>
  );
}
