"use client";
import type React from "react";
import { useState } from "react";
import {
  Zap,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Info,
  PenTool,
  MessageSquare,
} from "lucide-react";

const grammar_lesson_8: React.FC = () => {
  const [reveals, setReveals] = useState<{ [key: string]: boolean }>({});

  const toggleReveal = (id: string) => {
    setReveals((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="mx-auto w-full max-w-6xl space-y-12 px-4 pb-24 sm:px-6 lg:space-y-20">
      {/* 1. VERB HAY SECTION */}
      <section className="space-y-6 lg:space-y-10">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-lg font-black text-accent-foreground shadow-lg sm:size-12 sm:rounded-2xl sm:text-xl">
            1
          </div>
          <h2 className="text-2xl font-black tracking-tight uppercase italic sm:text-4xl">
            Verb Hay — “there is / there are”
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6 rounded-[2rem] border border-border bg-card p-6 shadow-sm sm:p-10">
            <h3 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-accent">
              <Info size={16} /> Usage & Rules
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-accent" />
                <p className="text-sm sm:text-base">
                  <b>Hay</b> expresses existence or quantity.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-accent" />
                <p className="text-sm sm:text-base">
                  Focuses on something existing, not its exact location.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-accent" />
                <p className="text-sm sm:text-base">
                  <b>Always impersonal:</b> It does not change (hay un... / hay
                  muchos...).
                </p>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
              Examples
            </h4>
            <div className="space-y-3">
              {[
                {
                  s: "En mi barrio hay un supermercado.",
                  m: "There is a big supermarket in my neighborhood.",
                },
                {
                  s: "En la clase hay veinte estudiantes.",
                  m: "There are 20 students in the class.",
                },
                {
                  s: "En la mesa hay tres libros.",
                  m: "There are three books on the table.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-border bg-muted/20 p-4 transition-all hover:bg-card"
                >
                  <p className="font-bold text-foreground text-sm sm:text-base">
                    {item.s}
                  </p>
                  <p className="text-xs italic text-muted-foreground">
                    — {item.m}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. VERB ESTAR SECTION */}
      <section className="space-y-6 lg:space-y-10">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-lg font-black text-accent-foreground shadow-lg sm:size-12 sm:rounded-2xl sm:text-xl">
            2
          </div>
          <h2 className="text-2xl font-black tracking-tight uppercase italic sm:text-4xl">
            Verb Estar — “to be (location)”
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 lg:order-1 space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
              Location Examples
            </h4>
            <div className="space-y-3">
              {[
                {
                  s: "El parque está en el centro.",
                  m: "The park is downtown.",
                },
                {
                  s: "El libro está en la mesa.",
                  m: "The book is on the table.",
                },
                {
                  s: "Mis amigos están en el restaurante.",
                  m: "My friends are in the restaurant.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-border bg-card p-4 shadow-sm"
                >
                  <p className="font-bold text-foreground text-sm sm:text-base">
                    {item.s}
                  </p>
                  <p className="text-xs italic text-muted-foreground">
                    — {item.m}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6 rounded-[2rem] bg-foreground p-6 text-background shadow-2xl dark:bg-card dark:text-foreground sm:p-10">
            <h3 className="text-xl font-bold italic border-b border-background/20 pb-2">
              Key Points
            </h3>
            <ul className="space-y-4 opacity-90">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 size-5 shrink-0 text-accent" />
                <p className="text-sm">
                  Indicates the location / position of a <b>known</b> object or
                  person.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 size-5 shrink-0 text-accent" />
                <p className="text-sm">
                  Singular / plural: <b>está</b> (one thing) / <b>están</b>{" "}
                  (many things).
                </p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 size-5 shrink-0 text-accent" />
                <p className="text-sm">
                  Focus is on <b>where</b> something is, not its existence.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. PREPOSITIONS SECTION */}
      <section className="space-y-6 lg:space-y-10">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-lg font-black text-accent-foreground shadow-lg sm:size-12 sm:rounded-2xl sm:text-xl">
            3
          </div>
          <h2 className="text-2xl font-black tracking-tight uppercase italic sm:text-4xl">
            Prepositions of Place
          </h2>
        </div>

        <div className="overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-xl sm:rounded-[2.5rem]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-muted/50 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  <th className="p-4 sm:p-6">Spanish</th>
                  <th className="p-4 sm:p-6">English</th>
                  <th className="p-4 sm:p-6">Example Sentence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  {
                    s: "encima de",
                    e: "on top of",
                    ex: "La lámpara está encima de la mesa.",
                  },
                  {
                    s: "debajo de",
                    e: "under",
                    ex: "El gato está debajo de la cama.",
                  },
                  {
                    s: "al lado de",
                    e: "next to",
                    ex: "El supermercado está al lado del banco.",
                  },
                  {
                    s: "delante de",
                    e: "in front of",
                    ex: "El coche está delante de la casa.",
                  },
                  {
                    s: "detrás de",
                    e: "behind",
                    ex: "Los parques están detrás del hospital.",
                  },
                  {
                    s: "entre",
                    e: "between",
                    ex: "La lámpara está entre la mesa y la silla.",
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

      {/* 4. HAY VS ESTAR SUMMARY */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-6 rounded-[2rem] border-2 border-accent/20 bg-accent/5 p-6 sm:p-10">
          <h3 className="text-xl font-black italic text-accent uppercase tracking-tighter">
            Hay vs Estar Summary
          </h3>
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="text-sm font-black uppercase">
                Hay: Existence / Quantity
              </p>
              <p className="text-xs italic text-muted-foreground">
                "En Madrid hay muchos museos."
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-black uppercase">
                Estar: Location / Position
              </p>
              <p className="text-xs italic text-muted-foreground">
                "El museo del Prado está en Madrid."
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 rounded-[2rem] border border-red-500/20 bg-red-500/5 p-6 sm:p-10">
          <h3 className="flex items-center gap-2 text-xl font-black italic text-red-500 uppercase tracking-tighter">
            <AlertTriangle size={24} /> Common Mistakes
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground italic">
            <li>
              • Using <b>estar</b> for existence.
            </li>
            <li>
              • Forgetting plural forms: <b>hay muchos…</b>
            </li>
            <li>
              • Mixing <b>ser</b> with <b>estar</b> for locations.
            </li>
          </ul>
        </div>
      </section>

      {/* 5. PRACTICE SECTION */}
      <section className="space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl uppercase italic">
            Practice Challenge
          </h2>
          <p className="text-muted-foreground text-sm">
            Fill in the blanks with Hay, Está, or Están.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              id: "L8_Q1",
              q: "1. En mi ciudad ____ una universidad.",
              a: "hay",
            },
            {
              id: "L8_Q2",
              q: "2. La universidad ____ cerca del centro.",
              a: "está",
            },
            { id: "L8_Q3", q: "3. En la mesa ____ tres libros.", a: "hay" },
            {
              id: "L8_Q4",
              q: "4. Los libros ____ encima de la mesa.",
              a: "están",
            },
            {
              id: "L8_Q5",
              q: "5. En mi barrio ____ un supermercado grande.",
              a: "hay",
            },
            {
              id: "L8_Q6",
              q: "6. El supermercado ____ al lado del banco.",
              a: "está",
            },
            { id: "L8_Q7", q: "7. ____ dos parques en mi barrio.", a: "Hay" },
            {
              id: "L8_Q8",
              q: "8. Los parques ____ detrás del hospital.",
              a: "están",
            },
          ].map((item) => (
            <div
              key={item.id}
              onClick={() => toggleReveal(item.id)}
              className="group relative cursor-pointer overflow-hidden rounded-[1.5rem] border-2 border-border bg-card p-6 transition-all hover:border-accent active:scale-95 shadow-sm hover:shadow-md"
            >
              <p className="mb-4 text-sm sm:text-base font-bold text-foreground leading-tight">
                {item.q}
              </p>
              <div
                className={`transition-all duration-500 ${
                  reveals[item.id]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
              >
                <p className="text-2xl font-black text-accent">{item.a}</p>
              </div>
              <div className="absolute bottom-4 right-6 text-muted-foreground/10 group-hover:text-accent/10 transition-colors pointer-events-none">
                <PenTool size={32} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CHALLENGE & SPEAKING */}
      <section className="rounded-[2.5rem] sm:rounded-[3.5rem] border border-dashed border-border bg-muted/20 p-8 sm:p-12 overflow-hidden relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center relative z-10">
          <div className="space-y-6">
            <h2 className="text-3xl font-black italic tracking-tighter uppercase">
              Speaking Challenge
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
              <p>
                • Write 10 sentences with <b>hay</b> describing your city.
              </p>
              <p>
                • Write 10 sentences with <b>estar</b> describing locations.
              </p>
              <p className="font-bold text-foreground">Combined practice:</p>
              <div className="bg-background/50 p-4 rounded-xl border border-border">
                <p className="flex gap-2 text-foreground italic">
                  <MessageSquare size={16} className="text-accent shrink-0" />{" "}
                  “¿Hay un cine aquí?”
                </p>
                <p className="flex gap-2 text-foreground italic mt-2 font-black">
                  <ArrowRight size={16} className="text-accent shrink-0" /> “Sí,
                  está cerca del centro.”
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-accent rounded-[2rem] text-accent-foreground shadow-xl">
            <h4 className="font-black uppercase tracking-widest text-[10px] mb-4 opacity-80">
              Practice Ideas
            </h4>
            <ul className="space-y-3 text-sm italic font-medium">
              <li>Record yourself describing your home.</li>
              <li>Map out your city using "está al lado de...".</li>
              <li>Use "Hay" for quantities (Hay dos cafés).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. QUICK REFERENCE FOOTER */}
      <footer className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-border">
        <div className="flex items-center gap-3">
          <Zap className="text-accent shrink-0" size={24} />
          <p className="text-xs font-bold uppercase tracking-tight">
            Hay: Existence
          </p>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="text-accent shrink-0" size={24} />
          <p className="text-xs font-bold uppercase tracking-tight">
            Estar: Location
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Navigation className="text-accent shrink-0" size={24} />
          <p className="text-xs font-bold uppercase tracking-tight">
            Prepositions Context
          </p>
        </div>
      </footer>
    </div>
  );
};

import { Navigation } from "lucide-react";
export default grammar_lesson_8;
