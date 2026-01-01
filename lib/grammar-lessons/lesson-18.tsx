"use client";
import type React from "react";
import { useState, useEffect, useMemo } from "react";
import {
  Zap,
  RotateCcw,
  Check,
  ChevronRight,
  Info,
  AlertTriangle,
  Users,
  Activity,
  ArrowRightLeft,
  Layout,
  MessageCircle,
  Brain,
  Sparkles,
  Search,
  CheckCircle2,
  XCircle,
  Hammer,
  Eye,
  HandHelping,
  Navigation,
  Ear,
  Construction,
  Languages,
  BookOpen,
  PencilLine,
  GraduationCap,
  Lightbulb,
  Trophy,
  ListChecks,
  Target,
  ArrowUpRight,
  Flame,
  Layers,
  Wand2,
  Volume2,
} from "lucide-react";

/**
 * GRAMMAR_LESSON_18: PRESENTE - IRREGULAR VERBS (PART 2)
 * Fixes: Giant fonts normalized, Layout scannability improved,
 * Content preserved in full.
 */

const grammar_lesson_18: React.FC = () => {
  const [userInputs, setUserInputs] = useState<{ [key: string]: string }>({});
  const [feedback, setFeedback] = useState<{
    [key: string]: "correct" | "incorrect" | null;
  }>({});
  const [progress, setProgress] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const practiceItems = useMemo(
    () => [
      { id: "M1", label: "Yo / Conocer", q: "I know.", a: "conozco" },
      { id: "M2", label: "Yo / Traducir", q: "I translate.", a: "traduzco" },
      { id: "M3", label: "Yo / Salir", q: "I leave.", a: "salgo" },
      { id: "M4", label: "Yo / Saber", q: "I know (facts).", a: "sé" },
      { id: "M5", label: "Yo / Caber", q: "I fit.", a: "quepo" },
      { id: "M6", label: "Yo / Tener", q: "I have.", a: "tengo" },
      { id: "M7", label: "Tú / Tener", q: "You have.", a: "tienes" },
      { id: "M8", label: "Nos. / Tener", q: "We have.", a: "tenemos" },
      { id: "M9", label: "Yo / Venir", q: "I come.", a: "vengo" },
      { id: "M10", label: "Él / Venir", q: "He comes.", a: "viene" },
      { id: "M11", label: "Yo / Decir", q: "I say.", a: "digo" },
      { id: "M12", label: "Uds. / Decir", q: "You all say.", a: "dicen" },
      { id: "M13", label: "Yo / Seguir", q: "I follow.", a: "sigo" },
      { id: "M14", label: "Tú / Seguir", q: "You follow.", a: "sigues" },
      { id: "M15", label: "Yo / Oír", q: "I hear.", a: "oigo" },
      { id: "M16", label: "Tú / Oír", q: "You hear.", a: "oyes" },
      { id: "M17", label: "Nos. / Oír", q: "We hear.", a: "oímos" },
      { id: "M18", label: "Yo / Influir", q: "I influence.", a: "influyo" },
      { id: "M19", label: "Él / Destruir", q: "He destroys.", a: "destruye" },
      {
        id: "M20",
        label: "Nos. / Construir",
        q: "We build.",
        a: "construimos",
      },
    ],
    []
  );

  const handleInputChange = (id: string, val: string) => {
    setUserInputs((prev) => ({ ...prev, [id]: val.toLowerCase().trim() }));
  };

  const checkAnswer = (id: string, correct: string) => {
    const isCorrect = userInputs[id] === correct.toLowerCase();
    setFeedback((prev) => ({
      ...prev,
      [id]: isCorrect ? "correct" : "incorrect",
    }));
    if (isCorrect && feedback[id] !== "correct") setScore((s) => s + 1);
  };

  useEffect(() => {
    const correctCount = Object.values(feedback).filter(
      (v) => v === "correct"
    ).length;
    setProgress((correctCount / practiceItems.length) * 100);
  }, [feedback, practiceItems.length]);

  return (
    <div className="mx-auto w-full max-w-5xl space-y-24 px-6 pb-40 pt-12 bg-background text-foreground transition-all duration-300">
      {/* HEADER SECTION */}
      <header className="space-y-6 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800">
          <Sparkles size={14} /> Lesson 18: Advanced Conjugation
        </div>
        <h1 className="text-3xl font-black uppercase tracking-tight sm:text-5xl">
          Presente: Verbos Irregulares <span className="text-blue-600">II</span>
        </h1>
        <p className="text-sm leading-relaxed text-muted-foreground font-medium">
          In this module, we master phonetic transformers, "Go-verbs," and
          double irregularities. These patterns ensure Spanish remains melodic
          and phonetically consistent.
        </p>
      </header>

      {/* SECTION C: -ZCO PHENOMENON */}
      <section className="space-y-8">
        <div className="flex items-center gap-4 border-b border-border pb-4">
          <div className="flex size-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
            <Volume2 size={20} />
          </div>
          <h2 className="text-xl font-bold uppercase tracking-tight">
            C) Verbs ending in -cer / -cir
          </h2>
        </div>

        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
          <div className="p-6 bg-muted/30 border-b border-border">
            <p className="text-xs font-semibold text-muted-foreground flex items-center gap-2">
              <Info size={14} className="text-blue-600" />
              Rule: Add <span className="text-blue-600 font-bold">-zco</span> in
              the "yo" form to preserve the soft sound (when a vowel precedes
              the ending).
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/50 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  <th className="p-4">Persona</th>
                  <th className="p-4">Obedecer</th>
                  <th className="p-4">Conocer</th>
                  <th className="p-4">Traducir</th>
                  <th className="p-4">English</th>
                </tr>
              </thead>
              <tbody className="text-xs font-mono">
                {[
                  {
                    p: "yo",
                    v1: "obedezco",
                    v2: "conozco",
                    v3: "traduzco",
                    e: "I obey / know / translate",
                    highlight: true,
                  },
                  {
                    p: "tú",
                    v1: "obedeces",
                    v2: "conoces",
                    v3: "traduces",
                    e: "you obey / know / translate",
                  },
                  {
                    p: "él/ella/ud.",
                    v1: "obedece",
                    v2: "conoce",
                    v3: "traduce",
                    e: "he/she obeys / knows / translates",
                  },
                  {
                    p: "nosotros/as",
                    v1: "obedecemos",
                    v2: "conocemos",
                    v3: "traducimos",
                    e: "we obey / know / translate",
                  },
                  {
                    p: "vosotros/as",
                    v1: "obedecéis",
                    v2: "conocéis",
                    v3: "traducís",
                    e: "you all obey / know / translate",
                  },
                  {
                    p: "ellos/as/uds.",
                    v1: "obedecen",
                    v2: "conocen",
                    v3: "traducen",
                    e: "they obey / know / translate",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-border last:border-0 ${
                      row.highlight
                        ? "bg-blue-600/5 font-bold text-blue-700"
                        : "text-foreground"
                    }`}
                  >
                    <td className="p-4 font-sans uppercase font-black text-[9px] text-muted-foreground">
                      {row.p}
                    </td>
                    <td className="p-4">{row.v1}</td>
                    <td className="p-4">{row.v2}</td>
                    <td className="p-4">{row.v3}</td>
                    <td className="p-4 font-sans italic text-muted-foreground text-[10px]">
                      {row.e}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* IRREGULAR YO VERBS */}
      <section className="space-y-8">
        <div className="flex items-center gap-4 border-b border-border pb-4">
          <div className="flex size-10 items-center justify-center rounded-xl bg-blue-800 text-white">
            <Zap size={20} />
          </div>
          <h2 className="text-xl font-bold uppercase tracking-tight">
            Irregular "Yo" Verbs
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {[
            { v: "poner", yo: "pongo", m: "I put" },
            { v: "salir", yo: "salgo", m: "I leave / go out" },
            { v: "hacer", yo: "hago", m: "I do / make" },
            { v: "saber", yo: "sé", m: "I know (facts)" },
            { v: "dar", yo: "doy", m: "I give" },
            { v: "ver", yo: "veo", m: "I see" },
            { v: "traer", yo: "traigo", m: "I bring" },
            { v: "caer", yo: "caigo", m: "I fall" },
            { v: "caber", yo: "quepo", m: "I fit" },
            { v: "estar", yo: "estoy", m: "I am (temporary)" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-xl border border-border bg-card flex flex-col items-center text-center hover:border-blue-500/50 transition-colors"
            >
              <span className="text-[9px] font-black uppercase text-muted-foreground mb-1">
                {item.v}
              </span>
              <span className="text-lg font-black font-mono text-blue-600 leading-none mb-1">
                {item.yo}
              </span>
              <span className="text-[10px] italic text-muted-foreground">
                {item.m}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION D: DOUBLE IRREGULARITY */}
      <section className="space-y-12">
        <div className="flex items-center gap-4 border-b border-border pb-4">
          <div className="flex size-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
            <ArrowRightLeft size={20} />
          </div>
          <h2 className="text-xl font-bold uppercase tracking-tight">
            D) Double Irregularity
          </h2>
        </div>

        <p className="text-sm text-muted-foreground max-w-2xl bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-xl border border-indigo-100 dark:border-indigo-900/50">
          These verbs feature two irregular traits: an{" "}
          <span className="font-bold">irregular yo form</span> and a{" "}
          <span className="font-bold">stem change</span> in other forms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* TENER & VENIR */}
          {[
            {
              name: "Tener (to have)",
              yo: "tengo",
              stem: "e → ie",
              conj: [
                { p: "yo", v: "tengo" },
                { p: "tú", v: "tienes" },
                { p: "él/ella", v: "tiene" },
                { p: "nosotros", v: "tenemos" },
                { p: "vosotros", v: "tenéis" },
                { p: "ellos", v: "tienen" },
              ],
            },
            {
              name: "Venir (to come)",
              yo: "vengo",
              stem: "e → ie",
              conj: [
                { p: "yo", v: "vengo" },
                { p: "tú", v: "vienes" },
                { p: "él/ella", v: "viene" },
                { p: "nosotros", v: "venimos" },
                { p: "vosotros", v: "venís" },
                { p: "ellos", v: "vienen" },
              ],
            },
          ].map((verb, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm"
            >
              <div className="p-4 bg-muted border-b border-border flex justify-between items-center">
                <h3 className="text-sm font-black uppercase">{verb.name}</h3>
                <span className="text-[10px] font-bold bg-white dark:bg-slate-800 px-2 py-0.5 rounded border border-border">
                  Stem: {verb.stem}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-px bg-border">
                {verb.conj.map((item, i) => (
                  <div
                    key={i}
                    className="bg-card p-3 flex justify-between items-center"
                  >
                    <span className="text-[9px] font-bold text-muted-foreground uppercase">
                      {item.p}
                    </span>
                    <span
                      className={`text-xs font-mono font-bold ${
                        item.p === "yo" ? "text-blue-600" : "text-foreground"
                      }`}
                    >
                      {item.v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* DECIR, SEGUIR, OÍR */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Decir (to say)",
              yo: "digo",
              stem: "e → i",
              conj: ["digo", "dices", "dice", "decimos", "decís", "dicen"],
            },
            {
              name: "Seguir (to follow)",
              yo: "sigo",
              stem: "e → i (drops u)",
              conj: ["sigo", "sigues", "sigue", "seguimos", "seguís", "siguen"],
            },
            {
              name: "Oír (to hear)",
              yo: "oigo",
              stem: "y-change + accents",
              conj: ["oigo", "oyes", "oye", "oímos", "oís", "oyen"],
            },
          ].map((verb, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-2xl overflow-hidden"
            >
              <div className="p-3 bg-muted/50 border-b border-border text-center">
                <h4 className="text-[11px] font-black uppercase">
                  {verb.name}
                </h4>
                <p className="text-[9px] text-muted-foreground">
                  Yo: {verb.yo}
                </p>
              </div>
              <div className="p-3 grid grid-cols-2 gap-2">
                {verb.conj.map((v, i) => (
                  <div
                    key={i}
                    className="text-center font-mono text-[11px] py-1 bg-muted/20 rounded border border-border/50"
                  >
                    {v}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION E: -UIR VERBS */}
      <section className="space-y-8">
        <div className="flex items-center gap-4 border-b border-border pb-4">
          <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
            <Construction size={20} />
          </div>
          <h2 className="text-xl font-bold uppercase tracking-tight">
            E) Verbs with “-uir” that take “-y-”
          </h2>
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-950/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-900/50 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-3">
            <h3 className="text-sm font-black uppercase text-emerald-800 dark:text-emerald-400">
              Influir (to influence)
            </h3>
            <p className="text-xs text-muted-foreground">
              Pattern: Add <strong>-y-</strong> in all forms except
              nosotros/vosotros.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["construir", "destruir", "sustituir"].map((v) => (
                <span
                  key={v}
                  className="px-2 py-1 rounded bg-white dark:bg-emerald-900 border border-emerald-200 dark:border-emerald-800 text-[10px] font-bold text-emerald-700 dark:text-emerald-300 font-mono italic"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-2 w-full max-w-sm">
            {[
              "influyo",
              "influimos",
              "influyes",
              "influís",
              "influye",
              "influyen",
            ].map((v, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-900 p-2 text-center text-xs font-mono font-black border border-emerald-100 dark:border-emerald-800 rounded-lg"
              >
                {v}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KNOWLEDGE LAB */}
      <section className="space-y-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="size-16 flex items-center justify-center bg-blue-600 text-white rounded-2xl shadow-xl">
            <Brain size={32} />
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tight">
            Knowledge Lab
          </h2>
          <div className="w-full max-w-md h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
            Mastery: {Math.round(progress)}% • Score: {score}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
          {practiceItems.map((item) => (
            <div
              key={item.id}
              className={`p-4 rounded-xl border bg-card space-y-3 shadow-sm transition-all ${
                feedback[item.id] === "correct"
                  ? "border-emerald-500 ring-2 ring-emerald-500/10"
                  : feedback[item.id] === "incorrect"
                  ? "border-red-500 ring-2 ring-red-500/10"
                  : "border-border hover:border-blue-500/30"
              }`}
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
                  {item.label}
                </span>
                {feedback[item.id] === "correct" ? (
                  <CheckCircle2 className="text-emerald-500" size={14} />
                ) : feedback[item.id] === "incorrect" ? (
                  <XCircle className="text-red-500" size={14} />
                ) : (
                  <div className="size-3.5 rounded-full border-2 border-muted" />
                )}
              </div>
              <p className="text-xs font-medium italic text-muted-foreground">
                "{item.q}"
              </p>
              <div className="space-y-2">
                <input
                  type="text"
                  className="w-full bg-muted/50 border border-border rounded-lg px-3 py-2 text-xs font-mono outline-none focus:ring-1 focus:ring-blue-500/50"
                  onChange={(e) => handleInputChange(item.id, e.target.value)}
                  placeholder="Type translation..."
                />
                <button
                  onClick={() => checkAnswer(item.id, item.a)}
                  className="w-full bg-blue-700 hover:bg-blue-600 text-white py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-colors shadow-sm active:scale-95"
                >
                  Verify
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-20 border-t border-border flex flex-col items-center gap-6">
        <div className="flex gap-8 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
          <span className="flex items-center gap-1">
            <Check size={14} /> -zco phonetics
          </span>
          <span className="flex items-center gap-1">
            <Check size={14} /> Go-verbs
          </span>
          <span className="flex items-center gap-1">
            <Check size={14} /> -uir shift
          </span>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex flex-col items-center gap-2"
        >
          <RotateCcw
            size={20}
            className="text-muted-foreground group-hover:text-blue-500 transition-colors"
          />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
            Restart Lesson
          </span>
        </button>
        <div className="text-[9px] font-bold text-muted-foreground/40 uppercase tracking-[0.5em] mt-8">
          Grammar Lesson 18 • 2026 Edition
        </div>
      </footer>
    </div>
  );
};

export default grammar_lesson_18;
