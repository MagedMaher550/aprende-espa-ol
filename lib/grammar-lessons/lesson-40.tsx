"use client";

import type React from "react";
import { useState } from "react";
import {
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  KeyRound,
  MessageSquare,
  PenSquare,
  ShieldAlert,
  Table2,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

const informalStructures = [
  {
    title: "Hay que + infinitivo",
    functionText: "Obligación general",
    explanation:
      "Usamos hay que cuando la regla es para todos. No hablamos de una persona específica.",
    structure: "Hay que + infinitivo",
    meaning: "One must / You have to",
    examples: [
      "Hay que estudiar para el examen.",
      "Hay que respetar las normas.",
      "Hay que llegar a tiempo.",
    ],
  },
  {
    title: "Poder + infinitivo",
    functionText: "Permiso o posibilidad",
    explanation:
      "Usamos poder para decir que una persona tiene permiso o tiene la posibilidad de hacer algo.",
    structure: "Poder conjugado + infinitivo",
    examples: [
      "Puedes usar el diccionario.",
      "No puedes hablar en clase.",
      "Podemos entrar ahora.",
    ],
  },
  {
    title: "Deber + infinitivo",
    functionText: "Obligación o recomendación",
    explanation:
      "Usamos deber para una obligación personal. También puede ser un consejo fuerte.",
    structure: "Deber conjugado + infinitivo",
    examples: [
      "Debes hacer los deberes.",
      "Debo llegar temprano.",
      "Debemos escuchar al profesor.",
    ],
  },
];

const formalStructures = [
  {
    title: "(No) Se puede / Se debe + infinitivo",
    functionText: "Reglas impersonales",
    explanation:
      "Estas formas no tienen sujeto. Son comunes en carteles, instrucciones y normas.",
    structure: [
      "Se puede + infinitivo = está permitido",
      "No se puede + infinitivo = no está permitido",
      "Se debe + infinitivo = obligación",
    ],
    examples: [
      "Se puede pagar con tarjeta.",
      "No se puede fumar aquí.",
      "Se debe respetar el turno.",
    ],
  },
  {
    title: "(No) Está permitido / Se permite + infinitivo",
    functionText: "Permiso formal",
    explanation:
      "Usamos estas estructuras para decir que algo está permitido en un tono formal.",
    structure: [
      "Está permitido + infinitivo",
      "Se permite + infinitivo",
      "No está permitido + infinitivo",
    ],
    examples: [
      "Está permitido entrar con comida.",
      "Se permite usar el móvil.",
      "No está permitido correr en el pasillo.",
    ],
  },
  {
    title: "Está prohibido / Se prohíbe + infinitivo",
    functionText: "Prohibición",
    explanation:
      "Usamos estas formas cuando una acción no está permitida. Son comunes en lugares públicos.",
    structure: ["Está prohibido + infinitivo", "Se prohíbe + infinitivo"],
    examples: [
      "Está prohibido fumar.",
      "Se prohíbe estacionar aquí.",
      "Está prohibido comer en clase.",
    ],
  },
  {
    title: "(No) Está bien / mal visto + infinitivo",
    functionText: "Normas sociales",
    explanation:
      "Usamos estas expresiones para hablar de lo que la sociedad acepta o no acepta.",
    structure: [
      "Está bien visto + infinitivo = aceptado socialmente",
      "Está mal visto + infinitivo = no aceptado socialmente",
    ],
    examples: [
      "Está bien visto ayudar a los demás.",
      "Está mal visto hablar alto en el cine.",
      "No está bien visto llegar muy tarde.",
    ],
  },
];

const spokenExamples = [
  {
    phrase: "Por favor, no uses el móvil.",
    note: "Es directo, pero cortés con por favor.",
  },
  {
    phrase: "No está permitido comer aquí.",
    note: "Suena formal y claro.",
  },
  {
    phrase: "Oye, no hagas eso.",
    note: "Es muy directo. El tono es importante.",
  },
];

const functionalUses = [
  "Dar instrucciones",
  "Expresar reglas en escuelas, gimnasios y lugares públicos",
  "Dar consejos",
  "Hacer quejas o protestas",
  "Expresar preferencias o expectativas",
];

const comparisonRows = [
  ["Obligación", "Hay que estudiar", "Se debe estudiar"],
  ["Permiso", "Puedes entrar", "Está permitido entrar"],
  ["Prohibición", "No puedes fumar", "Está prohibido fumar"],
  ["Normas sociales", "-", "Está mal visto gritar"],
];

const practiceA = [
  "1. ________ respetar las normas.",
  "2. No ________ fumar aquí.",
  "3. ________ permitido usar el móvil.",
  "4. Está ________ comer en clase.",
  "5. Se ________ pagar en efectivo.",
];

const practiceB = [
  "1. En la biblioteca: no hablar alto.",
  "2. En el metro: pagar antes de entrar.",
  "3. En clase: usar el diccionario.",
  "4. En el cine: apagar el móvil.",
];

const answerKey = {
  a: [
    "1. Hay que",
    "2. se puede",
    "3. Está",
    "4. prohibido",
    "5. puede / permite",
  ],
  b: [
    "1. No se puede hablar alto.",
    "2. Hay que pagar antes de entrar. / Se debe pagar antes de entrar.",
    "3. Puedes usar el diccionario. / Se permite usar el diccionario.",
    "4. Hay que apagar el móvil. / Se debe apagar el móvil.",
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
    <div className="space-y-3">
      {examples.map((example) => (
        <p
          key={example}
          className="rounded-xl border border-border bg-background px-4 py-3 text-sm leading-relaxed text-foreground"
        >
          {example}
        </p>
      ))}
    </div>
  );
}

function RuleCard({
  title,
  functionText,
  explanation,
  structure,
  meaning,
  examples,
  tone,
}: {
  title: string;
  functionText: string;
  explanation: string;
  structure: string | string[];
  meaning?: string;
  examples: string[];
  tone: "informal" | "formal";
}) {
  const accent =
    tone === "informal"
      ? "border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300"
      : "border-indigo-500/30 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300";

  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className={cn("border-b px-5 py-4", accent)}>
        <p className="text-xs font-bold uppercase leading-relaxed tracking-[0.06em]">
          {functionText}
        </p>
        <h3 className="mt-2 text-xl font-bold leading-snug text-foreground">
          {title}
        </h3>
      </div>

      <div className="p-5">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {explanation}
        </p>

        <div className="my-4 rounded-xl bg-muted/40 px-4 py-3 text-sm">
          <p className="text-xs font-black uppercase tracking-[0.12em] text-muted-foreground">
            Estructura
          </p>
          {Array.isArray(structure) ? (
            <div className="mt-2 space-y-1">
              {structure.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          ) : (
            <p className="mt-2 font-medium">{structure}</p>
          )}
          {meaning ? (
            <p className="mt-2 text-xs text-muted-foreground">
              Significado: {meaning}
            </p>
          ) : null}
        </div>

        <ExampleList examples={examples} />
      </div>
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
      <div className="mt-4 space-y-3 text-sm leading-7">{children}</div>
    </section>
  );
}

function PracticeLines({ items }: { items: string[] }) {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <p
          key={item}
          className="rounded-xl border border-border/60 bg-background px-4 py-2.5 leading-relaxed"
        >
          {item}
        </p>
      ))}
    </div>
  );
}

