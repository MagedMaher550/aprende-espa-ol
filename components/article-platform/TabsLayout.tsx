/**
 * Tabs Layout Component
 * Orchestrates all article content tabs
 */

"use client";

import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ArticleContent } from "./ArticleContent";
import { VocabList } from "./VocabList";
import { GrammarList } from "./GrammarList";
import { SentenceList } from "./SentenceList";

interface VocabItem {
  word: string;
  translation?: string;
  frequency?: number;
}

interface GrammarPattern {
  pattern: string;
  description: string;
  examples: string[];
}

interface SentenceItem {
  text: string;
  translation?: string;
}

interface TabsLayoutProps {
  title: string;
  content: string;
  vocab: VocabItem[];
  grammar: GrammarPattern[];
  sentences: SentenceItem[];
  isLoading?: boolean;
}

export function TabsLayout({
  title,
  content,
  vocab,
  grammar,
  sentences,
  isLoading = false,
}: TabsLayoutProps) {
  const [activeTab, setActiveTab] = useState("article");

  return (
    <div className="w-full">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="article">Article</TabsTrigger>
          <TabsTrigger value="vocabulary">
            Vocabulary <span className="ml-1 text-xs">({vocab.length})</span>
          </TabsTrigger>
          <TabsTrigger value="grammar">
            Grammar <span className="ml-1 text-xs">({grammar.length})</span>
          </TabsTrigger>
          <TabsTrigger value="sentences">
            Sentences <span className="ml-1 text-xs">({sentences.length})</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="article" className="space-y-4">
          <ArticleContent
            title={title}
            content={content}
            isLoading={isLoading}
          />
        </TabsContent>

        <TabsContent value="vocabulary" className="space-y-4">
          <VocabList vocab={vocab} isLoading={isLoading} />
        </TabsContent>

        <TabsContent value="grammar" className="space-y-4">
          <GrammarList grammar={grammar} isLoading={isLoading} />
        </TabsContent>

        <TabsContent value="sentences" className="space-y-4">
          <SentenceList sentences={sentences} isLoading={isLoading} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
