# El País Article Scraper

A Node.js script that automatically fetches Spanish articles from El País RSS feed, scrapes full article content, and stores them in Firebase Firestore.

## Features

- ✅ Fetches latest articles from El País RSS feed
- ✅ Scrapes full article content using Cheerio
- ✅ Stores in Firestore with duplicate detection
- ✅ Production-ready with error handling
- ✅ Idempotent (safe to run multiple times)
- ✅ Rate limiting and respectful scraping

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project
3. Go to Project Settings → Service Accounts
4. Click "Generate new private key"
5. Download the JSON file and save it as `firebase-service-account.json` in the project root

### 3. Environment Variables

Make sure your `.env.local` has Firebase credentials:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
# ... other Firebase vars
```

## Usage

### Run the Scraper

```bash
npm run scrape:elpais
```

Or directly:

```bash
npx ts-node scripts/scrapeElPais.ts
```

## What It Does

1. **Fetches RSS Feed**: Gets latest articles from `https://elpais.com/rss/elpais/portada.xml`
2. **Scrapes Content**: For each article URL, fetches HTML and extracts content from `<article p>` tags
3. **Cleans Text**: Removes extra whitespace, ensures minimum length (300 chars)
4. **Duplicate Detection**: Checks existing articles by URL and content hash
5. **Stores in Firestore**: Saves with structure:
   ```json
   {
     "title": "Article Title",
     "content": "Full article text...",
     "url": "https://elpais.com/...",
     "source": "elpais",
     "createdAt": "2024-01-01T12:00:00Z",
     "contentHash": "sha256_hash"
   }
   ```

## Output Example

```
🚀 Starting El País article scraper...

📡 Fetching RSS feed...
✅ Found 45 articles in RSS feed

🔍 Scraping: https://elpais.com/espana/2024-01-01/article-title.html
💾 Saved: Article Title

⏭️  Skipped (duplicate): Another Article Title

📊 SCRAPING COMPLETE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📡 Total fetched from RSS: 45
💾 Articles saved: 28
⏭️  Articles skipped (duplicates): 15
❌ Errors encountered: 2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎉 Successfully added new articles to Firestore!
```

## Technical Details

### Dependencies
- `axios`: HTTP requests
- `cheerio`: HTML parsing and scraping
- `xml2js`: RSS XML parsing
- `firebase-admin`: Firestore operations

### Duplicate Detection
- **Primary**: URL matching (`where("url", "==", link)`)
- **Secondary**: Content hash comparison (SHA-256)

### Rate Limiting
- 1 second delay between article scrapes
- 5-second timeout per request
- Continues on failures

### Content Extraction
- Targets: `article p`, `.article-body p`, `.content p`
- Minimum paragraph length: 20 characters
- Minimum article length: 300 characters
- Cleans whitespace and line breaks

## Safety Features

- **Idempotent**: Safe to run multiple times
- **Error Resilient**: Continues processing on failures
- **Rate Limited**: Respectful to El País servers
- **Duplicate Prevention**: Won't create duplicate articles

## Firestore Collection

Articles are stored in the `articles` collection with this schema:

```typescript
interface Article {
  title: string;
  content: string;
  url: string;
  source: "elpais";
  createdAt: FirebaseTimestamp;
  contentHash?: string; // For duplicate detection
}
```

## Troubleshooting

### "firebase-service-account.json not found"
- Download service account key from Firebase Console
- Save as `firebase-service-account.json` in project root

### "Firebase not initialized"
- Check `.env.local` has correct Firebase credentials
- Verify service account JSON is valid

### No articles scraped
- Check internet connection
- El País RSS might be temporarily unavailable
- Try again later

### All articles skipped
- Articles might already exist in Firestore
- Check Firestore console for existing documents

## Integration with Article Platform

This scraper feeds articles into the same Firestore collection used by the article learning platform. After running the scraper:

1. Articles appear in `/articles` list page
2. Clicking an article automatically processes it for vocabulary/grammar/sentences
3. Learning platform displays tabs: Article | Vocabulary | Grammar | Sentences

## Limits

- **Max articles per run**: 30 new articles
- **Request timeout**: 15 seconds per article
- **Rate limit**: 1 second delay between requests
- **Content minimum**: 300 characters per article