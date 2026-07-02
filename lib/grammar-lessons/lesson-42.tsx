"use client";

import type React from "react";
import { useState } from "react";
import { ArrowRight, CheckCircle2, HelpCircle, PenLine, Sparkles } from "lucide-react";

type Feedback = "correct" | "incorrect" | null;

const normalizeAnswer = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[¿?¡!.,;]/g, "")
    .replace(/\s+/g, " ")
    .trim();

const grammar_lesson_42: React.FC = () => {
  const [userInputs, setUserInputs] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<Record<string, Feedback>>({});

  const handleInputChange = (id: string, value: string) => {
    setUserInputs((prev) => ({ ...prev, [id]: value }));
  };

  const checkAnswer = (id: string, correct: string | string[]) => {
    const accepted = Array.isArray(correct) ? correct : [correct];
    const current = normalizeAnswer(userInputs[id] ?? "");
    const isCorrect = accepted.some((answer) => current === normalizeAnswer(answer));

    setFeedback((prev) => ({ ...prev, [id]: isCorrect ? "correct" : "incorrect" }));
  };

  const futureEndings = [
    ["Yo", "-é"],
    ["Tú", "-ás"],
    ["Él / Ella / Usted", "-á"],
    ["Nosotros", "-emos"],
    ["Vosotros", "-éis"],
    ["Ellos / Ellas / Ustedes", "-án"],
  ];

  const regularExamples = [
    ["Hablar", "hablaré", "hablarás", "hablará", "hablaremos", "hablaréis", "hablarán"],
    ["Comer", "comeré", "comerás", "comerá", "comeremos", "comeréis", "comerán"],
    ["Vivir", "viviré", "vivirás", "vivirá", "viviremos", "viviréis", "vivirán"],
  ];

  const irregularStems = [
    ["haber", "habr-"],
    ["caber", "cabr-"],
    ["saber", "sabr-"],
    ["poder", "podr-"],
    ["querer", "querr-"],
    ["poner", "pondr-"],
    ["vender", "vendr-"],
    ["salir", "saldr-"],
    ["valer", "valdr-"],
    ["tener", "tendr-"],
    ["hacer", "har-"],
    ["decir", "dir-"],
  ];

  const practiceItems = [
    { id: "a1", prompt: "Yo ________ (hablar) con el profesor.", answer: "hablaré" },
    { id: "a2", prompt: "Tú ________ (comer) después.", answer: "comerás" },
    { id: "a3", prompt: "Nosotros ________ (vivir) en Madrid.", answer: "viviremos" },
    { id: "a4", prompt: "Ella ________ (tener) mucho trabajo.", answer: "tendrá" },
    { id: "a5", prompt: "Ellos ________ (hacer) la tarea.", answer: "harán" },
    { id: "a6", prompt: "Yo ________ (decir) la verdad.", answer: "diré" },
    { id: "a7", prompt: "Tú ________ (poder) entrar.", answer: "podrás" },
    { id: "a8", prompt: "Nosotros ________ (salir) temprano.", answer: "saldremos" },
    { id: "a9", prompt: "Él ________ (poner) la mesa.", answer: "pondrá" },
    { id: "a10", prompt: "Vosotros ________ (querer) descansar.", answer: "querréis" },
  ];

  const transformItems = [
    { id: "c1", prompt: "Yo estudio mucho.", answer: "Yo estudiaré mucho" },
    { id: "c2", prompt: "Ella hace la comida.", answer: "Ella hará la comida" },
    { id: "c3", prompt: "Nosotros tenemos tiempo.", answer: "Nosotros tendremos tiempo" },
    { id: "c4", prompt: "Ellos dicen la verdad.", answer: "Ellos dirán la verdad" },
    { id: "c5", prompt: "Tú sales temprano.", answer: "Tú saldrás temprano" },
    { id: "c6", prompt: "Él pone la mesa.", answer: "Él pondrá la mesa" },
  ];

  const choiceItems = [
    { id: "d1", prompt: "Yo ______ mañana.", options: "hablaré / hablaría / hablaba", answer: "hablaré" },
    { id: "d2", prompt: "Nosotros ______ vacaciones.", options: "tendremos / tenemos / tendríamos", answer: "tendremos" },
    { id: "d3", prompt: "Ella ______ la verdad.", options: "dirá / decía / dice", answer: "dirá" },
    { id: "d4", prompt: "Tú ______ temprano.", options: "saldrás / salías / sales", answer: "saldrás" },
    { id: "d5", prompt: "Ellos ______ el partido.", options: "ganarán / ganaban / ganan", answer: "ganarán" },
  ];

  const inputClass = (id: string) =>
    `w-full rounded-xl border px-3 py-2 text-sm outline-none transition ${
      feedback[id] === "correct"
        ? "border-emerald-500 bg-emerald-500/5"
        : feedback[id] === "incorrect"
          ? "border-rose-500 bg-rose-500/5"
          : "border-border bg-background focus:border-indigo-500"
    }`;

  const renderPracticeInput = (item: { id: string; prompt: string; answer: string | string[]; options?: string }) => (
    <div key={item.id} className="grid gap-2 rounded-2xl border border-border/60 bg-background/70 p-4">
      <div>
        <p className="text-sm font-semibold">{item.prompt}</p>
        {item.options ? <p className="mt-1 text-xs text-muted-foreground">{item.options}</p> : null}
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="text"
          placeholder="Answer"
          className={inputClass(item.id)}
          value={userInputs[item.id] ?? ""}
          onChange={(event) => handleInputChange(item.id, event.target.value)}
        />
        <button
          type="button"
          onClick={() => checkAnswer(item.id, item.answer)}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-600 bg-indigo-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-indigo-700"
        >
          <CheckCircle2 size={16} />
          Check
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full overflow-x-hidden bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <main className="space-y-12">
          <section className="rounded-[32px] border border-border/70 bg-muted/10 p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-black uppercase tracking-widest text-indigo-600">Futuro Imperfecto</p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  Simple Future: predictions, promises, and present conjectures
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  The simple future is formed by adding the same endings directly to the infinitive. Use it for future
                  actions, predictions, promises, conjectures about now, and results after <b>si + presente</b>.
                </p>
              </div>
              <Sparkles className="hidden text-indigo-600 md:block" size={42} />
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b-2 border-indigo-600 pb-2">
              <ArrowRight className="shrink-0 text-indigo-600" />
              <h2 className="text-xl font-black uppercase tracking-tight md:text-2xl">1. Formation</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <article className="rounded-[28px] border border-border/70 bg-muted/5 p-5 shadow-sm sm:p-6">
                <h3 className="text-lg font-semibold">Infinitive + Future Ending</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Do not remove <b>-ar</b>, <b>-er</b>, or <b>-ir</b>. Attach the ending to the whole infinitive.
                </p>
                <div className="mt-5 space-y-2 text-sm">
                  <p className="rounded-2xl border border-border/60 bg-background/80 px-4 py-3">hablar → hablaré</p>
                  <p className="rounded-2xl border border-border/60 bg-background/80 px-4 py-3">comer → comeré</p>
                  <p className="rounded-2xl border border-border/60 bg-background/80 px-4 py-3">vivir → viviré</p>
                </div>
              </article>

              <article className="rounded-[28px] border border-border/70 bg-muted/5 p-5 shadow-sm sm:p-6">
                <h3 className="text-lg font-semibold">One Set of Endings</h3>
                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {futureEndings.map(([pronoun, ending]) => (
                    <div
                      key={pronoun}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-border/60 bg-background/80 px-4 py-3"
                    >
                      <span className="text-sm text-muted-foreground">{pronoun}</span>
                      <span className="font-mono text-sm font-semibold">{ending}</span>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <article className="rounded-[28px] border border-border/70 bg-muted/5 p-5 shadow-sm sm:p-6">
              <h3 className="text-lg font-semibold">Regular Verb Models</h3>
              <div className="mt-5 overflow-x-auto">
                <table className="w-full min-w-[720px] text-left text-sm">
                  <thead className="border-b border-border text-muted-foreground">
                    <tr>
                      <th className="px-3 py-2">Verb</th>
                      {futureEndings.map(([pronoun]) => (
                        <th key={pronoun} className="px-3 py-2">{pronoun.split(" / ")[0]}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/70">
                    {regularExamples.map(([verb, ...forms]) => (
                      <tr key={verb} className="transition-colors hover:bg-muted/10">
                        <td className="px-3 py-3 font-semibold">{verb}</td>
                        {forms.map((form) => (
                          <td key={form} className="px-3 py-3 font-mono">{form}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b-2 border-indigo-600 pb-2">
              <ArrowRight className="shrink-0 text-indigo-600" />
              <h2 className="text-xl font-black uppercase tracking-tight md:text-2xl">2. Irregular Stems</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <article className="rounded-[28px] border border-border/70 bg-muted/5 p-5 shadow-sm sm:p-6">
                <h3 className="text-lg font-semibold">Stem Changes Before the Ending</h3>
                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  {irregularStems.map(([infinitive, stem]) => (
                    <div key={infinitive} className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/80 px-4 py-3 text-sm">
                      <span>{infinitive}</span>
                      <span className="font-mono font-semibold text-indigo-600">{stem}</span>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[28px] border border-border/70 bg-muted/5 p-5 shadow-sm sm:p-6">
                <h3 className="text-lg font-semibold">Useful Examples</h3>
                <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                  {[
                    "Tendré tiempo.",
                    "Harás ejercicio.",
                    "Dirán la verdad.",
                    "Pondremos la mesa.",
                    "Saldrás temprano.",
                    "Podrán ayudarte.",
                    "Querré aprender más.",
                    "Vendremos mañana.",
                    "Sabrás la respuesta.",
                    "Habrá una reunión.",
                  ].map((example) => (
                    <p key={example} className="rounded-2xl border border-border/60 bg-background/80 px-4 py-3">
                      {example}
                    </p>
                  ))}
                </div>
              </article>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b-2 border-indigo-600 pb-2">
              <ArrowRight className="shrink-0 text-indigo-600" />
              <h2 className="text-xl font-black uppercase tracking-tight md:text-2xl">3. Main Uses</h2>
            </div>

            <div className="grid gap-6 xl:grid-cols-4">
              {[
                ["Predictions", "Mañana lloverá.", "El examen será difícil.", "Ganaremos el partido."],
                ["Promises", "Te ayudaré.", "Siempre estaré contigo.", "Volveré pronto."],
                ["Conjectures", "¿Dónde estará Ana?", "Tendrá unos treinta años.", "Serán las ocho."],
                ["Si + presente + futuro", "Si estudias, aprobarás.", "Si practicas español, hablarás mejor.", "Si llegas temprano, veremos una película."],
              ].map(([title, ...examples]) => (
                <article key={title} className="rounded-[28px] border border-border/70 bg-white/5 p-5 shadow-sm transition-all hover:bg-white/10 sm:p-6">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <div className="mt-4 space-y-3 text-sm">
                    {examples.map((example) => (
                      <p key={example} className="rounded-2xl border border-border/60 bg-background/70 px-3 py-2">{example}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-[28px] border border-border/70 bg-muted/5 p-5 shadow-sm sm:p-6">
              <h3 className="text-lg font-semibold">Everyday Examples: Society and Environment</h3>
              <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-muted-foreground">
                <li>Si cada uno solo compra lo que necesita, tendremos todo lo que queremos.</li>
                <li>Si la gente usa menos electricidad, tendremos más energía para todo el mundo.</li>
                <li>Si cortamos muchos árboles, hará mucho calor.</li>
                <li>Si compramos más alimentos de los que necesitamos, será más difícil obtener suficientes alimentos para toda la gente.</li>
              </ul>
            </article>

            <article className="rounded-[28px] border border-border/70 bg-muted/5 p-5 shadow-sm sm:p-6">
              <h3 className="text-lg font-semibold">Common Mistakes</h3>
              <div className="mt-5 space-y-2 text-sm">
                {[
                  ["Teneré", "Tendré"],
                  ["Haceré", "Haré"],
                  ["Deciré", "Diré"],
                  ["Poderé", "Podré"],
                  ["Hablarásé", "Hablaré"],
                ].map(([wrong, right]) => (
                  <div key={wrong} className="grid grid-cols-2 gap-3 rounded-2xl border border-border/60 bg-background/80 px-4 py-3">
                    <span className="text-rose-600 line-through">{wrong}</span>
                    <span className="font-semibold text-emerald-600">{right}</span>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b-2 border-indigo-600 pb-2">
              <HelpCircle className="shrink-0 text-indigo-600" />
              <h2 className="text-xl font-black uppercase tracking-tight md:text-2xl">4. Practice</h2>
            </div>

            <article className="rounded-[28px] border border-border/70 bg-muted/5 p-5 shadow-sm sm:p-6">
              <h3 className="text-lg font-semibold">A. Complete with the Future Tense</h3>
              <div className="mt-5 grid gap-4 md:grid-cols-2">{practiceItems.map(renderPracticeInput)}</div>
            </article>

            <article className="rounded-[28px] border border-border/70 bg-muted/5 p-5 shadow-sm sm:p-6">
              <h3 className="text-lg font-semibold">B. Complete the Sentences</h3>
              <p className="mt-2 text-sm text-muted-foreground">Write your own future result for each present condition.</p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {[
                  "Si estudias, ...",
                  "Si haces ejercicio, ...",
                  "Si ahorras dinero, ...",
                  "Si practicas español todos los días, ...",
                  "Si llegamos temprano, ...",
                  "Si comes demasiados dulces, ...",
                ].map((prompt) => (
                  <label key={prompt} className="grid gap-2 rounded-2xl border border-border/60 bg-background/70 p-4 text-sm font-semibold">
                    {prompt}
                    <input className="rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-indigo-500" placeholder="Your sentence" />
                  </label>
                ))}
              </div>
            </article>

            <article className="rounded-[28px] border border-border/70 bg-muted/5 p-5 shadow-sm sm:p-6">
              <h3 className="text-lg font-semibold">C. Change to the Future</h3>
              <div className="mt-5 grid gap-4 md:grid-cols-2">{transformItems.map(renderPracticeInput)}</div>
            </article>

            <article className="rounded-[28px] border border-border/70 bg-muted/5 p-5 shadow-sm sm:p-6">
              <h3 className="text-lg font-semibold">D. Choose the Correct Option</h3>
              <div className="mt-5 grid gap-4 md:grid-cols-2">{choiceItems.map(renderPracticeInput)}</div>
            </article>
          </section>

          <section className="rounded-[32px] border border-indigo-800 bg-indigo-950 p-6 text-white shadow-2xl sm:p-8">
            <div className="flex items-center gap-3 border-b border-indigo-400/20 pb-4">
              <PenLine className="text-indigo-300" />
              <h2 className="text-lg font-black uppercase tracking-widest text-indigo-200">Writing Practice</h2>
            </div>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-indigo-100/85">
              Write 6-8 sentences using the Futuro Imperfecto. Include two predictions, one promise, one conjecture, and
              two conditional sentences using <b>si + presente + futuro</b>.
            </p>
            <textarea
              className="mt-5 min-h-[180px] w-full resize-vertical rounded-2xl border border-indigo-700 bg-white/5 p-4 text-sm leading-6 outline-none transition focus:border-indigo-300"
              placeholder="El próximo verano viajaré a España. Si practico todos los días, hablaré español con más confianza..."
            />
          </section>

          <section className="rounded-[28px] border border-border/70 bg-muted/5 p-5 shadow-sm sm:p-6">
            <h2 className="text-xl font-bold">Key Takeaways</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-muted-foreground">
              <li>Add the endings directly to the infinitive.</li>
              <li>The endings are the same for <b>-ar</b>, <b>-er</b>, and <b>-ir</b> verbs.</li>
              <li>Some verbs use irregular stems: <b>tendr-</b>, <b>har-</b>, <b>dir-</b>, <b>podr-</b>, and more.</li>
              <li>Use the future for predictions, promises, conjectures, and consequences after <b>si + presente</b>.</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default grammar_lesson_42;
