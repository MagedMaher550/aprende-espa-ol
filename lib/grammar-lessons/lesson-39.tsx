"use client";

import type React from "react";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  Lightbulb,
  PenSquare,
  SplitSquareVertical,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

const serUses = [
  {
    id: "2.1",
    title: "Identification",
    rule: "Used to say who someone is.",
    examples: ["Soy Manuel.", "Ella es mi profesora."],
  },
  {
    id: "2.2",
    title: "Nationality / Origin",
    examples: ["Es egipcio.", "Somos españoles."],
  },
  {
    id: "2.3",
    title: "Profession",
    examples: ["Es médico.", "Soy ingeniero."],
  },
  {
    id: "2.4",
    title: "Possession / Belonging (ser + de)",
    examples: ["Esta casa es de mis padres.", "El coche es de Juan."],
  },
  {
    id: "2.5",
    title: "Inherent Characteristics",
    examples: ["La nieve es blanca.", "El agua es fría."],
  },
  {
    id: "2.6",
    title: "General Evaluation",
    examples: ["Es importante estudiar.", "La película es interesante."],
  },
  {
    id: "2.7",
    title: "Time and Dates",
    examples: ["Son las diez.", "Hoy es lunes."],
  },
  {
    id: "2.8",
    title: "Material",
    examples: ["La mesa es de madera.", "El anillo es de oro."],
  },
  {
    id: "2.9",
    title: "Events (time/place)",
    examples: ["La boda es en junio.", "El concierto es en el teatro."],
  },
];

const estarUses = [
  {
    id: "3.1",
    title: "Location",
    examples: ["Estoy en casa.", "Madrid está en España."],
  },
  {
    id: "3.2",
    title: "Physical and Emotional States",
    examples: ["Estoy cansado.", "Está contenta."],
  },
  {
    id: "3.3",
    title: "Result of an Action",
    examples: ["La puerta está cerrada.", "El vaso está roto."],
  },
  {
    id: "3.4",
    title: "Temporary Characteristics",
    examples: ["El cielo está nublado.", "Los niños están tranquilos hoy."],
  },
  {
    id: "3.5",
    title: "Evaluation with “bien / mal”",
    examples: ["Está bien.", "Está mal mentir."],
  },
  {
    id: "3.6",
    title: "Temporary Roles (estar + de)",
    examples: ["Está de camarero.", "Estoy de vacaciones."],
  },
  {
    id: "3.7",
    title: "Time Reference (plural form)",
    examples: ["Estamos a 8 de enero."],
  },
  {
    id: "3.8",
    title: "Ongoing Actions (estar + gerundio)",
    examples: ["Estoy estudiando.", "Está trabajando."],
  },
];

const comparison = {
  ser: [
    "Identity",
    "Origin",
    "Profession",
    "Permanent traits",
    "Time/date",
    "Material",
    "Events",
  ],
  estar: [
    "Location",
    "Temporary states",
    "Results",
    "Ongoing actions",
    "Temporary roles",
  ],
};

const mistakes = [
  ["Estoy ingeniero", "Soy ingeniero"],
  ["Es en casa", "Está en casa"],
  ["Soy cansado", "Estoy cansado"],
  ["La puerta es cerrada", "La puerta está cerrada"],
];

const exerciseA = [
  "1. Madrid ___ en España.",
  "2. Yo ___ muy cansado hoy.",
  "3. Ella ___ doctora.",
  "4. La puerta ___ abierta.",
  "5. Hoy ___ lunes.",
  "6. Nosotros ___ en casa.",
  "7. La película ___ interesante.",
  "8. El café ___ caliente.",
];

const exerciseB = [
  "1. Yo ___ (ser) egipcio.",
  "2. Ellos ___ (estar) en el restaurante.",
  "3. La mesa ___ (ser) de madera.",
  "4. Tú ___ (estar) muy feliz hoy.",
  "5. Nosotros ___ (estar) estudiando.",
];

const exerciseC = [
  "1. Estoy profesor.",
  "2. Es en mi casa.",
  "3. Soy cansado.",
  "4. La puerta es cerrada.",
];

const answerKey = {
  a: [
    "1. está",
    "2. estoy",
    "3. es",
    "4. está",
    "5. es",
    "6. estamos",
    "7. es",
    "8. está",
  ],
  b: [
    "1. soy",
    "2. están",
    "3. es",
    "4. estás",
    "5. estamos",
  ],
  c: [
    "1. Soy profesor.",
    "2. Está en mi casa.",
    "3. Estoy cansado.",
    "4. La puerta está cerrada.",
  ],
};

