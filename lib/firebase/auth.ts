import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, type User } from "firebase/auth";
import { getFirebase } from "./client";

export async function signInWithGoogle() {
  const fb = await getFirebase();
  if (!fb) throw new Error("Firebase is not configured.");
  const provider = new GoogleAuthProvider();
  await signInWithPopup(fb.auth, provider);
}

export async function signOutUser() {
  const fb = await getFirebase();
  if (!fb) return;
  await signOut(fb.auth);
}

export async function onUserChanged(cb: (user: User | null) => void) {
  const fb = await getFirebase();
  if (!fb) {
    cb(null);
    return () => {};
  }
  return onAuthStateChanged(fb.auth, cb);
}


