"use client";
import type React from "react";
import { useState } from "react";
import {
  MapPin,
  ListOrdered,
  Search,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Info,
  PenTool,
  Hash,
  Scale,
} from "lucide-react";

const grammar_lesson_9: React.FC = () => {
  const [reveals, setReveals] = useState<{ [key: string]: boolean }>({});

  const toggleReveal = (id: string) => {
    setReveals((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="mx-auto w-full max-w-6xl space-y-12 px-4 pb-24 sm:px-6 lg:space-y-20">
      {/* 1. HAY — Existence / Quantity */}
      <section className="space-y-6 lg:space-y-10">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-lg font-black text-accent-foreground shadow-lg sm:size-12 sm:rounded-2xl sm:text-xl">
            1
          </div>
          <h2 className="text-2xl font-black tracking-tight uppercase italic sm:text-4xl">
            HAY — Existence & Quantity
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6 rounded-[2rem] border border-border bg-card p-6 shadow-sm sm:p-10">
            <h3 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-accent">
              <ListOrdered size={16} /> Structure
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-accent" />
                <p className="text-sm sm:text-base">
                  <b>Hay + un/una/unos/unas + noun:</b> "Hay una farmacia."
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-accent" />
                <p className="text-sm sm:text-base">
                  <b>Hay + plural noun (no article):</b> "Hay libros."
                </p>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl bg-muted/30 p-4 border border-border">
              <p className="font-bold text-accent italic">
                "¿Hay una biblioteca aquí?"
              </p>
              <p className="text-xs text-muted-foreground">
                "Sí, hay una en la avenida."
              </p>
            </div>
            <p className="text-xs text-muted-foreground italic px-2">
              Use <b>Hay</b> to indicate that something exists or is present
              without specifying precise location.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ESTAR — Location / Position */}
      <section className="space-y-6 lg:space-y-10">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-lg font-black text-accent-foreground shadow-lg sm:size-12 sm:rounded-2xl sm:text-xl">
            2
          </div>
          <h2 className="text-2xl font-black tracking-tight uppercase italic sm:text-4xl">
            ESTAR — Specific Location
          </h2>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 space-y-4">
              <h3 className="text-sm font-black uppercase tracking-widest text-accent">
                The Formula
              </h3>
              <div className="space-y-2 font-mono text-sm">
                <p className="p-2 bg-muted rounded">
                  El/La + noun + está + place
                </p>
                <p className="p-2 bg-muted rounded">
                  Los/Las + noun + están + place
                </p>
              </div>
              <p className="text-sm italic text-muted-foreground">
                "La estación está en la esquina."
              </p>
            </div>
            <div className="bg-foreground p-8 text-background dark:bg-muted/50 dark:text-foreground">
              <h3 className="text-sm font-black uppercase tracking-widest text-accent mb-4">
                Spatial Prepositions
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <span className="p-2 border border-background/20 rounded">
                  al lado de (next to)
                </span>
                <span className="p-2 border border-background/20 rounded">
                  encima de (on top)
                </span>
                <span className="p-2 border border-background/20 rounded">
                  debajo de (under)
                </span>
                <span className="p-2 border border-background/20 rounded">
                  entre (between)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 & 4. DÓNDE & CUÁNTOS */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-6 p-8 rounded-[2.5rem] bg-accent/5 border border-accent/20">
          <h3 className="flex items-center gap-2 text-xl font-black italic text-accent uppercase">
            <Search size={24} /> ¿Dónde? (Where)
          </h3>
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-bold">With ESTAR (Specific):</p>
              <p className="italic">"¿Dónde está la biblioteca?"</p>
            </div>
            <div>
              <p className="font-bold">With HAY (Existence):</p>
              <p className="italic">"¿Dónde hay un cajero automático?"</p>
            </div>
          </div>
        </div>

        <div className="space-y-6 p-8 rounded-[2.5rem] bg-muted/30 border border-border">
          <h3 className="flex items-center gap-2 text-xl font-black italic text-foreground uppercase">
            <Hash size={24} /> ¿Cuántos? (How many)
          </h3>
          <div className="space-y-4 text-sm">
            <p>
              Matches gender and number: <b>Cuántos</b> (masc) / <b>Cuántas</b>{" "}
              (fem).
            </p>
            <p className="italic bg-card p-3 rounded-xl">
              "¿Cuántas farmacias hay?" — "Hay dos."
            </p>
          </div>
        </div>
      </section>

      {/* 5. INTENSITY & QUANTITY */}
      <section className="space-y-6 lg:space-y-10">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-lg font-black text-accent-foreground shadow-lg sm:size-12 sm:rounded-2xl sm:text-xl">
            5
          </div>
          <h2 className="text-2xl font-black tracking-tight uppercase italic sm:text-4xl">
            Intensity vs Quantity
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-border space-y-4">
            <h3 className="font-black text-accent flex items-center gap-2">
              <Scale size={18} /> ADJECTIVES (MUY / POCO)
            </h3>
            <p className="text-xs uppercase text-muted-foreground font-bold">
              Intensity — Does not change
            </p>
            <ul className="space-y-2 text-sm italic">
              <li>
                "El barrio es <b>muy</b> tranquilo." (Very)
              </li>
              <li>
                "Mi casa es <b>poco</b> moderna." (Not very)
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl border border-border space-y-4">
            <h3 className="font-black text-accent flex items-center gap-2">
              <ListOrdered size={18} /> NOUNS (MUCHO / POCO)
            </h3>
            <p className="text-xs uppercase text-muted-foreground font-bold">
              Quantity — Matches Gender/Number
            </p>
            <ul className="space-y-2 text-sm italic">
              <li>
                "Hay <b>mucha</b> gente." (A lot of)
              </li>
              <li>
                "Hay <b>pocos</b> parques." (Few)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. CONTRACTIONS */}
      <section className="p-6 rounded-2xl bg-red-500/5 border-2 border-red-500/10">
        <h3 className="text-sm font-black text-red-500 uppercase tracking-widest mb-4 italic">
          6. Contractions: AL & DEL
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="p-4 bg-card rounded-xl">
            <p className="font-bold text-accent">a + el = al</p>
            <p className="italic text-xs">"Ve al banco."</p>
          </div>
          <div className="p-4 bg-card rounded-xl">
            <p className="font-bold text-accent">de + el = del</p>
            <p className="italic text-xs">"A la derecha del estudio."</p>
          </div>
        </div>
        <p className="mt-4 text-[10px] text-muted-foreground font-bold">
          NOTE: No contraction for la / las / los (de la, de los).
        </p>
      </section>

      {/* 7. SUMMARY TABLE */}
      <div className="overflow-hidden rounded-[2rem] border border-border shadow-lg">
        <table className="w-full text-left">
          <thead className="bg-muted">
            <tr className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
              <th className="p-4">Verb</th>
              <th className="p-4">Usage</th>
              <th className="p-4">Example</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-sm">
            <tr>
              <td className="p-4 font-bold text-accent">Hay</td>
              <td className="p-4">Existence / Quantity</td>
              <td className="p-4 italic">En mi barrio hay muchas tiendas.</td>
            </tr>
            <tr>
              <td className="p-4 font-bold text-accent">Estar</td>
              <td className="p-4">Location / Position</td>
              <td className="p-4 italic">La tienda está en la esquina.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* PRACTICE TASKS */}
      <section className="space-y-6">
        <h3 className="text-2xl font-black italic uppercase text-center">
          Practice Tasks
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "Write 5 sentences with hay describing your city.",
            "Write 5 sentences with estar + prepositions.",
            "Ask and answer 3 questions using dónde.",
            "Use mucho / muy / poco to describe your neighborhood.",
          ].map((task, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-6 rounded-[2rem] bg-card border border-border hover:border-accent transition-colors"
            >
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent font-bold text-xs">
                {i + 1}
              </div>
              <p className="text-sm font-medium">{task}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default grammar_lesson_9;
