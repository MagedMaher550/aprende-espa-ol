"use client";

import { cn } from "@/lib/utils";

interface VocabHighlightProps {
  word: string;
  translation?: string;
  exampleSentence?: string;
  exampleTranslation?: string;
  isSelected: boolean;
  onSelect: () => void;
}

export function VocabHighlight({
  word,
  translation,
  exampleSentence,
  exampleTranslation,
  isSelected,
  onSelect,
}: VocabHighlightProps) {
  return (
    <span className="relative inline-block">
      <span
        onClick={onSelect}
        className={cn(
          "bg-yellow-200 px-1 rounded cursor-pointer transition",
          isSelected && "bg-amber-300 shadow-sm",
        )}
      >
        {word}
      </span>
      {isSelected ? (
        <span className="absolute left-0 top-[calc(100%+0.5rem)] z-20 block w-72 rounded-2xl border border-amber-200 bg-white p-4 text-sm text-slate-700 shadow-xl">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
            Translation
          </span>
          <span className="block text-base font-semibold text-slate-900">
            {translation || word}
          </span>
          {exampleSentence ? (
            <span className="mt-3 block border-t border-slate-100 pt-3">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Example
              </span>
              <span className="block leading-6 text-slate-700">{exampleSentence}</span>
              {exampleTranslation ? (
                <span className="mt-2 block text-slate-500">{exampleTranslation}</span>
              ) : null}
            </span>
          ) : null}
        </span>
      ) : null}
    </span>
  );
}
