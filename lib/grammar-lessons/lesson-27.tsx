"use client";
import type React from "react";
import { useState } from "react";
import {
  Clock,
  CheckCircle2,
  Send,
  BookOpen,
  Repeat,
  Info,
  Layers,
  Zap,
  MessageSquare,
  AlertTriangle,
  PlayCircle,
  TrendingUp,
} from "lucide-react";

const grammar_lesson_27: React.FC = () => {
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
    <div className="mx-auto w-full max-w-5xl space-y-12 px-4 pb-40 pt-10 sm:px-6 bg-background text-foreground font-sans overflow-x-hidden">
      {/* I. THE GERUND (FORMING) */}
      <section className="space-y-8">
        <h2 className="text-2xl font-black uppercase tracking-tighter border-b-2 border-emerald-600 pb-2 flex items-center gap-2">
          <PlayCircle className="text-emerald-600" /> I. Forming the Gerundio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase text-emerald-600">
              1. Regular Forms
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-card border border-border rounded-xl shadow-sm">
                <p className="text-[10px] font-black uppercase text-muted-foreground mb-1">
                  -AR → -ANDO
                </p>
                <p className="font-bold text-lg">hablando</p>
                <p className="text-xs italic text-muted-foreground">
                  trabajando, estudiando
                </p>
              </div>
              <div className="p-4 bg-card border border-border rounded-xl shadow-sm">
                <p className="text-[10px] font-black uppercase text-muted-foreground mb-1">
                  -ER / -IR → -IENDO
                </p>
                <p className="font-bold text-lg">comiendo</p>
                <p className="text-xs italic text-muted-foreground">
                  bebiendo, viviendo
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase text-rose-600">
              2. Irregular Gerundios
            </h3>
            <div className="p-4 bg-rose-500/5 border border-rose-500/10 rounded-xl space-y-3">
              <div>
                <p className="text-[10px] font-black uppercase text-rose-700">
                  o → u / e → i (-IR verbs)
                </p>
                <p className="text-sm font-medium italic">
                  durmiendo, muriendo, pidiendo, sirviendo
                </p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-rose-700">
                  Vowel + ER/IR → YENDO
                </p>
                <p className="text-sm font-medium italic">
                  leyendo, oyendo, yendo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* II, III, IV. THE VERBS */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-3xl space-y-4">
          <div className="flex items-center gap-2 text-blue-600">
            <Zap size={20} />
            <h3 className="font-black uppercase text-sm">
              II. ESTAR + Gerundio
            </h3>
          </div>
          <p className="text-xs font-bold uppercase">Right now / Momentary</p>
          <div className="space-y-2 italic text-sm opacity-80">
            <p>• Estoy trabajando (ahora).</p>
            <p>• Está durmiendo en este momento.</p>
            <p>• Estamos estudiando español.</p>
          </div>
        </div>

        <div className="p-6 bg-orange-500/5 border border-orange-500/20 rounded-3xl space-y-4">
          <div className="flex items-center gap-2 text-orange-600">
            <Repeat size={20} />
            <h3 className="font-black uppercase text-sm">
              III. SEGUIR + Gerundio
            </h3>
          </div>
          <p className="text-xs font-bold uppercase">Continuity / Keep doing</p>
          <div className="space-y-2 italic text-sm opacity-80">
            <p>• Sigo trabajando aquí.</p>
            <p>• Sigue estudiando para el examen.</p>
            <p>• Seguimos viviendo en Madrid.</p>
          </div>
        </div>

        <div className="p-6 bg-purple-500/5 border border-purple-500/20 rounded-3xl space-y-4">
          <div className="flex items-center gap-2 text-purple-600">
            <Clock size={20} />
            <h3 className="font-black uppercase text-sm">
              IV. LLEVAR + Gerundio
            </h3>
          </div>
          <p className="text-xs font-bold uppercase">Duration of action</p>
          <div className="space-y-2 italic text-sm opacity-80">
            <p>• Llevo dos años estudiando.</p>
            <p>• Lleva mucho tiempo aquí.</p>
            <p>• Llevamos meses viviendo solos.</p>
          </div>
        </div>
      </section>

      {/* V. COMPARISON TABLE */}
      <section className="space-y-4">
        <h2 className="text-xs font-black uppercase text-emerald-600 flex items-center gap-2">
          <Layers size={18} /> V. Clear Comparison
        </h2>
        <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted text-[10px] uppercase font-black">
              <tr>
                <th className="p-4">Verb</th>
                <th className="p-4">Meaning</th>
                <th className="p-4">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              <tr>
                <td className="p-4 font-bold text-blue-600">Estar</td>
                <td className="p-4 italic">Action happening now</td>
                <td className="p-4 font-medium italic text-xs">
                  Estoy estudiando ahora.
                </td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-orange-600">Seguir</td>
                <td className="p-4 italic">Action continues</td>
                <td className="p-4 font-medium italic text-xs">
                  Sigo estudiando español.
                </td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-purple-600">Llevar</td>
                <td className="p-4 italic">Duration of action</td>
                <td className="p-4 font-medium italic text-xs">
                  Llevo dos años estudiando.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* VI. GERUNDIO VS PRESENTE */}
      <section className="p-8 bg-slate-100 dark:bg-slate-900 rounded-3xl space-y-6">
        <h3 className="text-sm font-black uppercase flex items-center gap-2 text-indigo-600">
          <TrendingUp size={18} /> VI. Gerundio vs Presente
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <p className="text-xs font-black uppercase">
              Presente (Habits/Routines)
            </p>
            <div className="bg-background p-4 rounded-xl border border-border text-xs space-y-1">
              <p>• Trabajo en una empresa. (General fact)</p>
              <p>• Estudio español cada día. (Routine)</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-black uppercase text-emerald-600">
              Gerundio (In Progress)
            </p>
            <div className="bg-background p-4 rounded-xl border border-border text-xs space-y-1">
              <p>• Estoy trabajando ahora. (Right now)</p>
              <p>• Estoy estudiando para el examen. (Focus on development)</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE DRILLS */}
      <section className="space-y-12 bg-muted/10 p-4 sm:p-10 rounded-3xl border border-border">
        <h2 className="text-3xl font-black uppercase text-center text-emerald-600">
          Practice Drills
        </h2>

        {/* VII. PRACTICE CHOOSE */}
        <div className="space-y-6">
          <h3 className="text-xs font-black uppercase text-muted-foreground border-l-4 border-emerald-600 pl-3">
            VII. Practice — Choose Presente or Gerundio
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                id: "vii1",
                q: "1. Yo ______ español todos los días.",
                opt: "(estudio / estoy estudiando)",
                a: "estudio",
              },
              {
                id: "vii2",
                q: "2. Ahora ______ español.",
                opt: "(estudio / estoy estudiando)",
                a: "estoy estudiando",
              },
              {
                id: "vii3",
                q: "3. Él ______ en la misma empresa desde 2020.",
                opt: "(trabaja / sigue trabajando)",
                a: "sigue trabajando",
              },
              {
                id: "vii4",
                q: "4. Nosotros ______ dos años viviendo aquí.",
                opt: "(llevamos / estamos)",
                a: "llevamos",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="p-4 bg-background rounded-xl border border-border space-y-2 shadow-sm"
              >
                <p className="text-xs font-bold">{item.q}</p>
                <p className="text-[10px] text-muted-foreground italic uppercase">
                  {item.opt}
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="flex-1 bg-muted rounded px-3 py-1 text-xs outline-none"
                    onChange={(e) => handleInputChange(item.id, e.target.value)}
                  />
                  <button
                    onClick={() => checkAnswer(item.id, item.a)}
                    className="text-emerald-600"
                  >
                    <CheckCircle2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VIII. PRACTICE COMPLETE */}
        <div className="space-y-6 border-t border-border pt-8">
          <h3 className="text-xs font-black uppercase text-muted-foreground border-l-4 border-emerald-600 pl-3">
            VIII. Practice — Complete with ESTAR / SEGUIR / LLEVAR
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: "viii1", q: "1. Ahora ______ trabajando.", a: "estoy" },
              {
                id: "viii2",
                q: "2. ______ estudiando español este año.",
                a: "sigo",
              },
              {
                id: "viii3",
                q: "3. ______ tres meses aprendiendo español.",
                a: "llevo",
              },
              {
                id: "viii4",
                q: "4. Él ______ viviendo con sus padres.",
                a: "sigue",
              },
              { id: "viii5", q: "5. Nosotros ______ comiendo.", a: "estamos" },
            ].map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-background rounded-xl border border-border"
              >
                <span className="text-xs font-bold">{item.q}</span>
                <input
                  type="text"
                  className="w-24 bg-muted border border-border rounded px-2 py-1 text-xs outline-none focus:border-emerald-600"
                  onChange={(e) => handleInputChange(item.id, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* IX. PRACTICE TRANSFORM */}
        <div className="space-y-6 border-t border-border pt-8">
          <h3 className="text-xs font-black uppercase text-indigo-600 border-l-4 border-indigo-600 pl-3">
            IX. Practice — Transform the Sentence
          </h3>
          <div className="space-y-4">
            {[
              {
                id: "ix1",
                q: "1. Estudio español. (now)",
                a: "estoy estudiando español",
              },
              {
                id: "ix2",
                q: "2. Trabajo en esta empresa. (still)",
                a: "sigo trabajando en esta empresa",
              },
              {
                id: "ix3",
                q: "3. Vivo aquí. (for two years)",
                a: "llevo dos años viviendo aquí",
              },
            ].map((item) => (
              <div key={item.id} className="space-y-2">
                <p className="text-xs font-bold">Base: {item.q}</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="flex-1 bg-background border border-border rounded-lg px-4 py-2 text-xs outline-none"
                    placeholder="Escribe la transformación..."
                    onChange={(e) => handleInputChange(item.id, e.target.value)}
                  />
                  <button
                    onClick={() => checkAnswer(item.id, item.a)}
                    className="bg-indigo-600 text-white p-2 rounded-lg"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* X & XI. CONVERSATION & DIALOGUES */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h2 className="text-xs font-black uppercase text-emerald-600 flex items-center gap-2 border-b border-emerald-500/20 pb-2">
            <MessageSquare size={18} /> X. Conversation Questions
          </h2>
          <div className="space-y-2 text-xs italic">
            {[
              "¿Qué estás haciendo ahora?",
              "¿Sigues estudiando español?",
              "¿Cuánto tiempo llevas estudiando español?",
              "¿Estás trabajando o estudiando ahora?",
              "¿Sigues viviendo en el mismo lugar?",
            ].map((q, i) => (
              <div
                key={i}
                className="p-3 bg-card border border-border rounded-xl"
              >
                {q}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xs font-black uppercase text-blue-600 border-b border-blue-500/20 pb-2">
            XI. Mini Dialogue Models
          </h2>
          <div className="space-y-4 text-xs italic">
            <div className="p-4 bg-blue-500/5 rounded-2xl border border-blue-500/10">
              <p>— ¿Qué haces ahora?</p>
              <p className="text-blue-600 font-bold">
                — Estoy estudiando español.
              </p>
            </div>
            <div className="p-4 bg-orange-500/5 rounded-2xl border border-orange-500/10">
              <p>— ¿Sigues trabajando aquí?</p>
              <p className="text-orange-600 font-bold">
                — Sí, sigo trabajando aquí.
              </p>
            </div>
            <div className="p-4 bg-purple-500/5 rounded-2xl border border-purple-500/10">
              <p>— ¿Cuánto tiempo llevas viviendo aquí?</p>
              <p className="text-purple-600 font-bold">
                — Llevo dos años viviendo aquí.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* XII. EXTENDED QUIZ */}
      <section className="p-8 sm:p-12 bg-slate-900 text-white rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <AlertTriangle size={80} />
        </div>
        <h2 className="text-xs font-black uppercase tracking-widest text-emerald-400 mb-8 border-b border-emerald-400/20 pb-4">
          XII. Extended Quiz - Personal Description
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4 text-sm opacity-80 leading-relaxed">
            <p className="font-bold text-emerald-400">Assignment Details:</p>
            <p>Write 8–10 lines about your current life. Include:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Estar + gerundio (Current task)</li>
              <li>Seguir + gerundio (Continuous habit)</li>
              <li>Llevar + time + gerundio (Duration)</li>
              <li>At least one sentence in Presente</li>
              <li>3+ different time expressions</li>
            </ul>
          </div>
          <div className="space-y-4">
            <textarea
              className="w-full h-48 bg-white/5 border border-slate-700 rounded-2xl p-4 text-sm outline-none focus:border-emerald-400 transition-colors"
              placeholder="Escribe sobre tu vida aquí..."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default grammar_lesson_27;
