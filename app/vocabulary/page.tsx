import Link from "next/link"
import { VOCABULARY_COLLECTIONS } from "@/lib/vocabulary"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export default function VocabularyIndex() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border/40 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4 relative">
          <Link href="/" className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
            Aprende Español
          </Link>
          <div className="hidden md:flex items-center gap-2 sm:gap-4 md:gap-8 flex-shrink-0">
            <Link
              href="/grammar"
              className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              Grammar
            </Link>
            <Link href="/vocabulary" className="text-xs sm:text-sm font-medium text-foreground whitespace-nowrap">
              Vocabulary
            </Link>
            <Link
              href="/resources"
              className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              Resources
            </Link>
            <ThemeToggle />
          </div>
          <MobileNav />
        </div>
      </nav>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-2 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Vocabulary Collections</h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              Organized word sets by theme. Learn practical vocabulary for everyday conversations.
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
                <p className="text-sm sm:text-base text-muted-foreground mb-2 sm:mb-3">{collection.description}</p>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">{collection.words.length} words</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card/20 mt-12 sm:mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <p className="text-xs sm:text-sm text-muted-foreground">
            Aprende Español © 2026. A minimal learning platform for Spanish grammar and vocabulary.
          </p>
        </div>
      </footer>
    </main>
  )
}
