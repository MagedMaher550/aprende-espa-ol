/**
 * Article Content Component
 * Displays the full article text
 */

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ArticleContentProps {
  title: string;
  content: string;
  isLoading?: boolean;
}

export function ArticleContent({
  title,
  content,
  isLoading,
}: ArticleContentProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse" />
        {[...Array(8)].map((_, i) => (
          <div key={i} className="h-4 bg-gray-200 rounded animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="prose prose-sm dark:prose-invert max-w-none text-gray-800 leading-relaxed whitespace-pre-wrap">
          {content}
        </div>
        <div className="mt-6 pt-4 border-t text-sm text-gray-600">
          <p>Words: {content.split(/\s+/).length}</p>
        </div>
      </CardContent>
    </Card>
  );
}
