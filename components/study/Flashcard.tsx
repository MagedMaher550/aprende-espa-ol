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

type ViewState = "front" | "back";

export function Flashcard(props: {
  prompt: FlashcardPrompt;
  revealed: boolean;
  autoPlayAudio: boolean;
  onReveal: () => void;
}) {
  const { word, direction } = props.prompt;

  const [viewState, setViewState] = useState<ViewState>("front");

  // Track previous reveal state
  const prevRevealed = useRef<boolean>(false);

  // Flip only when reveal transitions from false -> true
  useEffect(() => {
    if (!prevRevealed.current && props.revealed) {
      setViewState("back");
    }

    if (!props.revealed) {
      setViewState("front");
    }

    prevRevealed.current = props.revealed;
  }, [props.revealed]);

  const toggleFlip = () => {
    if (!props.revealed) return;
    setViewState((prev) => (prev === "front" ? "back" : "front"));
  };

  const front = useMemo(() => {
    if (direction === "spanish-front") {
      return {
        primary: word.spanish,
        secondary: word.pronunciation,
      };
    }

    return {
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

  const shouldAutoPlay =
    props.autoPlayAudio &&
    viewState === "back" &&
    direction === "spanish-front";

  const isFlipped = viewState === "back";

  return (
    <div className="w-full h-full flex flex-col">
      <div className="perspective-[1200px] flex-1 flex items-center justify-center min-h-0">
        <div className="relative w-full max-w-full [transform-style:preserve-3d]">
          <div
            className={cn(
              "relative w-full transition-transform duration-500 ease-in-out [transform-style:preserve-3d]",
              isFlipped && "[transform:rotateY(180deg)]"
            )}
          >
            {/* FRONT */}
            <Card className="rounded-2xl shadow-sm border p-6 sm:p-8 md:p-10 flex flex-col justify-center items-center gap-6 [backface-visibility:hidden] w-full max-h-full overflow-hidden">
              <div className="text-center space-y-4">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight break-words">
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
                  <AudioPlayer
                    src={word.resolvedAudioSrc}
                    compact
                    autoPlay={false}
                  />
                )}

                <Button
                  variant="secondary"
                  onClick={() => {
                    if (!props.revealed) {
                      props.onReveal();
                    } else {
                      toggleFlip();
                    }
                  }}
                  className="rounded-xl px-6 py-3 h-auto text-base font-medium transition-all duration-200 hover:scale-105"
                >
                  {!props.revealed ? "Reveal" : "Flip"}
                </Button>
              </div>
            </Card>

            {/* BACK */}
            <Card className="absolute inset-0 rounded-2xl shadow-sm border p-6 sm:p-8 md:p-10 flex flex-col justify-center items-center gap-6 [transform:rotateY(180deg)] [backface-visibility:hidden] w-full max-h-full overflow-hidden">
              <div className="text-center space-y-4">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight break-words">
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
                  <AudioPlayer
                    src={word.resolvedAudioSrc}
                    compact
                    autoPlay={shouldAutoPlay}
                  />
                )}

                <Button
                  variant="secondary"
                  onClick={toggleFlip}
                  className="rounded-xl px-6 py-3 h-auto text-base font-medium transition-all duration-200 hover:scale-105"
                >
                  Flip Back
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-3 sm:mt-4 text-center text-sm text-muted-foreground flex-shrink-0">
        {props.prompt.srs ? (
          <>
            Confidence{" "}
            <span className="font-medium text-foreground">
              {props.prompt.srs.confidence}
            </span>{" "}
            • State{" "}
            <span className="font-medium text-foreground">
              {props.prompt.srs.state}
            </span>
          </>
        ) : (
          <>New word</>
        )}
      </div>
    </div>
  );
}