export type StudyAnalyticsAggregate = {
  totalXP: number;
  totalReviews: number;
  totalAgain: number;
  totalHard: number;
  totalGood: number;
  totalEasy: number;
  wordsLearned: number; // count of distinct words that reached "known" at least once
  dailyStreak: number;
  lastActiveDate?: string; // YYYY-MM-DD
  weeklyXP: Record<string, number>; // YYYY-WW -> xp
  dailyXP: Record<string, number>; // YYYY-MM-DD -> xp
};

export const DEFAULT_ANALYTICS: StudyAnalyticsAggregate = {
  totalXP: 0,
  totalReviews: 0,
  totalAgain: 0,
  totalHard: 0,
  totalGood: 0,
  totalEasy: 0,
  wordsLearned: 0,
  dailyStreak: 0,
  lastActiveDate: undefined,
  weeklyXP: {},
  dailyXP: {},
};

export function getLevelFromXP(totalXP: number) {
  return Math.floor(Math.sqrt(totalXP / 10));
}


