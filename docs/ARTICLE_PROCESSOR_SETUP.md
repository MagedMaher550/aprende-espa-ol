# Spanish Article Processor - Setup Guide

This guide will help you set up and use the Spanish Article Processor feature.

## Prerequisites

- Node.js 18+ and npm/pnpm
- Firebase account (free tier works)
- Basic understanding of Next.js

## Installation

### 1. Install Dependencies

```bash
pnpm install
# or
npm install
```

The following packages will be added:
- `@mozilla/readability` - Client-side article extraction
- `compromise` - NLP for Spanish text analysis
- `firebase` - Cloud storage for caching

### 2. Configure Firebase

Create a `.env.local` file in the project root with your Firebase credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

Get these values from:
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project or select existing one
3. Add a web app to get configuration
4. Copy the config object values

### 3. Set Up Firestore Database

1. In Firebase Console, go to **Firestore Database**
2. Click **Create database**
3. Start in **Production mode**
4. Choose your preferred region
5. Create the database

### 4. Configure Firestore Security Rules

In Firestore, go to **Rules** tab and set:

```
rules_version = '3';
service cloud.firestore {
  match /databases/{database}/documents {
    match /articles/{articleId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

For development (without authentication):

```
rules_version = '3';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

## Usage

### Starting the Development Server

```bash
pnpm dev
# or
npm run dev
```

Then open `http://localhost:3000/learn/article`

### Feature Overview

#### Input Methods

1. **URL Input**: Paste any Spanish article URL
   - System automatically extracts main content
   - Strips ads, navigation, comments
   - Returns clean, readable text

2. **Raw Text Input**: Paste Spanish text directly
   - Minimum 100 characters required
   - No extraction needed

#### Processing Steps

The system automatically:

1. **Extracts** clean text using Mozilla Readability
2. **Identifies** vocabulary (10-20 most important words)
3. **Detects** grammar patterns:
   - Reflexive constructions (se + verb)
   - Infinitives (-ar, -er, -ir)
   - Preterite tense (past actions)
   - Conditional tense (hypotheticals)
   - Subjunctive mood
   - Present perfect (ha/han + past participle)
   - Gerunds (-ando, -endo, -iendo)

4. **Extracts** key sentences (10-15 most meaningful)
5. **Translates** all vocabulary and sentences to English
6. **Caches** results in Firestore for instant retrieval

#### Tabbed Interface

- **Article** - Full text with reading time estimate
- **Vocabulary** - Searchable word list with translations
- **Grammar** - Interactive pattern analysis with examples
- **Sentences** - Example sentences with translations

## Architecture

### File Structure

```
lib/learn/
├── extractText.ts      # URL/text extraction using Readability
├── nlp.ts              # Vocabulary, grammar, sentence extraction
├── translate.ts        # MyMemory free translation API
└── firebase.ts         # Firestore caching and storage

components/learn/ArticleProcessor/
├── index.tsx           # Main orchestrator component
├── ArticleTab.tsx      # Article display
├── VocabTab.tsx        # Vocabulary list with search
├── GrammarTab.tsx      # Grammar patterns analysis
└── SentencesTab.tsx    # Example sentences

app/learn/article/
└── page.tsx            # Main page with features
```

### Data Flow

```
User Input (URL or Text)
    ↓
Extract Text (Readability)
    ↓
Check Firebase Cache (by content hash)
    ↓ (if not cached)
NLP Processing:
  - Extract vocabulary
  - Extract sentences
  - Detect grammar
    ↓
Batch Translate (MyMemory API)
  - Vocabulary → English
  - Sentences → English
    ↓
Save to Firestore
    ↓
Display in Tabs
```

### Translation API

Uses **MyMemory API** (completely free):
- No authentication required
- No API key needed
- Rate limited but suitable for learning
- Simple HTTP requests

Example:
```
GET https://api.mymemory.translated.net/get?q={text}&langpair=es|en
```

### Firebase Storage

**Collection: `articles`**

Document structure:
```typescript
{
  id: string,
  title: string,
  content: string,
  contentHash: string,
  vocab: [
    { word: string, translation: string }
  ],
  grammar: [
    {
      pattern: string,
      description: string,
      examples: string[]
    }
  ],
  sentences: [
    { text: string, translation: string }
  ],
  createdAt: number,
  updatedAt: number,
  source?: string
}
```

## Performance Considerations

### Client-Side Only

All processing happens in the browser:
- No backend or server required
- No data leaves your device (except to translation API and Firebase)
- Works offline for cached articles
- Instant UI responsiveness

### Caching Strategy

1. Content hash comparison to detect duplicates
2. Firebase Firestore caching for 30+ days
3. Browser memory cache for translations
4. Debounced input for search functionality

### Optimization Tips

- Articles 300-3000 words work best
- Longer articles may take 5-10 seconds to process
- Translation API has rate limits (use batch requests)
- Cached articles load instantly

## Free API Usage Limits

- **MyMemory Translation**: ~100-200 requests/day per IP
- **Firebase Firestore**: 50,000 reads, 20,000 writes/day (free tier)
- **Mozilla Readability**: No limits (local processing)
- **Compromise NLP**: No limits (local processing)

## Troubleshooting

### Article extraction fails
- Check if the URL is accessible in browser
- Try a different article
- Some sites may block fetching (CORS)

### Translations not appearing
- Check rate limits on MyMemory API
- Refresh and try again
- Fallback shows original Spanish text

### Firebase errors
- Verify credentials in `.env.local`
- Check Firestore security rules
- Ensure Firestore database is created

### UI shows "No vocabulary extracted"
- Article may be too short (minimum 100 chars)
- Content may not be primarily Spanish
- Try a different article

## Browser Compatibility

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Requires modern JavaScript features (ES2020+)

## Production Deployment

### Vercel

1. Push code to GitHub
2. Connect to Vercel
3. Add environment variables in dashboard
4. Deploy

### Other Platforms

1. Build: `pnpm build`
2. Deploy: `pnpm start`
3. Ensure environment variables are set

## Security

- All translations cached locally (no persistent logs)
- Firebase is secure by default
- Authentication recommended for production
- No sensitive user data collected

## Future Enhancements

- [ ] Audio pronunciation with Web Speech API
- [ ] Spaced repetition learning system
- [ ] Grammar exercise generation
- [ ] Custom vocabulary lists
- [ ] Export to Anki/Quizlet
- [ ] Offline mode with service workers
- [ ] Multi-language support

## Contributing

Issue reports and suggestions welcome!

## License

This project uses open-source libraries:
- Mozilla Readability (MIT)
- Compromise (MIT)
- Firebase (Apache 2.0)
