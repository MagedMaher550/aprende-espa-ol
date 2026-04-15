/**
 * Firebase utilities for article platform
 * Handles fetching and caching processed article data
 */

import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  query,
  orderBy,
  limit,
  getFirestore,
  type Firestore,
} from "firebase/firestore";
import { getFirebase } from "../firebase/client";

let db: Firestore | null = null;

async function initFirestore(): Promise<Firestore | null> {
  if (db) return db;

  try {
    const firebase = await getFirebase();
    if (firebase) {
      db = firebase.db;
      return db;
    }
  } catch (error) {
    console.error("Failed to initialize Firestore:", error);
  }

  return null;
}

export interface FirestoreArticle {
  id: string;
  title: string;
  content: string;
  createdAt?: number;
  vocab?: Array<{ word: string; translation: string }>;
  grammar?: Array<{
    pattern: string;
    description: string;
    examples: string[];
  }>;
  sentences?: Array<{ text: string; translation: string }>;
}

/**
 * Fetch all articles from Firestore
 */
export async function getArticles(limitCount: number = 50): Promise<FirestoreArticle[]> {
  try {
    const firestore = await initFirestore();
    if (!firestore) return [];

    const q = query(
      collection(firestore, "articles"),
      orderBy("createdAt", "desc"),
      limit(limitCount)
    );

    const querySnapshot = await getDocs(q);
    const articles: FirestoreArticle[] = [];

    querySnapshot.forEach((docSnap) => {
      articles.push({
        id: docSnap.id,
        ...docSnap.data(),
      } as FirestoreArticle);
    });

    return articles;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}

/**
 * Fetch single article by ID
 */
export async function getArticleById(
  articleId: string
): Promise<FirestoreArticle | null> {
  try {
    const firestore = await initFirestore();
    if (!firestore) return null;

    const docRef = doc(firestore, "articles", articleId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      } as FirestoreArticle;
    }

    return null;
  } catch (error) {
    console.error("Error fetching article:", error);
    return null;
  }
}

/**
 * Check if article has processed data cached
 */
export function hasProcessedData(article: FirestoreArticle): boolean {
  return !!(article.vocab && article.grammar && article.sentences);
}

/**
 * Save processed article data back to Firestore
 */
export async function saveProcessedArticle(
  articleId: string,
  processedData: {
    vocab?: Array<{ word: string; translation: string }>;
    grammar?: Array<{
      pattern: string;
      description: string;
      examples: string[];
    }>;
    sentences?: Array<{ text: string; translation: string }>;
  }
): Promise<boolean> {
  try {
    const firestore = await initFirestore();
    if (!firestore) return false;

    const docRef = doc(firestore, "articles", articleId);
    await setDoc(
      docRef,
      {
        ...processedData,
        processedAt: Date.now(),
      },
      { merge: true }
    );

    return true;
  } catch (error) {
    console.error("Error saving processed article:", error);
    return false;
  }
}
