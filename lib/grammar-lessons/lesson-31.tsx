"use client";
import type React from "react";
import { useState } from "react";
import {
  XCircle,
  AlertOctagon,
  MessageCircle,
  Zap,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  HelpCircle,
} from "lucide-react";

const grammar_lesson_31 = () => {
  const [userInputs, setUserInputs] = useState<{ [key: string]: string }>({});
  const [feedback, setFeedback] = useState<{
    [key: string]: "correct" | "incorrect" | null;
  }>({});

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

  return (
    <div className="mx-auto w-full max-w-5xl space-y-12 px-4 pb-40 pt-10 bg-background text-foreground font-sans transition-colors duration-300">
      {/* PART 1: WEAK NEGATION */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
          <MessageCircle className="text-sky-500" /> 1. Weak / Neutral Negation
        </h2>
        <div className="p-4 bg-sky-500/5 border border-sky-500/10 rounded-2xl mb-6">
          <p className="text-sm font-medium opacity-80">
            <strong>Use:</strong> Factual information, soft disagreement, or a
            neutral tone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "No + Verbo",
              examples: ["No trabajo hoy.", "No entiendo el problema."],
            },
            {
              title: "Nunca + Verbo",
              examples: ["Nunca como carne.", "Nunca llego tarde."],
            },
            {
              title: "Bueno, bueno, no...",
              desc: "Soft hesitation/refusal",
              examples: ["—¿Vienes mañana?", "—Bueno, bueno, no..."],
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-border bg-card shadow-sm"
            >
              <h3 className="text-xs font-black uppercase text-sky-600 mb-3">
                {item.title}
              </h3>
              {item.desc && (
                <p className="text-[10px] mb-2 opacity-60 italic">
                  {item.desc}
                </p>
              )}
              <ul className="space-y-2 text-sm italic">
                {item.examples.map((ex, i) => (
                  <li key={i}>• {ex}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Practice 1 */}
        <div className="mt-8 p-6 bg-muted/30 rounded-3xl space-y-4">
          <h3 className="font-bold text-sm flex items-center gap-2">
            <HelpCircle size={16} /> Practice 1
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm">
                1. <span className="underline">______</span> trabajo los
                domingos.
              </p>
              <div className="flex gap-2">
                <input
                  onChange={(e) => handleInputChange("p1q1", e.target.value)}
                  className={`w-full bg-card px-3 py-1 text-sm rounded-lg border focus:ring-1 outline-none ${
                    feedback["p1q1"] === "correct"
                      ? "border-emerald-500"
                      : "border-border"
                  }`}
                  placeholder="Type option..."
                />
                <button
                  onClick={() => checkAnswer("p1q1", "Nunca")}
                  className="text-sky-600"
                >
                  <CheckCircle2 />
                </button>
              </div>
              <p className="text-[10px] opacity-50">
                Options: Nunca | Ni | Que
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm">
                2. —Bueno, bueno, <span className="underline">______</span>...
              </p>
              <div className="flex gap-2">
                <input
                  onChange={(e) => handleInputChange("p1q2", e.target.value)}
                  className={`w-full bg-card px-3 py-1 text-sm rounded-lg border focus:ring-1 outline-none ${
                    feedback["p1q2"] === "correct"
                      ? "border-emerald-500"
                      : "border-border"
                  }`}
                  placeholder="Type option..."
                />
                <button
                  onClick={() => checkAnswer("p1q2", "no")}
                  className="text-sky-600"
                >
                  <CheckCircle2 />
                </button>
              </div>
              <p className="text-[10px] opacity-50">
                Options: no | nada | nunca
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PART 2: STRONG NEGATION */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
          <AlertOctagon className="text-rose-500" /> 2. Strong Negation
        </h2>
        <div className="p-4 bg-rose-500/5 border border-rose-500/10 rounded-2xl">
          <p className="text-sm font-medium opacity-80 text-rose-700 dark:text-rose-300">
            <strong>Use:</strong> Refusal, emphasis, emotional reaction (common
            in spoken Spanish).
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              tag: "¡Ni hablar!",
              desc: "No way! / Out of the question",
              example: "—¿Pagas tú? —¡Ni hablar!",
            },
            {
              tag: "No quiero ni...",
              desc: "I don't even want to...",
              example: "No quiero ni salir / ni escuchar.",
            },
            {
              tag: "¡Que no!",
              desc: "I said no! (Strong contradiction)",
              example: "—¿Vienes? —¡Que no!",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-rose-100 dark:border-rose-900/30 bg-card"
            >
              <p className="font-black text-rose-600 text-lg mb-1">
                {item.tag}
              </p>
              <p className="text-[10px] uppercase tracking-widest opacity-60 mb-3">
                {item.desc}
              </p>
              <p className="text-sm italic border-t pt-2">{item.example}</p>
            </div>
          ))}
        </div>

        {/* Practice 2 */}
        <div className="mt-8 p-6 bg-rose-500/[0.03] border border-rose-500/10 rounded-3xl space-y-4">
          <h3 className="font-bold text-sm">Practice 2: Matching</h3>
          <div className="space-y-3">
            {[
              { q: "Absolute refusal", a: "¡Ni hablar!" },
              { q: "Strong contradiction", a: "¡Que no!" },
              { q: "Rejecting an action", a: "No quiero ni hablar" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row gap-3 items-center"
              >
                <span className="text-xs font-medium w-full sm:w-40">
                  {item.q} →
                </span>
                <input
                  onChange={(e) => handleInputChange(`p2q${i}`, e.target.value)}
                  className="w-full sm:w-64 bg-card px-3 py-1 text-sm rounded-lg border border-border outline-none focus:ring-1 ring-rose-500"
                  placeholder="Type a, b, or c..."
                />
                <button
                  onClick={() => checkAnswer(`p2q${i}`, item.a)}
                  className="text-rose-500"
                >
                  <CheckCircle2 size={18} />
                </button>
              </div>
            ))}
          </div>
          <p className="text-[10px] opacity-60 italic pt-2">
            Options: a) ¡Que no! | b) No quiero ni hablar | c) ¡Ni hablar!
          </p>
        </div>
      </section>

      {/* PART 3: DOUBLE NEGATION */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
          <ShieldAlert className="text-amber-500" /> 3. Double Negation
          (Mandatory)
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="p-6 rounded-3xl bg-amber-500/10 border border-amber-500/20 shadow-sm">
              <h3 className="text-sm font-black text-amber-700 dark:text-amber-400 uppercase mb-4">
                The Golden Rule
              </h3>
              <p className="text-md leading-relaxed italic">
                "If a negative word comes <strong>after</strong> the verb, 'no'
                is required at the beginning."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl border border-border bg-card">
                <p className="text-[10px] font-bold text-amber-600 mb-2 uppercase tracking-tighter">
                  Structures
                </p>
                <p className="text-xs font-mono">
                  No + Verbo + nada/nadie/nunca
                </p>
                <p className="text-xs font-mono mt-2">Ni... ni...</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-card flex flex-col justify-center">
                <p className="text-[10px] font-bold text-rose-500 mb-1 uppercase tracking-tighter italic">
                  Incorrect
                </p>
                <p className="text-xs line-through opacity-50 italic">
                  Veo nada.
                </p>
                <p className="text-[10px] font-bold text-emerald-500 mt-2 uppercase tracking-tighter italic">
                  Correct
                </p>
                <p className="text-xs font-bold italic">No veo nada.</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl border border-border bg-card space-y-4 shadow-sm">
            <h3 className="text-xs font-black uppercase text-indigo-500">
              Live Examples
            </h3>
            <div className="space-y-3">
              {[
                { es: "No veo nada.", en: "I don't see anything." },
                { es: "No conozco a nadie.", en: "I don't know anyone." },
                { es: "No voy nunca.", en: "I never go." },
                {
                  es: "No quiero ni café ni té.",
                  en: "I want neither coffee nor tea.",
                },
              ].map((ex, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center border-b border-border pb-2 last:border-0"
                >
                  <p className="text-sm font-bold text-indigo-600">{ex.es}</p>
                  <p className="text-[10px] opacity-60 italic">{ex.en}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Practice 3 */}
        <div className="mt-8 p-8 rounded-[2rem] border border-amber-500/20 bg-amber-500/[0.02]">
          <h3 className="text-xl font-black mb-6 flex items-center gap-2">
            <Zap className="text-amber-500" /> Practice 3: Sentence Correction
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold line-through opacity-50">
                  1. Veo nada.
                </span>
                {feedback["p3q1"] === "correct" && (
                  <CheckCircle2 size={16} className="text-emerald-500" />
                )}
              </div>
              <input
                onChange={(e) => handleInputChange("p3q1", e.target.value)}
                placeholder="Correct it..."
                className="w-full bg-background border border-border rounded-xl px-4 py-2 text-sm focus:ring-2 ring-amber-500 outline-none transition-all"
              />
              <button
                onClick={() => checkAnswer("p3q1", "No veo nada.")}
                className="text-xs font-black uppercase text-amber-600 hover:tracking-widest transition-all"
              >
                Check Correction
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold line-through opacity-50">
                  2. Quiero ni pan ni arroz.
                </span>
                {feedback["p3q2"] === "correct" && (
                  <CheckCircle2 size={16} className="text-emerald-500" />
                )}
              </div>
              <input
                onChange={(e) => handleInputChange("p3q2", e.target.value)}
                placeholder="Correct it..."
                className="w-full bg-background border border-border rounded-xl px-4 py-2 text-sm focus:ring-2 ring-amber-500 outline-none transition-all"
              />
              <button
                onClick={() =>
                  checkAnswer("p3q2", "No quiero ni pan ni arroz.")
                }
                className="text-xs font-black uppercase text-amber-600 hover:tracking-widest transition-all"
              >
                Check Correction
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL SUMMARY CARD */}
      <footer className="p-8 bg-indigo-600 text-white rounded-[2.5rem] shadow-xl text-center md:text-left flex flex-col md:flex-row items-center gap-8 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <XCircle size={150} />
        </div>
        <div className="flex-1 space-y-4">
          <h3 className="text-xs font-black uppercase tracking-widest opacity-70">
            Key Takeaway
          </h3>
          <p className="text-2xl font-medium italic leading-snug max-w-lg">
            "Spanish isn't afraid of double negatives. If the negative word
            trails the verb, always start with 'No'."
          </p>
        </div>
        <div className="w-full md:w-auto grid grid-cols-2 gap-2 shrink-0">
          <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-sm text-center">
            <p className="text-[10px] font-bold opacity-60">Weak</p>
            <p className="font-bold">No / Nunca</p>
          </div>
          <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-sm text-center">
            <p className="text-[10px] font-bold opacity-60">Strong</p>
            <p className="font-bold">¡Ni hablar!</p>
          </div>
          <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-sm text-center col-span-2">
            <p className="text-[10px] font-bold opacity-60">Rule</p>
            <p className="font-bold">No... nada/nadie</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default grammar_lesson_31;