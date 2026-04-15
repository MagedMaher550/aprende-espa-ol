/**
 * Firebase Seed Script
 * Populates Firestore with curated Spanish learning articles
 * Run with: node scripts/seed-articles.mjs
 */

import admin from "firebase-admin";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Firebase
const serviceAccountPath = path.join(
  __dirname,
  "../firebase-service-account.json"
);

try {
  const serviceAccount = (
    await import(`file://${serviceAccountPath}`, {
      assert: { type: "json" },
    })
  ).default;

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} catch (error) {
  console.error(
    "Note: To use this script, create a firebase-service-account.json file with your Firebase service account credentials."
  );
  console.error(
    "Download it from Firebase Console > Project Settings > Service Accounts > Generate new private key"
  );
  process.exit(1);
}

const db = admin.firestore();

const sampleArticles = [
  {
    title: "La Importancia del Ejercicio",
    content:
      "El ejercicio es fundamental para mantener una buena salud. Los médicos recomiendan hacer al menos treinta minutos de actividad física cada día. Esto puede incluir caminar, correr, nadar o cualquier deporte que disfrutes. El ejercicio no solo mejora tu salud física, sino que también beneficia tu salud mental. Cuando haces ejercicio, tu cuerpo libera endorfinas, unas sustancias químicas que te hacen sentir más feliz y relajado. Además, el ejercicio regular ayuda a prevenir enfermedades como la diabetes, la presión arterial alta y las enfermedades del corazón. Es importante encontrar una actividad que disfrutes para que sea más fácil mantener una rutina de ejercicio consistente.",
    createdAt: admin.firestore.Timestamp.now(),
  },
  {
    title: "Viajando por España",
    content:
      "España es un país fascinante con una rica historia y cultura. Si visitas Madrid, puedes ver el Museo del Prado, que contiene obras maestras de artistas como Velázquez y Goya. Barcelona es otra ciudad importante, famosa por la arquitectura única de Antoni Gaudí, especialmente la Sagrada Familia. El sur de España, llamado Andalucía, es conocido por sus hermosas playas y la influencia de la arquitectura mora. Granada es el hogar de la Alhambra, un palacio espectacular del siglo XIV. La comida española es deliciosa, incluyendo platos como la paella, el gazpacho y las tapas. Cada región de España tiene su propio carácter especial y sus propias tradiciones culinarias.",
    createdAt: admin.firestore.Timestamp.now(),
  },
  {
    title: "Los Beneficios de la Lectura",
    content:
      "Leer es una actividad que trae muchos beneficios para el cerebro y las emociones. La lectura mejora la concentración y la memoria. Cuando lees, tu imaginación se despierta y creas imágenes mentales de lo que describes el libro. Los libros nos permiten viajar a otros mundos sin salir de casa. La lectura también reduce el estrés y la ansiedad. Es una forma excelente de aprender sobre nuevos temas e ideas. Los padres deben animar a sus hijos a leer desde una edad temprana para desarrollar el amor por los libros. Hay muchos géneros de literatura: novelas, poesía, cuentos, historia y muchos más. Cada persona puede encontrar un tipo de lectura que le interese.",
    createdAt: admin.firestore.Timestamp.now(),
  },
  {
    title: "La Gastronomía Mexicana",
    content:
      "La cocina mexicana es famosa en todo el mundo por su sabor único y sus colores vibrantes. El maíz, los chiles, los frijoles y el chocolate son ingredientes básicos. El mole es un platillo complicado que se prepara con más de veinte ingredientes. Los tacos son probablemente el platillo más conocido de México. Son versátiles y pueden rellenarse con muchos ingredientes diferentes. Las enchiladas, que son tortillas rellenas y cubiertas con salsa, son otro platillo popular. La comida mexicana fue reconocida como Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO. Mucha gente visita México específicamente para experimentar su deliciosa comida tradicional.",
    createdAt: admin.firestore.Timestamp.now(),
  },
  {
    title: "El Cambio Climático y el Medio Ambiente",
    content:
      "El cambio climático es uno de los problemas más importantes del siglo veintiuno. El aumento de las temperaturas globales está causando consecuencias graves para el medio ambiente. Los glaciares se están derritiendo, al nivel del mar está subiendo, y el clima es más extremo. Los científicos advierten que debemos reducir las emisiones de gases de efecto invernadero. Esto significa usar menos combustibles fósiles y cambiar a fuentes de energía renovables. El reciclaje, el transporte sostenible y el consumo responsable son formas que cada persona puede ayudar. Muchos países están tomando medidas para reducir sus emisiones de carbono. Los gobiernos están invirtiendo en energía solar y eólica. La educación sobre el cambio climático es fundamental para motivar a las personas a tomar acción.",
    createdAt: admin.firestore.Timestamp.now(),
  },
];

async function seedArticles() {
  try {
    console.log("🌱 Starting to seed articles...");

    const articlesRef = db.collection("articles");

    for (const article of sampleArticles) {
      const docRef = await articlesRef.add(article);
      console.log(`✅ Added article: "${article.title}" (ID: ${docRef.id})`);
    }

    console.log(
      `\n🎉 Successfully seeded ${sampleArticles.length} articles!`
    );
    console.log(
      "\nArticles are now available in your Firestore collection 'articles'."
    );
    console.log("Visit http://localhost:3000/articles to see the list.");
  } catch (error) {
    console.error("❌ Error seeding articles:", error);
  } finally {
    await admin.app().delete();
    process.exit(0);
  }
}

seedArticles();
