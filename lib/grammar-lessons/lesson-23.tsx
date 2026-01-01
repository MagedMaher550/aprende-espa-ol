"use client";
import type React from "react";
import { useState, useEffect } from "react";
import {
  MessageSquare,
  Users,
  Check,
  X,
  PlusCircle,
  MinusCircle,
  ArrowRight,
  HelpCircle,
  Split,
  MessageCircle,
} from "lucide-react";

const grammar_lesson_23: React.FC = () => {
  const [userInputs, setUserInputs] = useState<{ [key: string]: string }>({});
  const [feedback, setFeedback] = useState<{
    [key: string]: "correct" | "incorrect" | null;
  }>({});
  const [progress, setProgress] = useState<number>(0);

  const handleInputChange = (id: string, val: string) => {
    setUserInputs((prev) => ({ ...prev, [id]: val.toLowerCase().trim() }));
  };

  const checkAnswer = (id: string, correct: string) => {
    // Normalizamos para ignorar puntos finales o espacios extra
    const normalizedInput = userInputs[id]?.replace(/\./g, "");
    const normalizedCorrect = correct.toLowerCase().trim().replace(/\./g, "");

    if (normalizedInput === normalizedCorrect) {
      setFeedback((prev) => ({ ...prev, [id]: "correct" }));
    } else {
      setFeedback((prev) => ({ ...prev, [id]: "incorrect" }));
    }
  };

  useEffect(() => {
    const totalPossible = 8;
    const currentCorrect = Object.values(feedback).filter(
      (v) => v === "correct"
    ).length;
    setProgress((currentCorrect / totalPossible) * 100);
  }, [feedback]);

  return (
    <div className="mx-auto w-full max-w-5xl space-y-20 px-4 pb-40 pt-10 sm:px-6 transition-all duration-500 bg-background text-foreground font-sans">
      {/* 1. ASKING STRUCTURE */}
      <section className="space-y-10">
        <div className="flex items-start gap-4 border-b border-cyan-500/20 pb-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-cyan-700 text-lg font-bold text-white shadow-md">
            1
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold uppercase tracking-tight text-cyan-900 dark:text-cyan-50">
              ¿Cómo preguntar?
            </h2>
            <p className="text-xs text-muted-foreground italic">
              Estructura formal e informal.
            </p>
          </div>
        </div>

        <div className="p-8 rounded-3xl border border-border bg-card/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <HelpCircle size={80} />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6 justify-center text-center md:text-left">
            <div className="space-y-2">
              <p className="text-[10px] font-black uppercase text-cyan-500 tracking-[0.2em]">
                Estructura
              </p>
              <p className="text-xl font-mono font-bold">
                ¿A + persona + pronombre + gusta/n + cosa?
              </p>
            </div>
            <div className="h-px md:h-12 w-full md:w-px bg-border" />
            <div className="space-y-2 text-sm italic text-muted-foreground">
              <p>¿A ti te gusta viajar?</p>
              <p>¿A vosotros os gustan los perros?</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE REACTION LOGIC */}
      <section className="space-y-10">
        <div className="flex items-start gap-4 border-b border-cyan-500/20 pb-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-cyan-700 text-lg font-bold text-white">
            2
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold uppercase tracking-tight text-cyan-900 dark:text-cyan-50">
              Reacciones (Agreement vs. Difference)
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Same Opinion */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase flex items-center gap-2 text-emerald-600">
              <PlusCircle size={16} /> Misma Opinión (Same)
            </h3>
            <div className="rounded-2xl border border-emerald-200 dark:border-emerald-900 overflow-hidden">
              <table className="w-full text-xs">
                <thead className="bg-emerald-50 dark:bg-emerald-950/40 border-b border-emerald-200 dark:border-emerald-900">
                  <tr>
                    <th className="p-3 text-left">Si ellos dicen...</th>
                    <th className="p-3 text-left">Tú dices...</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-100 dark:divide-emerald-900">
                  <tr>
                    <td className="p-3 italic">Me gusta...</td>
                    <td className="p-3 font-bold text-emerald-600">
                      A mí también.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 italic">No me gusta...</td>
                    <td className="p-3 font-bold text-emerald-600">
                      A mí tampoco.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Different Opinion */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase flex items-center gap-2 text-rose-600">
              <Split size={16} /> Diferente Opinión (Different)
            </h3>
            <div className="rounded-2xl border border-rose-200 dark:border-rose-900 overflow-hidden">
              <table className="w-full text-xs">
                <thead className="bg-rose-50 dark:bg-rose-950/40 border-b border-rose-200 dark:border-rose-900">
                  <tr>
                    <th className="p-3 text-left">Si ellos dicen...</th>
                    <th className="p-3 text-left">Tú dices...</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-rose-100 dark:divide-rose-900">
                  <tr>
                    <td className="p-3 italic">Me gusta...</td>
                    <td className="p-3 font-bold text-rose-600">A mí no.</td>
                  </tr>
                  <tr>
                    <td className="p-3 italic">No me gusta...</td>
                    <td className="p-3 font-bold text-rose-600">A mí sí.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRACTICE LAB */}
      <section className="space-y-10">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex size-10 items-center justify-center rounded-lg bg-cyan-700 text-lg font-bold text-white">
            P
          </div>
          <h2 className="text-2xl font-bold uppercase tracking-tight">
            Laboratorio de Diálogo
          </h2>
          <div className="w-48 h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-cyan-500 transition-all duration-1000"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Reaction Practice */}
          <div className="space-y-4">
            <p className="text-[10px] font-black uppercase text-muted-foreground text-center">
              Reacciona (Igualdad)
            </p>
            {[
              { id: "R1", q: "Me gustan los videojuegos.", a: "a mí también" },
              { id: "R2", q: "No me gusta el café.", a: "a mí tampoco" },
              { id: "R3", q: "No me gustan las verduras.", a: "a mí tampoco" },
            ].map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl border border-border bg-card flex items-center gap-4"
              >
                <div className="text-[10px] font-bold opacity-40">💬</div>
                <div className="flex-1 space-y-1">
                  <p className="text-xs italic">{item.q}</p>
                  <input
                    type="text"
                    className="w-full bg-background border-b border-border text-xs py-1 outline-none focus:border-cyan-500"
                    placeholder="Tu respuesta..."
                    onChange={(e) => handleInputChange(item.id, e.target.value)}
                    onBlur={() => checkAnswer(item.id, item.a)}
                  />
                </div>
                {feedback[item.id] === "correct" && (
                  <Check className="text-emerald-500" size={16} />
                )}
              </div>
            ))}
          </div>

          {/* Grammar Practice */}
          <div className="space-y-4">
            <p className="text-[10px] font-black uppercase text-muted-foreground text-center">
              Completa la pregunta
            </p>
            {[
              { id: "Q1", q: "¿A ti te _______ el chocolate?", a: "gusta" },
              { id: "Q2", q: "¿A ellos les _______ los viajes?", a: "gustan" },
              { id: "Q3", q: "¿A ella le _______ correr?", a: "gusta" },
            ].map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl border border-border bg-card flex items-center gap-4"
              >
                <div className="text-[10px] font-bold opacity-40">❓</div>
                <div className="flex-1 space-y-1">
                  <p className="text-xs italic">{item.q}</p>
                  <input
                    type="text"
                    className="w-full bg-background border-b border-border text-xs py-1 outline-none focus:border-cyan-500"
                    placeholder="gusta / gustan..."
                    onChange={(e) => handleInputChange(item.id, e.target.value)}
                    onBlur={() => checkAnswer(item.id, item.a)}
                  />
                </div>
                {feedback[item.id] === "correct" && (
                  <Check className="text-emerald-500" size={16} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK RECAP FOOTER */}
      <footer className="pt-10 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
            <p className="text-[10px] font-black uppercase text-emerald-600 mb-1">
              Me gusta (+)
            </p>
            <p className="text-xs font-bold">A mí también</p>
          </div>
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
            <p className="text-[10px] font-black uppercase text-emerald-600 mb-1">
              No me gusta (-)
            </p>
            <p className="text-xs font-bold">A mí tampoco</p>
          </div>
          <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-center">
            <p className="text-[10px] font-black uppercase text-rose-600 mb-1">
              Me gusta (+)
            </p>
            <p className="text-xs font-bold">A mí no</p>
          </div>
          <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-center">
            <p className="text-[10px] font-black uppercase text-rose-600 mb-1">
              No me gusta (-)
            </p>
            <p className="text-xs font-bold">A mí sí</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default grammar_lesson_23;
