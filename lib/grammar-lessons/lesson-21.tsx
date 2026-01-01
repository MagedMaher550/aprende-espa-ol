"use client";
import type React from "react";
import { useState, useEffect } from "react";
import {
  Heart,
  Info,
  Check,
  Zap,
  AlertCircle,
  Users,
  MessageSquare,
  ArrowRight,
  BookOpen,
} from "lucide-react";

const grammar_lesson_21: React.FC = () => {
  const [userInputs, setUserInputs] = useState<{ [key: string]: string }>({});
  const [feedback, setFeedback] = useState<{
    [key: string]: "correct" | "incorrect" | null;
  }>({});
  const [progress, setProgress] = useState<number>(0);

  const handleInputChange = (id: string, val: string) => {
    setUserInputs((prev) => ({ ...prev, [id]: val.toLowerCase().trim() }));
  };

  const checkAnswer = (id: string, correct: string) => {
    const isCorrect = userInputs[id] === correct.toLowerCase().trim();
    setFeedback((prev) => ({
      ...prev,
      [id]: isCorrect ? "correct" : "incorrect",
    }));
  };

  useEffect(() => {
    const totalPossible = 10;
    const currentCorrect = Object.values(feedback).filter(
      (v) => v === "correct"
    ).length;
    setProgress((currentCorrect / totalPossible) * 100);
  }, [feedback]);

  return (
    <div className="mx-auto w-full max-w-5xl space-y-20 px-4 pb-40 pt-10 sm:px-6 transition-all duration-500 bg-background text-foreground font-sans">
      {/* 1. CORE CONCEPT */}
      <section className="space-y-10">
        <div className="flex items-start gap-4 border-b border-rose-500/20 pb-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-rose-700 text-lg font-bold text-white shadow-md">
            1
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold uppercase tracking-tight text-rose-900 dark:text-rose-50">
              Estructura Fundamental
            </h2>
            <p className="text-xs text-muted-foreground italic">
              La cosa o actividad es el sujeto de la oración.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-rose-700">
              La Fórmula
            </h3>
            <div className="p-4 bg-background rounded-xl border border-border font-mono text-center text-sm">
              <span className="text-muted-foreground">(A mí)</span>{" "}
              <span className="text-rose-600 font-bold">me</span>{" "}
              <span className="text-rose-600 font-bold">gusta</span> el café
            </div>
            <ul className="text-xs space-y-2 text-muted-foreground">
              <li>
                • <b className="text-foreground">IO Pronoun:</b> Me, te, le,
                nos, os, les (Obligatorio).
              </li>
              <li>
                • <b className="text-foreground">Gusta:</b> Para cosas
                singulares o infinitivos.
              </li>
              <li>
                • <b className="text-foreground">Gustan:</b> Solo para cosas en
                plural.
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl border border-border bg-card/50 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest">
              Pronombres de Objeto Indirecto
            </h3>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              {[
                "Yo → me",
                "Tú → te",
                "Él/Ella → le",
                "Nosotros → nos",
                "Vosotros → os",
                "Ellos → les",
              ].map((item) => (
                <div
                  key={item}
                  className="p-2 rounded bg-muted/50 border border-border flex justify-center font-bold italic"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. GUSTA VS GUSTAN */}
      <section className="space-y-10">
        <div className="flex items-start gap-4 border-b border-rose-500/20 pb-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-rose-700 text-lg font-bold text-white">
            2
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold uppercase tracking-tight">
              Gusta vs. Gustan
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-6 rounded-xl border border-border bg-card text-center space-y-2">
            <p className="text-2xl font-black text-rose-600">GUSTA</p>
            <p className="text-[10px] uppercase font-bold text-muted-foreground">
              Singular
            </p>
            <p className="text-xs italic">Me gusta el té.</p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card text-center space-y-2">
            <p className="text-2xl font-black text-rose-600">GUSTA</p>
            <p className="text-[10px] uppercase font-bold text-muted-foreground">
              Verbos (Infinitivo)
            </p>
            <p className="text-xs italic">Nos gusta leer.</p>
          </div>
          <div className="p-6 rounded-xl border border-rose-500 bg-rose-600 text-white text-center space-y-2 shadow-lg">
            <p className="text-2xl font-black">GUSTAN</p>
            <p className="text-[10px] uppercase font-bold opacity-80">Plural</p>
            <p className="text-xs italic italic">Te gustan los perros.</p>
          </div>
        </div>
      </section>

      {/* 3. SIMILAR VERBS */}
      <section className="space-y-10">
        <div className="flex items-start gap-4 border-b border-rose-500/20 pb-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-rose-700 text-lg font-bold text-white shadow-md">
            3
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold uppercase tracking-tight">
              Verbos Hermanos
            </h2>
            <p className="text-xs text-muted-foreground italic">
              Funcionan exactamente igual que "Gustar".
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { v: "Encantar", m: "To love strongly", ex: "Me encanta el café" },
            { v: "Interesar", m: "To interest", ex: "Le interesa el arte" },
            { v: "Importar", m: "To matter", ex: "Nos importa el examen" },
            { v: "Doler", m: "To hurt", ex: "Me duele la espalda" },
          ].map((item) => (
            <div
              key={item.v}
              className="p-4 rounded-xl border border-border bg-card hover:border-rose-500 transition-colors"
            >
              <h4 className="text-sm font-black text-rose-600">{item.v}</h4>
              <p className="text-[9px] uppercase tracking-tighter text-muted-foreground mb-2">
                {item.m}
              </p>
              <p className="text-[11px] font-medium italic">"{item.ex}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PRACTICE LAB */}
      <section className="space-y-10">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex size-10 items-center justify-center rounded-lg bg-rose-700 text-lg font-bold text-white">
            P
          </div>
          <h2 className="text-2xl font-bold uppercase tracking-tight">
            Laboratorio de Práctica
          </h2>
          <div className="w-48 h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-rose-500 transition-all duration-1000"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { id: "P1", q: "A mí me ______ el cine.", a: "gusta" },
            { id: "P2", q: "A ellos les ______ los coches.", a: "gustan" },
            { id: "P3", q: "A nosotros ______ encanta el invierno.", a: "nos" },
            { id: "P4", q: "A ti ______ interesa el arte.", a: "te" },
            { id: "P5", q: "A él le ______ las frutas.", a: "gustan" },
            { id: "P6", q: "A vosotros ______ importa el examen.", a: "os" },
          ].map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl border border-border bg-card/50 space-y-4"
            >
              <p className="text-xs font-bold">{item.q}</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="..."
                  className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-xs outline-none focus:border-rose-500 transition-all"
                  onChange={(e) => handleInputChange(item.id, e.target.value)}
                />
                <button
                  onClick={() => checkAnswer(item.id, item.a)}
                  className="bg-rose-600 text-white p-2 rounded-lg hover:bg-rose-700 transition-colors"
                >
                  <Check size={16} />
                </button>
              </div>
              {feedback[item.id] && (
                <p
                  className={`text-[10px] font-black uppercase tracking-widest flex items-center gap-1 ${
                    feedback[item.id] === "correct"
                      ? "text-emerald-500"
                      : "text-rose-500"
                  }`}
                >
                  {feedback[item.id] === "correct"
                    ? "Correcto"
                    : "Revisa de nuevo"}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* RECAP FOOTER */}
      <footer className="pt-10 border-t border-border">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border overflow-hidden rounded-xl border border-border">
          {[
            { l: "Singular", r: "gusta" },
            { l: "Plural", r: "gustan" },
            { l: "Infinitivo", r: "gusta" },
            { l: "A él/ella", r: "le" },
          ].map((card, i) => (
            <div
              key={i}
              className="p-4 bg-card text-center group hover:bg-rose-500/5 transition-colors"
            >
              <p className="text-[9px] font-black uppercase text-rose-600 mb-1">
                {card.l}
              </p>
              <p className="text-xs font-bold italic">{card.r}</p>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default grammar_lesson_21;
