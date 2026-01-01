import Link from "next/link"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"

const RESOURCES = [
  {
    category: "Dictionaries",
    links: [
      {
        name: "SpanishDict",
        description: "Comprehensive Spanish-English dictionary with verb conjugations and example sentences.",
        url: "https://www.spanishdict.com",
      },
      {
        name: "Real Academia Española",
        description:
          "Official dictionary of the Spanish language (RAE). The authoritative source for Spanish vocabulary.",
        url: "https://www.rae.es",
      },
      {
        name: "Wordreference",
        description: "Online translation dictionary with forums and language learning resources.",
        url: "https://www.wordreference.com",
      },
    ],
  },
  {
    category: "Grammar References",
    links: [
      {
        name: "Lingolia",
        description: "Clear grammar explanations with interactive exercises for Spanish learners.",
        url: "https://www.lingolia.com/en/spanish",
      },
      {
        name: "BBC Learning English - Spanish",
        description: "Quality grammar lessons and explanations from BBC Learning.",
        url: "https://www.bbc.co.uk/learningenglish",
      },
      {
        name: "Bab.la",
        description: "Online language portal with grammar tips, verb conjugations, and learning tools.",
        url: "https://www.bab.la",
      },
    ],
  },
  {
    category: "Practice Tools",
    links: [
      {
        name: "Duolingo",
        description: "Gamified language learning platform for daily Spanish practice.",
        url: "https://www.duolingo.com",
      },
      {
        name: "Anki",
        description: "Spaced repetition flashcard system perfect for vocabulary memorization.",
        url: "https://ankiweb.net",
      },
      {
        name: "Forvo",
        description: "Pronunciation guide with native speaker audio for Spanish words.",
        url: "https://forvo.com",
      },
    ],
  },
  {
    category: "Listening & Media",
    links: [
      {
        name: "News in Slow Spanish",
        description: "Spanish news presented at a slower pace for learners.",
        url: "https://www.newsinslowspanish.com",
      },
      {
        name: "Spanish Podcast Network",
        description: "Collection of Spanish language podcasts for all proficiency levels.",
        url: "https://www.spanishpodcasts.com",
      },
      {
        name: "Easy Spanish YouTube",
        description: "Video channel with Spanish lessons and cultural content.",
        url: "https://www.youtube.com/c/EasySpanish",
      },
    ],
  },
]

export default function ResourcesPage() {
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
            <Link
              href="/vocabulary"
              className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              Vocabulary
            </Link>
            <Link href="/resources" className="text-xs sm:text-sm font-medium text-foreground whitespace-nowrap">
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
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Learning Resources</h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              Curated external resources to support your Spanish learning journey. All links open in a new tab.
            </p>
          </div>

          {/* Resource Sections */}
          <div className="space-y-10 sm:space-y-12">
            {RESOURCES.map((section) => (
              <section key={section.category} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold text-foreground border-b border-border/40 pb-3">
                  {section.category}
                </h2>
                <ul className="space-y-3 sm:space-y-4">
                  {section.links.map((resource) => (
                    <li key={resource.name}>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block p-4 sm:p-5 border border-border rounded-lg hover:border-accent/50 hover:bg-secondary/30 transition-colors"
                      >
                        <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-1 sm:mb-2">
                          {resource.name}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {resource.description}
                        </p>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
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
