import type { ReviewRating } from "../srs/types";

// Re-export from modeEngine for backward compatibility
export type { StudyMode, CardDirection, StudyPrompt, BuildQueueInput } from "./modeEngine";
export { buildStudyQueue, pickDirection } from "./modeEngine";

export function xpForRating(rating: ReviewRating) {
  switch (rating) {
    case "again":
      return 1;
    case "hard":
      return 3;
    case "good":
      return 5;
    case "easy":
      return 8;
  }
}

export function isCorrect(rating: ReviewRating) {
  return rating !== "again";
}


