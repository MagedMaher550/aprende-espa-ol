# Article Learning Platform - Setup Guide

This is a complete curated article learning platform built with Next.js and Firebase. Users can browse Spanish articles and automatically extract vocabulary, grammar patterns, and sentences with translations.

## Architecture Overview

### Key Components
- **List Page** (`/articles`): Browse all curated articles
- **Detail Page** (`/articles/[id]`): Auto-process and learn from individual articles
- **Tab Layout**: Display Article, Vocabulary, Grammar, and Sentences
- **Firebase Backend**: Stores articles and caches processed data

### Data Flow

```
1. User visits /articles
   └─> Fetch all articles from Firestore collection "articles"
   └─> Display as clickable cards (title + word count preview)

2. User clicks article
   └─> Fetch article by ID from Firestore
   └─> Check if processed data exists (vocabulary, grammar, sentences)
   
3a. If cached (processed data exists):
   └─> Display saved vocabulary, grammar, sentences with translations
   
3b. If not cached (first processing):
   └─> Extract vocabulary (top 20 words)
   └─> Extract grammar patterns (5 types: se+verb, infinitives, preterite, present perfect, gerunds)
   └─> Extract sentences (up to 15)
   └─> Batch-translate all vocabulary items and sentences using MyMemory API
   └─> Save processed data back to Firestore for future access
   └─> Display in tabs
```

## Setup Instructions

### 1. Firebase Configuration

Ensure your Firebase credentials are configured in `/lib/firebase/client.ts`:

```typescript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

Add these to your `.env.local`:
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 2. Firestore Collection Setup

Create a Firestore collection named `articles` with this document structure:

```json
{
  "id": "unique-id",
  "title": "Article Title",
  "content": "Full article text...",
  "createdAt": "2024-01-01T12:00:00Z"
}
```

**Optional cached fields** (auto-added by the app after first processing):
- `vocab[]`: Array of {word, translation, frequency}
- `grammar[]`: Array of {pattern, description, examples}
- `sentences[]`: Array of {text, translation}
- `processedAt`: Timestamp of processing

### 3. Add Articles to Firestore

#### Option A: Manual (via Firestore Console)
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project
3. Navigate to Firestore Database
4. Create collection "articles"
5. Add documents manually with title, content, createdAt

#### Option B: Automated Seed Script
1. Install Firebase Admin SDK:
   ```bash
   npm install firebase-admin
   ```

2. Download your Firebase service account key:
   - Go to Firebase Console > Project Settings > Service Accounts
   - Click "Generate new private key"
   - Save as `firebase-service-account.json` in project root

3. Run the seed script:
   ```bash
   node scripts/seed-articles.mjs
   ```

This adds 5 sample Spanish articles to your database.

### 4. Environment Variables

Create `.env.local` with Firebase credentials:
```
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

### 5. Start the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000/articles` to see the article list.

## File Structure

```
components/article-platform/
├── ArticleContent.tsx      # Displays full article
├── VocabList.tsx           # Searchable vocabulary
├── GrammarList.tsx         # Grammar patterns in accordion
├── SentenceList.tsx        # Example sentences with translations
└── TabsLayout.tsx          # Orchestrates all 4 tabs

lib/article-platform/
├── nlp.ts                  # Local NLP (Compromise.js)
├── translate.ts            # MyMemory API integration with caching
└── firebase.ts             # Firestore CRUD operations

app/articles/
├── page.tsx                # List page (/articles)
└── [slug]/
    └── page.tsx            # Detail page (/articles/[id])

scripts/
└── seed-articles.mjs       # Firebase seeding script
```

## Features

- **No External URL Fetching**: All articles stored in Firestore
- **Client-Side NLP**: Local text processing using Compromise.js
- **Smart Caching**: Processes articles once, caches in Firestore
- **Free Translation**: Uses MyMemory API with rate limiting (5 items/batch, 100ms delay)
- **Responsive UI**: Mobile-friendly with Tailwind CSS
- **Automatic Processing**: User clicks article → everything extracted and translated automatically

## NLP Features

### Vocabulary Extraction
- Extracts top 20 most frequent words
- Filters common Spanish stopwords
- Translates to English via MyMemory API
- Shows word frequency

### Grammar Pattern Detection
- **se + infinitive or verb**: Reflexive and impersonal constructions
- **Infinitive (-ar, -er, -ir endings)**: Base verb forms
- **Preterite conjugations**: Past tense patterns
- **Present perfect**: Haber + past participle
- **Gerunds (-ando, -iendo)**: Continuous forms

### Sentence Extraction
- Extracts up to 15 example sentences from article
- Translates each sentence to English
- Provides context for vocabulary and patterns

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript (strict mode)
- **Frontend**: React 19, TailwindCSS, shadcn/ui
- **Backend**: Firebase Firestore
- **NLP**: Compromise.js (local)
- **Translation**: MyMemory API (free, no API key required)
- **UI Components**: Radix-UI primitives

## Performance Notes

- **First Load**: Article processing takes 2-5 seconds (NLP + translation)
- **Subsequent Loads**: <100ms (cached data from Firestore)
- **Translation Rate Limiting**: 5 items per batch, 100ms delay between batches
- **Vocabulary Cap**: 20 words per article (most frequent)
- **Sentences Cap**: 15 sentences per article

## Troubleshooting

### Articles not appearing
- Check Firestore collection name is exactly "articles"
- Ensure Firebase credentials in `.env.local` are correct
- Check browser console for Firebase errors

### Translations not working
- MyMemory API is free and usually reliable
- If API is rate-limited, translations fall back to original text
- Clear browser cache to retry translations

### Processing takes too long
- First load processes NLP + translation (slower)
- Subsequent visits load cached data (fast)
- Check network tab to monitor MyMemory API calls

## Future Enhancements

- [ ] Admin panel to upload articles
- [ ] User progress tracking
- [ ] Spaced repetition for vocabulary
- [ ] More grammar pattern types
- [ ] Audio pronunciation for vocabulary
- [ ] User annotations and notes
