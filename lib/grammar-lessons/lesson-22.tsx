"use client";
import type React from "react";
import { useState, useEffect } from "react";
import {
  Flame,
  Heart,
  ThumbsUp,
  Minus,
  ThumbsDown,
  XCircle,
  Skull,
  Check,
  Zap,
  RotateCcw,
  Scale,
  ArrowRight,
} from "lucide-react";

const grammar_lesson_22: React.FC = () => {
  const [userInputs, setUserInputs] = useState<{ [key: string]: string }>({});
  const [feedback, setFeedback] = useState<{
    [key: string]: "correct" | "incorrect" | null;
  }>({});
  const [progress, setProgress] = useState<number>(0);

  const handleInputChange = (id: string, val: string) => {
    setUserInputs((prev) => ({ ...prev, [id]: val.toLowerCase().trim() }));
  };

  const checkIntensity = (id: string, correct: string) => {
    const input = userInputs[id];
    if (input === correct.toLowerCase().trim()) {
      setFeedback((prev) => ({ ...prev, [id]: "correct" }));
    } else {
      setFeedback((prev) => ({ ...prev, [id]: "incorrect" }));
    }
  };

  useEffect(() => {
    const totalPossible = 8; // Based on Section A
    const currentCorrect = Object.values(feedback).filter(
      (v) => v === "correct"
    ).length;
    setProgress((currentCorrect / totalPossible) * 100);
  }, [feedback]);

  const intensityScale = [
    {
      level: 1,
      text: "Amo / Adoro",
      icon: <Heart className="text-rose-500" />,
      desc: "Strongest Positive",
    },
    {
      level: 2,
      text: "Me encanta",
      icon: <Flame className="text-orange-500" />,
      desc: "Strong",
    },
    {
      level: 3,
      text: "Me gusta muchísimo",
      icon: <Zap className="text-yellow-500" />,
      desc: "Very High",
    },
    {
      level: 4,
      text: "Me gusta mucho",
      icon: <ThumbsUp className="text-lime-500" />,
      desc: "High",
    },
    {
      level: 5,
      text: "Me gusta bastante",
      icon: <Check className="text-emerald-500" />,
      desc: "Medium",
    },
    {
      level: 6,
      text: "Me gusta",
      icon: <Check className="text-blue-500" />,
      desc: "Neutral",
    },
    {
      level: 7,
      text: "Me gusta poco",
      icon: <Minus className="text-slate-400" />,
      desc: "Low",
    },
    {
      level: 8,
      text: "No me gusta",
      icon: <ThumbsDown className="text-orange-400" />,
      desc: "Negative",
    },
    {
      level: 9,
      text: "No me gusta nada",
      icon: <XCircle className="text-red-500" />,
      desc: "Very Negative",
    },
    {
      level: 10,
      text: "Odio",
      icon: <Skull className="text-red-900 dark:text-red-700" />,
      desc: "Extreme Negative",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-5xl space-y-20 px-4 pb-40 pt-10 sm:px-6 transition-all duration-500 bg-background text-foreground font-sans">
      {/* 1. THE VISUAL SCALE */}
      <section className="space-y-10">
        <div className="flex items-start gap-4 border-b border-indigo-500/20 pb-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-indigo-700 text-lg font-bold text-white shadow-md">
            1
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold uppercase tracking-tight text-indigo-900 dark:text-indigo-50">
              La Escala de Intensidad
            </h2>
            <p className="text-xs text-muted-foreground italic">
              De mayor a menor grado de placer.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {intensityScale.map((item) => (
            <div
              key={item.level}
              className="flex items-center justify-between p-4 rounded-xl border border-border bg-card/50 hover:bg-card transition-all group"
            >
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black text-muted-foreground w-4">
                  {item.level}
                </span>
                <div className="size-8 flex items-center justify-center rounded-full bg-background border border-border group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <p className="text-sm font-bold tracking-tight">{item.text}</p>
              </div>
              <p className="text-[10px] uppercase font-black text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. EXAMPLES BENTO */}
      <section className="space-y-10">
        <div className="flex items-start gap-4 border-b border-indigo-500/20 pb-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-indigo-700 text-lg font-bold text-white shadow-md">
            2
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold uppercase tracking-tight">
              Ejemplos Reales
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
          <div className="p-6 rounded-2xl bg-rose-500/10 border border-rose-500/20 space-y-3">
            <p className="font-black uppercase text-rose-600 tracking-widest">
              Extremo Positivo
            </p>
            <p className="italic font-medium">"Amo el café."</p>
            <p className="italic font-medium">"Adoro viajar."</p>
          </div>
          <div className="p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 space-y-3">
            <p className="font-black uppercase text-indigo-600 tracking-widest">
              Grado Medio
            </p>
            <p className="italic font-medium">
              "Me gusta bastante la comida italiana."
            </p>
            <p className="italic font-medium">"Me gusta la música."</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-3">
            <p className="font-black uppercase text-red-400 tracking-widest">
              Negativo
            </p>
            <p className="italic font-medium opacity-80">
              "No me gusta nada el tráfico."
            </p>
            <p className="italic font-medium opacity-80">"Odio hacer cola."</p>
          </div>
        </div>
      </section>

      {/* 3. PRACTICE LAB */}
      <section className="space-y-10">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex size-10 items-center justify-center rounded-lg bg-indigo-700 text-lg font-bold text-white">
            P
          </div>
          <h2 className="text-2xl font-bold uppercase tracking-tight">
            Practice Lab
          </h2>
          <div className="w-48 h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-500 transition-all duration-1000"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { id: "Q1", q: "Me gusta muchísimo correr.", a: "strong" },
            { id: "Q2", q: "No me gusta nada el ruido.", a: "negative" },
            { id: "Q3", q: "Me gusta poco el fútbol.", a: "weak" },
            { id: "Q4", q: "Amo los videojuegos.", a: "strong" },
            { id: "Q5", q: "Me gusta bastante la fruta.", a: "medium" },
            { id: "Q6", q: "Odio las mentiras.", a: "negative" },
          ].map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl border border-border bg-card/50 space-y-4"
            >
              <div className="flex justify-between items-center">
                <p className="text-xs font-bold italic">"{item.q}"</p>
                <span className="text-[9px] font-black uppercase text-muted-foreground tracking-tighter">
                  Identify intensity
                </span>
              </div>
              <div className="flex gap-2">
                <select
                  className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-xs outline-none focus:border-indigo-500"
                  onChange={(e) => handleInputChange(item.id, e.target.value)}
                >
                  <option value="">Selecciona...</option>
                  <option value="strong">Strong</option>
                  <option value="medium">Medium</option>
                  <option value="weak">Weak</option>
                  <option value="negative">Negative</option>
                </select>
                <button
                  onClick={() => checkIntensity(item.id, item.a)}
                  className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <Check size={16} />
                </button>
              </div>
              {feedback[item.id] && (
                <p
                  className={`text-[10px] font-black uppercase tracking-widest flex items-center gap-1 ${
                    feedback[item.id] === "correct"
                      ? "text-emerald-500"
                      : "text-red-500"
                  }`}
                >
                  {feedback[item.id] === "correct" ? "Correcto" : "Incorrecto"}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* RECAP SCALE */}
      <footer className="pt-10 border-t border-border">
        <div className="flex flex-wrap justify-center gap-2">
          {[
            "Amo",
            "Me encanta",
            "Muchísimo",
            "Mucho",
            "Bastante",
            "Poco",
            "Nada",
            "Odio",
          ].map((word, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest"
            >
              {word}
            </span>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default grammar_lesson_22;
