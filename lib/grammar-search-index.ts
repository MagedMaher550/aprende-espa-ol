import { GRAMMAR_LESSONS } from "./grammar-lessons"

interface GrammarSearchItem {
  slug: string
  title: string
  content: string
}

export function buildGrammarSearchIndex(): GrammarSearchItem[] {
  return GRAMMAR_LESSONS.map((lesson) => {
    // Extract text content from the component by rendering it
    // For static content, we maintain a simple text mapping
    const contentMap: Record<string, string> = {
      "present-tense":
        "present tense introduction regular verbs hablar hablo hablas habla hablamos habláis hablan comer como comes come comemos coméis comen vivir vivo vives vive vivimos vivís viven common examples yo hablo español ella come una manzana nosotros vivimos en madrid",
      pronouns:
        "personal pronouns subject pronouns yo tú él ella usted nosotros nosotras vosotros vosotras ellos ellas ustedes i you he she we they formal informal spain latin america verb form indicated",
      "preterite-past-tense":
        "preterite simple past completed actions hablé hablaste habló hablamos hablaron ayer yesterday la semana pasada last week el mes pasado last month hace dos años two years ago time expressions",
    }

    return {
      slug: lesson.slug,
      title: lesson.title,
      content: (contentMap[lesson.slug] || lesson.description).toLowerCase(),
    }
  })
}

export function searchGrammarContent(query: string): GrammarSearchItem[] {
  const index = buildGrammarSearchIndex()
  const searchTerms = query.toLowerCase().split(" ").filter(Boolean)

  if (searchTerms.length === 0) return index

  return index.filter((item) => {
    const searchableText = `${item.title} ${item.content}`
    return searchTerms.every((term) => searchableText.includes(term))
  })
}
