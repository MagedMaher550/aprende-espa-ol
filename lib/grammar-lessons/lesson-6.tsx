'use client'
import type React from "react";
import { useState } from "react";
import {
  Coffee,
  Car,
  Thermometer,
  UserPlus,
  Train,
  Camera,
  CheckCircle2,
  AlertCircle,
  Zap,
  ArrowRight,
} from "lucide-react";

const grammar_lesson_6: React.FC = () => {
  const [reveals, setReveals] = useState<{ [key: string]: boolean }>({});

  const toggleReveal = (id: string) => {
    setReveals((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="mx-auto w-full max-w-6xl space-y-12 px-4 pb-24 sm:px-6 lg:space-y-20">
      {/* 1. VERB TENER SECTION */}
      <section className="space-y-6 lg:space-y-10">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-lg font-black text-accent-foreground shadow-lg sm:h-12 sm:w-12 sm:rounded-2xl sm:text-xl">
            1
          </div>
          <h2 className="text-xl font-black tracking-tight uppercase italic sm:text-3xl lg:text-4xl">
            Verb Tener (To Have)
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {/* USAGE ELABORATION */}
          <div className="space-y-4 lg:col-span-1">
            <h3 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-accent sm:text-xs">
              <Zap size={14} /> Usage
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="flex gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-colors hover:border-accent/50">
                <div className="text-accent shrink-0">
                  <Car size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold truncate">Possession</p>
                  <p className="text-xs italic text-muted-foreground">
                    "Yo tengo un coche."
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-colors hover:border-accent/50">
                <div className="text-accent shrink-0">
                  <UserPlus size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold truncate">Age</p>
                  <p className="text-xs italic text-muted-foreground">
                    "Tengo veinte años."
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-colors hover:border-accent/50">
                <div className="text-accent shrink-0">
                  <Thermometer size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold">Sensations</p>
                  <p className="text-[10px] italic text-muted-foreground sm:text-xs">
                    Hunger, thirst, fear, cold, heat.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CONJUGATION TABLE */}
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl sm:rounded-[2.5rem] lg:col-span-2">
            <div className="flex items-center justify-between border-b border-border bg-muted/50 p-4 sm:p-6">
              <span className="text-sm font-black uppercase tracking-tighter sm:text-lg underline decoration-accent decoration-2 underline-offset-4">
                Tener Conjugation
              </span>
              <span className="rounded-full bg-red-500/10 px-2 py-1 text-[9px] font-bold italic uppercase text-red-500 sm:px-3 sm:text-[10px]">
                Irregular Yo Form
              </span>
            </div>

            <div className="overflow-x-auto">
              <div className="grid min-w-[320px] grid-cols-2 divide-x divide-y divide-border sm:grid-cols-3">
                <div className="p-4 sm:p-6">
                  <p className="text-[9px] font-black text-muted-foreground uppercase mb-1">
                    Yo
                  </p>
                  <p className="text-lg font-black text-red-500 sm:text-xl">
                    tengo
                  </p>
                  <p className="text-[10px] italic text-muted-foreground">
                    I have
                  </p>
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-[9px] font-black text-muted-foreground uppercase mb-1">
                    Tú
                  </p>
                  <p className="text-lg font-black text-accent sm:text-xl">
                    tienes
                  </p>
                  <p className="text-[10px] italic text-muted-foreground">
                    you have
                  </p>
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-[9px] font-black text-muted-foreground uppercase mb-1">
                    Él/Ella/Ud.
                  </p>
                  <p className="text-lg font-black text-accent sm:text-xl">
                    tiene
                  </p>
                  <p className="text-[10px] italic text-muted-foreground">
                    he/she/you have
                  </p>
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-[9px] font-black text-muted-foreground uppercase mb-1">
                    Nosotros/as
                  </p>
                  <p className="text-lg font-black text-accent sm:text-xl">
                    tenemos
                  </p>
                  <p className="text-[10px] italic text-muted-foreground">
                    we have
                  </p>
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-[9px] font-black text-muted-foreground uppercase mb-1">
                    Vosotros/as
                  </p>
                  <p className="text-lg font-black text-accent sm:text-xl">
                    tenéis
                  </p>
                  <p className="text-[10px] italic text-muted-foreground">
                    you all have
                  </p>
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-[9px] font-black text-muted-foreground uppercase mb-1">
                    Ellos/as/Uds.
                  </p>
                  <p className="text-lg font-black text-accent sm:text-xl">
                    tienen
                  </p>
                  <p className="text-[10px] italic text-muted-foreground">
                    they/you all have
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TENER EXAMPLES */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-4 rounded-3xl border border-accent/10 bg-accent/5 p-6 shadow-sm">
            <h4 className="flex items-center gap-2 text-base font-bold text-accent sm:text-lg">
              <AlertCircle size={20} /> Sensations
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-border bg-background p-3 text-[10px] font-bold sm:text-xs">
                Tengo hambre
                <br />
                <span className="font-normal opacity-60">I am hungry</span>
              </div>
              <div className="rounded-xl border border-border bg-background p-3 text-[10px] font-bold sm:text-xs">
                Tengo frío
                <br />
                <span className="font-normal opacity-60">I am cold</span>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h4 className="mb-3 text-base font-bold sm:text-lg italic underline decoration-accent decoration-2 underline-offset-4">
              PDF Examples
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <ArrowRight size={14} className="mt-1 shrink-0 text-accent" />{" "}
                Tengo un perro.
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight size={14} className="mt-1 shrink-0 text-accent" />{" "}
                Nosotros tenemos tres hermanos.
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight size={14} className="mt-1 shrink-0 text-accent" />{" "}
                Ellos tienen miedo de la oscuridad.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. VERB TOMAR SECTION */}
      <section className="space-y-6 lg:space-y-10">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-lg font-black text-accent-foreground shadow-lg sm:h-12 sm:w-12 sm:rounded-2xl sm:text-xl">
            2
          </div>
          <h2 className="text-xl font-black tracking-tight uppercase italic sm:text-3xl lg:text-4xl">
            Verb Tomar (To Take/Consume)
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl sm:rounded-[2.5rem]">
            <div className="border-b border-border bg-muted/50 p-4 sm:p-6">
              <span className="text-sm font-black uppercase tracking-tighter sm:text-lg underline decoration-accent decoration-2 underline-offset-4">
                Tomar Conjugation
              </span>
            </div>
            <div className="grid grid-cols-2 divide-x divide-y divide-border sm:grid-cols-2">
              {[
                { s: "Yo", c: "tomo", m: "I take/drink" },
                { s: "Tú", c: "tomas", m: "you take/drink" },
                { s: "Él/Ella/Ud.", c: "toma", m: "he/she/you take/drink" },
                { s: "Nosotros/as", c: "tomamos", m: "we take/drink" },
                { s: "Vosotros/as", c: "tomáis", m: "you all take/drink" },
                {
                  s: "Ellos/as/Uds.",
                  c: "toman",
                  m: "they/you all take/drink",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 sm:p-6 hover:bg-accent/[0.02] transition-colors"
                >
                  <p className="mb-1 text-[9px] font-black text-muted-foreground uppercase">
                    {item.s}
                  </p>
                  <p className="text-lg font-black text-accent sm:text-xl">
                    {item.c}
                  </p>
                  <p className="text-[10px] italic text-muted-foreground">
                    {item.m}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6 rounded-2xl bg-foreground p-6 text-background shadow-2xl dark:bg-card dark:text-foreground sm:rounded-[2.5rem] sm:p-10">
            <h3 className="border-b border-background/20 pb-4 text-xl font-bold italic sm:text-2xl">
              Usage Contexts
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Coffee className="shrink-0 text-accent" size={24} />
                <div>
                  <p className="text-sm font-bold sm:text-base">Consuming</p>
                  <p className="text-[11px] italic opacity-70 sm:text-xs">
                    "Yo tomo café por la mañana."
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Train className="shrink-0 text-accent" size={24} />
                <div>
                  <p className="text-sm font-bold sm:text-base">
                    Transportation
                  </p>
                  <p className="text-[11px] italic opacity-70 sm:text-xs">
                    "Tú tomas el tren todos los días."
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Camera className="shrink-0 text-accent" size={24} />
                <div>
                  <p className="text-sm font-bold sm:text-base">Actions</p>
                  <p className="text-[11px] italic opacity-70 sm:text-xs">
                    "Ella toma una foto."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE QUIZ */}
      <section className="space-y-8 sm:space-y-12">
        <div className="text-center">
          <h2 className="text-2xl font-black tracking-tight sm:text-4xl uppercase">
            Mastery Challenge
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { id: "L6_P1", q: "Yo _____ (tener) un coche.", a: "tengo" },
            { id: "L6_P2", q: "Tú _____ (tener) hambre.", a: "tienes" },
            { id: "L6_P3", q: "Él _____ (tener) una bicicleta.", a: "tiene" },
            { id: "L6_P4", q: "Nosotros _____ (tomar) café.", a: "tomamos" },
            { id: "L6_P5", q: "Vosotros _____ (tomar) agua.", a: "tomáis" },
            { id: "L6_P6", q: "Ellos _____ (tomar) el tren.", a: "toman" },
          ].map((item, idx) => (
            <div
              key={item.id}
              onClick={() => toggleReveal(item.id)}
              className="group cursor-pointer rounded-2xl border border-border bg-card p-5 transition-all hover:border-accent shadow-sm active:scale-95"
            >
              <div className="mb-2 flex items-center justify-between text-[10px] font-black uppercase text-muted-foreground">
                <span>Task {idx + 1}</span>
                <CheckCircle2
                  size={16}
                  className={reveals[item.id] ? "text-accent" : "opacity-20"}
                />
              </div>
              <p className="mb-4 text-sm font-bold sm:text-base">{item.q}</p>
              <div
                className={`transition-all duration-300 ${
                  reveals[item.id] ? "opacity-100" : "opacity-0 translate-y-2"
                }`}
              >
                <p className="text-xl font-black text-accent">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK REFERENCE */}
      <footer className="grid grid-cols-1 gap-6 rounded-2xl border border-dashed border-border bg-muted/20 p-6 sm:rounded-[3rem] sm:p-10 md:grid-cols-2">
        <div className="space-y-2">
          <p className="text-[10px] font-black uppercase tracking-widest text-accent">
            Ref: Tener
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Possession, age, physical state. Note: <b>Tengo</b> is the only
            irregular form.
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-[10px] font-black uppercase tracking-widest text-accent">
            Ref: Tomar
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Drink, take, consume, or transport. All forms are regular.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default grammar_lesson_6;
