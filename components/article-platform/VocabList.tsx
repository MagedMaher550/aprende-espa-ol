/**
 * Vocabulary List Component
 * Displays vocabulary with translations and search
 */

"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

interface VocabItem {
  word: string;
  translation?: string;
}

interface VocabListProps {
  vocab: VocabItem[];
  isLoading?: boolean;
}

export function VocabList({ vocab, isLoading }: VocabListProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVocab = useMemo(() => {
    return vocab.filter(
      (item) =>
        item.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.translation || "").toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [vocab, searchTerm]);

  if (isLoading) {
    return (
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-12 bg-gray-200 rounded animate-pulse" />
        ))}
      </div>
    );
  }

  if (!vocab.length) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>No vocabulary extracted</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Input
        placeholder="Search vocabulary..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />

      <div className="space-y-2">
        {filteredVocab.map((item, i) => (
          <Card key={i}>
            <CardContent className="pt-6 pb-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <p className="font-semibold text-lg text-blue-900">{item.word}</p>
                  {item.translation && (
                    <p className="text-sm text-gray-600 mt-1">
                      {item.translation}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t text-sm text-gray-600">
        <p>
          Showing {filteredVocab.length} of {vocab.length} words
        </p>
      </div>
    </div>
  );
}
