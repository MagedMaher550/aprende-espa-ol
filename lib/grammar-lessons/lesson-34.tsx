"use client";
import type React from "react";
import { useState } from "react";
import {
  User,
  Package,
  CheckCircle2,
  AlertTriangle,
  Zap,
  ShieldCheck,
  Repeat,
  Layers,
  Info,
  ArrowRight,
  HelpCircle,
  Globe,
  MinusCircle,
  PlusCircle,
  XCircle,
  Check,
} from "lucide-react";

const grammar_lesson_35: React.FC = () => {
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

  return (
    <div className="mx-auto w-full max-w-5xl space-y-12 px-4 pb-40 pt-10 sm:px-6 bg-background text-foreground font-sans overflow-x-hidden">

      {/* HEADER SECTION */}
      <section className="text-center space-y-4">
        <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 text-[10px] font-black uppercase tracking-widest mb-2">
          Intermediate Grammar
        </div>
        <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-indigo-600 uppercase">
          Lesson 35: Indefinite Words
        </h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
          Mastering the art of non-specific reference: how to talk about "someone," "nothing," or "some" with perfect agreement.
        </p>
      </section>

      {/* I. PEOPLE VS. THINGS - THE BINARY LOGIC */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b-2 border-indigo-600 pb-2">
          <Layers className="text-indigo-600 shrink-0" />
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter">I. The Indefinite Pronouns</h2>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          Spanish makes a hard distinction between <b>Humans</b> and <b>Non-Humans</b>. These pronouns never change for gender or number—they are invariable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* People Block */}
          <div className="p-6 rounded-3xl border bg-muted/30 border-border space-y-4">
            <div className="flex items-center gap-2 text-indigo-600">
              <User size={20} />
              <h3 className="font-black uppercase text-xs tracking-widest">Category: People</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background p-4 rounded-2xl border border-indigo-100 shadow-sm">
                <span className="text-[10px] font-black text-indigo-600 uppercase">Affirmative</span>
                <p className="text-xl font-black">Alguien</p>
                <p className="text-[10px] italic opacity-60">Someone / Anyone</p>
              </div>
              <div className="bg-background p-4 rounded-2xl border border-rose-100 shadow-sm">
                <span className="text-[10px] font-black text-rose-600 uppercase">Negative</span>
                <p className="text-xl font-black">Nadie</p>
                <p className="text-[10px] italic opacity-60">Nobody / No one</p>
              </div>
            </div>
            <div className="text-[11px] space-y-1 p-3 bg-indigo-50/50 rounded-xl italic border border-indigo-100/50">
              <p>• "Hay alguien en la cocina."</p>
              <p>• "No hay nadie aquí."</p>
            </div>
          </div>

          {/* Things Block */}
          <div className="p-6 rounded-3xl border bg-muted/30 border-border space-y-4">
            <div className="flex items-center gap-2 text-emerald-600">
              <Package size={20} />
              <h3 className="font-black uppercase text-xs tracking-widest">Category: Things</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background p-4 rounded-2xl border border-emerald-100 shadow-sm">
                <span className="text-[10px] font-black text-emerald-600 uppercase">Affirmative</span>
                <p className="text-xl font-black">Algo</p>
                <p className="text-[10px] italic opacity-60">Something / Anything</p>
              </div>
              <div className="bg-background p-4 rounded-2xl border border-rose-100 shadow-sm">
                <span className="text-[10px] font-black text-rose-600 uppercase">Negative</span>
                <p className="text-xl font-black">Nada</p>
                <p className="text-[10px] italic opacity-60">Nothing / Not anything</p>
              </div>
            </div>
            <div className="text-[11px] space-y-1 p-3 bg-emerald-50/50 rounded-xl italic border border-emerald-100/50">
              <p>• "¿Quieres algo de comer?"</p>
              <p>• "No tengo nada."</p>
            </div>
          </div>
        </div>
      </section>

      {/* II. THE ADJECTIVAL MATRIX - AGREEMENT */}
      <section className="bg-indigo-50 dark:bg-indigo-950/20 p-6 md:p-8 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 space-y-6">
        <h3 className="text-lg font-black uppercase text-indigo-700 flex items-center gap-2">
          <ShieldCheck size={20} /> The Adjectival Matrix (Some / Any)
        </h3>
        <p className="text-sm opacity-90 leading-relaxed">
          Unlike pronouns, these words function as <b>adjectives</b>. They must match the noun in <b>gender</b> and <b>number</b>. Note the special rule for Masculine Singular nouns.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Affirmative Matrix */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase text-indigo-600 tracking-widest border-l-2 border-indigo-600 pl-2">Affirmative: Alguno</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-background p-4 rounded-xl border border-indigo-200">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[8px] font-bold uppercase opacity-50">Masc Sing</span>
                  <Zap size={12} className="text-amber-500" />
                </div>
                <p className="text-lg font-black tracking-tight">Algún</p>
                <p className="text-[10px] opacity-60 italic">Before noun: Algún día</p>
              </div>
              <div className="bg-background p-4 rounded-xl border border-border">
                <span className="text-[8px] font-bold uppercase opacity-50">Fem Sing</span>
                <p className="text-lg font-black tracking-tight">Alguna</p>
                <p className="text-[10px] opacity-60 italic">Alguna duda</p>
              </div>
              <div className="bg-background p-4 rounded-xl border border-border">
                <span className="text-[8px] font-bold uppercase opacity-50">Masc Plur</span>
                <p className="text-lg font-black tracking-tight">Algunos</p>
                <p className="text-[10px] opacity-60 italic">Algunos libros</p>
              </div>
              <div className="bg-background p-4 rounded-xl border border-border">
                <span className="text-[8px] font-bold uppercase opacity-50">Fem Plur</span>
                <p className="text-lg font-black tracking-tight">Algunas</p>
                <p className="text-[10px] opacity-60 italic">Algunas veces</p>
              </div>
            </div>
          </div>

          {/* Negative Matrix */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase text-rose-600 tracking-widest border-l-2 border-rose-600 pl-2">Negative: Ninguno</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-background p-4 rounded-xl border border-rose-200">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[8px] font-bold uppercase opacity-50">Masc Sing</span>
                  <Zap size={12} className="text-amber-500" />
                </div>
                <p className="text-lg font-black tracking-tight">Ningún</p>
                <p className="text-[10px] opacity-60 italic">Ningún problema</p>
              </div>
              <div className="bg-background p-4 rounded-xl border border-border">
                <span className="text-[8px] font-bold uppercase opacity-50">Fem Sing</span>
                <p className="text-lg font-black tracking-tight">Ninguna</p>
                <p className="text-[10px] opacity-60 italic">Ninguna persona</p>
              </div>
              <div className="bg-background p-4 rounded-xl border border-border opacity-50">
                <span className="text-[8px] font-bold uppercase opacity-50 text-rose-500 underline">Plurals</span>
                <p className="text-xs italic leading-tight mt-1 font-medium">Rarely used in plural unless the noun is always plural (vacaciones).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* III. THE SHORTENING RULE (APOCOPE) */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b-2 border-amber-500 pb-2">
          <Zap className="text-amber-500 shrink-0" />
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter">II. The Shortening Rule (Apócope)</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <p className="text-sm leading-relaxed">
              When <b>alguno</b> or <b>ninguno</b> is placed immediately before a <b>masculine singular noun</b>, it undergoes a transformation. It is not optional; it is a rigid phonetic requirement.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono">
              <div className="p-4 bg-rose-500/5 rounded-xl border border-rose-500/20 flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-[9px] font-black text-rose-500 uppercase">Incorrect</span>
                  <p className="text-xs line-through opacity-50">alguno libro</p>
                </div>
                <XCircle size={16} className="text-rose-500" />
              </div>
              <div className="p-4 bg-emerald-500/5 rounded-xl border border-emerald-500/20 flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-[9px] font-black text-emerald-600 uppercase">Correct</span>
                  <p className="text-xs font-bold underline decoration-emerald-500 decoration-2">algún libro</p>
                </div>
                <CheckCircle2 size={16} className="text-emerald-500" />
              </div>
            </div>
          </div>
          <div className="bg-slate-900 text-white p-6 rounded-3xl flex flex-col justify-center shadow-lg border border-slate-700">
            <p className="text-[10px] font-black uppercase text-amber-500 mb-2">Accent Alert</p>
            <p className="text-sm font-medium leading-relaxed italic opacity-90">
              When you drop the "o", you must add a written accent over the "u" to preserve the phonetic stress on the last syllable.
            </p>
            <p className="text-xl font-black mt-4 text-center tracking-widest italic">ó → ú n</p>
          </div>
        </div>
      </section>

      {/* IV. NEGATIVE TRANSFORMATIONS - THE COMPARISON GRID */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b-2 border-slate-600 pb-2">
          <Repeat className="text-slate-600 shrink-0" />
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter">III. Transformation Mechanics</h2>
        </div>
        <div className="space-y-6">
          {[
            {
              type: "PEOPLE",
              aff: "Alguien ha llamado.",
              neg: "No ha llamado nadie.",
              desc: "Someone has called → Nobody has called.",
              affTerm: "Alguien",
              negTerm: "Nadie"
            },
            {
              type: "THINGS",
              aff: "Tengo algo para ti.",
              neg: "No tengo nada para ti.",
              desc: "I have something for you → I have nothing for you.",
              affTerm: "Algo",
              negTerm: "Nada"
            },
            {
              type: "ADJECTIVES (F)",
              aff: "Hay alguna solución.",
              neg: "No hay ninguna solución.",
              desc: "There is some solution → There is no solution.",
              affTerm: "Alguna",
              negTerm: "Ninguna"
            },
            {
              type: "ADJECTIVES (M)",
              aff: "He leído algún capítulo.",
              neg: "No he leído ningún capítulo.",
              desc: "I read some chapter → I read no chapter.",
              affTerm: "Algún",
              negTerm: "Ningún"
            },
            {
              type: "PRONOUNS",
              aff: "Tengo algunos.",
              neg: "No tengo ninguno.",
              desc: "I have some (of them) → I have none.",
              affTerm: "Algunos",
              negTerm: "Ninguno"
            }
          ].map((ex, i) => (
            <div key={i} className="group p-6 bg-slate-50 dark:bg-slate-900/40 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-indigo-400 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <span className="text-xs font-black text-indigo-600 tracking-widest">{ex.type}</span>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-[9px] font-bold rounded uppercase">{ex.affTerm}</span>
                  <ArrowRight size={14} className="opacity-20" />
                  <span className="px-2 py-1 bg-rose-100 dark:bg-rose-900/30 text-[9px] font-bold rounded uppercase text-rose-600">{ex.negTerm}</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase font-bold text-muted-foreground">Affirmative</p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{ex.aff}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase font-bold text-rose-500">Negative</p>
                  <p className="text-sm font-black text-slate-700 dark:text-slate-300 italic underline decoration-rose-500/30 underline-offset-4">{ex.neg}</p>
                </div>
              </div>
              <p className="mt-4 text-[10px] text-muted-foreground italic border-t border-slate-200 dark:border-slate-800 pt-2 opacity-60">
                {ex.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* V. INTERACTIVE LAB */}
      <section className="space-y-8 bg-muted/10 p-5 md:p-10 rounded-3xl border border-border shadow-inner">
        <h2 className="text-2xl md:text-3xl font-black uppercase text-center text-indigo-600">Grammar Lab: Indefinites</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Drill I */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-black uppercase text-muted-foreground border-l-4 border-indigo-600 pl-3">
              Drill I: People & Objects
            </h3>
            <div className="space-y-3">
              {[
                { id: "n1", q: "Is there anyone? → ¿Hay _______?", a: "alguien" },
                { id: "n2", q: "I see nobody. → No veo a _______.", a: "nadie" },
                { id: "n3", q: "I want something. → Quiero _______.", a: "algo" },
                { id: "n4", q: "Nothing is here. → No hay _______ aquí.", a: "nada" },
              ].map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-background rounded-xl border border-border gap-3 hover:shadow-sm transition-shadow">
                  <span className="text-xs font-bold">{item.q}</span>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="..."
                      className={`flex-1 sm:w-32 bg-muted border rounded px-2 py-1 text-xs outline-none transition-all ${feedback[item.id] === 'correct' ? 'border-emerald-500 bg-emerald-500/5 ring-1 ring-emerald-500/20' : feedback[item.id] === 'incorrect' ? 'border-rose-500 bg-rose-500/5 ring-1 ring-rose-500/20' : 'border-border focus:border-indigo-400'}`}
                      onChange={(e) => handleInputChange(item.id, e.target.value)}
                    />
                    <button onClick={() => checkAnswer(item.id, item.a)} className="text-indigo-600 hover:scale-110 transition-transform">
                      <CheckCircle2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Drill II */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-black uppercase text-muted-foreground border-l-4 border-amber-500 pl-3">
              Drill II: Adjectives & Apocope
            </h3>
            <div className="space-y-3">
              {[
                { id: "m1", q: "Some problem (masc) → _______ problema.", a: "algún" },
                { id: "m2", q: "Some ideas (fem plur) → _______ ideas.", a: "algunas" },
                { id: "m3", q: "No doubt (fem) → No tengo _______ duda.", a: "ninguna" },
                { id: "m4", q: "I have none (masc) → No tengo _______.", a: "ninguno" },
              ].map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-background rounded-xl border border-border gap-3 hover:shadow-sm transition-shadow">
                  <span className="text-xs font-bold">{item.q}</span>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="..."
                      className={`flex-1 sm:w-40 bg-muted border border-border rounded px-2 py-1 text-xs outline-none transition-all ${feedback[item.id] === 'correct' ? 'border-emerald-500 bg-emerald-500/5' : feedback[item.id] === 'incorrect' ? 'border-rose-500 bg-rose-500/5' : 'focus:border-amber-400'}`}
                      onChange={(e) => handleInputChange(item.id, e.target.value)}
                    />
                    <button onClick={() => checkAnswer(item.id, item.a)} className="text-indigo-600 hover:scale-110 transition-transform">
                      <CheckCircle2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VI. WRITING CHALLENGE */}
      <section className="p-6 md:p-12 bg-indigo-950 text-white rounded-3xl border border-indigo-800 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Globe size={120} />
        </div>
        <h2 className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-6 border-b border-indigo-400/20 pb-4">
          X. Writing Practice
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          <div className="space-y-4 text-[11px] opacity-80 leading-relaxed">
            <p className="font-bold text-indigo-400 uppercase tracking-tighter">Your Challenge:</p>
            <p>Compose four complex sentences applying the specific constraints below. Mastery of indefinites is demonstrated through perfect gender agreement and correct word order.</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 p-2 bg-white/5 rounded border border-white/10 group hover:border-indigo-400/50 transition-colors">
                <ArrowRight size={12} className="mt-1 shrink-0 text-indigo-400" />
                <span>One question asking if <b>someone</b> is in <b>some</b> place (using "algún").</span>
              </li>
              <li className="flex items-start gap-2 p-2 bg-white/5 rounded border border-white/10 group hover:border-indigo-400/50 transition-colors">
                <ArrowRight size={12} className="mt-1 shrink-0 text-indigo-400" />
                <span>One negative sentence stating you have <b>nothing</b> to do <b>today</b>.</span>
              </li>
              <li className="flex items-start gap-2 p-2 bg-white/5 rounded border border-white/10 group hover:border-indigo-400/50 transition-colors">
                <ArrowRight size={12} className="mt-1 shrink-0 text-indigo-400" />
                <span>One sentence using <b>feminine plural</b> indefinite adjectives (e.g., "algunas veces").</span>
              </li>
              <li className="flex items-start gap-2 p-2 bg-white/5 rounded border border-white/10 group hover:border-indigo-400/50 transition-colors">
                <ArrowRight size={12} className="mt-1 shrink-0 text-indigo-400" />
                <span>One sentence proving you understand "No... nadie" word order.</span>
              </li>
            </ul>
          </div>
          <div className="space-y-3 flex flex-col">
            <textarea
              className="w-full flex-1 min-h-[160px] bg-white/5 border border-indigo-700 rounded-2xl p-4 text-xs outline-none focus:border-indigo-400 transition-colors placeholder:opacity-30 resize-none font-mono leading-relaxed"
              placeholder="1. ¿Hay alguien en algún restaurante?&#10;2. No tengo nada que hacer hoy...&#10;3. ..."
            />
            <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-tighter text-indigo-500/60">
              <span>Indefinite Syntax Engine v1.0</span>
              <span>Ready for Input</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <div className="pt-10 border-t border-border opacity-30 text-center">
        <p className="text-[10px] font-black uppercase tracking-widest">End of Lesson 35 Portfolio • 2026 Academic Core</p>
      </div>
    </div>
  );
};

export default grammar_lesson_35;