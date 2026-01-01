"use client"

import Link from "next/link"
import VocabularySearchClient from "./vocabulary-search-client"
import { Header } from "@/components/header"

interface VocabularyCollectionClientProps {
  title: string
  level: "Beginner" | "Intermediate" | "Advanced"
  description: string
  words: Array<{ spanish: string; english: string }>
}

export default function VocabularyCollectionClient({
  title,
  level,
  description,
  words,
}: VocabularyCollectionClientProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="space-y-6 sm:space-y-8">
          {/* Header */}
          <div className="space-y-3 sm:space-y-4 pb-6 sm:pb-8 border-b border-border/40">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xs font-medium px-2 sm:px-3 py-1 bg-accent/10 text-accent rounded-full">
                {level}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              {title}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{description}</p>
          </div>

          <VocabularySearchClient words={words} />

          {/* Navigation Footer */}
          <div className="pt-6 sm:pt-8 border-t border-border/40">
            <Link
              href="/vocabulary"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2 sm:py-3 border border-border rounded-lg hover:bg-secondary transition-colors text-foreground font-medium text-sm sm:text-base"
            >
              ← Back to Collections
            </Link>
          </div>
        </div>
      </article>

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
