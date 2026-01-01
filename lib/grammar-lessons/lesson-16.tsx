"use client";
import type React from "react";
import { useState, useEffect } from "react";
import {
  Clock,
  Sun,
  Moon,
  Sunrise,
  Coffee,
  Timer,
  AlertCircle,
  RotateCcw,
  Check,
} from "lucide-react";

const grammar_lesson_16: React.FC = () => {
  const [reveals, setReveals] = useState<{ [key: string]: boolean }>({});
  const [userInputs, setUserInputs] = useState<{ [key: string]: string }>({});
  const [feedback, setFeedback] = useState<{
    [key: string]: "correct" | "incorrect" | null;
  }>({});
  const [progress, setProgress] = useState<number>(0);

  const toggleReveal = (id: string) => {
    setReveals((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleInputChange = (id: string, val: string) => {
    setUserInputs((prev) => ({ ...prev, [id]: val.toLowerCase().trim() }));
  };

  const checkAnswer = (id: string, correct: string) => {
    if (userInputs[id] === correct.toLowerCase().trim()) {
      setFeedback((prev) => ({ ...prev, [id]: "correct" }));
    } else {
      setFeedback((prev) => ({ ...prev, [id]: "incorrect" }));
    }
  };

  useEffect(() => {
    const totalPossible = 10;
    const currentCorrect = Object.values(feedback).filter(
      (v) => v === "correct"
    ).length;
    setProgress((currentCorrect / totalPossible) * 100);
  }, [feedback]);

  return (
    <div className="mx-auto w-full max-w-5xl space-y-20 px-4 pb-40 pt-10 sm:px-6 transition-all duration-500 bg-background text-foreground">
      {/* 1. BASIC STRUCTURE */}
      <section className="space-y-10">
        <div className="flex items-start gap-4 border-b border-emerald-500/20 pb-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-700 text-lg font-bold text-white shadow-md">
            1
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold uppercase tracking-tight text-emerald-900 dark:text-emerald-50">
              Estructura básica
            </h2>
            <p className="text-xs leading-relaxed text-muted-foreground italic">
              How to differentiate between the singular 1:00 and all other
              plural hours.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-border bg-card/50 space-y-4">
            <div className="flex items-center gap-2 text-emerald-600">
              <Clock size={18} />
              <h3 className="text-xs font-bold uppercase tracking-widest">
                Singular vs Plural
              </h3>
            </div>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center justify-between p-3 rounded bg-muted/30 border border-border">
                <span>
                  <b>Es la...</b> only for 1:00
                </span>
                <span className="font-mono font-bold text-emerald-600">
                  la una
                </span>
              </li>
              <li className="flex items-center justify-between p-3 rounded bg-muted/30 border border-border">
                <span>
                  <b>Son las...</b> for all other hours
                </span>
                <span className="font-mono font-bold text-emerald-600">
                  las dos, tres...
                </span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-border bg-emerald-950 text-emerald-50 space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">
              Ejemplos rápidos
            </h3>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="space-y-1 border-l border-emerald-700 pl-3">
                <p className="font-bold">Es la una.</p>
                <p className="text-[10px] opacity-60">1:00</p>
              </div>
              <div className="space-y-1 border-l border-emerald-700 pl-3">
                <p className="font-bold">Son las cuatro.</p>
                <p className="text-[10px] opacity-60">4:00</p>
              </div>
              <div className="space-y-1 border-l border-emerald-700 pl-3">
                <p className="font-bold">Es la una y diez.</p>
                <p className="text-[10px] opacity-60">1:10</p>
              </div>
              <div className="space-y-1 border-l border-emerald-700 pl-3">
                <p className="font-bold">Son las siete y veinte.</p>
                <p className="text-[10px] opacity-60">7:20</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 & 3. MINUTES & NATURAL EXPRESSIONS */}
      <section className="space-y-10">
        <div className="flex items-start gap-4 border-b border-emerald-500/20 pb-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-700 text-lg font-bold text-white shadow-md">
            2
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold uppercase tracking-tight text-emerald-900 dark:text-emerald-50">
              Minutos y Expresiones
            </h2>
            <p className="text-xs leading-relaxed text-muted-foreground italic">
              Adding minutes using "y" and natural terms for 15/30 minutes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Direct Minutes */}
          <div className="p-6 rounded-xl border border-border bg-card space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">
              Forma Directa
            </h4>
            <div className="p-2 rounded bg-emerald-900 text-white text-center font-mono text-xs">
              hora + y + minutos
            </div>
            <div className="space-y-2 text-xs italic">
              <p>Son las dos y cinco. (2:05)</p>
              <p>Son las nueve y veinte. (9:20)</p>
              <p>Es la una y uno. (1:01)</p>
            </div>
          </div>

          {/* Media & Cuarto */}
          <div className="p-6 rounded-xl border border-border bg-card space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">
              Y Media / Y Cuarto
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span className="text-xs font-bold">Media (30 min)</span>
                <span className="text-[10px] text-muted-foreground">
                  3:30 → las tres y media
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold">Cuarto (15 min)</span>
                <span className="text-[10px] text-muted-foreground">
                  2:15 → las dos y cuarto
                </span>
              </div>
            </div>
          </div>

          {/* Menos */}
          <div className="p-6 rounded-xl border border-emerald-700 bg-emerald-900 text-white space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
              Uso de "Menos"
            </h4>
            <p className="text-[10px] opacity-70">
              Subtract minutes from the next hour (:31–:59).
            </p>
            <div className="space-y-2 text-xs font-bold">
              <p>4:50 → Cinco menos diez</p>
              <p>7:45 → Ocho menos cuarto</p>
              <p>2:55 → Tres menos cinco</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 & 5. ASKING & SCHEDULES */}
      <section className="space-y-10">
        <div className="flex items-start gap-4 border-b border-emerald-500/20 pb-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-700 text-lg font-bold text-white shadow-md">
            3
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold uppercase tracking-tight text-emerald-900 dark:text-emerald-50">
              Preguntas y Horarios
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest border-l-2 border-emerald-500 pl-3">
              Asking the Time
            </h3>
            <div className="grid grid-cols-1 gap-2">
              <div className="p-4 rounded-lg border border-border bg-card flex justify-between items-center">
                <span className="text-xs font-bold">¿Qué hora es?</span>
                <span className="text-[9px] text-muted-foreground uppercase">
                  Standard
                </span>
              </div>
              <div className="p-4 rounded-lg border border-border bg-card flex justify-between items-center">
                <span className="text-xs font-bold">¿Tiene(s) hora?</span>
                <span className="text-[9px] text-muted-foreground uppercase">
                  Formal/Informal
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest border-l-2 border-emerald-500 pl-3">
              Schedules (Apertura)
            </h3>
            <div className="space-y-3 text-xs italic text-muted-foreground">
              <p className="text-foreground not-italic font-bold">
                Abre desde las ocho hasta las diez.
              </p>
              <p>El banco está abierto de nueve a dos.</p>
              <p>La tienda funciona desde las diez hasta las ocho.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PARTS OF THE DAY */}
      <section className="space-y-10">
        <div className="flex items-start gap-4 border-b border-emerald-500/20 pb-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-700 text-lg font-bold text-white shadow-md">
            4
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold uppercase tracking-tight text-emerald-900 dark:text-emerald-50">
              Partes del día
            </h2>
            <p className="text-xs leading-relaxed text-muted-foreground italic">
              Spanish connects specific periods with the clock.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            {
              label: "De la mañana",
              time: "Morning",
              icon: <Sunrise size={20} />,
              cite: "",
            },
            {
              label: "Del mediodía",
              time: "Noon",
              icon: <Sun size={20} />,
              cite: "",
            },
            {
              label: "De la tarde",
              time: "Afternoon",
              icon: <Coffee size={20} />,
              cite: "",
            },
            {
              label: "De la noche",
              time: "Night",
              icon: <Moon size={20} />,
              cite: "",
            },
            {
              label: "De la madrugada",
              time: "Dawn",
              icon: <Timer size={20} />,
              cite: "",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-xl border border-border bg-card flex flex-col items-center text-center gap-2 group hover:border-emerald-500 transition-colors"
            >
              <div className="text-emerald-600">{item.icon}</div>
              <p className="text-[10px] font-bold uppercase tracking-tight">
                {item.label}
              </p>
              <p className="text-[9px] text-muted-foreground italic">
                {item.time} {item.cite}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. COMMON ERRORS */}
      <section className="p-8 rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 space-y-6">
        <div className="flex items-center gap-3 text-red-600">
          <AlertCircle size={24} />
          <h3 className="text-sm font-bold uppercase tracking-widest">
            Resist common mistakes
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-white dark:bg-black/20 border border-red-100 flex items-center justify-between">
            <span className="text-xs line-through text-muted-foreground">
              Es las dos
            </span>
            <span className="text-xs font-bold text-emerald-600">
              Son las dos
            </span>
          </div>
          <div className="p-4 rounded-lg bg-white dark:bg-black/20 border border-red-100 flex items-center justify-between">
            <span className="text-xs line-through text-muted-foreground">
              Son la una
            </span>
            <span className="text-xs font-bold text-emerald-600">
              Es la una
            </span>
          </div>
          <div className="p-4 rounded-lg bg-white dark:bg-black/20 border border-red-100 flex items-center justify-between">
            <span className="text-xs italic">12:00</span>
            <span className="text-xs font-bold">el mediodía</span>
          </div>
          <div className="p-4 rounded-lg bg-white dark:bg-black/20 border border-red-100 flex items-center justify-between">
            <span className="text-xs italic">00:00</span>
            <span className="text-xs font-bold">la medianoche</span>
          </div>
        </div>
      </section>

      {/* 8. PRACTICE LAB */}
      <section className="space-y-10">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-700 text-lg font-bold text-white">
            P
          </div>
          <h2 className="text-2xl font-bold uppercase tracking-tight">
            Practice Lab
          </h2>
          <div className="w-40 h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all duration-1000"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              id: "P1",
              q: "How do you say 1:15 using natural expressions?",
              a: "es la una y cuarto",
            },
            {
              id: "P2",
              q: "How do you say 4:50 using subtraction?",
              a: "son las cinco menos diez",
            },
            {
              id: "P3",
              q: "Translate: The class starts at nine.",
              a: "la clase empieza a las nueve",
            },
            { id: "P4", q: "Say 3:30 in Spanish.", a: "son las tres y media" },
          ].map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl border border-border bg-card space-y-4"
            >
              <p className="text-xs font-bold">{item.q}</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  className="flex-1 bg-muted/30 border border-border rounded-lg px-3 py-2 text-xs outline-none focus:border-emerald-500"
                  onChange={(e) => handleInputChange(item.id, e.target.value)}
                />
                <button
                  onClick={() => checkAnswer(item.id, item.a)}
                  className="bg-emerald-600 text-white p-2 rounded-lg"
                >
                  <Check size={16} />
                </button>
              </div>
              {feedback[item.id] && (
                <p
                  className={`text-[9px] font-bold uppercase ${
                    feedback[item.id] === "correct"
                      ? "text-emerald-500"
                      : "text-red-500"
                  }`}
                >
                  {feedback[item.id] === "correct"
                    ? "Correcto"
                    : "Intenta de nuevo"}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* RECAP TABLE */}
      <footer className="pt-10 border-t border-border">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border overflow-hidden rounded-xl border border-border">
          {[
            { t: "1:00", s: "Es la una", d: "" },
            { t: "15 min", s: "y cuarto", d: "" },
            { t: "30 min", s: "y media", d: "" },
            { t: "Exact", s: "en punto", d: "" },
          ].map((card, i) => (
            <div key={i} className="p-6 bg-card space-y-2 text-center">
              <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-600">
                {card.t}
              </p>
              <p className="text-xs font-bold italic">{card.s}</p>
              <p className="text-[9px] text-muted-foreground">{card.d}</p>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default grammar_lesson_16;
