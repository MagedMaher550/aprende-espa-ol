import type React from "react"
// Grammar Lessons as Pure React Components
function PresentTenseLesson() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Introduction</h2>
        <p className="text-muted-foreground leading-relaxed">
          The present tense in Spanish is used to describe actions that are happening now or habitual actions. It's one
          of the most frequently used tenses in Spanish conversation.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Regular Verbs</h2>
        <p className="text-muted-foreground leading-relaxed">
          Regular verbs in the present tense follow consistent patterns based on their ending: -AR, -ER, or -IR.
        </p>

        <div className="space-y-3 mt-4">
          <div className="p-4 bg-secondary/30 rounded-lg">
            <h3 className="font-semibold text-foreground mb-2">-AR Verb Example: Hablar (to speak)</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-foreground">Yo</span>
                <span className="text-accent font-medium">hablo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">Tú</span>
                <span className="text-accent font-medium">hablas</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">Él/Ella/Usted</span>
                <span className="text-accent font-medium">habla</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">Nosotros/as</span>
                <span className="text-accent font-medium">hablamos</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">Vosotros/as</span>
                <span className="text-accent font-medium">habláis</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">Ellos/Ellas/Ustedes</span>
                <span className="text-accent font-medium">hablan</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-secondary/30 rounded-lg">
            <h3 className="font-semibold text-foreground mb-2">-ER Verb Example: Comer (to eat)</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-foreground">Yo</span>
                <span className="text-accent font-medium">como</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">Tú</span>
                <span className="text-accent font-medium">comes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">Él/Ella/Usted</span>
                <span className="text-accent font-medium">come</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">Nosotros/as</span>
                <span className="text-accent font-medium">comemos</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">Vosotros/as</span>
                <span className="text-accent font-medium">coméis</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">Ellos/Ellas/Ustedes</span>
                <span className="text-accent font-medium">comen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Common Examples</h2>
        <div className="space-y-3">
          <div className="p-4 border border-border rounded-lg">
            <p className="text-foreground font-medium mb-2">Yo hablo español.</p>
            <p className="text-muted-foreground text-sm">I speak Spanish.</p>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <p className="text-foreground font-medium mb-2">Ella come una manzana.</p>
            <p className="text-muted-foreground text-sm">She eats an apple.</p>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <p className="text-foreground font-medium mb-2">Nosotros vivimos en Madrid.</p>
            <p className="text-muted-foreground text-sm">We live in Madrid.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

function PastTenseLesson() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">The Preterite (Simple Past)</h2>
        <p className="text-muted-foreground leading-relaxed">
          The preterite is used to talk about actions that were completed in the past. It's the most common past tense
          for narrating completed events.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Regular Preterite Forms</h2>
        <div className="p-4 bg-secondary/30 rounded-lg">
          <h3 className="font-semibold text-foreground mb-2">-AR Verb: Hablar</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-foreground">Yo</span>
              <span className="text-accent font-medium">hablé</span>
            </div>
            <div className="flex justify-between">
              <span className="text-foreground">Tú</span>
              <span className="text-accent font-medium">hablaste</span>
            </div>
            <div className="flex justify-between">
              <span className="text-foreground">Él/Ella/Usted</span>
              <span className="text-accent font-medium">habló</span>
            </div>
            <div className="flex justify-between">
              <span className="text-foreground">Nosotros/as</span>
              <span className="text-accent font-medium">hablamos</span>
            </div>
            <div className="flex justify-between">
              <span className="text-foreground">Ellos/Ellas/Ustedes</span>
              <span className="text-accent font-medium">hablaron</span>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Time Expressions</h2>
        <p className="text-muted-foreground leading-relaxed">Use these expressions when talking about the past:</p>
        <div className="space-y-2">
          <div className="p-3 border border-border rounded-lg text-sm">
            <span className="font-medium text-foreground">Ayer</span>{" "}
            <span className="text-muted-foreground">- Yesterday</span>
          </div>
          <div className="p-3 border border-border rounded-lg text-sm">
            <span className="font-medium text-foreground">La semana pasada</span>{" "}
            <span className="text-muted-foreground">- Last week</span>
          </div>
          <div className="p-3 border border-border rounded-lg text-sm">
            <span className="font-medium text-foreground">El mes pasado</span>{" "}
            <span className="text-muted-foreground">- Last month</span>
          </div>
          <div className="p-3 border border-border rounded-lg text-sm">
            <span className="font-medium text-foreground">Hace dos años</span>{" "}
            <span className="text-muted-foreground">- Two years ago</span>
          </div>
        </div>
      </section>
    </div>
  )
}

function PronounsLesson() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Spanish Personal Pronouns</h2>
        <p className="text-muted-foreground leading-relaxed">
          Personal pronouns are words used to replace nouns. In Spanish, they vary by person, number, and formality.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Subject Pronouns</h2>
        <div className="space-y-2">
          <div className="p-4 border border-border rounded-lg">
            <p className="text-foreground font-medium mb-1">Yo</p>
            <p className="text-muted-foreground text-sm">I</p>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <p className="text-foreground font-medium mb-1">Tú</p>
            <p className="text-muted-foreground text-sm">You (informal, singular)</p>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <p className="text-foreground font-medium mb-1">Él, Ella, Usted</p>
            <p className="text-muted-foreground text-sm">He, She, You (formal)</p>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <p className="text-foreground font-medium mb-1">Nosotros/Nosotras</p>
            <p className="text-muted-foreground text-sm">We</p>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <p className="text-foreground font-medium mb-1">Vosotros/Vosotras</p>
            <p className="text-muted-foreground text-sm">You all (informal, Spain)</p>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <p className="text-foreground font-medium mb-1">Ellos, Ellas, Ustedes</p>
            <p className="text-muted-foreground text-sm">They, You all</p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Important Notes</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex gap-3">
            <span className="text-accent font-bold mt-1">•</span>
            <span>
              In Spanish, subject pronouns are often omitted because the verb form indicates who is performing the
              action.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent font-bold mt-1">•</span>
            <span>Usted is formal and is used in professional settings and with strangers.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent font-bold mt-1">•</span>
            <span>Vosotros is only used in Spain; Latin America uses ustedes for both formal and informal plural.</span>
          </li>
        </ul>
      </section>
    </div>
  )
}

// Lesson Metadata
interface GrammarLesson {
  slug: string
  title: string
  level: "Beginner" | "Intermediate" | "Advanced"
  description: string
  component: React.ComponentType
}

export const GRAMMAR_LESSONS: GrammarLesson[] = [
  {
    slug: "present-tense",
    title: "Present Tense",
    level: "Beginner",
    description: "Learn how to form and use the present tense to describe actions happening now or habitual actions.",
    component: PresentTenseLesson,
  },
  {
    slug: "pronouns",
    title: "Personal Pronouns",
    level: "Beginner",
    description: "Master Spanish subject pronouns and their usage in everyday conversation.",
    component: PronounsLesson,
  },
  {
    slug: "preterite-past-tense",
    title: "Preterite (Simple Past)",
    level: "Intermediate",
    description: "Understand how to talk about completed actions in the past using the preterite tense.",
    component: PastTenseLesson,
  },
]
