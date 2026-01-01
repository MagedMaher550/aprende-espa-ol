import type React from "react"
import grammar_lesson_1 from "./lesson-1"
import grammar_lesson_2 from "./lesson-2"
import grammar_lesson_3 from "./lesson-3"

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
    title: "Lesson One",
    level: "A1.1",
    description:
      "Some description for lesson one",
    searchContent: `
      some search content for lesson one
    `,
    component: grammar_lesson_1,
  },
  {
    slug: "lesson-2",
    title: "Lesson Two",
    level: "A1.2",
    description:
      "Some description for lesson two",
    searchContent: `
      some search content for lesson two
    `,
    component: grammar_lesson_2,
  },
  {
    slug: "lesson-3",
    title: "Lesson Three",
    level: "A1.3",
    description:
      "Some description for lesson three",
    searchContent: `
      some search content for lesson three
    `,
    component: grammar_lesson_3,
  },
]
