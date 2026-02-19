import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported as analyticsSupported } from "firebase/analytics";

export type FirebaseServices = {
  app: FirebaseApp;
  auth: ReturnType<typeof getAuth>;
  db: ReturnType<typeof getFirestore>;
  analytics?: ReturnType<typeof getAnalytics>;
};

export function isFirebaseConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY &&
      process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN &&
      process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
  );
}

export async function getFirebase(): Promise<FirebaseServices | null> {
  if (typeof window === "undefined") return null;
  if (!isFirebaseConfigured()) return null;

  const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };

  const app = getApps().length ? getApps()[0]! : initializeApp(config);
  const auth = getAuth(app);
  const db = getFirestore(app);

  let analytics: FirebaseServices["analytics"] | undefined;
  try {
    if (await analyticsSupported()) analytics = getAnalytics(app);
  } catch {
    // ignore (analytics not supported, e.g. localhost / restricted env)
  }

  return { app, auth, db, analytics };
}


