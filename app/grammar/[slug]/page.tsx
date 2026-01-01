import Link from "next/link";
import { GRAMMAR_LESSONS } from "@/lib/grammar-lessons";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { GlobalFooter } from "@/components/footer";

export async function generateStaticParams() {
  return GRAMMAR_LESSONS.map((lesson) => ({
    slug: lesson.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lesson = GRAMMAR_LESSONS.find((l) => l.slug === slug);

  if (!lesson) return {};

  return {
    title: `${lesson.title} - Aprende Español`,
    description: lesson.description,
  };
}

export default async function GrammarLesson({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lesson = GRAMMAR_LESSONS.find((l) => l.slug === slug);

  if (!lesson) notFound();

  const LessonComponent = lesson.component;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Content */}
      <article
        className="
          mx-auto
          px-4 sm:px-6
          py-12 sm:py-16
          max-w-3xl
          lg:max-w-4xl
          xl:max-w-5xl
          2xl:max-w-6xl
        "
      >
        <div className="space-y-10">
          {/* Lesson Header */}
          <header className="space-y-4 pb-8 border-b border-border/40">
            <span className="inline-block text-xs font-medium px-3 py-1 bg-accent/10 text-accent rounded-full">
              {lesson.level}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              {lesson.title}
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl">
              {lesson.description}
            </p>
          </header>

          {/* Lesson Body */}
          <section
            className="
              prose
              prose-sm
              sm:prose-base
              lg:prose-lg
              xl:prose-xl
              max-w-none
              prose-headings:tracking-tight
              prose-p:text-muted-foreground
            "
          >
            <LessonComponent />
          </section>

          {/* Footer Navigation */}
          <footer className="pt-10 border-t border-border/40">
            <Link
              href="/grammar"
              className="
                inline-flex items-center gap-2
                px-6 py-3
                border border-border
                rounded-lg
                hover:bg-secondary
                transition-colors
                font-medium
              "
            >
              ← Back to Grammar Lessons
            </Link>
          </footer>
        </div>
      </article>

      <GlobalFooter />
    </main>
  );
}
