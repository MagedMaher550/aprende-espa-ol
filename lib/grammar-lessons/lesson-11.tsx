"use client";
import type React from "react";
import { useState } from "react";
import {
  User,
  Heart,
  Eye,
  Shirt,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  PenTool,
  RotateCcw,
  Languages,
  Info,
  Layers,
  Sparkles,
} from "lucide-react";

const grammar_lesson_11: React.FC = () => {
  const [reveals, setReveals] = useState<{ [key: string]: boolean }>({});
  const [activeTab, setActiveTab] = useState<string>("ser");

  const toggleReveal = (id: string) => {
    setReveals((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="mx-auto w-full max-w-6xl space-y-16 px-4 pb-32 sm:px-6 lg:space-y-24">
      {/* HEADER SECTION */}
      <header className="space-y-4 text-center">
        <div className="mx-auto flex size-16 items-center justify-center rounded-3xl bg-accent shadow-2xl">
          <Languages className="size-8 text-accent-foreground" />
        </div>
        <h1 className="text-4xl font-black tracking-tighter uppercase italic sm:text-6xl">
          Mastering Description
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          In Spanish, describing someone is a "four-verb dance." We navigate
          between who someone <b>is</b>, how they <b>feel</b>, what they{" "}
          <b>have</b>, and what they <b>wear</b>.
        </p>
      </header>

      {/* NAVIGATION TABS FOR ELABORATION */}
      <nav className="flex flex-wrap justify-center gap-2">
        {["ser", "estar", "tener", "llevar"].map((verb) => (
          <button
            key={verb}
            onClick={() => setActiveTab(verb)}
            className={`px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest transition-all ${
              activeTab === verb
                ? "bg-accent text-accent-foreground shadow-lg scale-105"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {verb}
          </button>
        ))}
      </nav>

      {/* 1. SER - PERMANENT TRAITS */}
      {activeTab === "ser" && (
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-10">
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-2xl font-black text-accent-foreground shadow-lg">
              1
            </div>
            <h2 className="text-3xl font-black uppercase italic italic tracking-tight">
              Using SER: The Identity Verb
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6 rounded-[1.5rem] border border-border bg-card p-8 shadow-sm">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-accent flex items-center gap-2">
                <Info size={16} /> Usage & Core Logic
              </h3>
              <p className="text-sm leading-relaxed">
                <b>SER</b> is used for the "essence" of a person. These are
                things that do not change from one hour to the next.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-bold text-sm">Identity & Names</p>
                    <p className="text-xs text-muted-foreground italic">
                      "Yo soy Carlos."
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-bold text-sm">Nationality & Origin</p>
                    <p className="text-xs text-muted-foreground italic">
                      "Nosotros somos egipcios."
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-bold text-sm">Profession</p>
                    <p className="text-xs text-muted-foreground italic">
                      "Ella es estudiante."
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                Personality Vocabulary
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { s: "Simpático", e: "Friendly" },
                  { s: "Trabajador", e: "Hardworking" },
                  { s: "Inteligente", e: "Intelligent" },
                  { s: "Tímido", e: "Shy" },
                  { s: "Serio", e: "Serious" },
                  { s: "Amable", e: "Kind" },
                ].map((word, i) => (
                  <div
                    key={i}
                    className="flex flex-col p-3 rounded-xl border border-border bg-muted/20"
                  >
                    <span className="font-bold text-foreground text-sm">
                      {word.s}
                    </span>
                    <span className="text-[10px] text-muted-foreground uppercase">
                      {word.e}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2. ESTAR - TEMPORARY STATES */}
      {activeTab === "estar" && (
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-10">
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-2xl font-black text-accent-foreground shadow-lg">
              2
            </div>
            <h2 className="text-3xl font-black uppercase italic italic tracking-tight">
              Using ESTAR: States & Location
            </h2>
          </div>

          <div className="rounded-[3rem] bg-foreground p-8 text-background dark:bg-muted/10 dark:text-foreground border border-border shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-accent italic flex items-center gap-2">
                  <Heart size={20} /> The "How" and "Where"
                </h3>
                <p className="opacity-80 text-sm leading-relaxed">
                  If <b>Ser</b> is who you are, <b>Estar</b> is how you are
                  doing right now. This verb handles emotions, physical health,
                  and current position.
                </p>
                <div className="space-y-3">
                  <div className="p-4 bg-background/5 rounded-2xl border border-background/10">
                    <p className="text-sm font-bold">"Estoy cansado hoy."</p>
                    <p className="text-xs opacity-60">
                      I am tired today (state).
                    </p>
                  </div>
                  <div className="p-4 bg-background/5 rounded-2xl border border-background/10">
                    <p className="text-sm font-bold">
                      "Mis padres están en casa."
                    </p>
                    <p className="text-xs opacity-60">
                      My parents are at home (location).
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-accent">
                  Temporary Moods
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    { s: "Contente / Feliz", e: "Happy" },
                    { s: "Triste", e: "Sad" },
                    { s: "Enfermo/a", e: "Sick" },
                    { s: "Enfadado/a", e: "Angry" },
                    { s: "Aburrido/a", e: "Bored" },
                  ].map((mood, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center p-3 bg-background/10 rounded-xl border border-background/5"
                    >
                      <span className="font-bold">{mood.s}</span>
                      <span className="text-[10px] uppercase opacity-40">
                        {mood.e}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. TENER - PHYSICAL FEATURES */}
      {activeTab === "tener" && (
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-10">
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-2xl font-black text-accent-foreground shadow-lg">
              3
            </div>
            <h2 className="text-3xl font-black uppercase italic italic tracking-tight">
              Using TENER: Anatomy & Age
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 p-8 rounded-[2rem] bg-accent/5 border border-accent/20 space-y-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-accent">
                Anatomy of Tener
              </h3>
              <p className="text-sm leading-relaxed italic">
                We use <b>Tener</b> (to have) for things you "possess" on your
                body like eyes, hair, or a specific age.
              </p>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="overflow-hidden rounded-[2rem] border border-border shadow-lg">
                <table className="w-full text-left">
                  <thead className="bg-muted">
                    <tr className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                      <th className="p-4">Feature</th>
                      <th className="p-4">Spanish Example</th>
                      <th className="p-4">Meaning</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-sm">
                    <tr>
                      <td className="p-4 font-bold">Eyes</td>
                      <td className="p-4 italic">Tengo los ojos verdes.</td>
                      <td className="p-4">Green eyes.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold">Hair</td>
                      <td className="p-4 italic">Tiene el pelo largo.</td>
                      <td className="p-4">Long hair.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold">Age</td>
                      <td className="p-4 italic">Tengo treinta años.</td>
                      <td className="p-4">I am 30.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border flex items-start gap-4">
                <AlertCircle className="text-red-500 shrink-0 mt-1" />
                <p className="text-xs italic text-muted-foreground leading-relaxed">
                  <b>Note:</b> Do not use <i>ser</i> for age. In Spanish, you
                  "have" years, you aren't them.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. LLEVAR - FASHION & DETAILS */}
      {activeTab === "llevar" && (
        <section className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-10">
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-2xl font-black text-accent-foreground shadow-lg">
              4
            </div>
            <h2 className="text-3xl font-black uppercase italic italic tracking-tight">
              Using LLEVAR: Appearance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-8 rounded-[2rem] border border-border bg-card shadow-sm space-y-4">
                <h3 className="text-xs font-black uppercase tracking-widest text-accent flex items-center gap-2">
                  <Shirt size={16} /> Wearable Traits
                </h3>
                <p className="text-sm">
                  <b>Llevar</b> (to carry/wear) is used for clothes and
                  changeable physical attributes like a beard or glasses.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-bold">
                    "Llevo gafas."{" "}
                    <span className="text-xs font-normal text-muted-foreground">
                      (I wear glasses)
                    </span>
                  </p>
                  <p className="text-sm font-bold">
                    "Lleva bigote."{" "}
                    <span className="text-xs font-normal text-muted-foreground">
                      (He has a mustache)
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                Essential Clothing Vocab
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {[
                  "Un vestido",
                  "Una chaqueta",
                  "Camiseta",
                  "Pantalones",
                  "Zapatos",
                  "Sombrero",
                ].map((item) => (
                  <div
                    key={item}
                    className="p-3 bg-muted/40 rounded-xl border border-border flex justify-between"
                  >
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* EXPANDED PRACTICE SECTION */}
      <section className="space-y-12">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex size-14 items-center justify-center rounded-full bg-accent/10 text-accent">
            <Sparkles className="size-8" />
          </div>
          <h2 className="text-4xl font-black tracking-tight uppercase italic">
            Interactive Challenge
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Test your ability to distinguish between these four crucial verbs.
            Tap to reveal the logic.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              id: "L11_1",
              q: "1. Yo ____ alto y fuerte.",
              v: "Soy",
              r: "Ser",
              reason: "Permanent physical trait.",
            },
            {
              id: "L11_2",
              q: "2. Ella ____ enferma hoy.",
              v: "Está",
              r: "Estar",
              reason: "Temporary health state.",
            },
            {
              id: "L11_3",
              q: "3. Nosotros ____ los ojos azules.",
              v: "Tenemos",
              r: "Tener",
              reason: "Physical feature/Possession.",
            },
            {
              id: "L11_4",
              q: "4. Mi padre ____ bigote y gafas.",
              v: "Lleva",
              r: "Llevar",
              reason: "Changeable appearance detail.",
            },
            {
              id: "L11_5",
              q: "5. ¿____ cansados vosotros?",
              v: "Estáis",
              r: "Estar",
              reason: "Emotion/Physical state.",
            },
            {
              id: "L11_6",
              q: "6. Ellos ____ médicos.",
              v: "Son",
              r: "Ser",
              reason: "Profession/Identity.",
            },
            {
              id: "L11_7",
              q: "7. Mi hermana ____ el pelo corto.",
              v: "Lleva / Tiene",
              r: "Llevar/Tener",
              reason: "Both are acceptable for hair styles.",
            },
            {
              id: "L11_8",
              q: "8. ¿Cuántos años ____ tú?",
              v: "Tienes",
              r: "Tener",
              reason: "Age always uses Tener in Spanish.",
            },
            {
              id: "L11_9",
              q: "9. El hotel ____ en el centro.",
              v: "Está",
              r: "Estar",
              reason: "Location of a physical object.",
            },
          ].map((item) => (
            <div
              key={item.id}
              onClick={() => toggleReveal(item.id)}
              className="group relative cursor-pointer overflow-hidden rounded-[2rem] border-2 border-border bg-card p-8 transition-all hover:border-accent hover:shadow-xl active:scale-95"
            >
              <div className="flex items-center gap-2 mb-4">
                <HelpCircle size={18} className="text-accent" />
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  Fill the blank
                </span>
              </div>
              <p className="text-lg font-bold text-foreground leading-tight min-h-[3rem]">
                {item.q}
              </p>

              <div
                className={`mt-4 transition-all duration-500 ${
                  reveals[item.id]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <div className="flex items-center gap-2 text-2xl font-black text-accent mb-1">
                  {item.v}
                </div>
                <div className="p-3 rounded-xl bg-muted/50 border border-border text-xs leading-relaxed">
                  <span className="font-bold text-accent uppercase">
                    Verb: {item.r}
                  </span>
                  <p className="mt-1 text-muted-foreground">{item.reason}</p>
                </div>
              </div>

              <div className="absolute bottom-6 right-8 text-muted-foreground/10 group-hover:text-accent/20 transition-colors pointer-events-none">
                <RotateCcw size={48} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK COMPARISON TABLE */}
      <section className="space-y-8">
        <h3 className="text-2xl font-black italic uppercase text-center tracking-tighter">
          At a Glance Comparison
        </h3>
        <div className="overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-accent text-[11px] font-black uppercase tracking-widest text-accent-foreground bg-green-500">
                  <th className="p-6">Verb</th>
                  <th className="p-6">Main Purpose</th>
                  <th className="p-6">Pro Example</th>
                  <th className="p-6">Common Error</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  {
                    v: "Ser",
                    p: "Essence & Identity",
                    e: "Soy amable.",
                    m: "Using for location.",
                  },
                  {
                    v: "Estar",
                    p: "State & Place",
                    e: "Estoy feliz.",
                    m: "Using for profession.",
                  },
                  {
                    v: "Tener",
                    p: "Features & Age",
                    e: "Tengo 20 años.",
                    m: "Using Ser for age.",
                  },
                  {
                    v: "Llevar",
                    p: "Clothes & Accessories",
                    e: "Llevo gafas.",
                    m: "Using Ser for clothes.",
                  },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-muted/30 transition-colors">
                    <td className="p-6 font-black text-accent text-lg">
                      {row.v}
                    </td>
                    <td className="p-6 text-sm font-medium">{row.p}</td>
                    <td className="p-6 text-sm italic font-bold">"{row.e}"</td>
                    <td className="p-6 text-xs text-red-500 font-bold">
                      {row.m}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PRODUCTION & WRITING TASKS */}
      <section className="rounded-[3rem] border border-dashed border-border bg-muted/20 p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h2 className="text-4xl font-black italic tracking-tighter uppercase">
              Writing Studio
            </h2>
            <div className="space-y-6">
              {[
                {
                  label: "Describe Yourself",
                  task: "Write 3 sentences using **Ser** for your personality and 3 for your profession/origin.",
                },
                {
                  label: "Check Your Mood",
                  task: "Write 3 sentences with **Estar** describing how you feel at different times of the day.",
                },
                {
                  label: "Physical Inventory",
                  task: "Use **Tener** to describe your eyes and hair, then **Llevar** for your current outfit.",
                },
              ].map((task, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-foreground text-background text-xs font-bold">
                    {i + 1}
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-black uppercase tracking-widest">
                      {task.label}
                    </p>
                    <p className="text-sm text-muted-foreground">{task.task}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.5rem] bg-accent p-8 text-accent-foreground shadow-2xl">
            <div className="relative z-10 space-y-6">
              <h4 className="flex items-center gap-2 font-black uppercase tracking-widest text-[11px] opacity-80">
                <PenTool size={16} /> Production Prompt
              </h4>
              <p className="text-xl font-bold leading-tight italic">
                "Describe your favorite celebrity without saying their name. Use
                all four verbs (Ser, Estar, Tener, Llevar)."
              </p>
              <div className="p-4 rounded-xl bg-background/10 border border-background/20 italic text-sm">
                "Es un actor famoso. Es muy simpático. Tiene los ojos marrones.
                Lleva una chaqueta de cuero..."
              </div>
            </div>
            <Layers className="absolute -bottom-8 -right-8 size-48 opacity-10" />
          </div>
        </div>
      </section>

      {/* FINAL QUICK TIPS FOOTER */}
      <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-6">
        <div className="flex flex-col p-4 rounded-2xl border border-border bg-card">
          <span className="text-[10px] font-black uppercase text-accent mb-1 tracking-widest">
            Agreement
          </span>
          <p className="text-[11px] text-muted-foreground">
            Adjectives must match gender (o/a) and number (s).
          </p>
        </div>
        <div className="flex flex-col p-4 rounded-2xl border border-border bg-card">
          <span className="text-[10px] font-black uppercase text-accent mb-1 tracking-widest">
            Age
          </span>
          <p className="text-[11px] text-muted-foreground">
            Always "Tener" years. Never "Ser" years.
          </p>
        </div>
        <div className="flex flex-col p-4 rounded-2xl border border-border bg-card">
          <span className="text-[10px] font-black uppercase text-accent mb-1 tracking-widest">
            Location
          </span>
          <p className="text-[11px] text-muted-foreground">
            "Estar" is for location, even for permanent buildings.
          </p>
        </div>
        <div className="flex flex-col p-4 rounded-2xl border border-border bg-card">
          <span className="text-[10px] font-black uppercase text-accent mb-1 tracking-widest">
            Clothes
          </span>
          <p className="text-[11px] text-muted-foreground">
            Use "Llevar" for temporary appearance details.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default grammar_lesson_11;
