"use client";
import type React from "react";
import { useState } from "react";
import {
  MessageSquare,
  Users,
  CheckCircle2,
  Layers,
  Sparkles,
  HelpCircle,
  PenTool,
  ArrowRight,
} from "lucide-react";

const grammar_lesson_32 = () => {
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
      {/* PART 1: ASKING FOR OPINIONS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
          <MessageSquare className="text-indigo-500" /> 1. Asking for Opinions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              structure: "¿Qué opinas de + tema?",
              desc: "General inquiry",
              ex: "¿Qué opinas de este trabajo?",
            },
            {
              structure: "¿Qué te parece + singular?",
              desc: "Singular agreement",
              ex: "¿Qué te parece la idea?",
            },
            {
              structure: "¿Qué te parecen + plural?",
              desc: "Plural agreement",
              ex: "¿Qué te parecen las medidas nuevas?",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-border bg-card shadow-sm hover:border-indigo-500/30 transition-all"
            >
              <p className="text-xs font-black uppercase text-indigo-600 mb-2">
                {item.structure}
              </p>
              <p className="text-[10px] opacity-60 mb-3 italic">{item.desc}</p>
              <p className="text-sm font-medium border-t pt-2">{item.ex}</p>
            </div>
          ))}
        </div>

        {/* Practice 4 */}
        <div className="mt-8 p-6 bg-indigo-500/[0.03] border border-indigo-500/10 rounded-3xl space-y-4">
          <h3 className="font-bold text-sm flex items-center gap-2">
            <HelpCircle size={16} className="text-indigo-500" /> Practice 4
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <p className="text-sm">
                1. ¿Qué te{" "}
                <span className="underline font-bold text-indigo-600">
                  _____
                </span>{" "}
                el plan?
              </p>
              <div className="flex gap-2">
                <input
                  onChange={(e) => handleInputChange("p4q1", e.target.value)}
                  className={`flex-1 bg-card border ${
                    feedback["p4q1"] === "correct"
                      ? "border-emerald-500"
                      : "border-border"
                  } rounded-lg px-3 py-1 text-sm outline-none`}
                  placeholder="parece / parecen"
                />
                <button
                  onClick={() => checkAnswer("p4q1", "parece")}
                  className="text-indigo-500"
                >
                  <CheckCircle2 />
                </button>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm">
                2. ¿Qué{" "}
                <span className="underline font-bold text-indigo-600">
                  _____
                </span>{" "}
                de este proyecto?
              </p>
              <div className="flex gap-2">
                <input
                  onChange={(e) => handleInputChange("p4q2", e.target.value)}
                  className={`flex-1 bg-card border ${
                    feedback["p4q2"] === "correct"
                      ? "border-emerald-500"
                      : "border-border"
                  } rounded-lg px-3 py-1 text-sm outline-none`}
                  placeholder="opinas / pareces"
                />
                <button
                  onClick={() => checkAnswer("p4q2", "opinas")}
                  className="text-indigo-500"
                >
                  <CheckCircle2 />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PART 2: GIVING OPINIONS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
          <Users className="text-emerald-500" /> 2. Giving Opinions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { tag: "Creo que...", ex: "Creo que es caro." },
            {
              tag: "A mí me parece que...",
              ex: "A mí me parece que está bien.",
            },
            { tag: "Opino que...", ex: "Opino que es necesario." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-emerald-500/[0.03] border border-emerald-500/10 text-center"
            >
              <p className="font-bold text-emerald-600 mb-2">{item.tag}</p>
              <p className="text-sm italic opacity-70">"{item.ex}"</p>
            </div>
          ))}
        </div>

        {/* AGREEMENT RULE */}
        <div className="p-8 rounded-3xl bg-card border border-border shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-border pb-4">
            <Layers className="text-amber-500" />
            <div>
              <h3 className="font-bold">Verb: Parecer (Agreement Rule)</h3>
              <p className="text-xs opacity-60 italic">
                The verb agrees with what follows, not with "mí".
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-muted/50 border-l-4 border-emerald-500">
              <p className="text-xs font-black uppercase mb-1 opacity-50">
                Singular
              </p>
              <p className="text-sm">
                A mí me{" "}
                <span className="text-emerald-600 font-bold underline">
                  parece
                </span>{" "}
                buena idea.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-muted/50 border-l-4 border-emerald-500">
              <p className="text-xs font-black uppercase mb-1 opacity-50">
                Plural
              </p>
              <p className="text-sm">
                A mí me{" "}
                <span className="text-emerald-600 font-bold underline">
                  parecen
                </span>{" "}
                buenas ideas.
              </p>
            </div>
          </div>
        </div>

        {/* Practice 5 */}
        <div className="p-6 bg-emerald-500/[0.03] border border-emerald-500/10 rounded-3xl space-y-4">
          <h3 className="font-bold text-sm flex items-center gap-2">
            <HelpCircle size={16} className="text-emerald-500" /> Practice 5
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <p className="text-sm">
                1. A mí me{" "}
                <span className="underline font-bold text-emerald-600">
                  _____
                </span>{" "}
                bien.
              </p>
              <div className="flex gap-2">
                <input
                  onChange={(e) => handleInputChange("p5q1", e.target.value)}
                  className={`flex-1 bg-card border ${
                    feedback["p5q1"] === "correct"
                      ? "border-emerald-500"
                      : "border-border"
                  } rounded-lg px-3 py-1 text-sm outline-none`}
                  placeholder="parece / parecen"
                />
                <button
                  onClick={() => checkAnswer("p5q1", "parece")}
                  className="text-emerald-600"
                >
                  <CheckCircle2 />
                </button>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm">
                2. A mí me{" "}
                <span className="underline font-bold text-emerald-600">
                  _____
                </span>{" "}
                las condiciones.
              </p>
              <div className="flex gap-2">
                <input
                  onChange={(e) => handleInputChange("p5q2", e.target.value)}
                  className={`flex-1 bg-card border ${
                    feedback["p5q2"] === "correct"
                      ? "border-emerald-500"
                      : "border-border"
                  } rounded-lg px-3 py-1 text-sm outline-none`}
                  placeholder="parece / parecen"
                />
                <button
                  onClick={() => checkAnswer("p5q2", "parecen")}
                  className="text-emerald-600"
                >
                  <CheckCircle2 />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL PRODUCTION */}
      <section className="p-8 rounded-[2.5rem] bg-indigo-600 text-white shadow-xl space-y-8">
        <div className="flex items-center gap-3 border-b border-indigo-400 pb-4">
          <PenTool size={24} />
          <h2 className="text-2xl font-black">Final Production Exercise</h2>
        </div>

        <div className="space-y-6">
          <p className="text-sm opacity-80 italic">
            Complete the following sentences freely based on today's lesson:
          </p>
          {[
            { id: "f1", q: "1. No quiero ni..." },
            { id: "f2", q: "2. A mí me parece que..." },
            { id: "f3", q: "3. No veo..." },
          ].map((item) => (
            <div key={item.id} className="space-y-2">
              <p className="font-bold">{item.q}</p>
              <input
                className="w-full bg-indigo-700/50 border border-indigo-400/50 rounded-xl px-4 py-3 text-white placeholder:text-indigo-300 outline-none focus:ring-2 ring-white/50 transition-all"
                placeholder="Finish the sentence..."
              />
            </div>
          ))}
        </div>
      </section>

      {/* SUMMARY */}
      <footer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-6 bg-card border border-border rounded-3xl flex items-center gap-4">
          <div className="p-3 bg-amber-500/10 rounded-2xl">
            <Sparkles className="text-amber-500" />
          </div>
          <div>
            <p className="text-xs font-black uppercase opacity-50">
              Grammar Tip
            </p>
            <p className="text-sm">
              Use <b>opinar de</b> but <b>parecer + (subject)</b>.
            </p>
          </div>
        </div>
        <div className="p-6 bg-card border border-border rounded-3xl flex items-center gap-4">
          <div className="p-3 bg-indigo-500/10 rounded-2xl">
            <ArrowRight className="text-indigo-500" />
          </div>
          <div>
            <p className="text-xs font-black uppercase opacity-50">Next Step</p>
            <p className="text-sm">
              Try using these in a conversation about current news.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default grammar_lesson_32;
