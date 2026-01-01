"use client";
import type React from "react";
import { useState, useEffect } from "react";
import {
  Zap,
  RotateCcw,
  Check,
  ChevronRight,
  Info,
  AlertTriangle,
  Users,
  User,
  Activity,
  ArrowRightLeft,
  Layout,
  MessageCircle,
  Brain,
  Moon,
  Volume2,
  Gamepad2,
  HelpCircle,
  BookOpen,
  Sparkles,
  Search,
  CheckCircle2,
  XCircle,
  Dna,
} from "lucide-react";

/**
 * LESSON 17: PRESENTE - IRREGULAR VERBS (PART 1)
 * Optimized for clarity, depth, and scannability.
 */

const grammar_lesson_17: React.FC = () => {
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
    const totalRequired = 16;
    const currentCorrect = Object.values(feedback).filter(
      (v) => v === "correct"
    ).length;
    setProgress((currentCorrect / totalRequired) * 100);
  }, [feedback]);

  return (
    <div className="mx-auto w-full max-w-5xl space-y-32 px-4 pb-40 pt-10 sm:px-6 bg-background text-foreground transition-all duration-500">
      {/* 1. INTRODUCTION & OVERVIEW */}
      <header className="space-y-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
            <Sparkles size={14} /> Gramática Avanzada: Nivel A1
          </div>
          <h1 className="text-4xl font-black uppercase tracking-tighter sm:text-6xl text-emerald-950 dark:text-emerald-50">
            Presente: Verbos Irregulares
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground italic">
            Conjugating irregular verbs is the heart of natural Spanish.
            Irregularities occur in three ways: unique "yo" forms, stem changes
            (boot verbs), or complete structural shifts. In Part 1, we master
            the <strong>Stem-Changing Patterns</strong> and the pillars of the
            language: <strong>Ser</strong> and <strong>Ir</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
          <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50 space-y-3 text-center">
            <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-emerald-600 text-white">
              <Dna size={20} />
            </div>
            <h4 className="text-xs font-bold uppercase tracking-widest">
              Stem Changes
            </h4>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Vowels in the root change (e→ie, o→ue, e→i, u→ue) but only in
              specific persons.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50 space-y-3 text-center">
            <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-emerald-600 text-white">
              <Users size={20} />
            </div>
            <h4 className="text-xs font-bold uppercase tracking-widest">
              The "Boot" Rule
            </h4>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Changes occur in Yo, Tú, Él, and Ellos. Nosotros and Vosotros
              remain 100% regular.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50 space-y-3 text-center">
            <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-emerald-600 text-white">
              <Zap size={20} />
            </div>
            <h4 className="text-xs font-bold uppercase tracking-widest">
              Pure Irregulars
            </h4>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Verbs like Ser and Ir follow no pattern and must be memorized as
              complete units.
            </p>
          </div>
        </div>
      </header>

      {/* 2. THE BOOT VERB PHENOMENON */}
      <section className="space-y-12">
        <div className="flex items-start gap-4 border-b border-border pb-6">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-800 text-white shadow-xl">
            <Activity size={24} />
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl font-black uppercase tracking-tight">
              Pattern: The Boot Rule
            </h2>
            <p className="text-xs text-muted-foreground italic tracking-wide">
              Understanding "Verbos con cambio vocálico"
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 sm:p-12 space-y-6 bg-muted/30">
              <h3 className="text-lg font-bold">How it works:</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                When a verb is "stem-changing," the vowel in the stem (the part
                before -ar, -er, or -ir) changes when it receives the stress of
                the pronunciation.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex gap-4 items-center p-4 rounded-xl bg-background border border-border">
                  <div className="size-3 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="text-xs font-bold uppercase tracking-widest">
                    Yo / Tú / Él / Ellos{" "}
                    <span className="text-emerald-600 ml-2">→ CHANGE</span>
                  </p>
                </div>
                <div className="flex gap-4 items-center p-4 rounded-xl bg-background border border-border opacity-60">
                  <div className="size-3 rounded-full bg-muted-foreground" />
                  <p className="text-xs font-bold uppercase tracking-widest">
                    Nosotros / Vosotros <span className="ml-2">→ REGULAR</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="p-8 flex items-center justify-center bg-emerald-900 text-white relative">
              <div className="text-center space-y-4">
                <Layout size={48} className="mx-auto opacity-20" />
                <p className="text-xs font-mono uppercase tracking-[0.3em] opacity-60">
                  Visual Layout
                </p>
                <div className="grid grid-cols-2 gap-2 text-[10px] font-bold font-mono">
                  <div className="p-2 border border-emerald-400 rounded text-emerald-400 bg-emerald-400/10">
                    YO: [Δ]
                  </div>
                  <div className="p-2 border border-white/20 rounded opacity-40">
                    NOS: [=]
                  </div>
                  <div className="p-2 border border-emerald-400 rounded text-emerald-400 bg-emerald-400/10">
                    TÚ: [Δ]
                  </div>
                  <div className="p-2 border border-white/20 rounded opacity-40">
                    VOS: [=]
                  </div>
                  <div className="p-2 border border-emerald-400 rounded text-emerald-400 bg-emerald-400/10 col-span-2">
                    ELLOS: [Δ]
                  </div>
                </div>
                <p className="text-[10px] italic opacity-50">
                  Δ = Stem Change | = = Regular
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. E -> IE (PENSAR & ENTENDER) */}
      <section className="space-y-12">
        <div className="flex items-center gap-4 border-b border-border pb-6">
          <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 font-black">
            E
          </div>
          <h2 className="text-2xl font-black uppercase tracking-tight">
            Cambio: e → ie
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Entender */}
          <div className="space-y-6">
            <div className="flex items-end justify-between border-b-2 border-emerald-500/20 pb-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-black italic text-emerald-800 dark:text-emerald-100 uppercase tracking-tighter">
                  Entender
                </h3>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  To Understand
                </p>
              </div>
              <div className="px-3 py-1 bg-emerald-700 text-white rounded-full text-[10px] font-bold">
                e → ie
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {[
                { p: "Yo", c: "entiendo", e: "I understand", boot: true },
                { p: "Tú", c: "entiendes", e: "You understand", boot: true },
                {
                  p: "Él/Ella/Ud.",
                  c: "entiende",
                  e: "He/She understands",
                  boot: true,
                },
                {
                  p: "Nosotros",
                  c: "entendemos",
                  e: "We understand",
                  boot: false,
                },
                {
                  p: "Vosotros",
                  c: "entendéis",
                  e: "You all understand",
                  boot: false,
                },
                {
                  p: "Ellos/Uds.",
                  c: "entienden",
                  e: "They understand",
                  boot: true,
                },
              ].map((row, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                    row.boot
                      ? "border-emerald-500/30 bg-emerald-500/5"
                      : "border-border bg-card"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-black text-muted-foreground w-16 uppercase">
                      {row.p}
                    </span>
                    <span
                      className={`font-mono text-base font-bold ${
                        row.boot ? "text-emerald-600" : "text-foreground"
                      }`}
                    >
                      {row.c}
                    </span>
                  </div>
                  <span className="text-[10px] italic text-muted-foreground">
                    {row.e}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Pensar */}
          <div className="space-y-6">
            <div className="flex items-end justify-between border-b-2 border-emerald-500/20 pb-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-black italic text-emerald-800 dark:text-emerald-100 uppercase tracking-tighter">
                  Pensar
                </h3>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  To Think
                </p>
              </div>
              <div className="px-3 py-1 bg-emerald-700 text-white rounded-full text-[10px] font-bold">
                e → ie
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {[
                { p: "Yo", c: "pienso", e: "I think", boot: true },
                { p: "Tú", c: "piensas", e: "You think", boot: true },
                {
                  p: "Él/Ella/Ud.",
                  c: "piensa",
                  e: "He/She thinks",
                  boot: true,
                },
                { p: "Nosotros", c: "pensamos", e: "We think", boot: false },
                {
                  p: "Vosotros",
                  c: "pensáis",
                  e: "You all think",
                  boot: false,
                },
                { p: "Ellos/Uds.", c: "piensan", e: "They think", boot: true },
              ].map((row, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                    row.boot
                      ? "border-emerald-500/30 bg-emerald-500/5"
                      : "border-border bg-card"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-black text-muted-foreground w-16 uppercase">
                      {row.p}
                    </span>
                    <span
                      className={`font-mono text-base font-bold ${
                        row.boot ? "text-emerald-600" : "text-foreground"
                      }`}
                    >
                      {row.c}
                    </span>
                  </div>
                  <span className="text-[10px] italic text-muted-foreground">
                    {row.e}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-muted/20 border border-border space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">
              More e → ie Verbs
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "Cerrar", m: "To close" },
                { v: "Perder", m: "To lose" },
                { v: "Querer", m: "To want" },
                { v: "Preferir", m: "To prefer" },
                { v: "Empezar", m: "To start" },
                { v: "Comenzar", m: "To begin" },
              ].map((v, i) => (
                <div
                  key={i}
                  className="flex flex-col border-l-2 border-emerald-500/20 pl-3"
                >
                  <span className="text-xs font-bold">{v.v}</span>
                  <span className="text-[9px] text-muted-foreground italic">
                    {v.m}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-8 rounded-2xl bg-orange-50 dark:bg-orange-950/10 border border-orange-200 dark:border-orange-900/50 flex flex-col justify-center gap-4">
            <div className="flex items-center gap-2 text-orange-600">
              <AlertTriangle size={18} />
              <h4 className="text-[10px] font-bold uppercase tracking-widest">
                False Alarms
              </h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Not every verb with an "e" changes. Verbs like{" "}
              <strong>comprender</strong> (to comprehend) and{" "}
              <strong>aprender</strong> (to learn) are 100% regular.
            </p>
            <div className="text-[10px] font-mono italic p-2 bg-white dark:bg-black/20 rounded border border-orange-100 dark:border-orange-900/30">
              "Yo comprendo" (NOT compriendo)
            </div>
          </div>
        </div>
      </section>

      {/* 4. REFLEXIVE STEM-CHANGERS */}
      <section className="space-y-12">
        <div className="flex items-center gap-4 border-b border-border pb-6">
          <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-800 text-white font-black">
            <Users size={18} />
          </div>
          <h2 className="text-2xl font-black uppercase tracking-tight">
            Reflexive Stem-Changers
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Sentarse */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-600">
              Sentarse (To Sit Down)
            </h3>
            <div className="space-y-1 font-mono text-xs">
              {[
                { p: "Yo", c: "me siento" },
                { p: "Nos.", c: "nos sentamos" },
                { p: "Tú", c: "te sientas" },
                { p: "Vos.", c: "os sentáis" },
                { p: "Él", c: "se sienta" },
                { p: "Ellos", c: "se sientan" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between p-3 bg-card border border-border rounded-lg group hover:border-emerald-500/50 transition-colors"
                >
                  <span className="text-muted-foreground">{item.p}</span>
                  <span className="font-bold text-emerald-700 dark:text-emerald-400">
                    {item.c}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sentirse */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-600">
              Sentirse (To Feel)
            </h3>
            <div className="space-y-1 font-mono text-xs">
              {[
                { p: "Yo", c: "me siento" },
                { p: "Nos.", c: "nos sentimos" },
                { p: "Tú", c: "te sientes" },
                { p: "Vos.", c: "os sentís" },
                { p: "Él", c: "se siente" },
                { p: "Ellos", c: "se sienten" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between p-3 bg-card border border-border rounded-lg group hover:border-emerald-500/50 transition-colors"
                >
                  <span className="text-muted-foreground">{item.p}</span>
                  <span className="font-bold text-emerald-700 dark:text-emerald-400">
                    {item.c}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-emerald-950 text-emerald-200 p-6 rounded-2xl border border-emerald-800 flex gap-4 items-start">
          <Info className="shrink-0 text-emerald-400 mt-1" size={20} />
          <p className="text-xs leading-relaxed italic">
            <strong>Observation:</strong> "Yo me siento" can mean "I sit down"
            or "I feel" depending on the context. The verb endings (-ar vs -ir)
            only diverge starting from the "Tú" form.
          </p>
        </div>
      </section>

      {/* 5. O -> UE (DORMIR & VOLVER) */}
      <section className="space-y-12">
        <div className="flex items-center gap-4 border-b border-border pb-6">
          <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 font-black">
            O
          </div>
          <h2 className="text-2xl font-black uppercase tracking-tight">
            Cambio: o → ue
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Dormir */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Moon size={20} className="text-emerald-600" />
              <h3 className="text-lg font-bold">
                Dormir{" "}
                <span className="text-[10px] text-muted-foreground font-normal ml-2">
                  (To Sleep)
                </span>
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { p: "Yo", v: "duermo" },
                { p: "Nos.", v: "dormimos" },
                { p: "Tú", v: "duermes" },
                { p: "Vos.", v: "dormís" },
                { p: "Él", v: "duerme" },
                { p: "Ellos", v: "duermen" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-border bg-card text-center space-y-1"
                >
                  <p className="text-[9px] uppercase font-black text-muted-foreground">
                    {item.p}
                  </p>
                  <p className="text-sm font-mono font-black italic text-emerald-700 dark:text-emerald-400">
                    {item.v}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Volver */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <RotateCcw size={20} className="text-emerald-600" />
              <h3 className="text-lg font-bold">
                Volver{" "}
                <span className="text-[10px] text-muted-foreground font-normal ml-2">
                  (To Return)
                </span>
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { p: "Yo", v: "vuelvo" },
                { p: "Nos.", v: "volvemos" },
                { p: "Tú", v: "vuelves" },
                { p: "Vos.", v: "volvéis" },
                { p: "Él", v: "vuelve" },
                { p: "Ellos", v: "vuelven" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-border bg-card text-center space-y-1"
                >
                  <p className="text-[9px] uppercase font-black text-muted-foreground">
                    {item.p}
                  </p>
                  <p className="text-sm font-mono font-black italic text-emerald-700 dark:text-emerald-400">
                    {item.v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-dashed border-emerald-500/30 p-8 space-y-6">
          <h4 className="text-xs font-black uppercase tracking-widest text-emerald-600 flex items-center gap-2">
            <BookOpen size={16} /> Extended Vocabulary: o → ue
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { v: "Costar", m: "To cost", ex: "¿Cuánto cuesta?" },
              { v: "Poder", m: "To be able to", ex: "No puedo ir." },
              { v: "Almorzar", m: "To eat lunch", ex: "Almuerzo solo." },
              { v: "Encontrar", m: "To find", ex: "No encuentro mis llaves." },
              { v: "Acostarse", m: "To go to bed", ex: "Me acuesto tarde." },
              { v: "Mover", m: "To move", ex: "Muevo la mesa." },
              { v: "Contar", m: "To count/tell", ex: "Cuento una historia." },
              { v: "Doler", m: "To hurt", ex: "Me duele la cabeza." },
            ].map((item, i) => (
              <div key={i} className="space-y-1">
                <p className="text-sm font-bold text-foreground">{item.v}</p>
                <p className="text-[10px] text-muted-foreground italic">
                  {item.m}
                </p>
                <p className="text-[10px] font-mono text-emerald-600 opacity-70">
                  {item.ex}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. E -> I (EXCLUSIVELY -IR VERBS) */}
      <section className="space-y-12">
        <div className="flex items-center gap-4 border-b border-border pb-6">
          <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 font-black">
            I
          </div>
          <h2 className="text-2xl font-black uppercase tracking-tight">
            Cambio: e → i
          </h2>
        </div>

        <div className="bg-muted/30 p-6 rounded-2xl border border-border flex items-center gap-4">
          <Zap className="text-emerald-600" />
          <p className="text-xs text-muted-foreground italic font-medium">
            This specific change (e → i){" "}
            <strong>only happens in -ir verbs</strong>. It never occurs in -ar
            or -er verbs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-6">
          {/* Elegir */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <h3 className="text-lg font-bold italic">Elegir (To Choose)</h3>
              <span className="text-[10px] bg-emerald-900 text-emerald-400 px-2 py-1 rounded font-mono font-bold">
                Orthographic shift
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              {[
                { p: "Yo", v: "elijo", note: "g → j" },
                { p: "Nos.", v: "elegimos" },
                { p: "Tú", v: "eliges" },
                { p: "Vos.", v: "elegís" },
                { p: "Él", v: "elige" },
                { p: "Ellos", v: "eligen" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-card border border-border flex flex-col gap-1 hover:border-emerald-500/40 transition-all"
                >
                  <span className="text-[9px] uppercase font-black text-muted-foreground opacity-50">
                    {item.p}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400">
                      {item.v}
                    </span>
                    {item.note && (
                      <span className="text-[8px] bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 px-1 rounded font-bold uppercase tracking-tighter">
                        {item.note}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decir */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <h3 className="text-lg font-bold italic">Decir (To Say/Tell)</h3>
              <span className="text-[10px] bg-emerald-900 text-emerald-400 px-2 py-1 rounded font-mono font-bold">
                Extra Irregular
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              {[
                { p: "Yo", v: "digo", note: "Yo-go" },
                { p: "Nos.", v: "decimos" },
                { p: "Tú", v: "dices" },
                { p: "Vos.", v: "decís" },
                { p: "Él", v: "dice" },
                { p: "Ellos", v: "dicen" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-card border border-border flex flex-col gap-1 hover:border-emerald-500/40 transition-all"
                >
                  <span className="text-[9px] uppercase font-black text-muted-foreground opacity-50">
                    {item.p}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400">
                      {item.v}
                    </span>
                    {item.note && (
                      <span className="text-[8px] bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-1 rounded font-bold uppercase tracking-tighter">
                        {item.note}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. U -> UE (JUGAR) */}
      <section className="space-y-12">
        <div className="flex items-center gap-4 border-b border-border pb-6">
          <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 font-black">
            U
          </div>
          <h2 className="text-2xl font-black uppercase tracking-tight">
            Cambio: u → ue
          </h2>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-emerald-950 text-white flex flex-col lg:flex-row gap-16 items-center border border-emerald-800 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 text-[60px] font-black opacity-5 select-none pointer-events-none uppercase">
            ONLY ONE
          </div>
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4 text-emerald-400">
              <Gamepad2 size={40} className="shrink-0" />
              <h3 className="text-4xl font-black italic tracking-tighter">
                JUGAR
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-emerald-100/70 italic">
              <strong>Important:</strong> Spanish has exactly one verb that
              follows the u → ue shift. It is essential for sports, tabletop
              games, and video games.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold">
                Fútbol
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold">
                Baloncesto
              </span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold">
                Videojuegos
              </span>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4 w-full">
            {[
              { p: "Yo", v: "juego" },
              { p: "Nos.", v: "jugamos" },
              { p: "Tú", v: "juegas" },
              { p: "Vos.", v: "jugáis" },
              { p: "Él", v: "juega" },
              { p: "Ellos", v: "juegan" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 bg-white/5 border border-white/10 rounded-2xl flex justify-between items-center group hover:bg-white/10 transition-all"
              >
                <span className="text-[10px] font-black opacity-50 uppercase">
                  {item.p}
                </span>
                <span className="font-mono font-black text-emerald-400 text-lg">
                  {item.v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. COMPLETELY IRREGULAR: SER & IR */}
      <section className="space-y-12">
        <div className="flex items-start gap-4 border-b border-border pb-6">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-800 text-white shadow-xl">
            <Sparkles size={24} />
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl font-black uppercase tracking-tight">
              Completely Irregular Pillars
            </h2>
            <p className="text-xs text-muted-foreground italic tracking-wide">
              No patterns, only memory.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden border border-border shadow-2xl">
          {/* SER */}
          <div className="bg-card p-10 sm:p-16 space-y-10">
            <div className="text-center space-y-3">
              <div className="inline-block px-4 py-1 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-200 dark:border-emerald-800">
                Essence
              </div>
              <h3 className="text-5xl font-black text-emerald-800 dark:text-emerald-100 tracking-tighter">
                SER
              </h3>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground italic">
                To Be (Permanent)
              </p>
            </div>
            <div className="space-y-3">
              {[
                { p: "Yo", v: "soy" },
                { p: "Tú", v: "eres" },
                { p: "Él/Ella/Ud.", v: "es" },
                { p: "Nosotros", v: "somos" },
                { p: "Vosotros", v: "sois" },
                { p: "Ellos/Uds.", v: "son" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-4 border border-border rounded-xl hover:bg-muted/50 transition-all group"
                >
                  <span className="text-[10px] font-black text-muted-foreground uppercase group-hover:text-emerald-600">
                    {item.p}
                  </span>
                  <span className="text-xl font-mono font-black text-emerald-600">
                    {item.v}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* IR */}
          <div className="bg-emerald-900 p-10 sm:p-16 space-y-10 text-white relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 text-[180px] font-black text-white/5 pointer-events-none uppercase">
              GO
            </div>
            <div className="text-center space-y-3 relative z-10">
              <div className="inline-block px-4 py-1 bg-white/10 text-emerald-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
                Movement
              </div>
              <h3 className="text-5xl font-black text-emerald-400 tracking-tighter">
                IR
              </h3>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-200/50 italic">
                To Go
              </p>
            </div>
            <div className="space-y-3 relative z-10">
              {[
                { p: "Yo", v: "voy" },
                { p: "Tú", v: "vas" },
                { p: "Él/Ella/Ud.", v: "va" },
                { p: "Nosotros", v: "vamos" },
                { p: "Vosotros", v: "vais" },
                { p: "Ellos/Uds.", v: "van" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-4 border border-white/10 rounded-xl hover:bg-white/5 transition-all group"
                >
                  <span className="text-[10px] font-black text-emerald-200/40 uppercase group-hover:text-emerald-400">
                    {item.p}
                  </span>
                  <span className="text-xl font-mono font-black text-emerald-400">
                    {item.v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KNOWLEDGE LAB */}
      <section className="space-y-12">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex size-16 items-center justify-center rounded-3xl bg-emerald-700 text-white shadow-2xl">
            <Brain size={32} />
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tighter">
            Knowledge Lab: Part 1
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl italic italic leading-relaxed">
            Test your command of the stem-changers and core irregulars. Every
            correct answer builds your linguistic foundation.
          </p>
          <div className="w-64 h-2 bg-muted rounded-full overflow-hidden mt-4">
            <div
              className="h-full bg-emerald-500 transition-all duration-1000"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">
            Progress: {Math.round(progress)}%
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              id: "L1",
              label: "Yo / Entender",
              q: "I understand.",
              a: "entiendo",
            },
            { id: "L2", label: "Tú / Cerrar", q: "You close.", a: "cierras" },
            { id: "L3", label: "Él / Querer", q: "He wants.", a: "quiere" },
            {
              id: "L4",
              label: "Nosotros / Pensar",
              q: "We think.",
              a: "pensamos",
            },
            { id: "L5", label: "Yo / Volver", q: "I return.", a: "vuelvo" },
            { id: "L6", label: "Tú / Poder", q: "You can.", a: "puedes" },
            { id: "L7", label: "Ella / Dormir", q: "She sleeps.", a: "duerme" },
            {
              id: "L8",
              label: "Nosotros / Volver",
              q: "We return.",
              a: "volvemos",
            },
            { id: "L9", label: "Yo / Elegir", q: "I choose.", a: "elijo" },
            { id: "L10", label: "Ellos / Decir", q: "They say.", a: "dicen" },
            {
              id: "L11",
              label: "Nosotros / Decir",
              q: "We say.",
              a: "decimos",
            },
            { id: "L12", label: "Yo / Jugar", q: "I play.", a: "juego" },
            {
              id: "L13",
              label: "Nosotros / Jugar",
              q: "We play.",
              a: "jugamos",
            },
            { id: "L14", label: "Yo / Ir", q: "I go.", a: "voy" },
            { id: "L15", label: "Ellos / Ir", q: "They go.", a: "van" },
            { id: "L16", label: "Tú / Ser", q: "You are.", a: "eres" },
          ].map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-xl border border-border bg-card space-y-3 shadow-sm flex flex-col justify-between"
            >
              <div>
                <p className="text-[9px] font-black text-emerald-600 uppercase tracking-widest mb-1">
                  {item.label}
                </p>
                <p className="text-[11px] text-muted-foreground italic mb-3">
                  "{item.q}"
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="relative">
                  <input
                    type="text"
                    className={`w-full bg-muted/50 border border-border rounded-lg pl-3 pr-8 py-2 text-xs font-mono outline-none focus:ring-1 focus:ring-emerald-500/50 ${
                      feedback[item.id] === "correct"
                        ? "border-emerald-500/50"
                        : feedback[item.id] === "incorrect"
                        ? "border-red-500/50"
                        : ""
                    }`}
                    onChange={(e) => handleInputChange(item.id, e.target.value)}
                  />
                  {feedback[item.id] === "correct" && (
                    <CheckCircle2
                      className="absolute right-2 top-2.5 text-emerald-500"
                      size={14}
                    />
                  )}
                  {feedback[item.id] === "incorrect" && (
                    <XCircle
                      className="absolute right-2 top-2.5 text-red-500"
                      size={14}
                    />
                  )}
                </div>
                <button
                  onClick={() => checkAnswer(item.id, item.a)}
                  className="w-full bg-emerald-700 hover:bg-emerald-600 text-white py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-colors"
                >
                  Verify
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUMMARY TABLES FOOTER */}
      <footer className="pt-20 border-t border-border">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h5 className="text-[10px] font-black uppercase tracking-widest text-emerald-600">
              The e → ie Shift
            </h5>
            <p className="text-[11px] text-muted-foreground italic">
              Affects: Pensar, Querer, Entender, Empezar, Preferir.
            </p>
          </div>
          <div className="space-y-4">
            <h5 className="text-[10px] font-black uppercase tracking-widest text-emerald-600">
              The o → ue Shift
            </h5>
            <p className="text-[11px] text-muted-foreground italic">
              Affects: Dormir, Poder, Volver, Almorzar, Encontrar.
            </p>
          </div>
          <div className="space-y-4">
            <h5 className="text-[10px] font-black uppercase tracking-widest text-emerald-600">
              The e → i Shift (-ir)
            </h5>
            <p className="text-[11px] text-muted-foreground italic">
              Affects: Pedir, Elegir, Decir, Servir, Medir.
            </p>
          </div>
          <div className="space-y-4">
            <h5 className="text-[10px] font-black uppercase tracking-widest text-emerald-600">
              The Outliers
            </h5>
            <p className="text-[11px] text-muted-foreground italic">
              Jugar (u→ue), Ser (Complete), Ir (Complete).
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 py-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex flex-col items-center gap-2"
          >
            <RotateCcw
              size={24}
              className="text-muted-foreground group-hover:text-emerald-500 transition-colors"
            />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
              Restart Lesson
            </span>
          </button>

          <div className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-[0.5em] mt-10">
            Lesson 17 • Part 1 of 3 • Optimized Web Experience
          </div>
        </div>
      </footer>
    </div>
  );
};

export default grammar_lesson_17;