function SectionHeading({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="space-y-2">
      <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight sm:text-3xl">
        <Icon className="h-6 w-6 text-indigo-600" />
        {title}
      </h2>
      {subtitle ? (
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function ExampleList({ examples }: { examples: string[] }) {
  return (
    <ul className="space-y-3">
      {examples.map((example) => (
        <li
          key={example}
          className="rounded-xl border border-border bg-background px-4 py-3 text-sm leading-relaxed text-foreground"
        >
          {example}
        </li>
      ))}
    </ul>
  );
}

function UsageCard({
  id,
  title,
  rule,
  examples,
  tone,
}: {
  id: string;
  title: string;
  rule?: string;
  examples: string[];
  tone: "ser" | "estar";
}) {
  const accent =
    tone === "ser"
      ? "text-indigo-600 border-indigo-500/20 bg-indigo-500/5"
      : "text-emerald-600 border-emerald-500/20 bg-emerald-500/5";

  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-1">
          <p
            className={cn(
              "inline-flex rounded-full border px-2.5 py-1 text-[11px] font-black uppercase tracking-[0.18em]",
              accent
            )}
          >
            {id}
          </p>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>

      {rule ? (
        <p className="mb-4 rounded-xl bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
          {rule}
        </p>
      ) : null}

      <ExampleList examples={examples} />
    </article>
  );
}

function ExerciseBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-4 text-sm leading-7">{children}</div>
    </section>
  );
}

const grammar_lesson_39: React.FC = () => {
  const [answersOpen, setAnswersOpen] = useState(false);

  return (
    <div className="mx-auto w-full max-w-6xl space-y-12 overflow-x-hidden bg-background px-4 pb-40 pt-10 text-foreground sm:px-6">
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-indigo-500/20 bg-indigo-500/5 p-6 shadow-sm sm:p-8">
          <SectionHeading
            icon={Lightbulb}
            title="1. Core Difference"
            subtitle="Ser is used for permanent or defining characteristics. Estar is used for temporary states, conditions, or results."
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-2xl border border-indigo-500/20 bg-card p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-indigo-600">
              SER
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              permanent or defining characteristics
            </p>
          </div>
          <div className="rounded-2xl border border-emerald-500/20 bg-card p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-600">
              ESTAR
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              temporary states, conditions, or results
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading icon={BookOpen} title="2. Uses of SER" />
        <div className="grid gap-5 lg:grid-cols-2">
          {serUses.map((item) => (
            <UsageCard key={item.id} {...item} tone="ser" />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading icon={BookOpen} title="3. Uses of ESTAR" />
        <div className="grid gap-5 lg:grid-cols-2">
          {estarUses.map((item) => (
            <UsageCard key={item.id} {...item} tone="estar" />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading icon={SplitSquareVertical} title="4. Quick Comparison" />
        <div className="grid gap-5 md:grid-cols-2">
          <section className="rounded-3xl border border-indigo-500/20 bg-card p-6 shadow-sm">
            <h3 className="text-xl font-bold text-indigo-600">SER</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {comparison.ser.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-emerald-500/20 bg-card p-6 shadow-sm">
            <h3 className="text-xl font-bold text-emerald-600">ESTAR</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {comparison.estar.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading icon={ArrowRight} title="5. Common Mistakes" />
        <div className="overflow-x-auto rounded-3xl border border-border bg-card shadow-sm">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-muted/50 text-xs font-black uppercase tracking-[0.18em] text-muted-foreground">
              <tr>
                <th className="px-4 py-4 sm:px-6">Incorrect</th>
                <th className="px-4 py-4 sm:px-6">Correct</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {mistakes.map(([incorrect, correct]) => (
                <tr key={incorrect} className="align-top">
                  <td className="px-4 py-4 text-rose-600 sm:px-6">
                    {incorrect}
                  </td>
                  <td className="px-4 py-4 font-medium text-emerald-700 sm:px-6 dark:text-emerald-400">
                    {correct}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading icon={HelpCircle} title="6. Practice Exercises" />
        <div className="grid gap-6">
          <ExerciseBlock title="A) Choose SER or ESTAR">
            <ul className="space-y-2">
              {exerciseA.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ExerciseBlock>

          <ExerciseBlock title="B) Complete with correct form">
            <ul className="space-y-2">
              {exerciseB.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ExerciseBlock>

          <ExerciseBlock title="C) Correct the mistakes">
            <ul className="space-y-2">
              {exerciseC.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ExerciseBlock>

          <ExerciseBlock title="D) Writing Practice">
            <div className="space-y-4">
              <p>Write 5 sentences:</p>
              <ul className="space-y-2">
                <li>• 2 using SER</li>
                <li>• 2 using ESTAR</li>
                <li>• 1 using ESTAR + GERUNDIO</li>
              </ul>
              <textarea
                className="h-40 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                placeholder="Write here..."
              />
            </div>
          </ExerciseBlock>
        </div>
      </section>

      <section className="space-y-6">
        <Collapsible
          open={answersOpen}
          onOpenChange={setAnswersOpen}
          className="rounded-3xl border border-border bg-card shadow-sm"
        >
          <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6">
            <div className="flex items-center gap-3">
              <PenSquare className="h-5 w-5 text-indigo-600" />
              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  7. Answer Key
                </h2>
                <p className="text-sm text-muted-foreground">
                  Open to review the exact answers.
                </p>
              </div>
            </div>
            <ChevronDown
              className={cn(
                "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
                answersOpen && "rotate-180"
              )}
            />
          </CollapsibleTrigger>

          <CollapsibleContent className="border-t border-border px-5 py-5 sm:px-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <section className="rounded-2xl border border-border bg-background p-5">
                <h3 className="text-lg font-semibold">A)</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {answerKey.a.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="rounded-2xl border border-border bg-background p-5">
                <h3 className="text-lg font-semibold">B)</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {answerKey.b.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="rounded-2xl border border-border bg-background p-5">
                <h3 className="text-lg font-semibold">C)</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {answerKey.c.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </section>
    </div>
  );
};

export default grammar_lesson_39;
