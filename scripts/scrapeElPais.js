import admin from "firebase-admin";
import fs from "fs";
import path from "path";
import axios from "axios";
import * as xml2js from "xml2js";
import * as cheerio from "cheerio";
import crypto from "crypto";

// 🔥 Firebase init
const serviceAccount = JSON.parse(
  fs.readFileSync("./firebase-service-account.json", "utf8")
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const RSS_URL = "https://elpais.com/rss/elpais/portada.xml";

function hash(content) {
  return crypto.createHash("sha256").update(content).digest("hex");
}

async function fetchRSS() {
  console.log("📡 Fetching RSS...");

  const res = await axios.get(RSS_URL);
  const parser = new xml2js.Parser();
  const data = await parser.parseStringPromise(res.data);

  return data.rss.channel[0].item;
}

async function scrapeArticle(url) {
  try {
    const res = await axios.get(url);
    const $ = cheerio.load(res.data);

    let content = "";

    $("article p").each((_, el) => {
      const text = $(el).text().trim();
      if (text.length > 20) content += text + " ";
    });

    content = content.trim();

    if (content.length < 300) return null;

    return content;
  } catch {
    return null;
  }
}

async function exists(url, contentHash) {
  const byUrl = await db
    .collection("articles")
    .where("url", "==", url)
    .limit(1)
    .get();

  if (!byUrl.empty) return true;

  const byHash = await db
    .collection("articles")
    .where("contentHash", "==", contentHash)
    .limit(1)
    .get();

  return !byHash.empty;
}

async function run() {
  const items = await fetchRSS();

  let saved = 0;

  for (const item of items) {
    if (saved >= 30) break;

    const title = item.title[0];
    const url = item.link[0];

    console.log("🔍", title);

    const content = await scrapeArticle(url);
    if (!content) continue;

    const contentHash = hash(content);

    const isDup = await exists(url, contentHash);
    if (isDup) {
      console.log("⏭️ Skipped");
      continue;
    }

    await db.collection("articles").add({
      title,
      content,
      url,
      source: "elpais",
      contentHash,
      createdAt: new Date(),
    });

    console.log("💾 Saved");
    saved++;

    await new Promise((r) => setTimeout(r, 1000));
  }

  console.log(`✅ Done. Saved ${saved} articles.`);
}

run();