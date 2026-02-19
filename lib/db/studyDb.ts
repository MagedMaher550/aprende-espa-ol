import { openDB, type DBSchema, type IDBPDatabase } from "idb";
import type { StudyAnalyticsAggregate } from "../study/analytics";
import type { StudySettings } from "../study/settings";
import type { SrsCard } from "../srs/types";

export const STUDY_DB_NAME = "aprende-espanol-study";
export const STUDY_DB_VERSION = 1;

type SettingsRecord = {
  key: "settings";
  value: StudySettings;
  updatedAt: string; // ISO
};

type AnalyticsRecord = {
  key: "analytics";
  value: StudyAnalyticsAggregate;
  updatedAt: string; // ISO
};

type SyncMetaRecord = {
  key: "sync";
  value: {
    lastPushAt?: string; // ISO
    lastPullAt?: string; // ISO
    lastMergedAt?: string; // ISO
    lastUserId?: string;
  };
  updatedAt: string; // ISO
};

interface StudyDbSchema extends DBSchema {
  srsCards: {
    key: string; // SrsCard.id
    value: SrsCard;
    indexes: {
      nextReview: string;
      state: SrsCard["state"];
      confidence: number;
      lastReviewed: string;
    };
  };
  meta: {
    key: SettingsRecord["key"] | AnalyticsRecord["key"] | SyncMetaRecord["key"];
    value: SettingsRecord | AnalyticsRecord | SyncMetaRecord;
  };
}

let dbPromise: Promise<IDBPDatabase<StudyDbSchema>> | null = null;

export function getStudyDb() {
  if (typeof window === "undefined") {
    throw new Error("Study DB can only be accessed in the browser (IndexedDB).");
  }
  if (!dbPromise) {
    dbPromise = openDB<StudyDbSchema>(STUDY_DB_NAME, STUDY_DB_VERSION, {
      upgrade(db) {
        const cards = db.createObjectStore("srsCards", { keyPath: "id" });
        cards.createIndex("nextReview", "nextReview");
        cards.createIndex("state", "state");
        cards.createIndex("confidence", "confidence");
        cards.createIndex("lastReviewed", "lastReviewed");

        db.createObjectStore("meta", { keyPath: "key" });
      },
    });
  }
  return dbPromise;
}


