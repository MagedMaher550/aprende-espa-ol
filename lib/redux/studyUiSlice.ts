import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ReviewRating } from "../srs/types";
import type { CardDirection, StudyMode } from "../study/sessionEngine";

export type SessionPromptRef = {
  vocabId: string;
  direction: CardDirection;
};

export type SessionStats = {
  reviewed: number;
  correct: number;
  again: number;
  hard: number;
  good: number;
  easy: number;
  xp: number;
};

export type StudyUiState = {
  mode: StudyMode;
  customTagSlug?: string;
  status: "dashboard" | "session" | "summary";
  session?: {
    prompts: SessionPromptRef[];
    currentIndex: number;
    revealed: boolean;
    startedAtIso: string;
    timeLimitSeconds?: number; // for timed mode
    stats: SessionStats;
  };
};

const initialState: StudyUiState = {
  mode: "review-due",
  customTagSlug: undefined,
  status: "dashboard",
  session: undefined,
};

function ratingToStatsKey(r: ReviewRating): keyof SessionStats {
  switch (r) {
    case "again":
      return "again";
    case "hard":
      return "hard";
    case "good":
      return "good";
    case "easy":
      return "easy";
  }
}

const studyUiSlice = createSlice({
  name: "studyUi",
  initialState,
  reducers: {
    setMode(state, action: PayloadAction<{ mode: StudyMode; customTagSlug?: string }>) {
      state.mode = action.payload.mode;
      state.customTagSlug = action.payload.customTagSlug;
    },
    startSession(
      state,
      action: PayloadAction<{
        prompts: SessionPromptRef[];
        startedAtIso: string;
        timeLimitSeconds?: number;
      }>
    ) {
      state.status = "session";
      state.session = {
        prompts: action.payload.prompts,
        currentIndex: 0,
        revealed: false,
        startedAtIso: action.payload.startedAtIso,
        timeLimitSeconds: action.payload.timeLimitSeconds,
        stats: { reviewed: 0, correct: 0, again: 0, hard: 0, good: 0, easy: 0, xp: 0 },
      };
    },
    reveal(state) {
      if (!state.session) return;
      state.session.revealed = true;
    },
    answerRecorded(state, action: PayloadAction<{ rating: ReviewRating; xp: number; correct: boolean }>) {
      if (!state.session) return;
      state.session.stats.reviewed += 1;
      if (action.payload.correct) state.session.stats.correct += 1;
      state.session.stats.xp += action.payload.xp;
      const key = ratingToStatsKey(action.payload.rating);
      state.session.stats[key] += 1;

      // Session-level queue behavior (NOT SRS):
      // If the user answers "Again", the same card must reappear in the same session.
      // Reinsert it near-front (after the next card when possible) to avoid immediate repetition fatigue.
      if (action.payload.rating === "again") {
        const ref = state.session.prompts[state.session.currentIndex];
        if (ref) {
          const insertAt = Math.min(state.session.currentIndex + 2, state.session.prompts.length);
          state.session.prompts.splice(insertAt, 0, ref);
        }
      }
    },
    nextCard(state) {
      if (!state.session) return;
      const next = state.session.currentIndex + 1;
      if (next >= state.session.prompts.length) {
        if (state.session.timeLimitSeconds) {
          state.session.currentIndex = 0;
          state.session.revealed = false;
          return;
        } else {
          state.status = "summary";
          return;
        }
      }
      state.session.currentIndex = next;
      state.session.revealed = false;
    },
    endSession(state) {
      state.status = "summary";
    },
    backToDashboard(state) {
      state.status = "dashboard";
      state.session = undefined;
    },
  },
});

export const {
  setMode,
  startSession,
  reveal,
  answerRecorded,
  nextCard,
  endSession,
  backToDashboard,
} = studyUiSlice.actions;

export default studyUiSlice.reducer;


