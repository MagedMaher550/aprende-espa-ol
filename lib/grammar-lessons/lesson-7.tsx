"use client";
import type React from "react";
import { useState } from "react";
import {
  MapPin,
  Clock,
  Navigation,
  CheckCircle2,
  AlertTriangle,
  Zap,
  ArrowRight,
  Info,
  PenTool,
} from "lucide-react";

const grammar_lesson_7: React.FC = () => {
  const [reveals, setReveals] = useState<{ [key: string]: boolean }>({});

  const toggleReveal = (id: string) => {
    setReveals((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="mx-auto w-full max-w-6xl space-y-12 px-4 pb-24 sm:px-6 lg:space-y-20">
      {/* 1. VERB ESTAR SECTION */}
      <section className="space-y-6 lg:space-y-10">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-lg font-black text-accent-foreground shadow-lg sm:size-12 sm:rounded-2xl sm:text-xl">
            1
          </div>
          <h2 className="text-2xl font-black tracking-tight uppercase italic sm:text-4xl">
            Verb Estar — “to be”
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {/* USAGE ELABORATION */}
          <div className="space-y-4 lg:col-span-1">
            <h3 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-accent">
              <Zap size={16} /> Usage Context
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {[
                {
                  label: "Location",
                  desc: "Estoy en casa.",
                  sub: "Where someone or something is.",
                },
                {
                  label: "Temporary state",
                  desc: "Estás cansado.",
                  sub: "Mood, health, tiredness, etc.",
                },
                {
                  label: "Progressive tense",
                  desc: "Estoy leyendo.",
                  sub: "Estar + gerund (ongoing actions).",
                },
                {
                  label: "Result of action",
                  desc: "La puerta está cerrada.",
                  sub: "Result of a recent condition.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col rounded-2xl border border-border bg-card p-4 shadow-sm transition-colors hover:border-accent/50"
                >
                  <p className="text-sm font-bold text-accent">{item.label}</p>
                  <p className="text-xs italic text-foreground mb-1">
                    "{item.desc}"
                  </p>
                  <p className="text-[10px] text-muted-foreground uppercase font-medium">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CONJUGATION TABLE */}
          <div className="overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-xl sm:rounded-[2.5rem] lg:col-span-2">
            <div className="flex items-center justify-between border-b border-border bg-muted/50 p-4 sm:p-6">
              <span className="text-base font-black uppercase tracking-tighter sm:text-lg underline decoration-accent underline-offset-4">
                Estar Conjugation
              </span>
              <span className="rounded-full bg-red-500/10 px-2 py-1 text-[9px] font-bold uppercase text-red-500 sm:text-[10px]">
                Irregular Yo
              </span>
            </div>

            <div className="overflow-x-auto">
              <div className="grid min-w-[320px] grid-cols-2 divide-x divide-y divide-border sm:grid-cols-3">
                {[
                  { s: "Yo", c: "estoy", m: "I am" },
                  { s: "Tú", c: "estás", m: "you are (informal)" },
                  {
                    s: "Él / Ella / Ud.",
                    c: "está",
                    m: "he/she/you (formal) is",
                  },
                  { s: "Nosotros/as", c: "estamos", m: "we are" },
                  { s: "Vosotros/as", c: "estáis", m: "you all are" },
                  { s: "Ellos / Uds.", c: "están", m: "they / you all are" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group p-4 transition-colors hover:bg-accent/[0.02] sm:p-6"
                  >
                    <p className="mb-1 text-[9px] font-black uppercase text-muted-foreground sm:text-[10px]">
                      {item.s}
                    </p>
                    <p
                      className={`text-xl font-black ${
                        item.c === "estoy" ? "text-red-500" : "text-accent"
                      }`}
                    >
                      {item.c}
                    </p>
                    <p className="text-[10px] italic text-muted-foreground sm:text-xs">
                      {item.m}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* COMMON MISTAKE ALERT */}
        <div className="rounded-2xl border-2 border-red-500/20 bg-red-500/5 p-4 sm:p-6">
          <div className="flex items-center gap-3 text-red-500 mb-2">
            <AlertTriangle size={20} />
            <h4 className="font-bold uppercase tracking-tight">
              Common Mistakes
            </h4>
          </div>
          <p className="text-sm text-muted-foreground italic">
            Using <b>ser</b> for temporary states:{" "}
            <span className="line-through">Es cansado</span> (Incorrect) →{" "}
            <span className="text-green-600 font-bold italic">
              Está cansado
            </span>{" "}
            (Correct).
          </p>
        </div>
      </section>

      {/* 2. HOY SECTION */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-lg font-black text-accent-foreground shadow-lg sm:size-12 sm:rounded-2xl sm:text-xl">
            2
          </div>
          <h2 className="text-2xl font-black tracking-tight uppercase italic sm:text-4xl">
            Hoy — “Today”
          </h2>
        </div>

        <div className="rounded-[1.5rem] bg-foreground p-6 text-background shadow-2xl dark:bg-card dark:text-foreground sm:rounded-[2.5rem] sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-xl font-bold italic flex items-center gap-2">
                <Clock className="text-accent" /> Flexible Position
              </h3>
              <p className="text-sm opacity-80 leading-relaxed">
                Anchors sentences in the present day. It can appear before or
                after the verb.
              </p>
              <div className="space-y-2">
                <div className="bg-background/10 p-3 rounded-xl border border-background/20">
                  <p className="text-sm italic">
                    "Hoy estudio español." → I study Spanish today.
                  </p>
                </div>
                <div className="bg-background/10 p-3 rounded-xl border border-background/20">
                  <p className="text-sm italic">
                    "Estudio español hoy." → Same meaning, different emphasis.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3 border-l border-background/20 pl-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-accent">
                Usage Examples
              </h4>
              <ul className="space-y-2 text-sm italic">
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-accent" /> Hoy estoy
                  cansado. (Today I am tired.)
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-accent" /> Hoy no
                  trabajo. (I don’t work today.)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PREPOSITIONS OF PLACE */}
      <section className="space-y-6 sm:space-y-10">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-lg font-black text-accent-foreground shadow-lg sm:size-12 sm:rounded-2xl sm:text-xl">
            3
          </div>
          <h2 className="text-2xl font-black tracking-tight uppercase italic sm:text-4xl">
            Prepositions of Place
          </h2>
        </div>

        <div className="overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-xl sm:rounded-[2.5rem]">
          <div className="border-b border-border bg-muted/50 p-4 sm:p-6 flex items-center gap-3">
            <Navigation className="text-accent" size={20} />
            <span className="text-base font-black uppercase tracking-tighter sm:text-lg">
              Location Context
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-muted/30 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  <th className="p-4 sm:p-6">Spanish</th>
                  <th className="p-4 sm:p-6">English</th>
                  <th className="p-4 sm:p-6">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  {
                    s: "encima de",
                    e: "on top of",
                    ex: "El libro está encima de la mesa.",
                  },
                  {
                    s: "debajo de",
                    e: "under",
                    ex: "El gato está debajo de la cama.",
                  },
                  {
                    s: "delante de",
                    e: "in front of",
                    ex: "El coche está delante de la casa.",
                  },
                  {
                    s: "detrás de",
                    e: "behind",
                    ex: "El árbol está detrás de la escuela.",
                  },
                  {
                    s: "al lado de",
                    e: "next to",
                    ex: "El sofá está al lado de la ventana.",
                  },
                  {
                    s: "entre ... y ...",
                    e: "between",
                    ex: "La lámpara está entre la mesa y la silla.",
                  },
                  {
                    s: "a la derecha de",
                    e: "to the right of",
                    ex: "El baño está a la derecha de la cocina.",
                  },
                  {
                    s: "a la izquierda de",
                    e: "to the left of",
                    ex: "La nevera está a la izquierda de la puerta.",
                  },
                  {
                    s: "cerca de",
                    e: "near",
                    ex: "La farmacia está cerca de la estación.",
                  },
                  {
                    s: "lejos de",
                    e: "far from",
                    ex: "Mi trabajo está lejos de mi casa.",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="hover:bg-accent/[0.02] transition-colors group"
                  >
                    <td className="p-4 sm:p-6 font-bold text-accent">
                      {row.s}
                    </td>
                    <td className="p-4 sm:p-6 text-sm text-muted-foreground italic">
                      {row.e}
                    </td>
                    <td className="p-4 sm:p-6 text-xs sm:text-sm font-medium">
                      {row.ex}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PRACTICE SECTION */}
      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl uppercase">
            Practice — Fill in the blanks
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              id: "L7_Q1",
              q: "1. El libro está ____ la mesa.",
              a: "encima de",
            },
            {
              id: "L7_Q2",
              q: "2. La silla está ____ la mesa.",
              a: "al lado de",
            },
            {
              id: "L7_Q3",
              q: "3. El coche está ____ la casa.",
              a: "delante de",
            },
            { id: "L7_Q4", q: "4. El gato está ____ la cama.", a: "debajo de" },
            {
              id: "L7_Q5",
              q: "5. La escuela está ____ mi casa.",
              a: "cerca de",
            },
          ].map((item, idx) => (
            <div
              key={item.id}
              onClick={() => toggleReveal(item.id)}
              className="group relative cursor-pointer overflow-hidden rounded-[1.5rem] border-2 border-border bg-card p-6 transition-all hover:border-accent hover:shadow-xl active:scale-95"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded bg-muted px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  Task {idx + 1}
                </span>
                <CheckCircle2
                  size={18}
                  className={`transition-colors ${
                    reveals[item.id] ? "text-accent" : "text-muted/20"
                  }`}
                />
              </div>
              <p className="mb-4 text-base font-bold text-foreground sm:text-lg">
                {item.q}
              </p>
              <div
                className={`transition-all duration-500 ${
                  reveals[item.id]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
              >
                <p className="text-xl font-black text-accent">{item.a}</p>
              </div>
              <div className="absolute bottom-4 right-6 text-muted-foreground/10 group-hover:text-accent/10 transition-colors pointer-events-none">
                <PenTool size={32} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER REFERENCE */}
      <footer className="grid grid-cols-1 gap-8 rounded-[2rem] border border-dashed border-border bg-muted/20 p-8 sm:p-10 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-lg font-black uppercase tracking-widest text-accent flex items-center gap-2">
            <Info size={18} /> Quick reference
          </h3>
          <ul className="text-xs text-muted-foreground space-y-2">
            <li>
              • <b>Estar:</b> location, temporary states, progressive tense
            </li>
            <li>
              • <b>Hoy:</b> today marker, flexible position
            </li>
            <li>
              • <b>Prepositions:</b> use with estar
            </li>
            <li>
              • <b>Common mistakes:</b> misusing ser, misplacing hoy, confusing
              entre with en
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-black uppercase tracking-widest text-accent flex items-center gap-2">
            <PenTool size={18} /> Practice ideas
          </h3>
          <ul className="text-xs text-muted-foreground space-y-2 italic">
            <li>• Record yourself saying practice sentences.</li>
            <li>• Make 5 sentences about your own home or classroom.</li>
            <li>• Compare with a teacher or partner.</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default grammar_lesson_7;
