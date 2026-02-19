"use client";

import { useMemo, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AudioPlayer } from "@/components/audio-player";
import type { CardDirection } from "@/lib/study/sessionEngine";
import type { FlattenedVocabWord } from "@/lib/vocabulary/flatten";
import type { SrsCard } from "@/lib/srs/types";

export type FlashcardPrompt = {
  vocabId: string;
  direction: CardDirection;
  word: FlattenedVocabWord;
  srs?: SrsCard;
};

type ViewState = "front" | "back" | "transitioning";

export function Flashcard(props: {
  prompt: FlashcardPrompt;
  revealed: boolean;
  autoPlayAudio: boolean;
  onReveal: () => void;
}) {
  const { word, direction } = props.prompt;
  // Always start on front - the key prop ensures component remounts on card change
  const [viewState, setViewState] = useState<ViewState>("front");

  // Handle reveal: flip to back when revealed
  useEffect(() => {
    if (props.revealed) {
      if (viewState === "front") {
        setViewState("back");
      }
    } else {
      if (viewState === "back") {
        setViewState("front");
      }
    }
  }, [props.revealed, viewState]);

  const front = useMemo(() => {
    if (direction === "spanish-front") {
      return {
        title: word.spanish,
        subtitle: word.pronunciation,
        primary: word.spanish,
        secondary: word.pronunciation,
      };
    }
    return {
      title: `${word.english}${word.arabic ? ` • ${word.arabic}` : ""}`,
      subtitle: undefined,
      primary: word.english,
      secondary: word.arabic,
    };
  }, [direction, word]);

  const back = useMemo(() => {
    if (direction === "spanish-front") {
      return {
        primary: word.english,
        secondary: word.arabic,
      };
    }
    return {
      primary: word.spanish,
      secondary: word.pronunciation,
    };
  }, [direction, word]);

  const shouldAutoPlay = props.autoPlayAudio && viewState === "back" && direction === "spanish-front";
  const isFlipped = viewState === "back";

  return (
    <div className="w-full h-full flex flex-col">
      <div className="perspective-[1200px] flex-1 flex items-center justify-center min-h-0">
        <div className="relative w-full max-w-full [transform-style:preserve-3d]">
          {/* Container that rotates for flip */}
          <div
            className={cn(
              "relative w-full transition-transform duration-500 ease-in-out [transform-style:preserve-3d]",
              isFlipped && "[transform:rotateY(180deg)]"
            )}
          >
            {/* Front */}
            <Card className="rounded-2xl shadow-sm border p-6 sm:p-8 md:p-10 flex flex-col justify-center items-center gap-4 sm:gap-6 [backface-visibility:hidden] w-full max-h-full overflow-hidden">
              <div className="text-center space-y-4">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance break-words">
                  {front.primary}
                </div>
                {front.secondary && (
                  <div className="text-base sm:text-lg text-muted-foreground break-words">
                    {front.secondary}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-4 pt-4">
                {direction === "spanish-front" && (
                  <AudioPlayer src={word.resolvedAudioSrc} compact autoPlay={false} />
                )}
                <Button
                  variant="secondary"
                  onClick={props.onReveal}
                  className="rounded-xl px-6 py-3 h-auto text-base font-medium transition-all duration-200 hover:scale-105"
                >
                  Reveal <span className="text-xs opacity-70 ml-2 hidden sm:inline">(Space)</span>
                </Button>
              </div>

              {word.examples?.length ? (
                <div className="w-full pt-6">
                  <div className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wide">Examples</div>
                  <div className="space-y-3">
                    {word.examples.slice(0, 2).map((ex, idx) => (
                      <div key={idx} className="rounded-xl border border-border/40 p-4 bg-muted/30">
                        <div className="text-sm font-medium break-words">{ex.spanish}</div>
                        {(ex.english || ex.arabic) && (
                          <div className="text-xs text-muted-foreground mt-2 break-words">
                            {ex.english ?? ""} {ex.arabic ? `• ${ex.arabic}` : ""}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </Card>

            {/* Back */}
            <Card className="absolute inset-0 rounded-2xl shadow-sm border p-6 sm:p-8 md:p-10 flex flex-col justify-center items-center gap-4 sm:gap-6 [transform:rotateY(180deg)] [backface-visibility:hidden] w-full max-h-full overflow-hidden">
              <div className="text-center space-y-4">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance break-words">
                  {back.primary}
                </div>
                {back.secondary && (
                  <div className="text-base sm:text-lg text-muted-foreground break-words">
                    {back.secondary}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-4 pt-4">
                {direction === "meaning-front" && (
                  <AudioPlayer src={word.resolvedAudioSrc} compact autoPlay={shouldAutoPlay} />
                )}
              </div>

              <div className="w-full pt-6 flex flex-wrap gap-2 justify-center">
                {word.tags.slice(0, 3).map((t) => (
                  <span
                    key={t.slug}
                    className="text-xs px-3 py-1.5 rounded-full bg-muted/50 text-muted-foreground border border-border/40 font-medium"
                  >
                    {t.title}
                  </span>
                ))}
                {word.tags.length > 3 && (
                  <span className="text-xs px-3 py-1.5 rounded-full bg-muted/30 text-muted-foreground border border-border/40">
                    +{word.tags.length - 3}
                  </span>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-3 sm:mt-4 text-center text-sm text-muted-foreground flex-shrink-0">
        {props.prompt.srs ? (
          <>
            Confidence <span className="font-medium text-foreground">{props.prompt.srs.confidence}</span> • State{" "}
            <span className="font-medium text-foreground">{props.prompt.srs.state}</span>
          </>
        ) : (
          <>New word</>
        )}
      </div>
    </div>
  );
}
