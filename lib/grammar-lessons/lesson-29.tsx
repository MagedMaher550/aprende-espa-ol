"use client";
import type React from "react";
import { useState } from "react";
import {
  CheckCircle2,
  AlertCircle,
  Zap,
  Clock,
  BookOpen,
  Send,
  HelpCircle,
  Layout,
} from "lucide-react";

const grammar_lesson_29 = () => {
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
    <div className="mx-auto w-full max-w-4xl space-y-12 px-6 pb-40 pt-10 bg-background text-foreground font-sans transition-colors duration-300">
      {/* 2 & 3. CONSTRUCTION */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Layout className="text-indigo-500" /> Structure & Conjugation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
            <h3 className="text-xs font-black uppercase tracking-widest text-indigo-500 mb-4">
              Estar (Imperfect)
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between border-b pb-1">
                <span>yo</span>
                <span className="font-bold text-indigo-500">estaba</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span>tú</span>
                <span className="font-bold text-indigo-500">estabas</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span>él / ella / usted</span>
                <span className="font-bold text-indigo-500">estaba</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span>nosotros/as</span>
                <span className="font-bold text-indigo-500">estábamos</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span>vosotros/as</span>
                <span className="font-bold text-indigo-500">estabais</span>
              </div>
              <div className="flex justify-between">
                <span>ellos / ellas / uds</span>
                <span className="font-bold text-indigo-500">estaban</span>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
            <h3 className="text-xs font-black uppercase tracking-widest text-emerald-500 mb-4">
              Gerund Formation
            </h3>
            <div className="space-y-4 text-sm">
              <div className="p-3 bg-emerald-500/5 rounded-lg border border-emerald-500/10">
                <p className="font-bold">-AR verbs → -ando</p>
                <p className="italic opacity-70">hablar → hablando</p>
              </div>
              <div className="p-3 bg-emerald-500/5 rounded-lg border border-emerald-500/10">
                <p className="font-bold">-ER / -IR verbs → -iendo</p>
                <p className="italic opacity-70">
                  comer → comiendo | vivir → viviendo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. IRREGULARS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Zap className="text-amber-500" /> Critical Irregulars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-border bg-card">
            <h4 className="text-xs font-bold uppercase text-amber-600 mb-3">
              A. Stem-Changing -ir
            </h4>
            <ul className="text-sm grid grid-cols-2 gap-2 italic">
              <li>pedir → pidiendo</li>
              <li>decir → diciendo</li>
              <li>dormir → durmiendo</li>
              <li>morir → muriendo</li>
              <li>sentir → sintiendo</li>
            </ul>
          </div>
          <div className="p-5 rounded-xl border border-border bg-card">
            <h4 className="text-xs font-bold uppercase text-amber-600 mb-3">
              B. Spelling Changes (-yendo)
            </h4>
            <ul className="text-sm grid grid-cols-2 gap-2 italic">
              <li>leer → leyendo</li>
              <li>creer → creyendo</li>
              <li>oír → oyendo</li>
              <li>traer → trayendo</li>
              <li>caer → cayendo</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. EXAMPLES BANK */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <BookOpen className="text-sky-500" /> Conjugation Examples
        </h2>
        <div className="flex flex-wrap gap-3">
          {[
            "Yo estaba hablando",
            "Tú estabas comiendo",
            "Él estaba durmiendo",
            "Nosotros estábamos hablando",
            "Ellos estaban leyendo",
          ].map((ex) => (
            <span
              key={ex}
              className="px-4 py-2 bg-muted rounded-lg text-sm font-medium border border-border"
            >
              {ex}
            </span>
          ))}
        </div>
      </section>

      {/* 6. USE CASES */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Clock className="text-indigo-500" /> Core Use Cases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Specific Moments",
              items: [
                "Estaba trabajando en la oficina.",
                "A las diez estaba estudiando.",
              ],
            },
            {
              title: "Interrupted Action",
              items: [
                "Estaba caminando cuando empezó a llover.",
                "Estaba durmiendo cuando sonó el teléfono.",
              ],
            },
            {
              title: "Parallel Actions",
              items: [
                "Yo estaba trabajando y él estaba descansando.",
                "Ella estaba leyendo mientras yo tomaba notas.",
              ],
            },
            {
              title: "Emphasis on Duration",
              items: [
                "Estaban analizando la situación toda la mañana.",
                "Estaba aprendiendo mucho en ese período.",
              ],
            },
          ].map((cat) => (
            <div
              key={cat.title}
              className="p-6 rounded-2xl border border-border bg-muted/20"
            >
              <h3 className="text-sm font-black uppercase mb-3 text-indigo-600">
                {cat.title}
              </h3>
              <ul className="space-y-2 text-sm italic opacity-80">
                {cat.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 7 & 8. HARD RULES */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-rose-500/5 border border-rose-500/20 rounded-2xl space-y-3">
          <h3 className="text-sm font-black uppercase text-rose-600 flex items-center gap-2">
            <AlertCircle size={16} /> Imperfect vs Continuous
          </h3>
          <p className="text-xs leading-relaxed italic">
            Use <b>Imperfect</b> for general background. Use{" "}
            <b>Past Continuous</b> only to emphasize the active, unfolding
            process.
          </p>
        </div>
        <div className="p-6 bg-rose-600 text-white rounded-2xl space-y-3 shadow-md">
          <h3 className="text-sm font-black uppercase flex items-center gap-2 text-rose-100">
            <AlertCircle size={16} /> The Hard Rule
          </h3>
          <p className="text-xs leading-relaxed">
            Never use past continuous for completed actions. <b>Incorrect:</b>{" "}
            "Estaba llegando." <b>Correct:</b> "Llegué."
          </p>
        </div>
      </section>

      {/* 9 & 10. FORM & ORDER */}
      <section className="p-8 rounded-3xl border border-border bg-card space-y-6">
        <h2 className="text-2xl font-bold">Negative, Questions & Order</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div>
            <p className="font-bold text-indigo-500 mb-2">Negation</p>
            <p className="italic opacity-80">No estaba escuchando.</p>
          </div>
          <div>
            <p className="font-bold text-indigo-500 mb-2">Questions</p>
            <p className="italic opacity-80">¿Qué estabas haciendo?</p>
          </div>
          <div>
            <p className="font-bold text-indigo-500 mb-2">Word Order</p>
            <p className="italic opacity-80 underline">Standard:</p>
            <p className="text-[11px] opacity-70">Estar + Gerund + Object</p>
          </div>
        </div>
      </section>

      {/* DRILLS */}
      <section className="space-y-8 pt-8 border-t border-border">
        <h2 className="text-3xl font-black text-center">Interactive Drills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              id: "q1",
              q: "Yo (trabajar) cuando llamaste.",
              a: "estaba trabajando",
            },
            {
              id: "q2",
              q: "Ellos (dormir) a las diez.",
              a: "estaban durmiendo",
            },
            {
              id: "q3",
              q: "Nosotros (estudiar) en la sala.",
              a: "estábamos estudiando",
            },
            { id: "q4", q: "Él (leer) el informe.", a: "estaba leyendo" },
          ].map((item) => (
            <div
              key={item.id}
              className="p-4 bg-card rounded-xl border border-border flex items-center justify-between gap-4"
            >
              <span className="text-sm font-medium">{item.q}</span>
              <div className="flex gap-2">
                <input
                  type="text"
                  className="w-32 bg-muted border-none rounded px-2 py-1 text-xs outline-none focus:ring-1 ring-indigo-500"
                  onChange={(e) => handleInputChange(item.id, e.target.value)}
                />
                <button
                  onClick={() => checkAnswer(item.id, item.a)}
                  className="text-indigo-600 hover:scale-110 transition-transform"
                >
                  <CheckCircle2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL SUMMARY */}
      <footer className="p-10 bg-indigo-600 text-white rounded-[2rem] text-center shadow-lg">
        <h3 className="text-xs font-black uppercase tracking-widest mb-4 opacity-70">
          The Bottom Line
        </h3>
        <p className="text-lg font-medium max-w-2xl mx-auto italic">
          "Prefer the simple imperfect unless the process matters. Never use
          this for completed events."
        </p>
      </footer>
    </div>
  );
};

export default grammar_lesson_29;
