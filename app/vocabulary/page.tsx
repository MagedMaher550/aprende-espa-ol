"use client"; // Required for useState

import { useState, useMemo } from "react";
import Link from "next/link";
import { VOCABULARY_COLLECTIONS } from "@/lib/vocabulary";
import { Header } from "@/components/header";
import { GlobalFooter } from "@/components/footer";
import { SearchBar } from "./search-bar";

const ITEMS_PER_PAGE = 6;

export default function VocabularyIndex() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // 1. Filter data based on search
  const filteredCollections = useMemo(() => {
    return VOCABULARY_COLLECTIONS.filter(
      (col) =>
        col.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        col.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // 2. Calculate pagination
  const totalPages = Math.ceil(filteredCollections.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = filteredCollections.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Reset to page 1 when searching
  const handleSearch = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="space-y-6 sm:space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-bold">
                Vocabulary Collections
              </h1>
              <p className="text-muted-foreground">
                Learn practical vocabulary for everyday conversations.
              </p>
            </div>
          </div>
          <SearchBar value={searchQuery} onChange={handleSearch} />

          {/* Collections Grid */}
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {paginatedItems.map((collection) => (
              <Link
                key={collection.slug}
                href={`/vocabulary/${collection.slug}`}
                className="group block p-4 sm:p-6 border border-border rounded-lg hover:border-accent/50 hover:bg-secondary/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-semibold group-hover:text-accent">
                    {collection.title}
                  </h3>
                  <span className="text-xs font-medium px-2 py-1 bg-muted rounded-full">
                    {collection.level}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {collection.description}
                </p>
                <p className="text-xs text-muted-foreground font-medium">
                  {collection.words.length} words
                </p>
              </Link>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 pt-8">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="px-4 py-2 border rounded-md disabled:opacity-50 hover:bg-secondary cursor-pointer"
              >
                Previous
              </button>
              <span className="text-sm">
                Page {currentPage} of {totalPages}
              </span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="px-4 py-2 border rounded-md disabled:opacity-50 hover:bg-secondary cursor-pointer"
              >
                Next
              </button>
            </div>
          )}

          {/* Empty State */}
          {filteredCollections.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">
                No collections found matching "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </section>

      <GlobalFooter />
    </main>
  );
}
