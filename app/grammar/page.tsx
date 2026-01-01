"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { GRAMMAR_LESSONS } from "@/lib/grammar-lessons";
import { searchGrammarContent } from "@/lib/grammar-search-index";
import { Header } from "@/components/header";
import { GlobalFooter } from "@/components/footer";

export default function GrammarIndex() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLessons = useMemo(() => {
    if (!searchTerm.trim()) {
      return GRAMMAR_LESSONS;
    }
    const results = searchGrammarContent(searchTerm);
    return GRAMMAR_LESSONS.filter((lesson) =>
      results.some((r) => r.slug === lesson.slug)
    );
  }, [searchTerm]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-2 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              Grammar Lessons
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              Explore structured lessons on Spanish grammar, from fundamentals
              to advanced topics.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search lessons by title or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 sm:px-5 py-2.5 sm:py-3 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 text-sm sm:text-base"
            />
          </div>

          {/* Lessons Grid */}
          <div className="grid gap-3 sm:gap-4">
            {filteredLessons.length > 0 ? (
              filteredLessons.map((lesson) => (
                <Link
                  key={lesson.slug}
                  href={`/grammar/${lesson.slug}`}
                  className="group block p-4 sm:p-6 border border-border rounded-lg hover:border-accent/50 hover:bg-secondary/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {lesson.title}
                    </h3>
                    <span className="text-xs font-medium px-2 sm:px-3 py-1 bg-muted text-muted-foreground rounded-full whitespace-nowrap">
                      {lesson.level}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {lesson.description}
                  </p>
                </Link>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No lessons found matching your search.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <GlobalFooter />
    </main>
  );
}
