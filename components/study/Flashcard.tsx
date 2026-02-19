"use client";

import { useMemo, useState, useEffect, useRef } from "react";
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
  const [viewState, setViewState] = useState<ViewState>("front");
  const prevPromptIdRef = useRef<string>(props.prompt.vocabId);
  const transitionTimeoutRef = useRef<number | null>(null);

  // Handle card change: decouple flip state from transition state
  useEffect(() => {
    const currentId = props.prompt.vocabId;
    const prevId = prevPromptIdRef.current;

    if (currentId !== prevId) {
      // Card changed - start transition
      setViewState("transitioning");
      prevPromptIdRef.current = currentId;

      // After fade out, reset to front and fade in
      if (transitionTimeoutRef.current) {
        window.clearTimeout(transitionTimeoutRef.current);
      }
      transitionTimeoutRef.current = window.setTimeout(() => {
        setViewState("front");
        transitionTimeoutRef.current = null;
      }, 200); // Half of transition duration
    }

    return () => {
      if (transitionTimeoutRef.current) {
        window.clearTimeout(transitionTimeoutRef.current);
        transitionTimeoutRef.current = null;
      }
    };
  }, [props.prompt.vocabId]);

  // Handle reveal: only flip when explicitly revealed, not during transition
  useEffect(() => {
    if (viewState === "transitioning") return; // Don't flip during transition
    if (props.revealed && viewState === "front") {
      setViewState("back");
    } else if (!props.revealed && viewState === "back") {
      // Reset to front when card changes (handled by card change effect) or when explicitly reset
      // Only reset if we're on the same card (not transitioning to new card)
      if (props.prompt.vocabId === prevPromptIdRef.current) {
        setViewState("front");
      }
    }
  }, [props.revealed, viewState, props.prompt.vocabId]);

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

  // Autoplay audio on reveal (or on mount if already revealed)
  const shouldAutoPlay = props.autoPlayAudio && viewState === "back" && direction === "spanish-front";

  const isTransitioning = viewState === "transitioning";
  const isFlipped = viewState === "back" && !isTransitioning;

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-[600px]">
        <div className="perspective-[1200px]">
          <div
            className={cn(
              "relative transition-all duration-400 [transform-style:preserve-3d]",
              isTransitioning && "opacity-0 scale-95",
              !isTransitioning && "opacity-100 scale-100"
            )}
            style={{ transitionDuration: isTransitioning ? "200ms" : "400ms" }}
          >
            {/* Front */}
            <Card
              className={cn(
                "p-4 sm:p-6 lg:p-10 min-h-[280px] sm:min-h-[320px] lg:min-h-[360px] flex flex-col justify-center items-center gap-4 [backface-visibility:hidden]",
                isFlipped && "[transform:rotateY(180deg)]"
              )}
              style={{
                transition: isTransitioning ? "none" : "transform 500ms ease-in-out",
              }}
            >
              <div className="text-center space-y-3">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance break-words">
                  {front.primary}
                </div>
                {front.secondary && (
                  <div className="text-xs sm:text-sm lg:text-base text-muted-foreground break-words">
                    {front.secondary}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 sm:gap-3 pt-2 flex-wrap justify-center">
                {direction === "spanish-front" && (
                  <AudioPlayer src={word.resolvedAudioSrc} compact autoPlay={false} />
                )}
                <Button
                  variant="secondary"
                  onClick={props.onReveal}
                  className="gap-2 min-h-[48px] text-sm sm:text-base"
                  disabled={isTransitioning}
                >
                  Reveal <span className="text-xs opacity-70 hidden sm:inline">(Space)</span>
                </Button>
              </div>

              {word.examples?.length ? (
                <div className="w-full pt-4 sm:pt-6">
                  <div className="text-xs font-medium text-muted-foreground mb-2">Examples</div>
                  <div className="space-y-2">
                    {word.examples.slice(0, 2).map((ex, idx) => (
                      <div key={idx} className="rounded-lg border border-border/60 p-2 sm:p-3 bg-secondary/20">
                        <div className="text-xs sm:text-sm break-words">{ex.spanish}</div>
                        {(ex.english || ex.arabic) && (
                          <div className="text-xs text-muted-foreground mt-1 break-words">
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
            <Card
              className={cn(
                "absolute inset-0 p-4 sm:p-6 lg:p-10 min-h-[280px] sm:min-h-[320px] lg:min-h-[360px] flex flex-col justify-center items-center gap-4 [transform:rotateY(180deg)] [backface-visibility:hidden]",
                !isFlipped && "[transform:rotateY(180deg)]"
              )}
              style={{
                transition: isTransitioning ? "none" : "transform 500ms ease-in-out",
              }}
            >
              <div className="text-center space-y-3">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-balance break-words">
                  {back.primary}
                </div>
                {back.secondary && (
                  <div className="text-xs sm:text-sm lg:text-base text-muted-foreground break-words">
                    {back.secondary}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 sm:gap-3 pt-2">
                {direction === "meaning-front" && (
                  <AudioPlayer src={word.resolvedAudioSrc} compact autoPlay={shouldAutoPlay} />
                )}
              </div>

              <div className="w-full pt-4 sm:pt-6 flex flex-wrap gap-2 justify-center">
                {word.tags.slice(0, 3).map((t) => (
                  <span
                    key={t.slug}
                    className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground border border-border/60"
                  >
                    {t.title}
                  </span>
                ))}
                {word.tags.length > 3 && (
                  <span className="text-xs px-2 py-1 rounded-full bg-secondary/60 text-secondary-foreground border border-border/60">
                    +{word.tags.length - 3}
                  </span>
                )}
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-3 text-center text-xs text-muted-foreground px-2">
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
    </div>
  );
}


