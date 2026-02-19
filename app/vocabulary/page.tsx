"use client"; // Required for useState

import { useState, useMemo } from "react";
import Link from "next/link";
import { VOCABULARY_COLLECTIONS } from "@/lib/vocabulary";
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
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                Vocabulary Collections
              </h1>
              <p className="text-base text-muted-foreground">
                Learn practical vocabulary for everyday conversations.
              </p>
            </div>
          </div>
          <SearchBar value={searchQuery} onChange={handleSearch} />

          {/* Collections Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginatedItems.map((collection) => (
              <Link
                key={collection.slug}
                href={`/vocabulary/${collection.slug}`}
                className="group block p-6 border border-border rounded-2xl shadow-sm hover:shadow-md hover:border-border/80 bg-card transition-all duration-200 hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-lg font-medium group-hover:text-foreground transition-colors">
                    {collection.title}
                  </h3>
                  <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full shrink-0">
                    {collection.level}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
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
            <div className="flex justify-center items-center gap-3 pt-8">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="px-5 py-2.5 border border-border rounded-xl disabled:opacity-50 hover:bg-muted transition-all duration-200 disabled:cursor-not-allowed font-medium text-sm"
              >
                Previous
              </button>
              <span className="text-sm text-muted-foreground px-4">
                Page {currentPage} of {totalPages}
              </span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="px-5 py-2.5 border border-border rounded-xl disabled:opacity-50 hover:bg-muted transition-all duration-200 disabled:cursor-not-allowed font-medium text-sm"
              >
                Next
              </button>
            </div>
          )}

          {/* Empty State */}
          {filteredCollections.length === 0 && (
            <div className="text-center py-20">
              <p className="text-base text-muted-foreground">
                No collections found matching "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
