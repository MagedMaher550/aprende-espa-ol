"use client";
import type React from "react";
import { useState, useEffect } from "react";
import {
  ArrowRightLeft,
  ChevronRight,
  Heart,
  RotateCcw,
  Zap,
  Check,
  Scale,
  PlusCircle,
  Equal,
  Timer,
} from "lucide-react";

const grammar_lesson_15: React.FC = () => {
  const [reveals, setReveals] = useState<{ [key: string]: boolean }>({});
  const [userInputs, setUserInputs] = useState<{ [key: string]: string }>({});
  const [feedback, setFeedback] = useState<{
    [key: string]: "correct" | "incorrect" | null;
  }>({});
  const [progress, setProgress] = useState<number>(0);

  const toggleReveal = (id: string) => {
    setReveals((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleInputChange = (id: string, val: string) => {
    setUserInputs((prev) => ({ ...prev, [id]: val.toLowerCase().trim() }));
  };

  const checkAnswer = (id: string, correct: string) => {
    if (userInputs[id] === correct.toLowerCase().trim()) {
      setFeedback((prev) => ({ ...prev, [id]: "correct" }));
    } else {
      setFeedback((prev) => ({ ...prev, [id]: "incorrect" }));
    }
  };

  useEffect(() => {
    const totalPossible = 16;
    const currentCorrect = Object.values(feedback).filter(
      (v) => v === "correct"
    ).length;
    setProgress((currentCorrect / totalPossible) * 100);
  }, [feedback]);

  return (
    <div className="mx-auto w-full max-w-5xl space-y-20 px-4 pb-40 pt-10 sm:px-6 transition-all duration-500 bg-background text-foreground">
      {/* 1. COMPARISONS OF EQUALITY */}
      <section className="space-y-10">
        <div className="flex items-start gap-4 border-b border-emerald-500/20 pb-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-700 text-lg font-bold text-white shadow-md">
            1
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold uppercase tracking-tight text-emerald-900 dark:text-emerald-50">
              Comparaciones de Igualdad
            </h2>
            <p className="text-xs leading-relaxed text-muted-foreground italic">
              Used to show that two things or people share the same quality,
              quantity, or manner.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Quality */}
          <div className="space-y-6 p-6 rounded-xl border border-border bg-card/50">
            <div className="flex items-center gap-2">
              <Equal size={18} className="text-emerald-600" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-800 dark:text-emerald-300">
                A. Equality of Quality
              </h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-emerald-950 text-emerald-50 border border-emerald-800 text-center">
                <code className="text-sm font-mono">
                  tan + [adjective/adverb] + como
                </code>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {[
                  {
                    es: "Mi casa es tan grande como la tuya.",
                    en: "My house is as big as yours.",
                  },
                  {
                    es: "Este hotel es tan cómodo como aquel.",
                    en: "This hotel is as comfortable as that one.",
                  },
                  {
                    es: "Ella corre tan rápido como su hermano.",
                    en: "She runs as fast as her brother.",
                  },
                  {
                    es: "El clima aquí es tan bueno como en Egipto.",
                    en: "The weather here is as good as in Egypt.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg border border-border bg-background hover:border-emerald-500/30 transition-all"
                  >
                    <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                      {item.es}
                    </p>
                    <p className="text-[10px] text-muted-foreground italic">
                      {item.en}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quantity */}
          <div className="space-y-6 p-6 rounded-xl border border-border bg-card/50">
            <div className="flex items-center gap-2">
              <Scale size={18} className="text-emerald-600" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-800 dark:text-emerald-300">
                B. Equality of Quantity
              </h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-emerald-950 text-emerald-50 border border-emerald-800 text-center">
                <code className="text-sm font-mono">
                  tanto/a/os/as + [noun] + como
                </code>
              </div>

              <div className="grid grid-cols-4 gap-1 text-[9px] font-bold text-center">
                <div className="p-1 rounded bg-muted">Tanto (MS)</div>
                <div className="p-1 rounded bg-muted">Tanta (FS)</div>
                <div className="p-1 rounded bg-muted">Tantos (MP)</div>
                <div className="p-1 rounded bg-muted">Tantas (FP)</div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    es: "Tengo tanto dinero como tú.",
                    en: "I have as much money as you.",
                  },
                  {
                    es: "Compro tantos libros como Ahmed.",
                    en: "I buy as many books as Ahmed.",
                  },
                  {
                    es: "Hay tantas playas como montañas.",
                    en: "There are as many beaches as mountains.",
                  },
                  {
                    es: "Tiene tanta paciencia como su madre.",
                    en: "She has as much patience as her mother.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg border border-border bg-background flex items-center gap-3"
                  >
                    <div className="size-1.5 rounded-full bg-emerald-500" />
                    <div>
                      <p className="text-xs font-bold">{item.es}</p>
                      <p className="text-[10px] text-muted-foreground italic">
                        {item.en}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="p-6 rounded-xl border border-emerald-100 dark:border-emerald-800 bg-emerald-50/20 dark:bg-emerald-950/20 space-y-6">
          <div className="flex items-center gap-2">
            <Zap size={18} className="text-emerald-600" />
            <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-800 dark:text-emerald-300">
              C. Equality in Actions
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <div className="flex-1 text-center p-4 rounded-lg bg-card border border-border">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                Structure
              </p>
              <p className="text-sm font-mono mt-1 font-bold">
                verb + tanto como
              </p>
            </div>
            <div className="flex-[2] grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { es: "Trabajo tanto como tú.", en: "I work as much as you." },
                {
                  es: "Viajan tanto como yo.",
                  en: "They travel as much as I do.",
                },
                {
                  es: "Estudio tanto como Ahmed.",
                  en: "I study as much as Ahmed.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-card border border-border text-center group"
                >
                  <p className="text-xs font-bold text-emerald-800 dark:text-emerald-400">
                    {item.es}
                  </p>
                  <p className="text-[9px] text-muted-foreground italic">
                    {item.en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPARISONS OF INEQUALITY */}
      <section className="space-y-10">
        <div className="flex items-start gap-4 border-b border-emerald-500/20 pb-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-700 text-lg font-bold text-white shadow-md">
            2
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold uppercase tracking-tight text-emerald-900 dark:text-emerald-50">
              Comparaciones de Desigualdad
            </h2>
            <p className="text-xs leading-relaxed text-muted-foreground italic">
              Used to express differences (more than / less than) between two
              things.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-border bg-card space-y-4">
            <div className="flex items-center gap-2 text-emerald-600">
              <PlusCircle size={20} />
              <h4 className="text-[10px] font-bold uppercase tracking-widest">
                A. Basic Structure
              </h4>
            </div>
            <div className="p-3 rounded-lg bg-emerald-950 text-center">
              <span className="text-xs font-mono text-emerald-400">
                más / menos ... que
              </span>
            </div>
            <div className="space-y-2 pt-2">
              {[
                {
                  es: "Más caro que ese.",
                  en: "More expensive than that one.",
                },
                {
                  es: "Más amable que su hermana.",
                  en: "Kinder than her sister.",
                },
                {
                  es: "Menos fuerte que el de casa.",
                  en: "Less strong than home coffee.",
                },
                {
                  es: "Más turistas que residentes.",
                  en: "More tourists than residents.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="border-b border-border pb-2 last:border-0"
                >
                  <p className="text-xs font-bold">{item.es}</p>
                  <p className="text-[9px] text-muted-foreground italic">
                    {item.en}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card space-y-4">
            <div className="flex items-center gap-2 text-emerald-600">
              <Zap size={20} />
              <h4 className="text-[10px] font-bold uppercase tracking-widest">
                B. With Verbs
              </h4>
            </div>
            <div className="p-3 rounded-lg bg-emerald-950 text-center">
              <span className="text-xs font-mono text-emerald-400">
                verb + más / menos que
              </span>
            </div>
            <div className="space-y-4 pt-2">
              <div className="p-3 rounded-lg bg-muted/30 border border-border">
                <p className="text-xs font-bold italic">
                  "Trabajo más que antes."
                </p>
                <p className="text-[9px] text-muted-foreground mt-1">
                  I work more than before.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-muted/30 border border-border">
                <p className="text-xs font-bold italic">
                  "Ella viaja menos que nosotros."
                </p>
                <p className="text-[9px] text-muted-foreground mt-1">
                  She travels less than us.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-emerald-700 bg-emerald-900 text-white space-y-4">
            <div className="flex items-center gap-2">
              <Timer className="text-emerald-400" size={20} />
              <h4 className="text-[10px] font-bold uppercase tracking-widest">
                C. Special Note: Numbers
              </h4>
            </div>
            <p className="text-[10px] text-emerald-100/70 italic leading-relaxed">
              When comparing specific quantities or numbers, use <b>de</b>{" "}
              instead of <b>que</b>.
            </p>
            <div className="space-y-3 pt-2">
              <div className="p-3 rounded-lg bg-white/10 border border-white/20">
                <p className="text-xs font-bold italic">
                  "Hay más de veinte..."
                </p>
                <p className="text-[9px] opacity-60">
                  More than twenty students.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-white/10 border border-white/20">
                <p className="text-xs font-bold italic">
                  "Tienen menos de diez..."
                </p>
                <p className="text-[9px] opacity-60">
                  They have less than ten minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. IRREGULAR COMPARATIVES */}
      <section className="space-y-10">
        <div className="flex items-start gap-4 border-b border-emerald-500/20 pb-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-700 text-lg font-bold text-white shadow-md">
            3
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold uppercase tracking-tight text-emerald-900 dark:text-emerald-50">
              Comparativos Irregulares
            </h2>
            <p className="text-xs leading-relaxed text-muted-foreground italic">
              Some adjectives change form completely rather than using "más" or
              "menos".
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-left text-xs">
            <thead className="bg-emerald-900 text-white text-[9px] font-bold uppercase tracking-wider">
              <tr>
                <th className="p-4">Adjective</th>
                <th className="p-4">Comparative</th>
                <th className="p-4">Superlative</th>
                <th className="p-4">Meaning</th>
              </tr>
            </thead>
            <tbody className="bg-card divide-y divide-border">
              {[
                {
                  adj: "bueno",
                  comp: "mejor",
                  sup: "el mejor",
                  mean: "better",
                },
                { adj: "malo", comp: "peor", sup: "el peor", mean: "worse" },
                {
                  adj: "grande",
                  comp: "mayor",
                  sup: "el mayor",
                  mean: "older/bigger",
                },
                {
                  adj: "pequeño",
                  comp: "menor",
                  sup: "el menor",
                  mean: "younger/smaller",
                },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-bold text-muted-foreground">
                    {row.adj}
                  </td>
                  <td className="p-4 font-bold text-emerald-700 dark:text-emerald-400 italic">
                    {row.comp}
                  </td>
                  <td className="p-4 uppercase text-[10px]">{row.sup}</td>
                  <td className="p-4 italic opacity-60">{row.mean}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              es: "Este libro es mejor que el otro.",
              en: "This book is better than the other.",
            },
            {
              es: "La película fue peor que el libro.",
              en: "The movie was worse than the book.",
            },
            {
              es: "Mi hermano es mayor que yo.",
              en: "My brother is older than me.",
            },
            {
              es: "Su hija es menor que la mía.",
              en: "His daughter is younger than mine.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-3 rounded-lg border border-border bg-card flex justify-between items-center group"
            >
              <div>
                <p className="text-xs font-bold italic">{item.es}</p>
                <p className="text-[9px] text-muted-foreground">{item.en}</p>
              </div>
              <ChevronRight
                size={14}
                className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 4. VERBS QUERER & PREFERIR */}
      <section className="space-y-10">
        <div className="flex items-start gap-4 border-b border-emerald-500/20 pb-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-700 text-lg font-bold text-white shadow-md">
            4
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold uppercase tracking-tight text-emerald-900 dark:text-emerald-50">
              Verbos "Querer" & "Preferir"
            </h2>
            <p className="text-xs leading-relaxed text-muted-foreground italic">
              Stem-changing verbs (e → ie) used to express desires and choices.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-border pb-2">
              <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-700">
                Querer (Want/Love)
              </h3>
              <Heart size={18} className="text-emerald-500" />
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { p: "Yo", v: "quiero" },
                { p: "Nosotros", v: "queremos" },
                { p: "Tú", v: "quieres" },
                { p: "Vosotros", v: "queréis" },
                { p: "Él/Ella/Ud.", v: "quiere" },
                { p: "Ellos/Uds.", v: "quieren" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between p-2 rounded bg-card border border-border"
                >
                  <span className="text-muted-foreground">{item.p}</span>
                  <span className="font-bold italic">{item.v}</span>
                </div>
              ))}
            </div>
            <div className="text-[10px] space-y-2 bg-muted/30 p-4 rounded-lg italic text-muted-foreground">
              <p>1. + Infinitive: "Quiero viajar a España."</p>
              <p>2. + Noun: "Quiero un café."</p>
              <p>3. Affection: "Te quiero." (I love you)</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-border pb-2">
              <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-700">
                Preferir (Prefer)
              </h3>
              <ArrowRightLeft size={18} className="text-emerald-500" />
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { p: "Yo", v: "prefiero" },
                { p: "Nosotros", v: "preferimos" },
                { p: "Tú", v: "prefieres" },
                { p: "Vosotros", v: "preferís" },
                { p: "Él/Ella/Ud.", v: "prefiere" },
                { p: "Ellos/Uds.", v: "prefieren" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between p-2 rounded bg-card border border-border"
                >
                  <span className="text-muted-foreground">{item.p}</span>
                  <span className="font-bold italic">{item.v}</span>
                </div>
              ))}
            </div>
            <div className="text-[10px] space-y-2 bg-muted/30 p-4 rounded-lg italic text-muted-foreground">
              <p>1. + Infinitive: "Prefiero leer que ver TV."</p>
              <p>2. + Noun: "Prefiero el té al café."</p>
              <p>3. Environments: "Prefiere las montañas a la playa."</p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-emerald-950 text-white flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h4 className="text-xs font-bold text-emerald-400 uppercase mb-2">
              Key Difference
            </h4>
            <p className="text-[10px] opacity-70 italic leading-relaxed">
              <b>Querer</b> expresses a general desire or intention.{" "}
              <b>Preferir</b> expresses a choice between options.
            </p>
          </div>
          <div className="flex-1 space-y-2 text-xs font-bold italic">
            <p className="flex items-center gap-2">
              <Check size={14} className="text-emerald-500" /> "Quiero ir a
              París." (Desire)
            </p>
            <p className="flex items-center gap-2">
              <Check size={14} className="text-emerald-500" /> "Prefiero ir a
              Roma." (Choice)
            </p>
          </div>
        </div>
      </section>

      {/* 5. EXAMPLES IN CONTEXT */}
      <section className="space-y-10">
        <div className="flex items-start gap-4 border-b border-emerald-500/20 pb-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-700 text-lg font-bold text-white shadow-md">
            5
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold uppercase tracking-tight text-emerald-900 dark:text-emerald-50">
              Examples in Context
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              es: "¿Quieres pasar unas vacaciones en una ciudad maravillosa al lado del mar?",
              en: "Do you want to spend a holiday in a wonderful city by the sea?",
            },
            {
              es: "Prefiero un lugar tranquilo para descansar.",
              en: "I prefer a quiet place to rest.",
            },
            {
              es: "Este hotel es tan bonito como el de Madrid, pero más caro.",
              en: "This hotel is as beautiful as the one in Madrid, but more expensive.",
            },
            {
              es: "El café aquí es peor que el de casa.",
              en: "The coffee here is worse than at home.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border border-border bg-card hover:bg-muted/30 transition-colors"
            >
              <p className="text-xs font-bold italic mb-2">{item.es}</p>
              <p className="text-[10px] text-muted-foreground">"{item.en}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PRACTICE LAB */}
      <section className="space-y-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-10">
          <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-700 text-lg font-bold text-white">
            6
          </div>
          <h2 className="text-2xl font-bold uppercase tracking-tight">
            Practice Lab
          </h2>
          <div className="w-40 h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all duration-1000"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest">
            Progress: {Math.round(progress)}%
          </p>
        </div>

        {/* Exercises A & B Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">
              A. Equality (tan / tanto / como)
            </h4>
            <div className="space-y-2">
              {[
                {
                  id: "A1",
                  q: "Mi ciudad es _____ bonita _____ la tuya.",
                  a: "tan / como",
                },
                {
                  id: "A2",
                  q: "Comemos _____ fruta _____ ellos.",
                  a: "tanta / como",
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-lg border border-border bg-card text-xs flex justify-between items-center group"
                >
                  <p>{item.q}</p>
                  <button
                    onClick={() => toggleReveal(item.id)}
                    className="text-[9px] uppercase font-bold text-emerald-600"
                  >
                    Reveal
                  </button>
                  {reveals[item.id] && (
                    <span className="font-bold italic text-emerald-600 ml-2 animate-in fade-in">
                      {item.a}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">
              B. Inequality (más / menos + que)
            </h4>
            <div className="space-y-2">
              {[
                {
                  id: "B1",
                  q: "Este restaurante es _____ caro _____ aquel.",
                  a: "más / que",
                },
                {
                  id: "B2",
                  q: "Tengo _____ trabajo _____ tú.",
                  a: "más / que",
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-lg border border-border bg-card text-xs flex justify-between items-center group"
                >
                  <p>{item.q}</p>
                  <button
                    onClick={() => toggleReveal(item.id)}
                    className="text-[9px] uppercase font-bold text-emerald-600"
                  >
                    Reveal
                  </button>
                  {reveals[item.id] && (
                    <span className="font-bold italic text-emerald-600 ml-2 animate-in fade-in">
                      {item.a}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Translation Synthesis */}
        <div className="p-8 rounded-xl bg-emerald-900 text-white space-y-6 shadow-xl">
          <div className="text-center space-y-1">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
              Translation Synthesis
            </h4>
            <p className="text-[9px] opacity-60">
              Translate English to Spanish
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                id: "E1",
                en: "Do you prefer the beach or the mountains?",
                es: "¿Prefieres la playa o las montañas?",
              },
              {
                id: "E2",
                en: "My house is as big as yours.",
                es: "Mi casa es tan grande como la tuya.",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-lg bg-white/5 border border-white/10 space-y-2"
              >
                <p className="text-[10px] font-bold uppercase text-emerald-200">
                  "{item.en}"
                </p>
                <button
                  onClick={() => toggleReveal(item.id)}
                  className="text-xs font-bold italic w-full text-left pt-2 border-t border-white/10"
                >
                  {reveals[item.id] ? item.es : "Click to reveal Spanish..."}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECAP TABLE */}
      <footer className="pt-10 border-t border-border">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border overflow-hidden rounded-xl border border-border">
          {[
            {
              t: "Equality (Quality)",
              s: "tan + adj + como",
              ex: "Tan alto como tú.",
            },
            {
              t: "Equality (Quantity)",
              s: "tanto/a/os/as + noun + como",
              ex: "Tantos amigos como tú.",
            },
            {
              t: "Inequality",
              s: "más/menos + adj + que",
              ex: "Más simpática que él.",
            },
            {
              t: "Irregulars",
              s: "mejor, peor, mayor, menor",
              ex: "Este vino es mejor.",
            },
            { t: "Querer", s: "Desire (+ Inf/Noun)", ex: "Quiero un café." },
            { t: "Preferir", s: "Choice (+ Inf/Noun)", ex: "Prefiero leer." },
          ].map((card, i) => (
            <div key={i} className="p-6 bg-card space-y-2">
              <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-600">
                {card.t}
              </p>
              <code className="text-xs font-mono block bg-muted p-2 rounded">
                {card.s}
              </code>
              <p className="text-[10px] italic text-muted-foreground">
                {card.ex}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6 pt-20 pb-10">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex flex-col items-center gap-2"
          >
            <RotateCcw
              size={18}
              className="text-muted-foreground group-hover:text-emerald-500 transition-colors"
            />
            <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
              Reset Lesson
            </span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default grammar_lesson_15;
