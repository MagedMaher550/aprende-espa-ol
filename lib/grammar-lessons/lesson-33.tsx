"use client";
import type React from "react";
import { useState } from "react";
import {
  Calendar,
  Clock,
  CheckCircle2,
  Send,
  BookOpen,
  Repeat,
  MessageSquare,
  AlertTriangle,
  Zap,
  ShieldCheck,
  History,
  Info,
  Layers,
} from "lucide-react";

const grammar_lesson_33: React.FC = () => {
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
    <div className="mx-auto w-full max-w-5xl space-y-8 px-4 pb-40 pt-10 sm:px-6 bg-background text-foreground font-sans overflow-x-hidden">
      {/* HEADER SECTION */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-indigo-600 uppercase">
          Pretérito Perfecto
        </h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto italic">
          Finished actions within an unfinished time period.
        </p>
      </section>

      {/* I. USAGE LOGIC */}
      <section className="space-y-6">
        <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter border-b-2 border-indigo-600 pb-2 flex items-center gap-2">
          <ShieldCheck className="text-indigo-600 shrink-0" /> I. Usage & Logic
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-muted/30 p-5 rounded-2xl border border-border">
            <h3 className="text-xs font-bold uppercase text-indigo-600 mb-2 flex items-center gap-2">
              <Calendar size={14} /> Unfinished Time
            </h3>
            <p className="text-[11px] leading-relaxed opacity-80">
              Periods like <b>hoy</b>, <b>esta semana</b>, or <b>este año</b>.
              The action is done, but the time isn't.
            </p>
          </div>
          <div className="bg-muted/30 p-5 rounded-2xl border border-border">
            <h3 className="text-xs font-bold uppercase text-emerald-600 mb-2 flex items-center gap-2">
              <History size={14} /> Life Experiences
            </h3>
            <p className="text-[11px] leading-relaxed opacity-80">
              What someone has or hasn't done (e.g., "He visitado España"). No
              specific date is needed.
            </p>
          </div>
          <div className="bg-indigo-600 text-white p-5 rounded-2xl sm:col-span-2 lg:col-span-1">
            <h3 className="text-xs font-bold uppercase mb-1">Key Concept</h3>
            <p className="text-xs font-bold leading-tight">
              Action is finished + Time is NOT finished.
            </p>
          </div>
        </div>
      </section>

      {/* II. THE FORMULA */}
      <section className="space-y-6">
        <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter border-b-2 border-emerald-600 pb-2">
          II. Formula: Haber + Participio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* HABER TABLE */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase text-emerald-600 flex items-center gap-2">
              <Zap size={16} /> 1. Haber (Present)
            </h3>
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full text-xs text-left">
                <thead className="bg-muted text-[10px] uppercase font-black">
                  <tr>
                    <th className="p-3">Subject</th>
                    <th className="p-3">Form</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Yo", "he"],
                    ["Tú", "has"],
                    ["Él/Ella/Ud", "ha"],
                    ["Nosotros", "hemos"],
                    ["Vosotros", "habéis"],
                    ["Ellos/Uds", "han"],
                  ].map(([p, v]) => (
                    <tr key={p}>
                      <td className="p-3 bg-card italic">{p}</td>
                      <td className="p-3 font-bold text-emerald-600 text-base">
                        {v}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* PARTICIPLES */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase text-emerald-600 flex items-center gap-2">
              <Repeat size={16} /> 2. Regular Participles
            </h3>
            <div className="p-5 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl space-y-4">
              <div className="flex justify-between items-center border-b border-emerald-500/10 pb-3">
                <span className="text-[10px] font-black uppercase">
                  -AR → -ADO
                </span>
                <span className="text-xs italic">Hablado</span>
              </div>
              <div className="flex justify-between items-center border-b border-emerald-500/10 pb-3">
                <span className="text-[10px] font-black uppercase">
                  -ER → -IDO
                </span>
                <span className="text-xs italic">Comido</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black uppercase">
                  -IR → -IDO
                </span>
                <span className="text-xs italic">Vivido</span>
              </div>
              <div className="mt-2 p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                <p className="text-[10px] leading-tight flex gap-2">
                  <AlertTriangle
                    className="text-amber-600 shrink-0"
                    size={14}
                  />
                  Participles <b>never</b> change gender or number in this
                  tense!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: PARTICIPLE AS ADJECTIVE */}
      <section className="space-y-6">
        <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter border-b-2 border-orange-600 pb-2 flex items-center gap-2">
          <Layers className="text-orange-600 shrink-0" /> III. Participle vs.
          Adjective
        </h2>
        <div className="bg-muted/20 p-6 rounded-3xl border border-border space-y-6">
          <p className="text-sm italic opacity-90">
            When used with <b>HABER</b>, it's a verb (He comido). But when used
            with <b>ESTAR</b> or <b>SER</b>, the past participle acts as an{" "}
            <b>adjective</b> and must agree in gender and number.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-background rounded-xl border border-border space-y-2">
              <p className="text-[10px] font-black text-orange-600 uppercase">
                Verb (Action)
              </p>
              <p className="text-sm font-bold">He conocido a Juan.</p>
              <p className="text-[11px] opacity-70 italic">
                I have met/known Juan.
              </p>
            </div>
            <div className="p-4 bg-background rounded-xl border border-border space-y-2">
              <p className="text-[10px] font-black text-orange-600 uppercase">
                Adjective (State)
              </p>
              <p className="text-sm font-bold text-orange-700">
                Juan es muy conocido.
              </p>
              <p className="text-[11px] opacity-70 italic">
                Juan is very known (famous).
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { es: "Comido/a", en: "Eaten" },
              { es: "Cerrado/a", en: "Closed" },
              { es: "Abierto/a", en: "Open" },
              { es: "Escrito/a", en: "Written" },
            ].map((item) => (
              <div
                key={item.es}
                className="p-3 bg-orange-500/5 rounded-lg text-center border border-orange-200/50"
              >
                <p className="text-xs font-bold">{item.es}</p>
                <p className="text-[10px] opacity-60 uppercase">{item.en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IV. ALL 13 IRREGULARS */}
      <section className="space-y-6 bg-slate-900 text-white p-6 md:p-10 rounded-3xl shadow-2xl">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-blue-400">
            IV. The 13 Irregulars
          </h2>
          <p className="text-xs text-slate-400">
            Must be memorized (No -ado/-ido rules here).
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {[
            { v: "Abrir", p: "Abierto" },
            { v: "Volver", p: "Vuelto" },
            { v: "Poner", p: "Puesto" },
            { v: "Ver", p: "Visto" },
            { v: "Romper", p: "Roto" },
            { v: "Cubrir", p: "Cubierto" },
            { v: "Decir", p: "Dicho" },
            { v: "Hacer", p: "Hecho" },
            { v: "Escribir", p: "Escrito" },
            { v: "Morir", p: "Muerto" },
            { v: "Resolver", p: "Resuelto" },
            { v: "Imprimir", p: "Impreso" },
            { v: "Freír", p: "Frito" },
          ].map((item) => (
            <div
              key={item.v}
              className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
            >
              <p className="text-[9px] uppercase text-blue-400 font-black mb-1">
                {item.v}
              </p>
              <p className="text-sm font-mono font-bold tracking-tight">
                {item.p}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* V. INTERACTIVE LAB */}
      <section className="space-y-8 bg-muted/10 p-5 md:p-10 rounded-3xl border border-border">
        <h2 className="text-2xl md:text-3xl font-black uppercase text-center text-indigo-600">
          Interactive Lab
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* DRILL 1 */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-black uppercase text-muted-foreground border-l-4 border-emerald-600 pl-3">
              Drill I: Basic Structure
            </h3>
            <div className="space-y-3">
              {[
                { id: "pp1", q: "Yo (comer) hoy.", a: "he comido" },
                { id: "pp2", q: "Nosotros (ver) la TV.", a: "hemos visto" },
                { id: "pp3", q: "Ellos (hacer) la tarea.", a: "han hecho" },
              ].map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-background rounded-xl border border-border gap-3"
                >
                  <span className="text-xs font-bold">{item.q}</span>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className={`flex-1 sm:w-32 bg-muted border rounded px-2 py-1 text-xs outline-none ${
                        feedback[item.id] === "correct"
                          ? "border-emerald-500 bg-emerald-500/5"
                          : feedback[item.id] === "incorrect"
                          ? "border-rose-500 bg-rose-500/5"
                          : "border-border"
                      }`}
                      onChange={(e) =>
                        handleInputChange(item.id, e.target.value)
                      }
                    />
                    <button
                      onClick={() => checkAnswer(item.id, item.a)}
                      className="text-indigo-600"
                    >
                      <CheckCircle2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DRILL 2 */}
          <div className="space-y-4">
            <h3 className="text-[10px] font-black uppercase text-muted-foreground border-l-4 border-rose-600 pl-3">
              Drill II: Reflexives & Negatives
            </h3>
            <div className="space-y-3">
              {[
                { id: "rn1", q: "Ella (levantarse).", a: "se ha levantado" },
                { id: "rn2", q: "Yo (no comer).", a: "no he comido" },
                { id: "rn3", q: "Tú (romper) el vaso.", a: "has roto" },
              ].map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-background rounded-xl border border-border gap-3"
                >
                  <span className="text-xs font-bold">{item.q}</span>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="flex-1 sm:w-40 bg-muted border border-border rounded px-2 py-1 text-xs outline-none"
                      onChange={(e) =>
                        handleInputChange(item.id, e.target.value)
                      }
                    />
                    <button
                      onClick={() => checkAnswer(item.id, item.a)}
                      className="text-indigo-600"
                    >
                      <CheckCircle2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VI. FINAL PRACTICE */}
      <section className="p-6 md:p-12 bg-indigo-950 text-white rounded-3xl border border-indigo-800 shadow-2xl overflow-hidden">
        <h2 className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-6 border-b border-indigo-400/20 pb-4">
          X. Writing Practice
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4 text-[11px] opacity-80">
            <p className="font-bold text-indigo-400 uppercase tracking-tighter">
              Your Mission:
            </p>
            <p>Write a short paragraph about your week. Use at least:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>3 Regular verbs (e.g., comido, trabajado)</li>
              <li>2 Irregular verbs (e.g., hecho, visto, vuelto)</li>
              <li>1 Reflexive verb (e.g., me he despertado)</li>
            </ul>
          </div>
          <div className="space-y-3">
            <textarea
              className="w-full h-32 md:h-40 bg-white/5 border border-indigo-700 rounded-2xl p-4 text-xs outline-none focus:border-indigo-400 transition-colors"
              placeholder="Esta semana he trabajado mucho y he hecho la tarea..."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default grammar_lesson_33;
