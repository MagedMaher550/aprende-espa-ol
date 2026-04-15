/**
 * Sentence List Component
 * Displays sentences with translations
 */

"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

interface SentenceItem {
  text: string;
  translation?: string;
}

interface SentenceListProps {
  sentences: SentenceItem[];
  isLoading?: boolean;
}

export function SentenceList({ sentences, isLoading }: SentenceListProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSentences = useMemo(() => {
    return sentences.filter(
      (item) =>
        item.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.translation || "").toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [sentences, searchTerm]);

  if (isLoading) {
    return (
      <div className="space-y-3">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-24 bg-gray-200 rounded animate-pulse" />
        ))}
      </div>
    );
  }

  if (!sentences.length) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>No sentences extracted</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Input
        placeholder="Search sentences..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />

      <div className="space-y-3">
        {filteredSentences.map((item, i) => (
          <Card key={i} className="border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    Spanish:
                  </p>
                  <p className="text-gray-900">{item.text}</p>
                </div>
                {item.translation && (
                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <p className="text-sm font-medium text-blue-900 mb-1">
                      English:
                    </p>
                    <p className="text-blue-800">{item.translation}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t">
        <p className="text-sm text-gray-600">
          Showing {filteredSentences.length} of {sentences.length} sentences
        </p>
      </div>
    </div>
  );
}
