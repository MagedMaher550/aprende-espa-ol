"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { GRAMMAR_LESSONS } from "@/lib/grammar-lessons";
import { searchGrammarContent } from "@/lib/grammar-search-index";

const ITEMS_PER_PAGE = 10;

export default function GrammarIndex() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDescending, setIsDescending] = useState(false);

  const processedLessons = useMemo(() => {
    // 1. Filtering logic
    let results = GRAMMAR_LESSONS;
    if (searchTerm.trim()) {
      const searchIndices = searchGrammarContent(searchTerm);
      results = GRAMMAR_LESSONS.filter((lesson) =>
        searchIndices.some((r) => r.slug === lesson.slug)
      );
    }

    // 2. Sort by Lesson Order (Slug)
    return [...results].sort((a, b) => {
      const comparison = a.slug.localeCompare(b.slug, undefined, {
        numeric: true,
      });
      return isDescending ? -comparison : comparison;
    });
  }, [searchTerm, isDescending]);

  // 3. Pagination Logic
  const totalPages = Math.ceil(processedLessons.length / ITEMS_PER_PAGE);
  const paginatedLessons = processedLessons.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="space-y-6 sm:space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-bold">
                Grammar Lessons
              </h1>
              <p className="text-muted-foreground">
                Master Spanish grammar step-by-step.
              </p>
            </div>

            {/* Simple Order Toggle */}
            <button
              onClick={() => setIsDescending(!isDescending)}
              className="text-sm font-medium text-accent hover:underline flex items-center gap-1"
            >
              {isDescending ? "Oldest First ↑" : "Newest First ↓"}
            </button>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search by topic or keyword..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full px-4 py-3 border border-border rounded-lg bg-card focus:ring-2 focus:ring-accent/50 outline-none"
            />
          </div>

          <div className="grid gap-4">
            {paginatedLessons.length > 0 ? (
              paginatedLessons.map((lesson) => (
                <Link
                  key={lesson.slug}
                  href={`/grammar/${lesson.slug}`}
                  className="group block p-4 sm:p-6 border border-border rounded-lg hover:border-accent/50 hover:bg-secondary/30 transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                      {lesson.title}
                    </h3>
                    <span className="text-xs font-bold px-2 py-1 bg-muted rounded uppercase tracking-wider">
                      {lesson.level}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {lesson.description}
                  </p>
                </Link>
              ))
            ) : (
              <div className="text-center py-12 text-muted-foreground border border-dashed rounded-lg">
                No lessons found for "{searchTerm}".
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="px-4 py-2 text-sm border rounded-md disabled:opacity-30 hover:bg-secondary"
              >
                Previous
              </button>
              <div className="text-sm text-muted-foreground">
                <span className="text-foreground font-bold">{currentPage}</span>{" "}
                / {totalPages}
              </div>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="px-4 py-2 text-sm border rounded-md disabled:opacity-30 hover:bg-secondary"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
