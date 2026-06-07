"use client";
import React, { useState } from "react";
import { CheckCircle2, ArrowRight, Globe } from "lucide-react";

const grammar_lesson_32: React.FC = () => {
  const [userInputs, setUserInputs] = useState<{ [key: string]: string }>({});
  const [feedback, setFeedback] = useState<{
    [key: string]: "correct" | "incorrect" | null;
  }>({});

  const handleInputChange = (id: string, val: string) => {
    setUserInputs((prev) => ({ ...prev, [id]: val.toLowerCase().trim() }));
  };

  const checkAnswer = (id: string, correct: string) => {
    const isCorrect = userInputs[id] === correct.toLowerCase().trim();
    setFeedback((prev) => ({
      ...prev,
      [id]: isCorrect ? "correct" : "incorrect",
    }));
  };

  const practiceItems = [
    { id: "p1-1", prompt: "300 casas", answer: "trescientas" },
    { id: "p1-2", prompt: "800 euros", answer: "ochocientos" },
    { id: "p1-3", prompt: "500 páginas", answer: "quinientas" },
    { id: "p2-1", prompt: "___ personas (1,000)", answer: "mil" },
    { id: "p2-2", prompt: "3,000 coches", answer: "tres mil" },
    { id: "p3-1", prompt: "1,000,000", answer: "un millón" },
    { id: "p3-2", prompt: "1,000,000,000", answer: "mil millones" },
    { id: "p4-1", prompt: "700,000", answer: "setecientos mil" },
    { id: "p4-2", prompt: "900,000,000", answer: "novecientos millones" },
    {
      id: "q1",
      prompt: "Un mil personas is correct. (true / false)",
      answer: "false",
    },
    {
      id: "q2",
      prompt: "Mil millones equals one English billion. (true / false)",
      answer: "true",
    },
    {
      id: "w1",
      prompt: "Write 712,544,362,111 in Spanish",
      answer:
        "setecientos doce mil quinientos cuarenta y cuatro millones trescientos sesenta y dos mil ciento once",
    },
    {
      id: "w2",
      prompt: "Write 964,696,423,009 in Spanish",
      answer:
        "novecientos sesenta y cuatro mil seiscientos noventa y seis millones cuatrocientos veintitrés mil nueve",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-5xl space-y-12 px-4 pb-40 pt-10 sm:px-6 bg-background text-foreground font-sans overflow-x-hidden">
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b-2 border-indigo-600 pb-2">
          <ArrowRight className="text-indigo-600 shrink-0" />
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter">
            Part 1 — Hundreds (200–900)
          </h2>
        </div>

        <div className="grid gap-6">
          <div className="rounded-3xl border border-border bg-muted/30 p-6">
            <h3 className="text-lg font-black uppercase mb-3">Core Forms</h3>
            <ul className="space-y-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
              <li>200 → doscientos / doscientas</li>
              <li>300 → trescientos / trescientas</li>
              <li>400 → cuatrocientos / cuatrocientas</li>
              <li>500 → quinientos / quinientas (irregular)</li>
              <li>600 → seiscientos / seiscientas</li>
              <li>700 → setecientos / setecientas (irregular)</li>
              <li>800 → ochocientos / ochocientas</li>
              <li>900 → novecientos / novecientas (irregular)</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-muted/30 p-6">
            <h3 className="text-lg font-black uppercase mb-3">
              Agreement Rule
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Hundreds agree in gender with the noun.
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <p>• doscientos libros</p>
              <p>• doscientas casas</p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-muted/30 p-6">
            <h3 className="text-lg font-black uppercase mb-3">Examples</h3>
            <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <p>• 500 libros → quinientos libros</p>
              <p>• 700 personas → setecientas personas</p>
              <p>• 900 coches → novecientos coches</p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-muted/30 p-6">
            <h3 className="text-lg font-black uppercase mb-3">Practice 1</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Choose the correct form.
            </p>
            <div className="grid gap-4">
              {practiceItems.slice(0, 3).map((item) => (
                <div key={item.id} className="grid gap-2">
                  <span className="text-sm font-semibold">{item.prompt}</span>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      placeholder="Answer"
                      className={`w-full rounded-xl border px-3 py-2 text-sm outline-none transition ${feedback[item.id] === "correct" ? "border-emerald-500 bg-emerald-500/5" : feedback[item.id] === "incorrect" ? "border-rose-500 bg-rose-500/5" : "border-border focus:border-indigo-400"}`}
                      onChange={(e) =>
                        handleInputChange(item.id, e.target.value)
                      }
                    />
                    <button
                      onClick={() => checkAnswer(item.id, item.answer)}
                      className="inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-4 py-2 text-sm font-black text-white transition hover:bg-indigo-700"
                    >
                      Check
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[11px] text-muted-foreground italic">
              Answers: 1) trescientas | 2) ochocientos | 3) quinientas
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b-2 border-indigo-600 pb-2">
          <ArrowRight className="text-indigo-600 shrink-0" />
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter">
            Part 2 — Thousands (mil)
          </h2>
        </div>

        <div className="grid gap-6">
          <div className="rounded-3xl border border-border bg-muted/30 p-6">
            <h3 className="text-lg font-black uppercase mb-3">Core Rules</h3>
            <ul className="space-y-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
              <li>1,000 → mil (never un mil)</li>
              <li>2,000 → dos mil</li>
              <li>10,000 → diez mil</li>
              <li>100,000 → cien mil</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-muted/30 p-6">
            <h3 className="text-lg font-black uppercase mb-3">Key Rule</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              <b>Mil</b> never takes a plural <b>-s</b> and is never preceded by{" "}
              <b>un</b>.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-muted/30 p-6">
            <h3 className="text-lg font-black uppercase mb-3">Examples</h3>
            <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <p>• 1,000 personas → mil personas</p>
              <p>• 5,000 euros → cinco mil euros</p>
              <p>• 12,400 → doce mil cuatrocientos</p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-muted/30 p-6">
            <h3 className="text-lg font-black uppercase mb-3">Practice 2</h3>
            <div className="grid gap-4">
              {practiceItems.slice(3, 5).map((item) => (
                <div key={item.id} className="grid gap-2">
                  <span className="text-sm font-semibold">{item.prompt}</span>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      placeholder="Answer"
                      className={`w-full rounded-xl border px-3 py-2 text-sm outline-none transition ${feedback[item.id] === "correct" ? "border-emerald-500 bg-emerald-500/5" : feedback[item.id] === "incorrect" ? "border-rose-500 bg-rose-500/5" : "border-border focus:border-indigo-400"}`}
                      onChange={(e) =>
                        handleInputChange(item.id, e.target.value)
                      }
                    />
                    <button
                      onClick={() => checkAnswer(item.id, item.answer)}
                      className="inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-4 py-2 text-sm font-black text-white transition hover:bg-indigo-700"
                    >
                      Check
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[11px] text-muted-foreground italic">
              Answers: 1) mil | 2) tres mil
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b-2 border-indigo-600 pb-2">
          <ArrowRight className="text-indigo-600 shrink-0" />
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter">
            Part 3 — Millions and Billions
          </h2>
        </div>

        <div className="grid gap-6">
          <div className="rounded-3xl border border-border bg-muted/30 p-6">
            <h3 className="text-lg font-black uppercase mb-3">Core Forms</h3>
            <ul className="space-y-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
              <li>1,000,000 → un millón</li>
              <li>2,000,000 → dos millones</li>
              <li>1,000,000,000 → mil millones</li>
              <li>1,000,000,000,000 → un billón</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-muted/30 p-6">
            <h3 className="text-lg font-black uppercase mb-3">Critical Rule</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Spanish uses the long scale:
            </p>
            <p className="mt-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
              English billion = Spanish <b>mil millones</b>
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-muted/30 p-6">
            <h3 className="text-lg font-black uppercase mb-3">Examples</h3>
            <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <p>• 1,000,000 habitantes → un millón de habitantes</p>
              <p>• 5,000,000 euros → cinco millones de euros</p>
              <p>• 2,000,000,000 → dos mil millones</p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-muted/30 p-6">
            <h3 className="text-lg font-black uppercase mb-3">Practice 3</h3>
            <div className="grid gap-4">
              {practiceItems.slice(5, 7).map((item) => (
                <div key={item.id} className="grid gap-2">
                  <span className="text-sm font-semibold">{item.prompt}</span>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      placeholder="Answer"
                      className={`w-full rounded-xl border px-3 py-2 text-sm outline-none transition ${feedback[item.id] === "correct" ? "border-emerald-500 bg-emerald-500/5" : feedback[item.id] === "incorrect" ? "border-rose-500 bg-rose-500/5" : "border-border focus:border-indigo-400"}`}
                      onChange={(e) =>
                        handleInputChange(item.id, e.target.value)
                      }
                    />
                    <button
                      onClick={() => checkAnswer(item.id, item.answer)}
                      className="inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-4 py-2 text-sm font-black text-white transition hover:bg-indigo-700"
                    >
                      Check
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[11px] text-muted-foreground italic">
              Answers: 1) un millón | 2) mil millones
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b-2 border-indigo-600 pb-2">
          <ArrowRight className="text-indigo-600 shrink-0" />
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter">
            Part 4 — Reading Large Numbers (Structure)
          </h2>
        </div>

        <div className="grid gap-6">
          <div className="rounded-3xl border border-border bg-muted/30 p-6">
            <h3 className="text-lg font-black uppercase mb-3">Reading Order</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
              <li>Millions</li>
              <li>Thousands</li>
              <li>Hundreds</li>
              <li>Tens + units</li>
            </ol>
          </div>

          <div className="rounded-3xl border border-border bg-muted/30 p-6">
            <h3 className="text-lg font-black uppercase mb-3">Examples</h3>
            <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
              <div>
                <p className="font-semibold">23,577,912,734</p>
                <p>→ veintitrés mil quinientos setenta y siete millones</p>
                <p className="ml-4">
                  novecientos doce mil setecientos treinta y cuatro
                </p>
              </div>
              <div>
                <p className="font-semibold">821,934,560,888</p>
                <p>
                  → ochocientos veintiún mil novecientos treinta y cuatro
                  millones
                </p>
                <p className="ml-4">
                  quinientos sesenta mil ochocientos ochenta y ocho
                </p>
              </div>
              <div>
                <p className="font-semibold">555,999,777,222</p>
                <p>
                  → quinientos cincuenta y cinco mil novecientos noventa y nueve
                  millones
                </p>
                <p className="ml-4">
                  setecientos setenta y siete mil doscientos veintidós
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-muted/30 p-6">
            <h3 className="text-lg font-black uppercase mb-3">Practice 4</h3>
            <div className="grid gap-4">
              {practiceItems.slice(7, 9).map((item) => (
                <div key={item.id} className="grid gap-2">
                  <span className="text-sm font-semibold">{item.prompt}</span>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      placeholder="Answer"
                      className={`w-full rounded-xl border px-3 py-2 text-sm outline-none transition ${feedback[item.id] === "correct" ? "border-emerald-500 bg-emerald-500/5" : feedback[item.id] === "incorrect" ? "border-rose-500 bg-rose-500/5" : "border-border focus:border-indigo-400"}`}
                      onChange={(e) =>
                        handleInputChange(item.id, e.target.value)
                      }
                    />
                    <button
                      onClick={() => checkAnswer(item.id, item.answer)}
                      className="inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-4 py-2 text-sm font-black text-white transition hover:bg-indigo-700"
                    >
                      Check
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[11px] text-muted-foreground italic">
              Answers: 1) setecientos mil | 2) novecientos millones
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b-2 border-indigo-600 pb-2">
          <ArrowRight className="text-indigo-600 shrink-0" />
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter">
            Part 5 — Quick Quiz
          </h2>
        </div>

        <div className="grid gap-6">
          <div className="rounded-3xl border border-border bg-muted/30 p-6">
            <h3 className="text-lg font-black uppercase mb-3">
              Quiz A — True or False
            </h3>
            <div className="space-y-4">
              {practiceItems.slice(9, 11).map((item) => (
                <div key={item.id} className="grid gap-2">
                  <span className="text-sm font-semibold">{item.prompt}</span>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      placeholder="true / false"
                      className={`w-full rounded-xl border px-3 py-2 text-sm outline-none transition ${feedback[item.id] === "correct" ? "border-emerald-500 bg-emerald-500/5" : feedback[item.id] === "incorrect" ? "border-rose-500 bg-rose-500/5" : "border-border focus:border-indigo-400"}`}
                      onChange={(e) =>
                        handleInputChange(item.id, e.target.value)
                      }
                    />
                    <button
                      onClick={() => checkAnswer(item.id, item.answer)}
                      className="inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-4 py-2 text-sm font-black text-white transition hover:bg-indigo-700"
                    >
                      Check
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[11px] text-muted-foreground italic">
              Answers: 1) False | 2) True
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-muted/30 p-6">
            <h3 className="text-lg font-black uppercase mb-3">
              Quiz B — Write in Spanish
            </h3>
            <div className="space-y-4">
              {practiceItems.slice(11, 13).map((item) => (
                <div key={item.id} className="grid gap-2">
                  <span className="text-sm font-semibold">{item.prompt}</span>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      placeholder="Spanish phrase"
                      className={`w-full rounded-xl border px-3 py-2 text-sm outline-none transition ${feedback[item.id] === "correct" ? "border-emerald-500 bg-emerald-500/5" : feedback[item.id] === "incorrect" ? "border-rose-500 bg-rose-500/5" : "border-border focus:border-indigo-400"}`}
                      onChange={(e) =>
                        handleInputChange(item.id, e.target.value)
                      }
                    />
                    <button
                      onClick={() => checkAnswer(item.id, item.answer)}
                      className="inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-4 py-2 text-sm font-black text-white transition hover:bg-indigo-700"
                    >
                      Check
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="p-6 md:p-12 bg-indigo-950 text-white rounded-3xl border border-indigo-800 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Globe size={120} />
        </div>
        <h2 className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-6 border-b border-indigo-400/20 pb-4">
          Writing Practice
        </h2>
        <div className="space-y-4 text-[11px] opacity-80 leading-relaxed">
          <p className="font-bold text-indigo-400 uppercase tracking-tighter">
            Your Challenge:
          </p>
          <p>
            Use what you learned about hundreds, thousands, and large numbers to
            make sentences and read numbers clearly.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 p-2 bg-white/5 rounded border border-white/10">
              <ArrowRight size={12} className="mt-1 shrink-0 text-indigo-400" />
              <span>Write a sentence with a number between 200 and 900.</span>
            </li>
            <li className="flex items-start gap-2 p-2 bg-white/5 rounded border border-white/10">
              <ArrowRight size={12} className="mt-1 shrink-0 text-indigo-400" />
              <span>
                Write a sentence using <b>mil</b> correctly.
              </span>
            </li>
            <li className="flex items-start gap-2 p-2 bg-white/5 rounded border border-white/10">
              <ArrowRight size={12} className="mt-1 shrink-0 text-indigo-400" />
              <span>Write one large number using millions or billions.</span>
            </li>
          </ul>
        </div>
        <textarea
          className="w-full min-h-[160px] bg-white/5 border border-indigo-700 rounded-2xl p-4 text-xs outline-none focus:border-indigo-400 transition-colors placeholder:opacity-30 resize-none font-mono leading-relaxed"
          placeholder="Ejemplo: Tengo trescientas plumas.\nEjemplo: Vivimos en mil casas.\nEjemplo: Hay cinco millones de estrellas."
        />
      </section>

      <div className="pt-10 border-t border-border opacity-30 text-center">
        <p className="text-[10px] font-black uppercase tracking-widest">
          End of Lesson 32 • 2026 Academic Core
        </p>
      </div>
    </div>
  );
};

export default grammar_lesson_32;