const grammar_lesson_40: React.FC = () => {
  const [answersOpen, setAnswersOpen] = useState(false);

  return (
    <div className="not-prose mx-auto w-full max-w-7xl space-y-12 overflow-x-hidden bg-background px-4 pb-40 pt-10 text-foreground sm:px-6">
      <section className="rounded-3xl border border-indigo-500/20 bg-indigo-500/5 p-6 shadow-sm sm:p-8">
        <SectionHeading
          icon={BookOpen}
          title="1. Introducción"
          subtitle="En esta lección aprendes a expresar reglas, obligación, permiso y prohibición. Estas estructuras son muy útiles en la escuela, el trabajo, los viajes y los lugares públicos."
        />
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {["Reglas y normas", "Obligación", "Permiso", "Prohibición"].map(
            (item) => (
              <div
                key={item}
                className="rounded-2xl border border-border bg-card px-4 py-3 text-sm font-medium"
              >
                {item}
              </div>
            )
          )}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          icon={MessageSquare}
          title="2. Estructuras informales"
          subtitle="Usamos estas formas en la vida diaria, con amigos, familia, compañeros o profesores."
        />
        <div className="grid gap-5 lg:grid-cols-2 2xl:grid-cols-3">
          {informalStructures.map((item) => (
            <RuleCard key={item.title} {...item} tone="informal" />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          icon={ShieldAlert}
          title="3. Estructuras formales y escritas"
          subtitle="Estas estructuras aparecen mucho en carteles, normas, instrucciones y mensajes formales."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {formalStructures.map((item) => (
            <RuleCard key={item.title} {...item} tone="formal" />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          icon={AlertTriangle}
          title="4. Lengua hablada: avisos y consejos"
          subtitle="En una situación real, muchas veces usamos frases más simples y directas. Pueden sonar amables o duras según el tono."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {spokenExamples.map((item) => (
            <article
              key={item.phrase}
              className="rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <p className="text-sm font-semibold">{item.phrase}</p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {item.note}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          icon={CheckCircle2}
          title="5. Uso funcional"
          subtitle="Estas estructuras sirven para comunicar reglas de forma clara."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {functionalUses.map((item) => (
            <div
              key={item}
              className="flex min-h-14 items-start gap-3 rounded-2xl border border-border bg-card p-4 text-sm leading-relaxed"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          icon={Table2}
          title="6. Tabla de comparación"
          subtitle="Elige la estructura según el contexto: informal o formal."
        />
        <div className="overflow-x-auto rounded-3xl border border-border bg-card shadow-sm">
          <table className="min-w-[680px] text-left text-sm">
            <thead className="bg-muted/50 text-xs font-black uppercase tracking-[0.18em] text-muted-foreground">
              <tr>
                <th className="px-4 py-4 sm:px-6">Función</th>
                <th className="px-4 py-4 sm:px-6">Informal</th>
                <th className="px-4 py-4 sm:px-6">Formal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {comparisonRows.map(([fn, informal, formal]) => (
                <tr key={fn} className="align-top">
                  <td className="px-4 py-4 font-medium sm:px-6">{fn}</td>
                  <td className="px-4 py-4 sm:px-6">{informal}</td>
                  <td className="px-4 py-4 sm:px-6">{formal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading icon={HelpCircle} title="7. Práctica" />
        <div className="grid gap-6">
          <ExerciseBlock title="A) Completa las frases">
            <PracticeLines items={practiceA} />
          </ExerciseBlock>

          <ExerciseBlock title="B) Escribe una regla">
            <p className="mb-4">
              Usa una estructura de la lección. Puedes usar una forma informal o
              formal.
            </p>
            <PracticeLines items={practiceB} />
          </ExerciseBlock>

          <ExerciseBlock title="C) Práctica libre">
            <p>
              Escribe tres normas de tu escuela, trabajo o casa. Usa al menos
              una forma formal.
            </p>
            <textarea
              className="mt-4 h-36 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              placeholder="Escribe aquí..."
            />
          </ExerciseBlock>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          icon={KeyRound}
          title="8. Ideas clave"
          subtitle="Recuerda estas diferencias para elegir bien la estructura."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Usa hay que para reglas generales.",
            "Usa poder y deber para situaciones personales.",
            "Usa se + verbo o está + participio para reglas formales.",
            "Elige la estructura según el contexto: informal o formal.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-border bg-card p-5 text-sm shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section>
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
                  Respuestas
                </h2>
                <p className="text-sm text-muted-foreground">
                  Abre para revisar posibles respuestas.
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
            <div className="grid gap-6 lg:grid-cols-2">
              <section className="rounded-2xl border border-border bg-background p-5">
                <h3 className="text-lg font-semibold">A)</h3>
                <div className="mt-4 space-y-2 text-sm">
                  {answerKey.a.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl border border-border bg-background p-5">
                <h3 className="text-lg font-semibold">B)</h3>
                <div className="mt-4 space-y-2 text-sm">
                  {answerKey.b.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </section>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </section>
    </div>
  );
};

export default grammar_lesson_40;
