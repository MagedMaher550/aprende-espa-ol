interface VocabularyWord {
  spanish: string
  english: string
}

interface VocabularyCollection {
  slug: string
  title: string
  level: "Beginner" | "Intermediate" | "Advanced"
  description: string
  words: VocabularyWord[]
}

export const VOCABULARY_COLLECTIONS: VocabularyCollection[] = [
  {
    slug: "family",
    title: "Family",
    level: "Beginner",
    description: "Essential vocabulary for talking about family members and relationships.",
    words: [
      { spanish: "Padre", english: "Father" },
      { spanish: "Madre", english: "Mother" },
      { spanish: "Hermano", english: "Brother" },
      { spanish: "Hermana", english: "Sister" },
      { spanish: "Hijo", english: "Son" },
      { spanish: "Hija", english: "Daughter" },
      { spanish: "Abuelo", english: "Grandfather" },
      { spanish: "Abuela", english: "Grandmother" },
      { spanish: "Tío", english: "Uncle" },
      { spanish: "Tía", english: "Aunt" },
      { spanish: "Primo", english: "Cousin" },
      { spanish: "Esposo", english: "Husband" },
      { spanish: "Esposa", english: "Wife" },
    ],
  },
  {
    slug: "food",
    title: "Food & Drinks",
    level: "Beginner",
    description: "Common food and beverage vocabulary for ordering and discussing meals.",
    words: [
      { spanish: "Pan", english: "Bread" },
      { spanish: "Queso", english: "Cheese" },
      { spanish: "Manzana", english: "Apple" },
      { spanish: "Plátano", english: "Banana" },
      { spanish: "Pollo", english: "Chicken" },
      { spanish: "Carne", english: "Meat" },
      { spanish: "Pez/Pescado", english: "Fish" },
      { spanish: "Agua", english: "Water" },
      { spanish: "Vino", english: "Wine" },
      { spanish: "Cerveza", english: "Beer" },
      { spanish: "Café", english: "Coffee" },
      { spanish: "Té", english: "Tea" },
      { spanish: "Sopa", english: "Soup" },
    ],
  },
  {
    slug: "travel",
    title: "Travel & Directions",
    level: "Intermediate",
    description: "Vocabulary for travel, navigation, and asking for directions.",
    words: [
      { spanish: "Calle", english: "Street" },
      { spanish: "Avenida", english: "Avenue" },
      { spanish: "Plaza", english: "Plaza" },
      { spanish: "Estación", english: "Station" },
      { spanish: "Aeropuerto", english: "Airport" },
      { spanish: "Hotel", english: "Hotel" },
      { spanish: "Museo", english: "Museum" },
      { spanish: "Iglesia", english: "Church" },
      { spanish: "Derecha", english: "Right" },
      { spanish: "Izquierda", english: "Left" },
      { spanish: "Recto", english: "Straight" },
      { spanish: "Cerca", english: "Near" },
      { spanish: "Lejos", english: "Far" },
    ],
  },
  {
    slug: "weather",
    title: "Weather & Climate",
    level: "Beginner",
    description: "Vocabulary for describing weather and climate conditions.",
    words: [
      { spanish: "Soleado", english: "Sunny" },
      { spanish: "Nublado", english: "Cloudy" },
      { spanish: "Lluvia", english: "Rain" },
      { spanish: "Nieve", english: "Snow" },
      { spanish: "Viento", english: "Wind" },
      { spanish: "Calor", english: "Heat" },
      { spanish: "Frío", english: "Cold" },
      { spanish: "Tempestad", english: "Storm" },
      { spanish: "Niebla", english: "Fog" },
      { spanish: "Temperatura", english: "Temperature" },
      { spanish: "Grado", english: "Degree" },
      { spanish: "Humedad", english: "Humidity" },
    ],
  },
]
