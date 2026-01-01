"use client";
import type React from "react";
import { useState } from "react";
import { User, Baby, HelpCircle, Zap, Shirt } from "lucide-react";

/**
 * Lesson 13: Diminutives & Describing People
 * Fixed layout issues, smaller titles, and dark mode visibility.
 */

const grammar_lesson_13: React.FC = () => {
  const [reveals, setReveals] = useState<{ [key: string]: boolean }>({});

  const toggleReveal = (id: string) => {
    setReveals((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="mx-auto w-full max-w-6xl space-y-20 px-4 pb-40 pt-10 sm:px-6 transition-colors duration-300">
      {/* SECTION 1: THE SUFFIX -ITO / -ITA */}
      <section className="space-y-10">
        <div className="flex items-center gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-700 text-xl font-black text-white shadow-md">
            1
          </div>
          <div className="space-y-0.5">
            <h2 className="text-2xl font-black uppercase italic tracking-tight text-emerald-900 dark:text-emerald-50">
              The Suffix -ito / -ita
            </h2>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
              Indicating size, affection, and softening
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl border border-border bg-card shadow-sm space-y-6">
            <h3 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-800 dark:text-emerald-400">
              <Baby size={18} /> Diminutive Logic
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Adding <b>-ito</b> or <b>-ita</b> doesn't just mean "small." It
              often communicates endearment or makes an adjective feel less
              harsh.
            </p>

            <div className="space-y-3">
              {[
                { label: "Small Size", ex: "Perro → Perrito (Small dog)" },
                { label: "Affection", ex: "Abuela → Abuelita (Sweet grandma)" },
                { label: "Softening", ex: "Feo → Feíto (A bit plain)" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/50"
                >
                  <p className="text-[10px] font-black text-emerald-800 dark:text-emerald-300 uppercase tracking-widest mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-bold text-emerald-950 dark:text-emerald-100">
                    {item.ex}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { b: "Casa", d: "Casita", e: "Small house" },
              { b: "Niña", d: "Niñita", e: "Little girl" },
              { b: "Gato", d: "Gatito", e: "Kitten" },
              { b: "Tonto", d: "Tontito", e: "A bit silly" },
              { b: "Viejo", d: "Viejito", e: "Old man (dear)" },
              { b: "Poco", d: "Poquito", e: "A tiny bit" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-border bg-card hover:bg-emerald-50 dark:hover:bg-emerald-900/10 transition-colors group"
              >
                <p className="text-[10px] font-bold text-muted-foreground uppercase">
                  {item.b}
                </p>
                <p className="text-lg font-black text-emerald-700 dark:text-emerald-400 italic leading-none my-1">
                  {item.d}
                </p>
                <p className="text-[9px] text-muted-foreground uppercase font-medium">
                  {item.e}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: THE TRIAD OF DESCRIPTION */}
      <section className="space-y-10">
        <div className="flex items-center gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-700 text-xl font-black text-white shadow-md">
            2
          </div>
          <div className="space-y-0.5">
            <h2 className="text-2xl font-black uppercase italic tracking-tight text-emerald-900 dark:text-emerald-50">
              Describing People
            </h2>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
              Choosing between Ser, Tener, and Llevar
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              v: "Ser",
              icon: <User size={20} />,
              t: "Permanent Traits",
              d: "Defining characteristics like height, personality, or identity.",
              ex: "Es alto / Es simpática.",
            },
            {
              v: "Tener",
              icon: <Zap size={20} />,
              t: "Age & Features",
              d: "Physical traits you 'possess' (eyes, hair) and your age.",
              ex: "Tiene 20 años / Tiene ojos verdes.",
            },
            {
              v: "Llevar",
              icon: <Shirt size={20} />,
              t: "Temporary Features",
              d: "External items like clothing, accessories, or facial hair style.",
              ex: "Lleva gafas / Lleva barba.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-border bg-card space-y-4 shadow-sm relative overflow-hidden group"
            >
              <div className="flex items-center gap-3 text-emerald-700 dark:text-emerald-400">
                {card.icon}
                <h4 className="text-xl font-black uppercase italic tracking-tighter">
                  {card.v}
                </h4>
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase text-emerald-600 dark:text-emerald-500 tracking-widest">
                  {card.t}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {card.d}
                </p>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-xs font-black text-emerald-900 dark:text-emerald-100 italic">
                  {card.ex}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: CONJUGATION TABLES */}
      <section className="space-y-10">
        <div className="flex items-center gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-700 text-xl font-black text-white shadow-md">
            3
          </div>
          <div className="space-y-0.5">
            <h2 className="text-2xl font-black uppercase italic tracking-tight text-emerald-900 dark:text-emerald-50">
              Present Tense Conjugations
            </h2>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
              Grammar breakdown for descriptive verbs
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border overflow-hidden rounded-xl border border-border shadow-xl">
          {/* SER */}
          <div className="bg-card p-6 space-y-6">
            <h5 className="text-center font-black uppercase tracking-widest text-emerald-700 dark:text-emerald-400 text-xs italic">
              Verb: Ser
            </h5>
            <div className="space-y-1">
              {[
                ["Yo", "soy"],
                ["Tú", "eres"],
                ["Él/Ella", "es"],
                ["Nosotros", "somos"],
                ["Vosotros", "sois"],
                ["Ellos", "son"],
              ].map(([p, v], i) => (
                <div
                  key={i}
                  className="flex justify-between p-2.5 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <span className="text-[11px] text-muted-foreground font-bold">
                    {p}
                  </span>
                  <span className="text-sm font-black text-foreground">
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* TENER */}
          <div className="bg-card p-6 space-y-6">
            <h5 className="text-center font-black uppercase tracking-widest text-emerald-700 dark:text-emerald-400 text-xs italic">
              Verb: Tener
            </h5>
            <div className="space-y-1">
              {[
                ["Yo", "tengo"],
                ["Tú", "tienes"],
                ["Él/Ella", "tiene"],
                ["Nosotros", "tenemos"],
                ["Vosotros", "tenéis"],
                ["Ellos", "tienen"],
              ].map(([p, v], i) => (
                <div
                  key={i}
                  className="flex justify-between p-2.5 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <span className="text-[11px] text-muted-foreground font-bold">
                    {p}
                  </span>
                  <span className="text-sm font-black text-foreground">
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* LLEVAR */}
          <div className="bg-card p-6 space-y-6">
            <h5 className="text-center font-black uppercase tracking-widest text-emerald-700 dark:text-emerald-400 text-xs italic">
              Verb: Llevar
            </h5>
            <div className="space-y-1">
              {[
                ["Yo", "llevo"],
                ["Tú", "llevas"],
                ["Él/Ella", "lleva"],
                ["Nosotros", "llevamos"],
                ["Vosotros", "lleváis"],
                ["Ellos", "llevan"],
              ].map(([p, v], i) => (
                <div
                  key={i}
                  className="flex justify-between p-2.5 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <span className="text-[11px] text-muted-foreground font-bold">
                    {p}
                  </span>
                  <span className="text-sm font-black text-foreground">
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PRACTICE LABS */}
      <section className="space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black tracking-tight uppercase italic text-emerald-900 dark:text-emerald-50">
            Competency Labs
          </h2>
          <p className="text-muted-foreground text-[11px] font-bold uppercase tracking-widest">
            Exercise Suite A1.13
          </p>
        </div>

        {/* LAB A: FILL THE BLANKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              id: "L13_A1",
              q: "1. El gato es muy _____ y pequeño.",
              a: "gatito",
              hint: "Hint: Small size",
            },
            {
              id: "L13_A2",
              q: "2. Mi abuela es _____ y cariñosa.",
              a: "abuelita",
              hint: "Hint: Affection",
            },
            {
              id: "L13_A3",
              q: "3. Él _____ ojos verdes.",
              a: "tiene",
              hint: "Hint: Physical trait",
            },
            {
              id: "L13_A4",
              q: "4. Nosotros _____ altos y simpáticos.",
              a: "somos",
              hint: "Hint: Permanent trait",
            },
            {
              id: "L13_A5",
              q: "5. Ella _____ una chaqueta roja.",
              a: "lleva",
              hint: "Hint: Temporary feature",
            },
          ].map((item) => (
            <div
              key={item.id}
              onClick={() => toggleReveal(item.id)}
              className="p-8 rounded-xl border border-border bg-card cursor-pointer hover:border-emerald-700 dark:hover:border-emerald-400 transition-all shadow-sm group"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-[9px] font-black text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2.5 py-1 rounded-full">
                  TASK {item.id.split("_")[1]}
                </span>
                <HelpCircle
                  size={14}
                  className="text-muted-foreground/30 group-hover:text-emerald-500 transition-colors"
                />
              </div>
              <p className="text-base font-bold text-foreground leading-relaxed">
                {item.q}
              </p>
              <div
                className={`mt-4 transition-all duration-500 ${
                  reveals[item.id]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
              >
                <p className="text-xl font-black text-emerald-700 dark:text-emerald-400 italic">
                  {item.a}
                </p>
                <p className="text-[10px] text-muted-foreground mt-1 uppercase font-bold">
                  {item.hint}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* LAB B: MULTIPLE CHOICE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              id: "L13_B1",
              q: "Which suffix indicates smallness or affection?",
              opt: "A) -ito | B) -mente | C) -ón",
              a: "A) -ito/-ita",
            },
            {
              id: "L13_B2",
              q: "Which verb describes permanent character traits?",
              opt: "A) Tener | B) Ser | C) Llevar",
              a: "B) Ser",
            },
            {
              id: "L13_B3",
              q: "Correct verb for temporary features or clothing:",
              opt: "A) Tener | B) Llevar | C) Ser",
              a: "B) Llevar",
            },
          ].map((item) => (
            <div
              key={item.id}
              onClick={() => toggleReveal(item.id)}
              className="p-8 rounded-xl border-2 border-border bg-card cursor-pointer hover:bg-muted/5 transition-all group"
            >
              <p className="text-[10px] font-black uppercase text-emerald-700 dark:text-emerald-400 mb-4 tracking-widest">
                Multiple Choice
              </p>
              <p className="text-sm font-bold mb-4 leading-snug">{item.q}</p>
              <p className="text-xs text-muted-foreground font-mono mb-6">
                {item.opt}
              </p>
              <div
                className={`transition-all duration-300 ${
                  reveals[item.id] ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="h-px bg-border w-full mb-4" />
                <p className="text-lg font-black text-emerald-800 dark:text-emerald-300">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* LAB C: TRANSLATION */}
        <div className="p-10 rounded-xl border border-emerald-100 dark:border-emerald-800 bg-emerald-50/20 dark:bg-emerald-950/10 space-y-8">
          <h4 className="text-center text-xs font-black uppercase tracking-[0.3em] text-emerald-900 dark:text-emerald-100 italic">
            Translation Lab
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { id: "T1", en: "She is a little old.", es: "Ella es viejita." },
              {
                id: "T2",
                en: "He has short hair.",
                es: "Él tiene el pelo corto.",
              },
              { id: "T3", en: "I'm wearing glasses.", es: "Llevo gafas." },
            ].map((item) => (
              <div
                key={item.id}
                onClick={() => toggleReveal(item.id)}
                className="bg-card p-6 rounded-xl border border-border shadow-sm text-center cursor-pointer transition-colors hover:border-emerald-500"
              >
                <p className="text-[11px] text-muted-foreground mb-3 font-medium uppercase tracking-tighter italic">
                  "{item.en}"
                </p>
                <div
                  className={`text-base font-black text-emerald-700 dark:text-emerald-400 transition-all ${
                    reveals[item.id]
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  {item.es}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER: QUICK REFERENCE */}
      <footer className="space-y-12 pt-10">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-full" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {[
            {
              t: "Suffixes",
              d: "-ito / -ita for size, love, or softening intensity.",
            },
            {
              t: "Ser",
              d: "Permanent traits: height, character, nationality.",
            },
            {
              t: "Tener",
              d: "Physical assets you 'have' and chronological age.",
            },
            {
              t: "Llevar",
              d: "External style: clothes, glasses, beard, makeup.",
            },
          ].map((log, i) => (
            <div
              key={i}
              className="space-y-2 border-l-2 border-emerald-700/20 dark:border-emerald-400/20 pl-6"
            >
              <h6 className="text-[9px] font-black uppercase tracking-widest text-emerald-700 dark:text-emerald-400 italic">
                Ref 0{i + 1}
              </h6>
              <p className="text-xs font-black text-emerald-900 dark:text-emerald-100 leading-tight">
                {log.t}
              </p>
              <p className="text-[10px] text-muted-foreground/80 leading-relaxed">
                {log.d}
              </p>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default grammar_lesson_13;
