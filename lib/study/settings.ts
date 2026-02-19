export type StudySettings = {
  newPerDay: number;
  cardDirection: "spanish-front" | "meaning-front" | "smart";
  autoPlayAudio: boolean;
  randomizeNew: boolean;
  selectedCollections?: string[];
  timedModeDuration: number; // seconds
};

export const DEFAULT_STUDY_SETTINGS: StudySettings = {
  newPerDay: 20,
  cardDirection: "smart",
  autoPlayAudio: true,
  randomizeNew: true,
  selectedCollections: undefined,
  timedModeDuration: 120,
};


