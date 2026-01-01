"use client"

import { useState } from "react"

interface VocabularyWord {
  spanish: string
  english: string
}

export default function VocabularySearchClient({ words }: { words: VocabularyWord[] }) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredWords = words.filter((word) => {
    const searchLower = searchTerm.toLowerCase()
    return word.spanish.toLowerCase().includes(searchLower) || word.english.toLowerCase().includes(searchLower)
  })

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

      {/* Vocabulary Items */}
      <div className="space-y-2 sm:space-y-3">
        {filteredWords.length > 0 ? (
          filteredWords.map((word, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 border border-border rounded-lg hover:bg-secondary/50 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-3">
                <h3 className="text-base sm:text-lg font-semibold text-foreground">{word.spanish}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{word.english}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No words found matching your search.</p>
          </div>
        )}
      </div>

      {/* Results count */}
      {searchTerm && (
        <p className="text-xs sm:text-sm text-muted-foreground text-center">
          {filteredWords.length} of {words.length} words
        </p>
      )}
    </>
  )
}
