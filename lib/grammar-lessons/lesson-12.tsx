"use client";
import type React from "react";
import { useState } from "react";
import {
  Shirt,
  ShoppingBag,
  Watch,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  PenTool,
  RotateCcw,
  Eye,
  User,
  Sparkles,
  ArrowRight,
  Briefcase,
  Layers,
  Palette,
  Scissors,
  Check,
} from "lucide-react";

/**
 * Lesson 12: The Verb "Llevar"
 * Focused on clothing, accessories, and style.
 * Color Palette: Muted Emerald / Sage
 * Structure: 400+ lines, no header, no navigation tabs, clean border radius.
 */

const grammar_lesson_12: React.FC = () => {
  const [reveals, setReveals] = useState<{ [key: string]: boolean }>({});

  const toggleReveal = (id: string) => {
    setReveals((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="mx-auto w-full max-w-6xl space-y-20 px-4 pb-40 pt-10 sm:px-6">
      {/* SECTION 1: VERB LOGIC & CORE MEANING */}
      <section className="space-y-10">
        <div className="flex items-center gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-emerald-700 text-2xl font-black text-white shadow-sm">
            1
          </div>
          <div className="space-y-1">
            <h2 className="text-3xl font-black uppercase italic tracking-tight text-emerald-900">
              The Verb "Llevar"
            </h2>
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600/80">
              Concepts & Usage
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl border border-border bg-card shadow-sm space-y-6">
            <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-emerald-800">
              <Layers size={18} /> Dual Meaning
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              In Spanish, <b>Llevar</b> is a high-frequency verb that covers two
              main actions that English separates into "wearing" and "carrying."
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-emerald-50 border-l-4 border-emerald-700">
                <p className="text-sm font-bold text-emerald-900 italic">
                  "Llevo una camisa."
                </p>
                <p className="text-[11px] uppercase text-emerald-700/70 font-bold">
                  To Wear (Clothing)
                </p>
              </div>
              <div className="p-4 rounded-lg bg-emerald-50 border-l-4 border-emerald-700">
                <p className="text-sm font-bold text-emerald-900 italic">
                  "Llevo una mochila."
                </p>
                <p className="text-[11px] uppercase text-emerald-700/70 font-bold">
                  To Carry (Objects)
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-xl border border-border bg-muted/20 space-y-6">
            <h3 className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-emerald-800">
              <Sparkles size={18} /> Puesto / Puesta
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              To emphasize that you have something on <b>right now</b>, Spanish
              speakers often add the word "puesto" (m) or "puesta" (f).
            </p>
            <div className="rounded-xl bg-white p-5 border border-border">
              <p className="text-xs italic text-muted-foreground mb-2 leading-relaxed">
                "Llevo **puesta** una chaqueta."
              </p>
              <p className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-1 inline-block rounded">
                EMPHASIS: I am dressed in it
              </p>
            </div>
            <p className="text-[11px] text-muted-foreground italic">
              Note: This changes with the item: **puestos** (plural masculine)
              or **puestas** (plural feminine).
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONJUGATION ENGINE */}
      <section className="space-y-10">
        <div className="flex items-center gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-emerald-700 text-2xl font-black text-white shadow-sm">
            2
          </div>
          <div className="space-y-1">
            <h2 className="text-3xl font-black uppercase italic tracking-tight text-emerald-900">
              Present Tense Engine
            </h2>
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600/80">
              Regular -AR Pattern
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <table className="w-full text-left text-sm border-collapse">
            <thead className="bg-emerald-900 text-white">
              <tr>
                <th className="p-5 font-black uppercase tracking-widest text-[10px]">
                  Subject
                </th>
                <th className="p-5 font-black uppercase tracking-widest text-[10px]">
                  Llevar
                </th>
                <th className="p-5 font-black uppercase tracking-widest text-[10px]">
                  Structure
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { s: "Yo", v: "Llevo", p: "Llev- + o" },
                { s: "Tú", v: "Llevas", p: "Llev- + as" },
                { s: "Él / Ella / Ud.", v: "Lleva", p: "Llev- + a" },
                { s: "Nosotros / as", v: "Llevamos", p: "Llev- + amos" },
                { s: "Vosotros / as", v: "Lleváis", p: "Llev- + áis" },
                { s: "Ellos / Ellas / Uds.", v: "Llevan", p: "Llev- + an" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-emerald-50 transition-colors">
                  <td className="p-5 font-bold text-muted-foreground">
                    {row.s}
                  </td>
                  <td className="p-5 font-black text-emerald-700 text-lg italic">
                    {row.v}
                  </td>
                  <td className="p-5 font-mono text-[11px] text-muted-foreground">
                    {row.p}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 3: VOCABULARY & ADJECTIVE POSITION */}
      <section className="space-y-10">
        <div className="flex items-center gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-emerald-700 text-2xl font-black text-white shadow-sm">
            3
          </div>
          <div className="space-y-1">
            <h2 className="text-3xl font-black uppercase italic tracking-tight text-emerald-900">
              Style & Descriptions
            </h2>
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600/80">
              Colors and Materials
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-border bg-card space-y-4">
            <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-800">
              <Palette size={16} /> The Color Rule
            </h4>
            <p className="text-xs text-muted-foreground italic">
              Adjectives always follow the noun and must match its gender and
              quantity.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between p-3 bg-muted/30 rounded-lg text-xs font-bold">
                <span>Una camisa blanca</span>
                <span className="text-emerald-700">F. Singular</span>
              </div>
              <div className="flex justify-between p-3 bg-muted/30 rounded-lg text-xs font-bold">
                <span>Unos zapatos negros</span>
                <span className="text-emerald-700">M. Plural</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card space-y-4">
            <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-800">
              <Scissors size={16} /> Materials
            </h4>
            <p className="text-xs text-muted-foreground italic">
              Use "de" to indicate what something is made of.
            </p>
            <ul className="text-xs space-y-2">
              <li className="flex justify-between border-b pb-1">
                <span>De algodón</span>
                <span className="font-bold text-muted-foreground">Cotton</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>De lana</span>
                <span className="font-bold text-muted-foreground">Wool</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>De cuero</span>
                <span className="font-bold text-muted-foreground">Leather</span>
              </li>
              <li className="flex justify-between border-b pb-1">
                <span>De seda</span>
                <span className="font-bold text-muted-foreground">Silk</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 4: DEEP DIVE COMBINATIONS */}
      <section className="p-10 rounded-xl bg-emerald-900 text-white space-y-8 shadow-2xl">
        <div className="space-y-2">
          <h3 className="text-2xl font-black italic uppercase tracking-tighter text-emerald-300">
            Standard Combinations
          </h3>
          <p className="text-sm opacity-70">
            Common phrases where "Llevar" is the essential verb.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
              <Eye className="text-emerald-400 shrink-0" />
              <div>
                <p className="font-black text-sm uppercase italic">
                  Llevar gafas
                </p>
                <p className="text-xs text-emerald-200/60 font-medium">
                  To wear glasses / sunglasses
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
              <User className="text-emerald-400 shrink-0" />
              <div>
                <p className="font-black text-sm uppercase italic">
                  Llevar barba
                </p>
                <p className="text-xs text-emerald-200/60 font-medium">
                  To have/wear a beard
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
              <Briefcase className="text-emerald-400 shrink-0" />
              <div>
                <p className="font-black text-sm uppercase italic">
                  Llevar uniforme
                </p>
                <p className="text-xs text-emerald-200/60 font-medium">
                  To wear a uniform (school/work)
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
              <Sparkles className="text-emerald-400 shrink-0" />
              <div>
                <p className="font-black text-sm uppercase italic">
                  Llevar maquillaje
                </p>
                <p className="text-xs text-emerald-200/60 font-medium">
                  To wear makeup
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
              <Watch className="text-emerald-400 shrink-0" />
              <div>
                <p className="font-black text-sm uppercase italic">
                  Llevar pendientes
                </p>
                <p className="text-xs text-emerald-200/60 font-medium">
                  To wear earrings
                </p>
              </div>
            </div>
            <div className="p-4 bg-emerald-800 rounded-lg text-xs italic opacity-90 leading-relaxed border border-emerald-700">
              "Mi hermano **lleva** una barba muy larga y siempre **lleva**
              gafas de sol."
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: INTERACTIVE PRACTICE SUITE */}
      <section className="space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-black tracking-tight uppercase italic text-emerald-900">
            Knowledge Labs
          </h2>
          <p className="text-muted-foreground text-sm">
            Tap the cards to verify your mastery of Lesson 12.
          </p>
        </div>

        {/* Lab A: Conjugation & Fill in the Blanks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              id: "L12_A1",
              q: "Yo ____ una chaqueta roja.",
              a: "llevo",
              hint: "I am wearing (Present Yo)",
            },
            {
              id: "L12_A2",
              q: "Ellos ____ pantalones azules.",
              a: "llevan",
              hint: "They wear (Present Ellos)",
            },
            {
              id: "L12_A3",
              q: "¿Qué ____ tú hoy?",
              a: "llevas",
              hint: "What are you wearing? (Informal)",
            },
            {
              id: "L12_A4",
              q: "Nosotros ____ uniformes.",
              a: "llevamos",
              hint: "We wear (Present Nosotros)",
            },
          ].map((item) => (
            <div
              key={item.id}
              onClick={() => toggleReveal(item.id)}
              className="group cursor-pointer p-6 rounded-xl border border-border bg-card hover:border-emerald-700 transition-all active:scale-[0.98]"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                  Lab A
                </span>
                <HelpCircle size={14} className="text-muted-foreground/30" />
              </div>
              <p className="text-sm font-bold mb-4">{item.q}</p>
              <div
                className={`transition-all duration-500 ${
                  reveals[item.id]
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-2"
                }`}
              >
                <p className="text-lg font-black text-emerald-700">{item.a}</p>
                <p className="text-[10px] text-muted-foreground italic mt-1">
                  {item.hint}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lab B: Conceptual Multiple Choice */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              id: "L12_B1",
              q: "Which verb is used for wearing clothes?",
              opt: "a) Tener  b) Ponerse  c) Llevar",
              a: "c) Llevar",
              reason:
                "While 'tener' means to have, 'llevar' specifically means to wear/carry clothing.",
            },
            {
              id: "L12_B2",
              q: "Which is the correct 'Nosotros' form?",
              opt: "a) Llevo  b) Llevamos  c) Llevan",
              a: "b) Llevamos",
              reason: "Standard -AR ending for 'we'.",
            },
            {
              id: "L12_B3",
              q: "Correct structure for earrings?",
              opt: "a) Ella lleva b) Ella llevo c) Ella llevas",
              a: "a) Ella lleva",
              reason: "3rd person singular match.",
            },
          ].map((item) => (
            <div
              key={item.id}
              onClick={() => toggleReveal(item.id)}
              className="p-6 rounded-xl border-2 border-border bg-card hover:bg-muted/5 transition-all cursor-pointer"
            >
              <p className="text-[10px] font-black uppercase text-emerald-700 mb-2 italic">
                Multi-Choice Lab
              </p>
              <p className="text-xs font-bold mb-3">{item.q}</p>
              <p className="text-[11px] text-muted-foreground mb-4 font-mono">
                {item.opt}
              </p>
              <div
                className={`transition-all duration-300 ${
                  reveals[item.id] ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="h-px bg-border w-full mb-3" />
                <p className="text-sm font-black text-emerald-800">{item.a}</p>
                <p className="text-[10px] text-muted-foreground mt-1 italic">
                  {item.reason}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lab C: Translation Practice */}
        <div className="p-8 rounded-xl border border-emerald-200 bg-emerald-50/30 space-y-6">
          <h4 className="text-center font-black uppercase tracking-widest text-emerald-900 text-sm italic">
            Translation Lab
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { id: "T1", en: "I'm wearing jeans.", es: "Llevo vaqueros." },
              {
                id: "T2",
                en: "He is wearing a hat.",
                es: "Él lleva un sombrero.",
              },
              {
                id: "T3",
                en: "We wear black shoes.",
                es: "Llevamos zapatos negros.",
              },
            ].map((item) => (
              <div
                key={item.id}
                onClick={() => toggleReveal(item.id)}
                className="bg-white p-4 rounded-lg border border-border shadow-sm flex flex-col items-center text-center cursor-pointer hover:shadow-md transition-shadow"
              >
                <p className="text-xs text-muted-foreground mb-1">
                  "{item.en}"
                </p>
                <div
                  className={`mt-1 font-black text-emerald-700 transition-all ${
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

      {/* SECTION 6: MINI PRODUCTION TASKBOARD */}
      <section className="p-10 rounded-xl border-2 border-dashed border-border space-y-8">
        <div className="flex items-center gap-3">
          <PenTool className="text-emerald-700" size={24} />
          <h3 className="text-xl font-black uppercase tracking-tight text-emerald-900 italic">
            Production Taskboard
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-2">
              <h5 className="text-[10px] font-black uppercase tracking-widest text-emerald-700">
                1. Fashion Report
              </h5>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Describe exactly what you and a friend are wearing right now.
                You must include at least <b>3 colors</b> and <b>2 materials</b>{" "}
                (algodón, cuero, etc.).
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-[10px] font-black uppercase tracking-widest text-emerald-700">
                2. The "Puesto" Challenge
              </h5>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Rewrite these sentences using <b>llevar puesto/a</b>:
                <br />
                <span className="italic">
                  "Llevo una chaqueta" → "Llevo puesta una chaqueta."
                </span>
              </p>
            </div>
          </div>

          <div className="bg-emerald-700 p-8 rounded-xl text-white space-y-4">
            <h5 className="text-xs font-black uppercase tracking-widest text-emerald-200">
              Example Output
            </h5>
            <p className="text-sm italic leading-relaxed">
              "Hoy **llevo** una camiseta azul de algodón y **llevo puestos**
              unos vaqueros negros. Mi amigo Juan **lleva** una chaqueta de
              cuero marrón."
            </p>
            <div className="flex items-center gap-2 text-[10px] font-black text-emerald-200 uppercase bg-emerald-800/50 p-2 rounded">
              <Check size={12} /> Complete
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: QUICK REFERENCE HUB */}
      <footer className="space-y-8">
        <div className="h-px bg-border w-full" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          <div className="space-y-2">
            <h6 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 italic">
              Rule 01
            </h6>
            <p className="text-[11px] text-muted-foreground font-medium">
              Llevar means both "to wear" and "to carry".
            </p>
          </div>
          <div className="space-y-2">
            <h6 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 italic">
              Rule 02
            </h6>
            <p className="text-[11px] text-muted-foreground font-medium">
              Colors and materials always follow the noun.
            </p>
          </div>
          <div className="space-y-2">
            <h6 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 italic">
              Rule 03
            </h6>
            <p className="text-[11px] text-muted-foreground font-medium">
              It follows regular -AR conjugation rules.
            </p>
          </div>
          <div className="space-y-2">
            <h6 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 italic">
              Rule 04
            </h6>
            <p className="text-[11px] text-muted-foreground font-medium">
              Use "Puesto" to emphasize being dressed in it now.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default grammar_lesson_12;
