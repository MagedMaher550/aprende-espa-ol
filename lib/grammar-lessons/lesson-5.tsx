"use client";
import type React from "react";
import { useState } from "react";
import {
  Layers,
  Zap,
  BookOpen,
  PenTool,
  CheckCircle2,
  ChevronRight,
  Info,
} from "lucide-react";

const grammar_lesson_5: React.FC = () => {
  const [reveals, setReveals] = useState<{ [key: string]: boolean }>({});

  const toggleReveal = (id: string) => {
    setReveals((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const ConjugationCard = ({ title, family, endings, examples }: any) => (
    <div className="rounded-[1.5rem] sm:rounded-[2rem] border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
      <div className="p-5 sm:p-8 border-b border-border bg-muted/20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
          <h3 className="text-2xl sm:text-3xl font-black tracking-tighter text-foreground italic underline decoration-accent decoration-4 underline-offset-8">
            {title}
          </h3>
          <span className="px-4 py-1 rounded-full bg-accent/10 text-accent text-[10px] sm:text-xs font-bold tracking-widest uppercase italic shrink-0">
            {family} Family
          </span>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground">
          To conjugate: remove the <strong>{family}</strong> and add the ending
          according to the subject.
        </p>
      </div>

      <div className="p-5 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-6 bg-gradient-to-b from-transparent to-accent/[0.02]">
        <div className="space-y-3">
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-accent/60 mb-4">
            Endings
          </h4>
          <div className="space-y-2">
            {endings.map((e: any, i: number) => (
              <div
                key={i}
                className="flex items-center gap-3 text-sm sm:text-base group/item"
              >
                <span className="font-bold text-muted-foreground w-12 shrink-0">
                  {e.subject}
                </span>
                <div className="h-px flex-1 bg-border group-hover/item:bg-accent/30 transition-colors" />
                <span className="font-black text-accent text-lg">{e.end}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3 md:border-l md:border-border md:pl-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-4">
            PDF Examples
          </h4>
          <div className="grid grid-cols-1 gap-4">
            {examples.map((ex: any, i: number) => (
              <div key={i} className="space-y-0.5">
                <p className="text-sm font-bold text-foreground leading-tight">
                  {ex.s}
                </p>
                <p className="text-[11px] text-muted-foreground italic">
                  — {ex.m}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto space-y-12 sm:space-y-20 px-4 sm:px-6 pb-24 sm:pb-32">
      {/* 1. -AR VERBS */}
      <ConjugationCard
        title="Verbs in -AR"
        family="-ar"
        endings={[
          { subject: "Yo", end: "-o" },
          { subject: "Tú", end: "-as" },
          { subject: "Él/Ella", end: "-a" },
          { subject: "Nos.", end: "-amos" },
          { subject: "Vos.", end: "-áis" },
          { subject: "Ellos", end: "-an" },
        ]}
        examples={[
          { s: "Yo hablo español.", m: "I speak Spanish." },
          { s: "Tú estudias inglés.", m: "You study English." },
          { s: "Él trabaja en la oficina.", m: "He works at the office." },
          { s: "Nosotros cantamos una canción.", m: "We sing a song." },
          { s: "Vosotros bailáis en la fiesta.", m: "You dance at the party." },
          { s: "Ellos compran libros.", m: "They buy books." },
        ]}
      />

      {/* 2. -ER VERBS */}
      <ConjugationCard
        title="Verbs in -ER"
        family="-er"
        endings={[
          { subject: "Yo", end: "-o" },
          { subject: "Tú", end: "-es" },
          { subject: "Él/Ella", end: "-e" },
          { subject: "Nos.", end: "-emos" },
          { subject: "Vos.", end: "-éis" },
          { subject: "Ellos", end: "-en" },
        ]}
        examples={[
          { s: "Yo como pizza.", m: "I eat pizza." },
          { s: "Tú bebes agua.", m: "You drink water." },
          { s: "Ella aprende español.", m: "She learns Spanish." },
          { s: "Nosotros corremos en el parque.", m: "We run in the park." },
          { s: "Vosotros leéis libros.", m: "You read books." },
          { s: "Ellos venden la casa.", m: "They sell the house." },
        ]}
      />

      {/* 3. -IR VERBS */}
      <ConjugationCard
        title="Verbs in -IR"
        family="-ir"
        endings={[
          { subject: "Yo", end: "-o" },
          { subject: "Tú", end: "-es" },
          { subject: "Él/Ella", end: "-e" },
          { subject: "Nos.", end: "-imos" },
          { subject: "Vos.", end: "-ís" },
          { subject: "Ellos", end: "-en" },
        ]}
        examples={[
          { s: "Yo vivo en Madrid.", m: "I live in Madrid." },
          { s: "Tú escribes cartas.", m: "You write letters." },
          { s: "Él recibe un regalo.", m: "He receives a gift." },
          { s: "Nosotros compartimos la comida.", m: "We share the food." },
          { s: "Vosotros abrís la ventana.", m: "You open the window." },
          { s: "Ellos reciben correos.", m: "They receive emails." },
        ]}
      />

      {/* ELABORATION: THE "NOSOTROS/VOSOTROS" DIFFERENCE */}
      <section className="bg-foreground text-background dark:bg-card dark:text-foreground rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black italic tracking-tighter">
              The Critical Difference
            </h2>
            <p className="text-sm sm:text-base opacity-80 leading-relaxed">
              Notice that <strong>-ER</strong> and <strong>-IR</strong> verbs
              share almost all endings{" "}
              <span className="text-accent font-bold">(o, es, e, en)</span>. The
              only places where they differ are the <strong>Nosotros</strong>{" "}
              and <strong>Vosotros</strong> forms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="p-4 bg-background/10 rounded-2xl border border-background/20 flex-1">
                <p className="text-[10px] uppercase font-black opacity-50">
                  ER Verbs
                </p>
                <p className="text-lg sm:text-xl font-bold text-accent">
                  -emos / -éis
                </p>
              </div>
              <div className="p-4 bg-background/10 rounded-2xl border border-background/20 flex-1">
                <p className="text-[10px] uppercase font-black opacity-50">
                  IR Verbs
                </p>
                <p className="text-lg sm:text-xl font-bold text-accent">
                  -imos / -ís
                </p>
              </div>
            </div>
          </div>
          <div className="bg-accent/20 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-accent/30">
            <h4 className="flex items-center gap-2 font-bold mb-4 text-accent">
              <Info size={20} className="shrink-0" /> Pro-Tip
            </h4>
            <p className="text-xs sm:text-sm italic">
              The "Yo" form is always <strong>-o</strong> across all three
              families. When in doubt about a regular verb, starting with "o"
              for yourself is always a safe bet!
            </p>
          </div>
        </div>
      </section>

      {/* QUICK REFERENCE SECTION (From PDF) */}
      <section className="space-y-6 sm:space-y-8">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight flex items-center gap-3">
          <Zap className="text-accent" /> Quick Reference
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "-AR: o, as, a, amos, áis, an",
            "-ER: o, es, e, emos, éis, en",
            "-IR: o, es, e, imos, ís, en",
          ].map((ref, i) => (
            <div
              key={i}
              className="p-5 sm:p-6 bg-secondary/30 rounded-2xl border border-border text-center font-black text-foreground text-sm sm:text-base"
            >
              {ref}
            </div>
          ))}
        </div>
      </section>

      {/* EXPANDED INTERACTIVE QUIZ */}
      <section className="space-y-8 sm:space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Interactive Mastery Challenge
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Apply your knowledge of endings to complete these sentences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              id: "L5_P1",
              q: "Yo _____ (hablar) español.",
              a: "hablo",
              tip: "-AR Verb (Yo)",
            },
            {
              id: "L5_P2",
              q: "Tú _____ (comer) pizza.",
              a: "comes",
              tip: "-ER Verb (Tú)",
            },
            {
              id: "L5_P3",
              q: "Nosotros _____ (vivir) en Madrid.",
              a: "vivimos",
              tip: "-IR Verb (Nosotros)",
            },
            {
              id: "L5_P4",
              q: "Ellos _____ (trabajar) en la office.",
              a: "trabajan",
              tip: "-AR Verb (Ellos)",
            },
            {
              id: "L5_P5",
              q: "Ella _____ (beber) agua.",
              a: "bebe",
              tip: "-ER Verb (Ella)",
            },
            {
              id: "L5_P6",
              q: "Vosotros _____ (escribir) cartas.",
              a: "escribís",
              tip: "-IR Verb (Vosotros)",
            },
            {
              id: "L5_P7",
              q: "Nosotros _____ (cantar) una canción.",
              a: "cantamos",
              tip: "-AR Verb (Nosotros)",
            },
            {
              id: "L5_P8",
              q: "Tú _____ (beber) agua.",
              a: "bebes",
              tip: "-ER Verb (Tú)",
            },
            {
              id: "L5_P9",
              q: "Ustedes _____ (abrir) la ventana.",
              a: "abren",
              tip: "-IR Verb (Ustedes)",
            },
            {
              id: "L5_P10",
              q: "Vosotros _____ (leer) libros.",
              a: "leéis",
              tip: "-ER Verb (Vosotros)",
            },
            {
              id: "L5_P11",
              q: "Ellos _____ (vender) la casa.",
              a: "venden",
              tip: "-ER Verb (Ellos)",
            },
            {
              id: "L5_P12",
              q: "Ella _____ (aprender) mucho.",
              a: "aprende",
              tip: "-ER Verb (Ella)",
            },
          ].map((item, idx) => (
            <div
              key={item.id}
              onClick={() => toggleReveal(item.id)}
              className="cursor-pointer group p-5 sm:p-6 rounded-2xl sm:rounded-3xl border-2 border-border bg-card hover:border-accent hover:bg-accent/[0.02] transition-all relative overflow-hidden active:scale-[0.98]"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-[9px] sm:text-[10px] font-black text-muted-foreground uppercase tracking-widest bg-muted px-2 py-0.5 rounded shrink-0">
                  Ex {idx + 1}
                </span>
                <span className="text-[9px] sm:text-[10px] font-black text-accent uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity italic ml-2 truncate">
                  {item.tip}
                </span>
              </div>

              <p className="text-base sm:text-lg font-bold text-foreground mb-4 pr-10 leading-tight">
                {item.q}
              </p>

              <div
                className={`flex items-center gap-2 transition-all duration-500 ${
                  reveals[item.id]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
              >
                <CheckCircle2 size={18} className="text-accent shrink-0" />
                <p className="text-xl sm:text-2xl font-black text-accent underline decoration-accent/30">
                  {item.a}
                </p>
              </div>

              <div className="absolute bottom-4 right-6 text-muted-foreground/20 group-hover:text-accent/20 transition-colors pointer-events-none">
                <PenTool size={32} className="sm:size-10" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL PRACTICE PROMPT */}
      <footer className="text-center p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] border border-dashed border-border bg-muted/20 space-y-6">
        <h3 className="text-xl sm:text-2xl font-bold">
          Ready for the next step?
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto italic">
          Try writing 5 sentences about your daily routine using at least one
          verb from each family (-AR, -ER, -IR).
        </p>
      </footer>
    </div>
  );
};

export default grammar_lesson_5;
