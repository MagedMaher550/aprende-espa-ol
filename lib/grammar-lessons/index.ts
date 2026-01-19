import type React from "react"
import grammar_lesson_1 from "./lesson-1"
import grammar_lesson_2 from "./lesson-2"
import grammar_lesson_3 from "./lesson-3"
import grammar_lesson_4 from "./lesson-4"
import grammar_lesson_5 from "./lesson-5"
import grammar_lesson_6 from "./lesson-6"
import grammar_lesson_7 from "./lesson-7"
import grammar_lesson_8 from "./lesson-8"
import grammar_lesson_9 from "./lesson-9"
import grammar_lesson_10 from "./lesson-10"
import grammar_lesson_11 from "./lesson-11"
import grammar_lesson_12 from "./lesson-12"
import grammar_lesson_13 from "./lesson-13"
import grammar_lesson_14 from "./lesson-14"
import grammar_lesson_15 from "./lesson-15"
import grammar_lesson_16 from "./lesson-16"
import grammar_lesson_17 from "./lesson-17"
import grammar_lesson_18 from "./lesson-18"
import grammar_lesson_20 from "./lesson-20"
import grammar_lesson_21 from "./lesson-21"
import grammar_lesson_22 from "./lesson-22"
import grammar_lesson_23 from "./lesson-23"
import grammar_lesson_24 from "./lesson-24"
import grammar_lesson_25 from "./lesson-25"
import grammar_lesson_26 from "./lesson-26"
import grammar_lesson_27 from "./lesson-27"
import grammar_lesson_28 from "./lesson-28"
import grammar_lesson_29 from "./lesson-29"
import grammar_lesson_30 from "./lesson-30"
import grammar_lesson_31 from "./lesson-31"
import grammar_lesson_32 from "./lesson-32"
import grammar_lesson_33 from "./lesson-33"
import grammar_lesson_34 from "./lesson-34"
import grammar_lesson_35 from "./lesson-35"

export interface GrammarLesson {
  slug: string
  title: string
  level:
  | "A1.1" | "A1.2" | "A1.3" | "A1.4"
  | "A2.1" | "A2.2" | "A2.3" | "A2.4"
  | "B1.1" | "B1.2" | "B1.3" | "B1.4"
  | "B2.1" | "B2.2" | "B2.3" | "B2.4"
  | "C1.1" | "C1.2" | "C1.3" | "C1.4"
  | "C2.1" | "C2.2" | "C2.3" | "C2.4"
  description: string
  searchContent: string
  component: React.ComponentType
}

