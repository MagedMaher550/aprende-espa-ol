/**
 * El País Article Scraper
 * Fetches articles from RSS feed, scrapes content, and stores in Firestore
 */

import * as admin from 'firebase-admin';
import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';
import * as xml2js from 'xml2js';
import * as cheerio from 'cheerio';
import { createHash } from 'crypto';

interface RSSItem {
  title: string[];
  link: string[];
}

interface RSSChannel {
  item: RSSItem[];
}

interface RSSFeed {
  rss: {
    channel: RSSChannel[];
  };
}

interface ArticleData {
  title: string;
  content: string;
  url: string;
  source: string;
  createdAt: admin.firestore.Timestamp;
  contentHash?: string;
}

class ElPaisScraper {
  private db: admin.firestore.Firestore;
  private stats = {
    fetched: 0,
    saved: 0,
    skipped: 0,
    errors: 0
  };

  constructor() {
    this.initializeFirebase();
    this.db = admin.firestore();
  }

  private initializeFirebase() {
    const serviceAccountPath = path.join(process.cwd(), 'firebase-service-account.json');

    if (!fs.existsSync(serviceAccountPath)) {
      throw new Error(
        'firebase-service-account.json not found. Please download it from Firebase Console > Project Settings > Service Accounts > Generate new private key'
      );
    }

    const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  private generateContentHash(content: string): string {
    return createHash('sha256').update(content).digest('hex');
  }

  private async checkDuplicate(url: string, contentHash: string): Promise<boolean> {
    try {
      // Check by URL first (faster)
      const urlQuery = await this.db
        .collection('articles')
        .where('url', '==', url)
        .limit(1)
        .get();

      if (!urlQuery.empty) {
        return true;
      }

      // Check by content hash as backup
      const hashQuery = await this.db
        .collection('articles')
        .where('contentHash', '==', contentHash)
        .limit(1)
        .get();

      return !hashQuery.empty;
    } catch (error) {
      console.error('Error checking for duplicates:', error);
      return false; // Assume not duplicate on error
    }
  }

  private async fetchRSS(): Promise<RSSItem[]> {
    console.log('📡 Fetching RSS feed...');

    try {
      const response = await axios.get('https://elpais.com/rss/elpais/portada.xml', {
        timeout: 10000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; ArticleScraper/1.0)'
        }
      });

      const parser = new xml2js.Parser();
      const result: RSSFeed = await parser.parseStringPromise(response.data);

      const items = result.rss.channel[0].item || [];
      console.log(`✅ Found ${items.length} articles in RSS feed`);

      return items;
    } catch (error) {
      console.error('❌ Failed to fetch RSS:', error);
      throw error;
    }
  }

  private async scrapeArticle(url: string): Promise<{ title: string; content: string } | null> {
    try {
      console.log(`🔍 Scraping: ${url}`);

      const response = await axios.get(url, {
        timeout: 15000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; ArticleScraper/1.0)'
        }
      });

      const $ = cheerio.load(response.data);

      // Extract title
      const title = $('h1, .headline, .title').first().text().trim() ||
                   $('title').text().trim() ||
                   'Untitled Article';

      // Extract content from article paragraphs
      const paragraphs: string[] = [];
      $('article p, .article-body p, .content p').each((_, element) => {
        const text = $(element).text().trim();
        if (text.length > 20) { // Skip very short paragraphs
          paragraphs.push(text);
        }
      });

      if (paragraphs.length === 0) {
        console.log(`⚠️  No content found for: ${title}`);
        return null;
      }

      const content = paragraphs.join('\n\n');

      // Clean up content
      const cleanContent = content
        .replace(/\s+/g, ' ') // Replace multiple whitespace with single space
        .replace(/\n\s*\n/g, '\n\n') // Clean up line breaks
        .trim();

      if (cleanContent.length < 300) {
        console.log(`⚠️  Content too short (${cleanContent.length} chars) for: ${title}`);
        return null;
      }

      return { title, content: cleanContent };
    } catch (error) {
      console.error(`❌ Failed to scrape ${url}:`, error);
      this.stats.errors++;
      return null;
    }
  }

  private async saveArticle(articleData: ArticleData): Promise<void> {
    try {
      await this.db.collection('articles').add(articleData);
      console.log(`💾 Saved: ${articleData.title}`);
      this.stats.saved++;
    } catch (error) {
      console.error(`❌ Failed to save ${articleData.title}:`, error);
      this.stats.errors++;
    }
  }

  public async run(): Promise<void> {
    console.log('🚀 Starting El País article scraper...\n');

    try {
      // Fetch RSS feed
      const rssItems = await this.fetchRSS();
      this.stats.fetched = rssItems.length;

      let processed = 0;
      const maxArticles = 30;

      for (const item of rssItems) {
        if (processed >= maxArticles) {
          console.log(`📊 Reached limit of ${maxArticles} articles`);
          break;
        }

        const title = Array.isArray(item.title) ? item.title[0] : item.title;
        const link = Array.isArray(item.link) ? item.link[0] : item.link;

        if (!link || !link.startsWith('http')) {
          console.log(`⚠️  Skipping invalid URL: ${link}`);
          continue;
        }

        // Scrape article content
        const scrapedData = await this.scrapeArticle(link);
        if (!scrapedData) {
          continue;
        }

        // Generate content hash for duplicate detection
        const contentHash = this.generateContentHash(scrapedData.content);

        // Check for duplicates
        const isDuplicate = await this.checkDuplicate(link, contentHash);
        if (isDuplicate) {
          console.log(`⏭️  Skipped (duplicate): ${scrapedData.title}`);
          this.stats.skipped++;
          continue;
        }

        // Prepare article data
        const articleData: ArticleData = {
          title: scrapedData.title,
          content: scrapedData.content,
          url: link,
          source: 'elpais',
          createdAt: admin.firestore.Timestamp.now(),
          contentHash
        };

        // Save to Firestore
        await this.saveArticle(articleData);
        processed++;

        // Small delay to be respectful to the server
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

    } catch (error) {
      console.error('💥 Script failed:', error);
      process.exit(1);
    }

    // Print final summary
    console.log('\n📊 SCRAPING COMPLETE');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`📡 Total fetched from RSS: ${this.stats.fetched}`);
    console.log(`💾 Articles saved: ${this.stats.saved}`);
    console.log(`⏭️  Articles skipped (duplicates): ${this.stats.skipped}`);
    console.log(`❌ Errors encountered: ${this.stats.errors}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    if (this.stats.saved > 0) {
      console.log('🎉 Successfully added new articles to Firestore!');
      console.log('Run the script again to fetch newer articles.');
    } else {
      console.log('ℹ️  No new articles to add. All articles were duplicates or failed to scrape.');
    }
  }
}

// Run the scraper
const scraper = new ElPaisScraper();
scraper.run().catch(console.error);