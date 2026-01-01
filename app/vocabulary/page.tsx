import Link from "next/link";
import { VOCABULARY_COLLECTIONS } from "@/lib/vocabulary";
import { Header } from "@/components/header";
import { GlobalFooter } from "@/components/footer";

export default function VocabularyIndex() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-2 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              Vocabulary Collections
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              Organized word sets by theme. Learn practical vocabulary for
              everyday conversations.
            </p>
          </div>

          {/* Collections Grid */}
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {VOCABULARY_COLLECTIONS.map((collection) => (
              <Link
                key={collection.slug}
                href={`/vocabulary/${collection.slug}`}
                className="group block p-4 sm:p-6 border border-border rounded-lg hover:border-accent/50 hover:bg-secondary/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-2 sm:mb-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                    {collection.title}
                  </h3>
                  <span className="text-xs font-medium px-2 sm:px-3 py-1 bg-muted text-muted-foreground rounded-full whitespace-nowrap">
                    {collection.level}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-2 sm:mb-3">
                  {collection.description}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                  {collection.words.length} words
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <GlobalFooter />
    </main>
  );
}
