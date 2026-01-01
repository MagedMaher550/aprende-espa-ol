"use client";
import type React from "react";
import { useState, useEffect } from "react";
import {
  Clock,
  Zap,
  Activity,
  MinusCircle,
  XCircle,
  AlertCircle,
  Check,
  RotateCcw,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const grammar_lesson_20: React.FC = () => {
  const [userInputs, setUserInputs] = useState<{ [key: string]: string }>({});
  const [feedback, setFeedback] = useState<{
    [key: string]: "correct" | "incorrect" | null;
  }>({});
  const [progress, setProgress] = useState<number>(0);

  const handleInputChange = (id: string, val: string) => {
    setUserInputs((prev) => ({ ...prev, [id]: val.toLowerCase().trim() }));
  };

  const checkAnswer = (id: string, correct: string) => {
    // Basic normalized check for variations in punctuation or extra spaces
    const normalizedInput = userInputs[id]?.replace(
      /[.,\/#!$%\^&\*;:{}=\-_`~()]/g,
      ""
    );
    const normalizedCorrect = correct
      .toLowerCase()
      .trim()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

    if (normalizedInput === normalizedCorrect) {
      setFeedback((prev) => ({ ...prev, [id]: "correct" }));
    } else {
      setFeedback((prev) => ({ ...prev, [id]: "incorrect" }));
    }
  };

  useEffect(() => {
    const totalPossible = 12; // Adjusted based on practice items
    const currentCorrect = Object.values(feedback).filter(
      (v) => v === "correct"
    ).length;
    setProgress((currentCorrect / totalPossible) * 100);
  }, [feedback]);

  return (
    <div className="mx-auto w-full max-w-5xl space-y-20 px-4 pb-40 pt-10 sm:px-6 transition-all duration-500 bg-background text-foreground">
      {/* HEADER SECTION */}
      <section className="space-y-4 border-b border-blue-500/20 pb-10">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-blue-600 dark:text-blue-400">
          Expresiones de Frecuencia
        </h1>
        <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed italic">
          Master how to describe habits and routines in Spanish. From absolute
          certainty (Siempre) to absolute zero (Nunca).
        </p>
      </section>

      {/* 1. FREQUENCY TIERS */}
      <section className="space-y-10">
        <div className="flex items-start gap-4 border-b border-blue-500/20 pb-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-700 text-lg font-bold text-white shadow-md">
            1
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold uppercase tracking-tight text-blue-900 dark:text-blue-50">
              Niveles de Frecuencia
            </h2>
            <p className="text-xs text-muted-foreground italic">
              Categorizing adverbs by how often the action occurs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Alta Frecuencia */}
          <div className="p-6 rounded-xl border border-border bg-card/50 space-y-4">
            <div className="flex items-center gap-2 text-emerald-600">
              <Zap size={18} />
              <h3 className="text-xs font-bold uppercase tracking-widest">
                Alta Frecuencia
              </h3>
            </div>
            <ul className="space-y-2 text-xs">
              <li className="flex justify-between border-b border-border pb-1">
                <span className="font-bold italic">Siempre</span>{" "}
                <span>Always</span>
              </li>
              <li className="flex justify-between border-b border-border pb-1">
                <span className="font-bold italic">Todos los días</span>{" "}
                <span>Every day</span>
              </li>
            </ul>
            <p className="text-[10px] text-muted-foreground italic">
              "Siempre estudio por la mañana."
            </p>
          </div>

          {/* Frecuencia Regular / Moderada */}
          <div className="p-6 rounded-xl border border-border bg-card/50 space-y-4">
            <div className="flex items-center gap-2 text-blue-600">
              <Activity size={18} />
              <h3 className="text-xs font-bold uppercase tracking-widest">
                Regular & Moderada
              </h3>
            </div>
            <ul className="space-y-2 text-xs">
              <li className="flex justify-between border-b border-border pb-1">
                <span className="font-bold italic">Normalmente</span>{" "}
                <span>Normally</span>
              </li>
              <li className="flex justify-between border-b border-border pb-1">
                <span className="font-bold italic">A menudo</span>{" "}
                <span>Often</span>
              </li>
              <li className="flex justify-between border-b border-border pb-1">
                <span className="font-bold italic">A veces</span>{" "}
                <span>Sometimes</span>
              </li>
            </ul>
          </div>

          {/* Baja / Nula Frecuencia */}
          <div className="p-6 rounded-xl border border-border bg-card/50 space-y-4">
            <div className="flex items-center gap-2 text-red-600">
              <MinusCircle size={18} />
              <h3 className="text-xs font-bold uppercase tracking-widest">
                Baja & Nula
              </h3>
            </div>
            <ul className="space-y-2 text-xs">
              <li className="flex justify-between border-b border-border pb-1">
                <span className="font-bold italic">Pocas veces</span>{" "}
                <span>Rarely</span>
              </li>
              <li className="flex justify-between border-b border-border pb-1">
                <span className="font-bold italic">Casi nunca</span>{" "}
                <span>Almost never</span>
              </li>
              <li className="flex justify-between border-b border-border pb-1">
                <span className="font-bold italic text-red-500 underline">
                  Nunca
                </span>{" "}
                <span>Never</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. PLACEMENT RULES */}
      <section className="space-y-10">
        <div className="flex items-start gap-4 border-b border-blue-500/20 pb-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-700 text-lg font-bold text-white shadow-md">
            2
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold uppercase tracking-tight text-blue-900 dark:text-blue-50">
              Reglas de Colocación
            </h2>
            <p className="text-xs text-muted-foreground italic">
              Where to place these words in a sentence for natural flow.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/20 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest">
              General Placement
            </h3>
            <div className="space-y-3 text-xs leading-relaxed">
              <p>
                Most frequency words can appear at the <b>beginning</b> or{" "}
                <b>end</b> of a sentence.
              </p>
              <div className="grid grid-cols-1 gap-2 font-mono">
                <div className="p-2 bg-background rounded border border-border">
                  <span className="text-blue-500">Normalmente</span> desayuno a
                  las siete.
                </div>
                <div className="p-2 bg-background rounded border border-border">
                  Desayuno a las siete{" "}
                  <span className="text-blue-500">normalmente</span>.
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-red-200 dark:border-red-900 bg-red-50/50 dark:bg-red-950/20 space-y-4">
            <div className="flex items-center gap-2 text-red-600">
              <XCircle size={18} />
              <h3 className="text-xs font-black uppercase tracking-widest text-red-600 dark:text-red-400">
                The "Nunca" Rule
              </h3>
            </div>
            <p className="text-xs italic text-red-900 dark:text-red-200">
              When <b>Nunca</b> comes before the verb, do <b>not</b> use "no".
            </p>
            <div className="flex items-center justify-between p-3 rounded bg-white dark:bg-black/40 border border-red-200 dark:border-red-800">
              <span className="text-xs line-through opacity-50 italic">
                No nunca voy al cine.
              </span>
              <span className="text-xs font-bold text-emerald-600 italic">
                Nunca voy al cine.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRACTICE LAB */}
      <section className="space-y-10">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex size-10 items-center justify-center rounded-lg bg-blue-700 text-lg font-bold text-white">
            P
          </div>
          <h2 className="text-2xl font-bold uppercase tracking-tight">
            Laboratorio de Práctica
          </h2>
          <div className="w-40 h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-1000"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              id: "Q1",
              q: "Translate: 'I always study' (Siempre...)",
              a: "siempre estudio",
            },
            {
              id: "Q2",
              q: "Translate: 'Sometimes I play' (A veces...)",
              a: "a veces juego",
            },
            {
              id: "Q3",
              q: "Translate: 'I never arrive late' (Nunca...)",
              a: "nunca llego tarde",
            },
            { id: "Q4", q: "Correct: 'No nunca fumo' →", a: "nunca fumo" },
            { id: "Q5", q: "Translation: 'Often' (2 words)", a: "a menudo" },
            { id: "Q6", q: "Translate: 'Every night'", a: "todas las noches" },
          ].map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl border border-border bg-card space-y-4"
            >
              <p className="text-xs font-bold">{item.q}</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Escribe en español..."
                  className="flex-1 bg-muted/30 border border-border rounded-lg px-3 py-2 text-xs outline-none focus:border-blue-500"
                  onChange={(e) => handleInputChange(item.id, e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && checkAnswer(item.id, item.a)
                  }
                />
                <button
                  onClick={() => checkAnswer(item.id, item.a)}
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Check size={16} />
                </button>
              </div>
              {feedback[item.id] && (
                <p
                  className={`text-[9px] font-bold uppercase flex items-center gap-1 ${
                    feedback[item.id] === "correct"
                      ? "text-emerald-500"
                      : "text-red-500"
                  }`}
                >
                  {feedback[item.id] === "correct" ? (
                    <>
                      <Check size={10} /> Correcto
                    </>
                  ) : (
                    <>
                      <AlertCircle size={10} /> Intenta de nuevo
                    </>
                  )}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* RECAP TABLE */}
      <footer className="pt-10 border-t border-border">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-border overflow-hidden rounded-xl border border-border">
          {[
            { t: "100%", s: "Siempre" },
            { t: "80%", s: "Normalmente" },
            { t: "50%", s: "A veces" },
            { t: "20%", s: "Pocas veces" },
            { t: "5%", s: "Casi nunca" },
            { t: "0%", s: "Nunca" },
          ].map((card, i) => (
            <div
              key={i}
              className="p-4 bg-card space-y-1 text-center group hover:bg-blue-500/5 transition-colors"
            >
              <p className="text-[9px] font-bold uppercase tracking-widest text-blue-600">
                {card.t}
              </p>
              <p className="text-xs font-bold italic">{card.s}</p>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default grammar_lesson_20;
