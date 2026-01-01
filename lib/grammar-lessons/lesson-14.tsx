"use client";
import type React from "react";
import { useState } from "react";
import {
  MapPin,
  LogOut,
  Train,
  Bike,
  CheckCircle2,
  HelpCircle,
  RotateCcw,
  Zap,
  ArrowRight,
  Footprints,
  Clock,
  Navigation,
} from "lucide-react";

/**
 * Lesson 14: Ir vs. Irse
 * Focus: Destinations vs. Departures, Transport Prepositions.
 * Layout: Balanced dark mode, smaller titles, fixed scannability.
 */

const grammar_lesson_14: React.FC = () => {
  const [reveals, setReveals] = useState<{ [key: string]: boolean }>({});

  const toggleReveal = (id: string) => {
    setReveals((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="mx-auto w-full max-w-6xl space-y-20 px-4 pb-40 pt-10 sm:px-6 transition-colors duration-300">
      {/* SECTION 1: THE VERB IR (TO GO) */}
      <section className="space-y-10">
        <div className="flex items-center gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-700 text-xl font-black text-white shadow-md">
            1
          </div>
          <div className="space-y-0.5">
            <h2 className="text-2xl font-black uppercase italic tracking-tight text-emerald-900 dark:text-emerald-50">
              The Verb Ir — "To Go"
            </h2>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
              Movement toward a destination
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl border border-border bg-card shadow-sm space-y-6">
            <h3 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-800 dark:text-emerald-400">
              <Navigation size={18} /> Structure & Meaning
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              <b>Ir</b> indicates movement toward a destination. It is almost
              always followed by the preposition <b>"a"</b> (a + place).
            </p>

            <div className="grid grid-cols-1 gap-3">
              {[
                {
                  es: "Voy al trabajo.",
                  en: "I go to work.",
                  note: "a + el = al",
                },
                {
                  es: "Vamos a la playa.",
                  en: "We go to the beach.",
                  note: "Destination",
                },
                {
                  es: "¿A dónde vas?",
                  en: "Where are you going?",
                  note: "Inquiry",
                },
              ].map((ex, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/50"
                >
                  <div>
                    <p className="text-sm font-black text-emerald-950 dark:text-emerald-100">
                      {ex.es}
                    </p>
                    <p className="text-[10px] text-muted-foreground italic">
                      {ex.en}
                    </p>
                  </div>
                  <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-500 uppercase">
                    {ex.note}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <table className="w-full text-left text-sm border-collapse">
              <thead className="bg-emerald-900 dark:bg-emerald-950 text-white">
                <tr>
                  <th className="p-4 text-[10px] font-black uppercase tracking-widest">
                    Pronoun
                  </th>
                  <th className="p-4 text-[10px] font-black uppercase tracking-widest italic">
                    Form (Ir)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { p: "Yo", v: "voy", m: "I go" },
                  { p: "Tú", v: "vas", m: "you go" },
                  { p: "Él / Ella / Ud.", v: "va", m: "he/she/you go" },
                  { p: "Nosotros / as", v: "vamos", m: "we go" },
                  { p: "Vosotros / as", v: "vais", m: "you all go" },
                  { p: "Ellos / Ellas / Uds.", v: "van", m: "they go" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-bold text-muted-foreground text-xs">
                      {row.p}
                    </td>
                    <td className="p-4 font-black text-emerald-700 dark:text-emerald-400 italic">
                      {row.v}{" "}
                      <span className="ml-2 text-[10px] font-normal text-muted-foreground not-italic">
                        ({row.m})
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE VERB IRSE (TO LEAVE) */}
      <section className="space-y-10">
        <div className="flex items-center gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-700 text-xl font-black text-white shadow-md">
            2
          </div>
          <div className="space-y-0.5">
            <h2 className="text-2xl font-black uppercase italic tracking-tight text-emerald-900 dark:text-emerald-50">
              The Verb Irse — "To Leave"
            </h2>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
              Reflexive form emphasizing departure
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl border border-border bg-card space-y-6 shadow-sm">
            <h3 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-800 dark:text-emerald-400">
              <LogOut size={18} /> Contrast: Destination vs. Departure
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              While <b>Ir</b> focuses on where you are going, <b>Irse</b>{" "}
              focuses on the act of leaving a place.
            </p>
            <div className="space-y-3">
              <div className="flex flex-col p-4 bg-muted/30 rounded-lg border border-border">
                <span className="text-xs font-black text-emerald-900 dark:text-emerald-100 italic">
                  "Voy al cine."
                </span>
                <span className="text-[10px] uppercase text-muted-foreground">
                  Going to (Destination)
                </span>
              </div>
              <div className="flex flex-col p-4 bg-muted/30 rounded-lg border border-border">
                <span className="text-xs font-black text-emerald-900 dark:text-emerald-100 italic">
                  "Me voy del cine."
                </span>
                <span className="text-[10px] uppercase text-muted-foreground">
                  Leaving from (Departure)
                </span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-xl border border-border bg-emerald-900 dark:bg-emerald-950 text-white space-y-4">
            <h5 className="text-[10px] font-black uppercase tracking-widest text-emerald-300">
              Reflexive Conjugation (Irse)
            </h5>
            <div className="grid grid-cols-2 gap-y-2 text-xs">
              <p>
                <b>Me</b> voy
              </p>
              <p>
                <b>Nos</b> vamos
              </p>
              <p>
                <b>Te</b> vas
              </p>
              <p>
                <b>Os</b> vais
              </p>
              <p>
                <b>Se</b> va
              </p>
              <p>
                <b>Se</b> van
              </p>
            </div>
            <p className="text-[10px] text-emerald-200/60 italic pt-4 border-t border-emerald-800">
              *Always uses reflexive pronouns: me, te, se, nos, os, se.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: TRANSPORT & USAGE */}
      <section className="space-y-10">
        <div className="flex items-center gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-emerald-700 text-xl font-black text-white shadow-md">
            3
          </div>
          <div className="space-y-0.5">
            <h2 className="text-2xl font-black uppercase italic tracking-tight text-emerald-900 dark:text-emerald-50">
              Transport & Phrases
            </h2>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
              Prepositions: "En" vs. "A"
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-border bg-card shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
              <Train size={18} />
              <h4 className="text-xs font-black uppercase tracking-widest">
                En + Vehicle
              </h4>
            </div>
            <ul className="text-[11px] space-y-2 text-muted-foreground font-bold">
              <li className="flex justify-between border-b border-border pb-1">
                <span>En tren</span>
                <span>By train</span>
              </li>
              <li className="flex justify-between border-b border-border pb-1">
                <span>En autobús</span>
                <span>By bus</span>
              </li>
              <li className="flex justify-between border-b border-border pb-1">
                <span>En coche</span>
                <span>By car</span>
              </li>
              <li className="flex justify-between">
                <span>En bici</span>
                <span>By bike</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
              <Footprints size={18} />
              <h4 className="text-xs font-black uppercase tracking-widest">
                A + Method
              </h4>
            </div>
            <ul className="text-[11px] space-y-2 text-muted-foreground font-bold">
              <li className="flex justify-between border-b border-border pb-1">
                <span>A pie</span>
                <span>On foot</span>
              </li>
              <li className="flex justify-between border-b border-border pb-1">
                <span>A caballo</span>
                <span>On horseback</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
              <Clock size={18} />
              <h4 className="text-xs font-black uppercase tracking-widest">
                Future Plans
              </h4>
            </div>
            <p className="text-xs italic font-black text-emerald-900 dark:text-emerald-100 underline decoration-emerald-500/30">
              Ir + a + Infinitive
            </p>
            <p className="text-[10px] text-muted-foreground">
              "Voy a estudiar esta noche." (I am going to study tonight)
            </p>
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
            Interactive Exercises
          </p>
        </div>

        {/* LAB A: FILL THE BLANKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              id: "L14_A1",
              q: "1. Yo _____ a la universidad todos los días.",
              a: "voy",
              h: "Ir (Movement)",
            },
            {
              id: "L14_A2",
              q: "2. Ellos _____ del restaurante porque ya terminaron.",
              a: "se van",
              h: "Irse (Departure)",
            },
            {
              id: "L14_A3",
              q: "3. Nosotros _____ en tren a Madrid mañana.",
              a: "vamos",
              h: "Ir (Transport)",
            },
            {
              id: "L14_A4",
              q: "4. Tú _____ de casa muy temprano hoy.",
              a: "te vas",
              h: "Irse (Reflexive)",
            },
          ].map((item) => (
            <div
              key={item.id}
              onClick={() => toggleReveal(item.id)}
              className="p-8 rounded-xl border border-border bg-card cursor-pointer hover:border-emerald-700 dark:hover:border-emerald-400 transition-all shadow-sm group"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-[9px] font-black text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2.5 py-1 rounded-full uppercase">
                  Exercise {item.id.split("_")[1]}
                </span>
                <HelpCircle
                  size={14}
                  className="text-muted-foreground/30 group-hover:text-emerald-500"
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
                <p className="text-xl font-black text-emerald-700 dark:text-emerald-400 italic underline decoration-wavy decoration-emerald-500/20 underline-offset-8">
                  {item.a}
                </p>
                <p className="text-[10px] text-muted-foreground mt-2 uppercase font-bold">
                  {item.h}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* LAB B: MULTIPLE CHOICE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              id: "L14_B1",
              q: "Destination: 'We are going to the beach tomorrow.'",
              opt: "A) vamos | B) nos vamos",
              a: "A) vamos",
            },
            {
              id: "L14_B2",
              q: "Departure: 'They are leaving the cinema after the movie.'",
              opt: "A) van | B) se van",
              a: "B) se van",
            },
            {
              id: "L14_B3",
              q: "Correct preposition for 'On foot'?",
              opt: "A) en pie | B) a pie",
              a: "B) a pie",
            },
          ].map((item) => (
            <div
              key={item.id}
              onClick={() => toggleReveal(item.id)}
              className="p-8 rounded-xl border-2 border-border bg-card cursor-pointer hover:bg-muted/5 transition-all"
            >
              <p className="text-[10px] font-black uppercase text-emerald-700 dark:text-emerald-400 mb-4 tracking-widest italic">
                Logic Check
              </p>
              <p className="text-xs font-bold mb-4 leading-snug">{item.q}</p>
              <p className="text-[10px] text-muted-foreground font-mono mb-6 bg-muted/30 p-2 rounded">
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
      </section>

      {/* FOOTER: COMMON EXPRESSIONS */}
      <footer className="space-y-12 pt-10">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-full" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {[
            { t: "Ir de compras", d: "To go shopping" },
            { t: "Irse de casa", d: "To leave home" },
            { t: "Irse a dormir", d: "To go to sleep" },
            { t: "Irse bien/mal", d: "To go well/badly" },
          ].map((log, i) => (
            <div
              key={i}
              className="space-y-1 border-l-2 border-emerald-700/20 dark:border-emerald-400/20 pl-6"
            >
              <h6 className="text-[9px] font-black uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                Phrase 0{i + 1}
              </h6>
              <p className="text-xs font-black text-emerald-900 dark:text-emerald-100 italic">
                {log.t}
              </p>
              <p className="text-[10px] text-muted-foreground">{log.d}</p>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default grammar_lesson_14;
