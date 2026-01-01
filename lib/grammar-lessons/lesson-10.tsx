"use client";
import type React from "react";
import { useState } from "react";
import {
  Users,
  Heart,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Info,
  PenTool,
  HelpCircle,
  Copy,
} from "lucide-react";

const grammar_lesson_10: React.FC = () => {
  const [reveals, setReveals] = useState<{ [key: string]: boolean }>({});

  const toggleReveal = (id: string) => {
    setReveals((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="mx-auto w-full max-w-6xl space-y-12 px-4 pb-24 sm:px-6 lg:space-y-20">
      {/* 1. POSSESSIVE ADJECTIVES (SHORT) */}
      <section className="space-y-6 lg:space-y-10">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-lg font-black text-accent-foreground shadow-lg sm:size-12 sm:rounded-2xl sm:text-xl">
            1
          </div>
          <h2 className="text-2xl font-black tracking-tight uppercase italic sm:text-4xl">
            Possessive Adjectives (Short)
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl">
            <div className="bg-muted/50 p-4 border-b border-border flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-accent">
                Go Before the Noun
              </span>
              <span className="text-[10px] font-bold text-muted-foreground italic">
                mi casa, tus libros
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/20 border-b border-border">
                  <tr className="text-[10px] font-black uppercase tracking-widest">
                    <th className="p-4">Person</th>
                    <th className="p-4">Singular</th>
                    <th className="p-4">Plural</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { p: "Yo", s: "mi", pl: "mis" },
                    { p: "Tú", s: "tu", pl: "tus" },
                    { p: "Él / Ella / Ud.", s: "su", pl: "sus" },
                    { p: "Nosotros/as", s: "nuestro/a", pl: "nuestros/as" },
                    { p: "Vosotros/as", s: "vuestro/a", pl: "vuestros/as" },
                    { p: "Ellos / Uds.", s: "su", pl: "sus" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-accent/[0.02]">
                      <td className="p-4 font-bold text-muted-foreground">
                        {row.p}
                      </td>
                      <td className="p-4 font-black text-accent">{row.s}</td>
                      <td className="p-4 font-black text-accent">{row.pl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <ShieldCheck size={16} /> Agreement Rule
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed italic">
              Adjectives agree with the <b>thing owned</b>, not the person who
              owns it.
            </p>
            <div className="p-4 rounded-2xl bg-accent/5 border border-accent/20 space-y-2">
              <p className="text-xs font-bold italic">
                "<b>Nuestra</b> hija estudia." (Singular Fem)
              </p>
              <p className="text-xs font-bold italic">
                "<b>Sus</b> hijas estudian." (Plural Fem)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. POSSESSIVE PRONOUNS (LONG) */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-lg font-black text-accent-foreground shadow-lg sm:size-12 sm:rounded-2xl sm:text-xl">
            2
          </div>
          <h2 className="text-2xl font-black tracking-tight uppercase italic sm:text-4xl">
            Possessive Pronouns (Long)
          </h2>
        </div>

        <div className="rounded-[2.5rem] bg-foreground p-8 text-background dark:bg-muted/20 dark:text-foreground border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-accent italic flex items-center gap-2">
                <Copy size={20} /> The "Mine/Yours" Family
              </h3>
              <p className="text-sm opacity-80">
                These go <b>after</b> the noun or replace it entirely. They
                usually require an article (el mío, la tuya).
              </p>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                <div className="p-2 bg-background/10 rounded">Yo: mío/a</div>
                <div className="p-2 bg-background/10 rounded">Tú: tuyo/a</div>
                <div className="p-2 bg-background/10 rounded">Él: suyo/a</div>
                <div className="p-2 bg-background/10 rounded">
                  Nos.: nuestro/a
                </div>
              </div>
            </div>
            <div className="space-y-4 border-l border-background/20 pl-8">
              <h3 className="text-sm font-black uppercase tracking-widest text-accent">
                Examples
              </h3>
              <ul className="text-sm italic space-y-3">
                <li className="flex gap-2">
                  <ArrowRight size={14} className="text-accent" /> "¿Dónde está
                  tu mochila? — La <b>mía</b> está en casa."
                </li>
                <li className="flex gap-2">
                  <ArrowRight size={14} className="text-accent" /> "Estos
                  cuadros son <b>nuestros</b>."
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MARITAL STATUS WITH ESTAR */}
      <section className="space-y-6 lg:space-y-10">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-lg font-black text-accent-foreground shadow-lg sm:size-12 sm:rounded-2xl sm:text-xl">
            3
          </div>
          <h2 className="text-2xl font-black tracking-tight uppercase italic sm:text-4xl">
            Marital Status (Estar)
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { s: "Casado / a", e: "Married" },
            { s: "Soltero / a", e: "Single" },
            { s: "Divorciado / a", e: "Divorced" },
            { s: "Separado / a", e: "Separated" },
            { s: "Viudo / a", e: "Widowed" },
          ].map((item, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl border border-border bg-card hover:border-accent transition-all flex justify-between items-center"
            >
              <div>
                <p className="text-lg font-black text-foreground italic">
                  {item.s}
                </p>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-tighter">
                  {item.e}
                </p>
              </div>
              <Heart
                size={24}
                className="text-muted-foreground/20 group-hover:text-red-500 transition-colors"
              />
            </div>
          ))}
        </div>
        <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10 text-xs italic text-red-500 text-center">
          Note: Always use <b>ESTAR</b> for marital status as it is considered a
          changeable state.
        </div>
      </section>

      {/* 4. AMBIGUITY & CLARITY */}
      <section className="p-8 rounded-[3rem] bg-muted/30 border border-border space-y-6">
        <h3 className="text-xl font-black italic text-center uppercase tracking-tighter">
          Solving Ambiguity: The "Su" Problem
        </h3>
        <p className="text-sm text-center max-w-2xl mx-auto text-muted-foreground">
          Since "Su" can mean his, her, their, or your (formal), use{" "}
          <b>de + person</b> to be clear.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="p-4 bg-card rounded-2xl border border-red-500/20 flex items-center gap-4">
            <span className="line-through text-muted-foreground text-sm">
              Su casa
            </span>
            <ArrowRight size={16} className="text-accent" />
            <span className="font-bold text-sm">La casa de él</span>
          </div>
          <div className="p-4 bg-card rounded-2xl border border-green-500/20 flex items-center gap-4">
            <span className="line-through text-muted-foreground text-sm">
              Su libro
            </span>
            <ArrowRight size={16} className="text-accent" />
            <span className="font-bold text-sm">El libro de Ana</span>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE QUIZ */}
      <section className="space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl uppercase italic">
            Quick Check
          </h2>
          <p className="text-muted-foreground text-sm">
            Tap the card to see the answer
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              id: "q1",
              q: "_____ (My) casa es grande.",
              a: "Mi",
              hint: "Short form before noun",
            },
            {
              id: "q2",
              q: "¿Dónde está _____ (your) coche?",
              a: "tu",
              hint: "Informal 'tú'",
            },
            {
              id: "q3",
              q: "Este libro es _____ (mine).",
              a: "mío",
              hint: "Long form (pronoun)",
            },
            {
              id: "q4",
              q: "Ella está _____ (divorced).",
              a: "divorciada",
              hint: "Agreement with 'Ella'",
            },
            {
              id: "q5",
              q: "Visitamos a _____ (our) abuelos.",
              a: "nuestros",
              hint: "Agreement with 'abuelos'",
            },
            {
              id: "q6",
              q: "La casa es _____ (theirs).",
              a: "suya",
              hint: "Long form for 'Ellos'",
            },
          ].map((item) => (
            <div
              key={item.id}
              onClick={() => toggleReveal(item.id)}
              className="group relative cursor-pointer overflow-hidden rounded-[1.5rem] border-2 border-border bg-card p-6 transition-all hover:border-accent active:scale-95"
            >
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle size={16} className="text-accent" />
                <span className="text-[10px] font-black uppercase text-muted-foreground">
                  Grammar
                </span>
              </div>
              <p className="mb-4 text-base font-bold text-foreground leading-tight">
                {item.q}
              </p>
              <div
                className={`transition-all duration-300 ${
                  reveals[item.id]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
              >
                <p className="text-xl font-black text-accent">{item.a}</p>
                <p className="text-[10px] text-muted-foreground mt-1 italic">
                  {item.hint}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. MINI PRODUCTION TASKS */}
      <footer className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-border">
        <div className="space-y-4">
          <h3 className="text-sm font-black uppercase tracking-widest text-accent flex items-center gap-2">
            <PenTool size={18} /> Mini Production
          </h3>
          <ul className="text-xs text-muted-foreground space-y-2 italic">
            <li>
              • Write 5 sentences about family using <b>mi, tu, su...</b>
            </li>
            <li>
              • Replace nouns in 3 sentences with <b>el mío, la tuya...</b>
            </li>
            <li>
              • Rewrite 3 sentences using <b>de + nombre</b> for clarity.
            </li>
          </ul>
        </div>
        <div className="p-6 rounded-2xl bg-muted/20 border border-dashed border-border">
          <p className="text-[10px] font-black uppercase text-muted-foreground mb-2 tracking-widest">
            Quick Reference
          </p>
          <p className="text-sm italic">
            "Mi madre es alta, la <b>tuya</b> es baja."
          </p>
          <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
            Remember: In Latin America, <b>Ustedes</b> always uses the "Su/Suyo"
            forms.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default grammar_lesson_10;
