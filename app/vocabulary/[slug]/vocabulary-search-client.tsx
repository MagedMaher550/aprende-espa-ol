"use client";

import { useState } from "react";
import { VocabularyCard } from "../vocabulary-card";
import type { Vocabulary } from "@/lib/utils";

export default function VocabularySearchClient({
  words,
}: {
  words: Vocabulary[];
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWords = words.filter((word) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      word.spanish.toLowerCase().includes(searchLower) ||
      word.english.toLowerCase().includes(searchLower)
    );
  });

  return (
    <>
      <div className="relative">
        <input
          type="text"
          placeholder="Search by Spanish word or English meaning..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 sm:px-5 py-2.5 sm:py-3 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 text-sm sm:text-base"
        />
      </div>

      {/* Vocabulary Items Grid */}
      <div className="mt-8">
        {filteredWords.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWords.map((word, index) => {
              // We convert the simple word to the full Vocabulary object
              // filling in missing data with defaults for now
              const cardData: Vocabulary = {
                spanish: word.spanish,
                english: word.english,
                pronunciation: word.pronunciation,
                arabic: word.arabic,
                audioUrl: word.audioUrl || "",
              };

              return (
                <VocabularyCard
                  key={`${word.spanish}-${index}`}
                  vocabulary={cardData}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 border border-dashed border-border rounded-lg">
            <p className="text-muted-foreground">
              No words found matching your search.
            </p>
          </div>
        )}
      </div>

      {/* Results count */}
      {searchTerm && (
        <p className="text-xs sm:text-sm text-muted-foreground text-center mt-6">
          {filteredWords.length} of {words.length} words
        </p>
      )}
    </>
  );
}
