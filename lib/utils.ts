import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface Vocabulary {
  spanish: string
  english: string
  arabic: string
  pronunciation: string
  audioUrl?: string
}

export interface VocabularyCollection {
  slug: string
  title: string
  level: "Beginner" | "Intermediate" | "Advanced"
  description: string
  words: Vocabulary[]
}

// export function slugifyAudioFilename(phrase: string): string {
//   return phrase
//     .normalize("NFD") // split accented chars
//     .replace(/[\u0300-\u036f]/g, "") // remove accents
//     .replace(/[¿¡?!"',.]/g, "") // remove punctuation
//     .trim()
// }

export function slugifyAudioFilename(phrase: string): string {
  return phrase
    .toLowerCase()                   // Match Python .lower()
    .normalize("NFD")                // Split accented chars
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/\s+/g, "_")            // Replace spaces with underscores
    .replace(/[^\w]/g, "")           // Remove anything not a letter, number, or underscore
    .trim();
}