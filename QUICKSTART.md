# Quick Start - Article Platform

## 🚀 Get Running in 2 Minutes

### Step 1: Firebase Setup (1 minute)
Add to `.env.local`:
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app
```

### Step 2: Add Articles (1 minute)

**Option A: Use Sample Data** (easiest)
1. In Firebase Console, create a collection named `articles`
2. Add a document with fields:
   - `title`: "La Importancia del Ejercicio"
   - `content`: [paste any Spanish text]
   - `createdAt`: timestamp

**Option B: Automated Seed** (advanced)
```bash
npm install firebase-admin
# Add firebase-service-account.json (from Firebase Console)
node scripts/seed-articles.mjs
```

### Step 3: Run
```bash
npm run dev
```

Then visit: **http://localhost:3000/articles**

---

## 📁 What Was Built

### Pages (New Routes)
```
/articles                 → List of all articles
/articles/[id]           → Article detail with auto-processing
```

### Components
```
components/article-platform/
├── ArticleContent.tsx    → Article display
├── VocabList.tsx         → Vocabulary search
├── GrammarList.tsx       → Grammar patterns
├── SentenceList.tsx      → Example sentences
└── TabsLayout.tsx        → Tab orchestrator
```

### Utilities
```
lib/article-platform/
├── firebase.ts           → Firestore read/write/cache
├── nlp.ts                → Local text processing
└── translate.ts          → Free translation API
```

---

## 🎯 User Experience

```
1. Open /articles
   ↓
2. Click an article
   ↓
3. Page auto-processes (first time only)
   - Extracts 20 vocabulary items
   - Detects 5 grammar patterns
   - Extracts 15 example sentences
   - Translates everything
   - Saves to Firebase cache
   ↓
4. View in tabs:
   📄 Article  |  📚 Vocabulary  |  ✏️ Grammar  |  📖 Sentences
```

---

## 💡 Key Features

✅ **No Manual Input** - Everything automatic  
✅ **Local NLP** - Compromise.js (no API keys)  
✅ **Smart Caching** - Process once, display forever  
✅ **Free Translation** - MyMemory API  
✅ **Mobile Ready** - TailwindCSS responsive  
✅ **Zero Backend** - Firebase does it all  

---

## 📖 Full Guide

See [ARTICLE_PLATFORM_SETUP.md](./ARTICLE_PLATFORM_SETUP.md) for:
- Detailed architecture
- Troubleshooting
- Performance notes
- Advanced customization

---

## ⚡ First Article Processing

**First Visit (Article A)**: ~3 seconds
- Firebase fetch ⚡
- NLP processing ⚡
- Translation batch ⚡
- Save to cache ⚡

**Second Visit (Article A)**: <100ms ✨
- Firebase fetch ⚡
- Display cached data ✨

---

Done! Start adding Spanish articles and watch them get automatically processed. 🎓