export const GRAMMAR_LESSONS: GrammarLesson[] = [
  {
    slug: "lesson-1",
    title: "Lesson 1: Phonetics & Introductions",
    level: "A1.1",
    description:
      "Master the 5 Spanish vowels, understand diphthong combinations, and learn the essential personal pronouns and the verb 'llamarse'.",
    searchContent: `
      Spanish vowels pronunciation las vocales sound combinations
      vowel sounds a e i o u diphthongs hiatus
      vowel combinations au ae ai ao eu ua ue ui ia ie iu io
      pronunciation practice flor aeropuerto cuidar
      personal pronouns pronombres personales singular plural
      yo tú usted él ella nosotros vosotros ustedes ellos ellas
      verb llamarse reflexive verb me llamo te llamas se llama
      introducing yourself in Spanish common mistakes
    `,
    component: grammar_lesson_1,
  },
  {
    slug: "lesson-2",
    title: "Lesson 2: Identity & Origins",
    level: "A1.1",
    description:
      "Deep dive into first names vs. surnames, mastering the verb 'Ser' for professions and nationality, and practicing conversational questions.",
    searchContent: `
      reflexive verbs llamarse apellidarse first name surname
      me apellido te apellidas se apellida nos apellidamos os apellidáis se apellidan
      verb ser identity profession nationality origin
      soy eres es somos sois son
      soy de vs estoy de nationality lowercase
      asking name surname origin nationality
      como te llamas como se apellida usted de donde eres
      common mistakes ser vs estar reflexive pronouns
    `,
    component: grammar_lesson_2,
  }, {
    slug: "lesson-3",
    title: "Lesson 3: Gender & Plurals",
    level: "A1.1",
    description:
      "Master Spanish noun gender patterns, pluralization rules, and the crucial exceptions like 'el día' and 'la mano'.",
    searchContent: `
      gender rules masculine feminine el la los las un una unos unas
      plural rules vowel s consonant es z to c
      exceptions dia mapa planeta agua sofa foto moto mano radio
      characteristics of masculine nouns -o -or -aje -ma
      characteristics of feminine nouns -a -cion -dad -tud -is
      plural pez peces plural cancion canciones plural libro libros
      common pitfalls gender agreement
    `,
    component: grammar_lesson_3,
  }, {
    slug: "lesson-4",
    title: "Lesson 4: Spanish Interrogatives",
    level: "A1.1",
    description:
      "A deep dive into asking questions. Master the nuances between Qué and Cuál, the agreement rules of Cuánto, and the essential pluralization of Quién.",
    searchContent: `
      Spanish interrogatives question words interrogativos advanced
      cuanto cuanta cuantos cuantas agreement gender number quantity price
      que vs cual difference rules definitions selection preferred options
      cuando when time date birthday class
      quien quienes who plural who person people friends
      donde where location lives bathroom work
      por que why reason because because late study
      written accent marks interrogatives tildes punctuation inverted question mark
      prepositional fronting with question words de donde a donde con quien
    `,
    component: grammar_lesson_4,
  }, {
    slug: "lesson-5",
    title: "Lesson 5: Regular Present Tense",
    level: "A1.1",
    description:
      "Master the three verb families (-AR, -ER, -IR). Learn conjugation patterns for every subject and build the foundation for Spanish conversation.",
    searchContent: `
      El presente regular verbs AR ER IR endings
      Spanish conjugation patterns yo tu el ella nosotros vosotros ellos
      hablar estudiar trabajar cantar bailar comprar
      comer beber aprender correr leer vender
      vivo escribo recibo comparto abro
      nosotros vs vosotros endings imos emos amos
      regular present tense exercises spanish grammar practice
    `,
    component: grammar_lesson_5,
  }, {
    slug: "lesson-6",
    title: "Lesson 6: Usage of Tener and Tomar",
    level: "A1.1",
    description:
      "Master the critical verbs Tener (possession and states) and Tomar (consumption and transport). Learn irregular 'Yo' forms and idiomatic expressions for age and hunger.",
    searchContent: `
      verb tener conjugation yo tengo tu tienes el tiene nosotros tenemos vosotros teneis ellos tienen
      verb tomar conjugation yo tomo tu tomas el toma nosotros tomamos vosotros tomais ellos toman
      Spanish possession age hunger thirst cold heat fear
      transportation taking a photo taking a break drinking coffee
      irregular yo form Spanish verbs
      difference between tener and tomar
    `,
    component: grammar_lesson_6,
  }, {
    slug: "lesson-7",
    title: "Lesson 7: Estar, Hoy, and Prepositions of Place",
    level: "A1.2",
    description:
      "Master the temporary 'to be' verb (Estar) and learn how to describe precisely where objects and people are located using prepositions of place.",
    searchContent: `
      verb estar conjugation yo estoy tu estas el esta nosotros estamos vosotros estais ellos estan
      Spanish prepositions of place encima de debajo de delante de detras de al lado de entre cerca de lejos de
      Spanish location and temporary states
      Spanish progressive tense estar + gerund
      today in Spanish hoy usage and position
      common mistakes ser vs estar
    `,
    component: grammar_lesson_7,
  }, {
    slug: "lesson-8",
    title: "Lesson 8: Hay vs Estar & Prepositions of Place",
    level: "A1.2",
    description:
      "Clarify the distinction between existence (Hay) and specific location (Estar), while expanding your vocabulary for spatial relationships using common prepositions.",
    searchContent: `
      hay vs estar differences existence vs location
      Spanish prepositions of place list and examples
      Spanish verb hay usage singular plural impersonal
      estar for location and position Spanish
      difference between hay un and el esta
      Spanish A1 grammar lesson 8 hay estar prepositions
    `,
    component: grammar_lesson_8,
  }, {
    slug: "lesson-9",
    title: "Lesson 9: Existence, Location, and Quantity",
    level: "A1.2",
    description:
      "Deepen your understanding of 'Hay' vs 'Estar' while mastering quantity expressions (Mucho/Poco) and essential contractions (Al/Del) for urban navigation.",
    searchContent: `
      Spanish hay vs estar existence vs location
      Spanish asking questions with donde and cuantos
      Spanish quantity words mucho mucha muchos muchas poco poca pocos pocas
      Spanish intensity muy vs mucho
      Spanish contractions al and del rules
      prepositions of place Spanish location review
    `,
    component: grammar_lesson_9,
  }, {
    slug: "lesson-10",
    title: "Lesson 10: Possessives & Personal States",
    level: "A1.2",
    description:
      "Master ownership in Spanish using both short-form adjectives and long-form pronouns, while learning how to describe marital status and resolve pronoun ambiguity.",
    searchContent: `
      Spanish possessive adjectives mi tu su nuestro vuestro
      Spanish possessive pronouns el mio la tuya el suyo
      marital status Spanish estar casado soltero divorciado
      possessive agreement gender and number Spanish
      su vs de el ambiguity Spanish grammar
      A1 Spanish lesson 10 possessives
    `,
    component: grammar_lesson_10,
  }, {
    slug: "lesson-11",
    title: "Lesson 11: Describing Yourself and Others",
    level: "A1.2",
    description:
      "A deep dive into the four foundational verbs of description. Learn how to balance identity (Ser), temporary states (Estar), physical features (Tener), and appearance (Llevar).",
    searchContent: `
      ser vs estar vs tener vs llevar Spanish description
      Spanish adjectives gender and number agreement
      describing personality and physical traits Spanish
      Spanish verbs for clothing and appearance
      how to say age in Spanish tener vs ser
      Spanish emotions and location with estar
      Spanish A1 vocabulary for people description
    `,
    component: grammar_lesson_11,
  }, {
    slug: "lesson-12",
    title: "Lesson 12: Describing Clothing and Accessories",
    level: "A1.2",
    description:
      "A focused look at the verb 'llevar' for clothing and fashion. Learn to describe outfits, accessories, and physical details like beards or glasses.",
    searchContent: `
      verbo llevar ropa español
      describing clothing Spanish A1
      present tense llevar conjugation
      llevar vs llevar puesto
      Spanish vocabulary clothes and accessories
      adjective agreement clothing Spanish
      llevar gafas llevar barba Spanish
    `,
    component: grammar_lesson_12,
  }, {
    slug: "lesson-13",
    title: "Lesson 13: Diminutives & Describing People",
    level: "A1.2",
    description:
      "Master the use of the -ito/-ita suffix for affection and size, and learn to distinguish between Ser, Tener, and Llevar when describing people.",
    searchContent: `
      Spanish diminutives ito ita meaning
      how to describe people in Spanish ser tener llevar
      describing physical traits Spanish A1
      difference between ser and tener for descriptions
      Spanish suffixes for affection and size
      Spanish clothing and accessories verbs
      present tense ser tener llevar conjugation
    `,
    component: grammar_lesson_13,
  }, {
    slug: "lesson-14",
    title: "Lesson 14: Movement & Departure (Ir vs. Irse)",
    level: "A1.2",
    description:
      "Understand the vital distinction between destination-focused 'Ir' and departure-focused 'Irse', along with transport prepositions and future plans.",
    searchContent: `
      Spanish verb ir vs irse differences
      present tense conjugation ir irse
      Spanish prepositions for transport en vs a
      future plans ir a infinitive Spanish
      leaving vs going Spanish verbs
      Spanish A1 lesson 14 grammar movement
      ir de compras irse a dormir expressions
    `,
    component: grammar_lesson_14,
  }, {
    slug: "lesson-15",
    title: "Lesson 15: Comparisons, Querer & Preferir",
    level: "A1.2",
    description:
      "Master Spanish comparisons of equality and inequality, irregular comparative forms, and the functional differences between desires (querer) and choices (preferir).",
    searchContent: `
      Spanish comparisons tan como tanto como
      más que less than Spanish grammar
      mejor peor mayor menor irregular forms
      querer vs preferir difference Spanish
      Spanish equality quantity quality
      A1 Spanish lesson 15 practice exercises
    `,
    component: grammar_lesson_15,
  }, {
    slug: "lesson-16",
    title: "Lesson 16: Telling Time in Spanish",
    level: "A1.3",
    description:
      "A complete guide to telling time in Spanish, including singular/plural hour rules, direct and subtractive minutes, parts of the day, and common schedule expressions.",
    searchContent: `
      how to tell time in Spanish grammar
      es la una vs son las hours
      y media y cuarto Spanish time
      menos subtraction Spanish time
      parts of the day Spanish morning afternoon night
      asking time in Spanish questions
      Spanish time expressions sharp en punto
      A1 Spanish lesson 16 telling time exercises
    `,
    component: grammar_lesson_16,
  }, {
    slug: "lesson-17",
    title: "Lesson 17: Present Tense Irregular Verbs (Part 1)",
    level: "A1.3",
    description:
      "A deep, comprehensive dive into Spanish stem-changing patterns (e→ie, o→ue, e→i, u→ue) and the irregular pillars Ser and Ir. Optimized layout for visual learning and mastery.",
    searchContent: `
      Spanish stem changing verbs present tense boot rule
      Spanish grammar lesson 17 irregular verbs
      e to ie o to ue e to i Spanish verbs
      jugar conjugation present tense Spanish
      ser and ir present tense conjugation table
      reflexive stem changing verbs Spanish sentarse sentirse
      Spanish conjugation practice A1 Level
      Spanish verb patterns the boot rule explained
    `,
    component: grammar_lesson_17,
  }, {
    slug: "lesson-18",
    title: "Lesson 18: Present Tense Irregular Verbs (Part 2)",
    level: "A1.3",
    description:
      "A comprehensive exploration of high-frequency Spanish irregular verbs, including -zco phonetic shifts, Yo-Go verbs, double-irregular patterns like Tener and Venir, and -uir orthographic changes.",
    searchContent: `
      Spanish irregular verbs present tense part 2
      verbs with -zco yo form Spanish grammar
      yo-go verbs Spanish list and practice
      tener and venir conjugation explanation
      decir and seguir stem changes present tense
      Spanish verbs ending in -uir spelling rules
      Spanish grammar lesson 18 interactive practice
      Spanish A1 irregular verb mastery series
    `,
    component: grammar_lesson_18,
  }, {
    slug: "lesson-20",
    title: "Lesson 20: Frequency Expressions Complete Grammar Guide",
    level: "A1.3",
    description:
      "Master frequency adverbs in Spanish. This guide covers how to communicate routines, habits, and absolute patterns using sentence-level modifiers like 'siempre', 'a veces', and 'nunca' across different tenses.",
    searchContent: `
      Spanish frequency expressions adverbs siempre nunca a veces
      habitual actions Spanish routines vocabulary
      placement of adverbs in Spanish sentences
      frequency levels Spanish alta regular moderada baja nula
      Spanish grammar guide frequency expressions
      casi nunca vs nunca Spanish rules
    `,
    component: grammar_lesson_20,
  }, {
    slug: "lesson-21",
    title: "Lesson 21: The Structure of Gustar and Similar Verbs",
    level: "A1.3",
    description:
      "A comprehensive interactive component covering the unique structure of 'Gustar'. Learn indirect object pronouns, clarification with 'A + person', and verbs with similar behavior like encantar, interesar, and doler.",
    searchContent: `
      Spanish gustar verbs structure indirect object pronouns
      me te le nos os les gusta vs gustan plural singular
      verbs like gustar encantar interesar importar doler parecer
      Spanish routine preferences likes dislikes
      A mí me gusta a ti te interesa clarification emphasis
      Spanish grammar lesson 21 A1.3
    `,
    component: grammar_lesson_21,
  }, {
    slug: "lesson-22",
    title: "Lesson 22: Degrees of Intensity (Gradación de Intensidad)",
    level: "A1.3",
    description:
      "An industrial-grade component teaching the nuances of Spanish likes and dislikes. Features an interactive intensity scale from 'Amo' to 'Odio', including frequency and degree modifiers like 'muchísimo', 'bastante', and 'nada'.",
    searchContent: `
      Spanish intensity scale degrees of liking gustar
      amo vs adoro Spanish me encanta vs me gusta mucho
      me gusta bastante me gusta poco Spanish rules
      no me gusta nada vs odio Spanish negative intensity
      gradación de intensidad español ejercicios
      expressing preferences Spanish grammar A1.3
    `,
    component: grammar_lesson_22,
  }, {
    slug: "lesson-23",
    title: "Lesson 23: Asking and Responding About Likes",
    level: "A1.3",
    description:
      "Learn to engage in conversations about preferences in Spanish. This interactive guide focuses on question structures and the logic of short responses for agreement (también/tampoco) and disagreement (sí/no).",
    searchContent: `
      Spanish conversation likes dislikes asking questions
      a mí también a mí tampoco a mí sí a mí no rules
      short responses Spanish agreement disagreement
      asking preferences Spanish gustar structure
      Spanish dialogue examples likes dislikes
      gustar question structure A1.3
    `,
    component: grammar_lesson_23,
  }, {
    slug: "lesson-24",
    title: "Lesson 24: Quantifiers, Doler, and Clinical Spanish",
    level: "A1.3",
    description:
      "An exhaustive exploration of volume modifiers and health-related grammar. Learn the adjective-adverb distinction for quantifiers, the 'gustar-style' mechanics of the verb 'doler', and the medical contrast between 'estar' and 'tener'.",
    searchContent: `
      Spanish quantifiers mucho poco demasiado bastante agreement
      adverb vs adjective Spanish grammar rules
      verb doler conjugation me duele vs me duelen
      body parts Spanish pain vocabulary
      health expressions Spanish estar vs tener
      fever cough flu dizzy Spanish words
      A1.4 medical Spanish basics
    `,
    component: grammar_lesson_24,
  }, {
    slug: "lesson-25",
    title: "Lesson 25: El Futuro Próximo (Near Future)",
    level: "A1.3",
    description: "Learn how to express future plans and intentions using the 'Ir + a + Infinitive' structure, the Spanish equivalent of 'going to'.",
    searchContent: `
      futuro proximo near future plans intentions
      ir a infinitive conjugation voy vas va vamos vais van
      time expressions mañana esta noche este fin de semana
      negative future sentences no voy a
      questions about the future que vas a hacer
      Spanish A1 grammar lesson 25
    `,
    component: grammar_lesson_25,
  }, {
    slug: "lesson-26",
    title: "Lesson 26: Proposing, Accepting, or Rejecting a Plan",
    level: "A1.3",
    description:
      "Master the art of social planning in Spanish. Learn common expressions like '¿Vamos a...?', '¿Qué te parece si...?', and how to politely decline using 'es que'. This lesson covers time, place, and full conversation models.",
    searchContent: `
      Spanish plans proposing accepting rejecting lesson 26
      vamos a infinitive questions
      que te parece si Spanish grammar
      es que excuses Spanish conversation
      Spanish time and place expressions a las en el
      social Spanish phrases A1 A2
      dialogue models Spanish plans
    `,
    component: grammar_lesson_26,
  }, {
    slug: "lesson-27",
    title: "Lesson 27: El Gerundio y las Perífrasis de Duración",
    level: "A1.3",
    description:
      "Master the Spanish '-ing' form. This guide covers how to form the gerundio and how to use it with Estar (right now), Seguir (still), and Llevar (how long) to describe ongoing actions.",
    searchContent: `
      Spanish gerundio formation ando iendo yendo
      estar gerundio present continuous Spanish
      seguir gerundio keep doing Spanish
      llevar time gerundio duration Spanish
      irregular gerunds Spanish durmiendo leyendo
      presente vs gerundio Spanish differences
      Spanish grammar lesson 27 workbook
    `,
    component: grammar_lesson_27,
  }, {
    slug: "lesson-28",
    title: "Lesson 28: Mastery of El Pretérito Indefinido (Bonus lesson)",
    level: "A1.4",
    description:
      "A deep dive into the logic of the Spanish past tense. Covers regular forms, the collapse of present-tense stem changes, the 'Strong Preterite' system, J-stems, sandal verbs, and orthographic repairs.",
    searchContent: `
      Spanish preterite indefinido lesson 28
      regular AR ER IR preterite conjugation
      strong preterite stems tuv pud pus quis vin
      Spanish sandal verbs e to i o to u preterite
      ser vs ir preterite conjugation fui
      orthographic changes car gar zar preterite
      Spanish past tense logic and stress patterns
    `,
    component: grammar_lesson_28,
  }, {
    slug: "lesson-29",
    title: "Lesson 29: El Pretérito Imperfecto Progresivo (Bonus Lesson)",
    level: "A1.4",
    description:
      "A comprehensive guide to the Spanish Past Continuous. Master the construction of Estar (Imperfect) + Gerund, including critical stem-changing -ir verbs, orthographic 'y' insertions, and the essential distinctions between the Past Continuous, Imperfect, and Preterite.",
    searchContent: `
      Spanish past continuous lesson 29
      pretérito imperfecto progresivo conjugation
      estar imperfecto plus gerundio
      irregular gerunds Spanish pidiendo durmiendo leyendo
      past continuous vs imperfect vs preterite Spanish
      interrupted actions in the past Spanish grammar
      parallel actions in the past Spanish
      gerund formation rules -ando -iendo -yendo
    `,
    component: grammar_lesson_29,
  }, {
    slug: "lesson-30",
    title: "Lesson 30: El Imperativo (Imperative Mood)",
    level: "A1.4",
    description:
      "Master the Spanish imperative mood through a responsive card-based system. Learn regular forms, stem-changing (ie, ue, i), spelling changes, and complex irregulars like 'hacer' and 'ir', alongside reflexive pronoun placement rules.",
    searchContent: `
      Spanish imperative commands lesson 30
      mandatos regulares e irregulares
      imperative stem change e-ie o-ue e-i u-ue
      orthographic change imperative car gar zar
      fully irregular imperative verbs Spanish
      reflexive commands accent marks levántate acuéstate
      tú usted ustedes vosotros imperative endings
    `,
    component: grammar_lesson_30,
  }, {
    slug: "lesson-31",
    title: "Lesson 31: Negation in Spanish",
    level: "A1.4",
    description:
      "Master the nuances of Spanish negation. This lesson covers weak/neutral negation (no, nunca), strong emotional negation (¡Ni hablar!, ¡Que no!), and the essential rules of mandatory double negation in Spanish sentences.",
    searchContent: `
      Spanish negation lesson 31
      weak negation vs strong negation Spanish
      double negation Spanish grammar rules
      ni hablar meaning and usage
      no quiero ni infinitivo
      nunca vs no Spanish
      no... nada nadie nunca examples
      Spanish negative expressions practice
    `,
    component: grammar_lesson_31,
  }, {
    slug: "lesson-32",
    title: "Lesson 32: Opinions in Spanish",
    level: "A1.4",
    description:
      "Learn to ask for and give opinions in Spanish using structures like '¿Qué te parece?' and 'Creo que'. Master the agreement rules for the verb 'parecer' and practice expressing your thoughts clearly.",
    searchContent: `
      Spanish opinions lesson 32
      asking for opinions Spanish qué opinas qué te parece
      giving opinions Spanish creo que a mí me parece opino que
      verb parecer agreement singular plural
      Spanish grammar opinions and agreement
      practice exercises opinions Spanish
    `,
    component: grammar_lesson_32,
  }, {
    slug: "lesson-33",
    title: "Lesson 33: Pretérito Perfecto (Present Perfect)",
    level: "A1.4",
    description:
      "Master the Spanish Pretérito Perfecto. Learn to conjugate the auxiliary verb 'haber', form regular and irregular past participles, and understand the difference between the verb tense and its use as an adjective.",
    searchContent: `
      Spanish Present Perfect Pretérito Perfecto lesson 33
      conjugating haber yo he tú has él ha nosotros hemos
      past participle ado ido irregulars
      abrir abierto decir dicho hacer hecho ver visto romper roto
      unfinished time markers hoy esta semana este año
      reflexive verbs with pretérito perfecto
      past participle as adjective conocido vs he conocido
    `,
    component: grammar_lesson_33,
  }, {
    slug: "lesson-34",
    title: "Lesson 34: Numbers From 200 and Upward",
    level: "A1.4",
    description:
      "An in-depth guide to large Spanish numbers. Explains gender agreement rules, irregular hundreds (500, 700, 900), and the 'Long Scale' system used for millions and billions.",
    searchContent: `
      Spanish numbers 200 to billions lesson 34
      quinientos setecientos novecientos irregulars
      mil vs un mil rules
      millón vs millones agreement
      Spanish billion mil millones vs billón difference
      gender agreement numbers doscientos vs doscientas examples
      trillions in spanish un billón
      complex large numbers reading
    `,
    component: grammar_lesson_34,
  }, {
    "slug": "lesson-35-indefinite-words-masterclass",
    "title": "Lesson 35 Masterclass: Indefinite Words",
    "level": "A1.4",
    "description": "Comprehensive analysis of Spanish non-specific reference: The categorical divide between humans, objects, and quantified nouns.",
    "searchContent": "comprehensive Spanish indefinite words, alguien vs nadie deep dive, algo vs nada mechanics, alguno vs algún rules, Spanish double negation logic, indefinite adjectives feminine plural, Spanish grammar lesson 35",
    "component": grammar_lesson_35
  }
];
