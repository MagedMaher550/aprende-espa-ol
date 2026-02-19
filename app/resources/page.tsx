import type React from "react";

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
    <div>
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
    </div>
  )
}
