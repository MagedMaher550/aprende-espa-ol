/**
 * Grammar List Component
 * Displays grammar patterns with examples
 */

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

interface GrammarPattern {
  pattern: string;
  description: string;
  examples: string[];
}

interface GrammarListProps {
  grammar: GrammarPattern[];
  isLoading?: boolean;
}

export function GrammarList({ grammar, isLoading }: GrammarListProps) {
  if (isLoading) {
    return (
      <div className="space-y-3">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-16 bg-gray-200 rounded animate-pulse" />
        ))}
      </div>
    );
  }

  if (!grammar.length) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>No grammar patterns detected</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Accordion type="single" collapsible className="w-full">
        {grammar.map((pattern, i) => (
          <AccordionItem key={i} value={`pattern-${i}`}>
            <AccordionTrigger className="hover:no-underline">
              <div className="text-left">
                <h3 className="font-semibold text-lg text-blue-900">
                  {pattern.pattern}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {pattern.examples.length} example
                  {pattern.examples.length !== 1 ? "s" : ""}
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <p className="text-sm text-gray-700">{pattern.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Examples:</p>
                  {pattern.examples.map((example, j) => (
                    <Card key={j} className="bg-blue-50 border-blue-200">
                      <CardContent className="pt-4">
                        <code className="text-sm text-blue-900 font-mono">
                          {example}
                        </code>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-6 pt-4 border-t">
        <p className="text-sm text-gray-600">
          Total patterns: {grammar.length}
        </p>
      </div>
    </div>
  );
}
