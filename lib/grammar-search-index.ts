import { GRAMMAR_LESSONS } from "./grammar-lessons"

export interface GrammarSearchItem {
  slug: string
  title: string
  content: string
}

export function buildGrammarSearchIndex(): GrammarSearchItem[] {
  return GRAMMAR_LESSONS.map((lesson) => ({
    slug: lesson.slug,
    title: lesson.title,
    content: `${lesson.description} ${lesson.searchContent}`
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim(),
  }))
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
