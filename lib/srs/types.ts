export type SrsState = "new" | "learning" | "familiar" | "known" | "weak";

export type SrsCard = {
  id: string;
  state: SrsState;
  interval: number; // days
  easeFactor: number;
  confidence: number; // 0–100
  reviewCount: number;
  lastReviewed?: string; // ISO date-time
  nextReview: string; // ISO date-time
  updatedAt?: string; // ISO date-time (for sync resolution)
};

export type ReviewRating = "again" | "hard" | "good" | "easy";


