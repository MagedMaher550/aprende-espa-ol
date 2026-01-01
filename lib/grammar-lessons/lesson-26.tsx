"use client";
import type React from "react";
import { useState } from "react";
import {
  Calendar,
  Clock,
  CheckCircle2,
  HelpCircle,
  Send,
  BookOpen,
  MessageSquare,
  AlertTriangle,
  MapPin,
  ThumbsUp,
  ThumbsDown,
  Info,
  ChevronRight,
} from "lucide-react";

const grammar_lesson_26: React.FC = () => {
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
      {/* HEADER */}
      <section className="space-y-4">
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-indigo-600 leading-tight">
          Lesson 26: Proponer un plan
        </h1>
        <div className="p-6 rounded-3xl bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900">
          <p className="text-base sm:text-lg leading-relaxed">
            In this lesson, we learn how to <b>propose, accept, or reject</b> a
            plan. These structures are essential for social life and everyday
            conversation in Spanish.
          </p>
        </div>
      </section>

      {/* I. PROPOSING A PLAN */}
      <section className="space-y-8">
        <h2 className="text-2xl font-black uppercase tracking-tighter border-b-2 border-indigo-600 pb-2 flex items-center gap-2">
          <ChevronRight className="text-indigo-600" /> I. Proposing a Plan
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Structure 1 */}
          <div className="p-6 bg-card border border-border rounded-2xl space-y-4 shadow-sm">
            <h3 className="text-sm font-bold uppercase text-indigo-600">
              1. ¿Vamos a + Infinitive?
            </h3>
            <p className="text-xs text-muted-foreground italic">
              Used to suggest doing something together.
            </p>
            <div className="bg-indigo-500/5 p-4 rounded-xl space-y-2">
              <p className="text-sm font-medium">
                • ¿Vamos a salir esta noche?
              </p>
              <p className="text-sm font-medium">• ¿Vamos a comer fuera?</p>
              <p className="text-sm font-medium">• ¿Vamos a ir al cine?</p>
              <p className="text-sm font-medium">• ¿Vamos a estudiar juntos?</p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {["salir", "comer", "ir", "quedar", "estudiar"].map((v) => (
                <span
                  key={v}
                  className="px-2 py-1 bg-muted rounded text-[10px] font-mono"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>

          {/* Structure 2 */}
          <div className="p-6 bg-card border border-border rounded-2xl space-y-4 shadow-sm">
            <h3 className="text-sm font-bold uppercase text-indigo-600">
              2. ¿Qué te parece si...?
            </h3>
            <p className="text-xs text-muted-foreground italic">
              Polite and indirect proposal using Present Tense.
            </p>
            <div className="bg-indigo-500/5 p-4 rounded-xl space-y-2">
              <p className="text-sm font-medium">
                • ¿Qué te parece si salimos hoy?
              </p>
              <p className="text-sm font-medium">
                • ¿Qué te parece si vamos al cine?
              </p>
              <p className="text-sm font-medium">
                • ¿Qué te parece si estudiamos mañana?
              </p>
              <p className="text-sm font-medium">
                • ¿Qué te parece si quedamos a las ocho?
              </p>
            </div>
          </div>

          {/* Structure 3 */}
          <div className="p-6 bg-card border border-border rounded-2xl space-y-4 shadow-sm">
            <h3 className="text-sm font-bold uppercase text-indigo-600">
              3. Poder + Infinitive
            </h3>
            <p className="text-xs text-muted-foreground italic">
              Suggesting an option using "Podemos" or "Puedes".
            </p>
            <div className="bg-indigo-500/5 p-4 rounded-xl space-y-2">
              <p className="text-sm font-medium">• Podemos ir al cine.</p>
              <p className="text-sm font-medium">• Podemos quedar mañana.</p>
              <p className="text-sm font-medium">• Puedes venir a mi casa.</p>
              <p className="text-sm font-medium">
                • Podemos comer algo rápido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* II & III. ACCEPTING & REJECTING */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h2 className="text-xl font-black uppercase tracking-tighter text-emerald-600 flex items-center gap-2">
            <ThumbsUp size={24} /> II. Accepting a Plan
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Vale.",
              "Perfecto.",
              "De acuerdo.",
              "Me parece bien.",
              "Muy bien.",
            ].map((exp) => (
              <div
                key={exp}
                className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl text-center font-bold text-sm"
              >
                {exp}
              </div>
            ))}
          </div>
          <div className="p-4 bg-muted/30 rounded-xl text-xs italic">
            <p>— ¿Vamos a salir esta noche? — Vale.</p>
            <p className="mt-2">
              — ¿Qué te parece si quedamos mañana? — Me parece bien.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-black uppercase tracking-tighter text-rose-600 flex items-center gap-2">
            <ThumbsDown size={24} /> III. Rejecting (Polite)
          </h2>
          <div className="p-6 bg-rose-500/5 border border-rose-500/20 rounded-2xl space-y-4">
            <div className="flex items-center gap-2 text-rose-700 font-black text-sm uppercase">
              <Info size={16} /> Structure: Es que + Excuse
            </div>
            <ul className="space-y-2 text-sm italic">
              <li>• Es que estoy cansado.</li>
              <li>• Es que trabajo mañana.</li>
              <li>• Es que tengo una cena familiar.</li>
              <li>• Es que no tengo tiempo hoy.</li>
            </ul>
            <p className="text-xs text-rose-800/70 border-t border-rose-200 pt-2">
              Example: "Es que tengo cena familiar y no puedo ir."
            </p>
          </div>
        </div>
      </section>

      {/* IV. CONCRETE PLANS */}
      <section className="space-y-8">
        <h2 className="text-2xl font-black uppercase tracking-tighter border-b-2 border-amber-600 pb-2 flex items-center gap-2">
          <Calendar className="text-amber-600" /> IV. Making it Concrete
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase text-amber-600">
              1. Asking for the Day
            </h3>
            <div className="p-6 bg-amber-500/5 border border-amber-500/20 rounded-2xl text-lg font-bold italic text-center">
              ¿Qué día quedamos? <br />
              <span className="text-sm font-normal text-muted-foreground italic">
                ¿Qué día te viene bien?
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase text-amber-600">
              2. Time and Place
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-card border border-border rounded-xl">
                <div className="flex items-center gap-2 mb-2 text-indigo-600">
                  <Clock size={16} />{" "}
                  <span className="font-bold">A + time</span>
                </div>
                <p className="text-xs italic">A las ocho / A las doce</p>
              </div>
              <div className="p-4 bg-card border border-border rounded-xl">
                <div className="flex items-center gap-2 mb-2 text-emerald-600">
                  <MapPin size={16} />{" "}
                  <span className="font-bold">EN + place</span>
                </div>
                <p className="text-xs italic">En el parque / En mi casa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* V. DIALOGUE MODELS */}
      <section className="space-y-6">
        <h2 className="text-xl font-black uppercase text-indigo-600 border-b border-indigo-500/20 pb-2">
          V. Model Dialogues
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "Propose & Accept",
              lines: [
                "— ¿Vamos al cine el domingo?",
                "— Vale.",
                "— ¿A qué hora quedamos?",
                "— A las ocho en la esquina del teatro.",
              ],
            },
            {
              title: "Propose & Reject",
              lines: [
                "— ¿Qué te parece si salimos hoy?",
                "— Es que tengo cena familiar.",
              ],
            },
            {
              title: "Full Interaction",
              lines: [
                "— ¿Vamos a tomar algo mañana?",
                "— Me parece bien.",
                "— ¿Qué día quedamos? — El domingo.",
                "— ¿A qué hora? — A las doce en el parque.",
              ],
            },
          ].map((d, i) => (
            <div
              key={i}
              className="p-5 bg-muted/20 rounded-3xl border border-border space-y-3"
            >
              <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-500">
                {d.title}
              </h4>
              <div className="text-xs italic space-y-1">
                {d.lines.map((l, idx) => (
                  <p key={idx} className={l.startsWith("— —") ? "ml-4" : ""}>
                    {l}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRACTICE DRILLS */}
      <section className="space-y-12 bg-muted/10 p-4 sm:p-10 rounded-3xl border border-border">
        <h2 className="text-3xl font-black uppercase text-center text-indigo-600">
          Practice Drills
        </h2>

        {/* VI. PRACTICE COMPLETE */}
        <div className="space-y-6">
          <h3 className="text-xs font-black uppercase text-muted-foreground border-l-4 border-indigo-600 pl-3">
            VI. Practice — Complete the Sentence
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {[
              { id: "vi1", q: "1. ¿Vamos a ______ al cine?", a: "ir" },
              {
                id: "vi2",
                q: "2. ¿Qué te parece si ______ mañana?",
                a: "quedamos",
              },
              { id: "vi3", q: "3. Podemos ______ a las ocho.", a: "quedar" },
              { id: "vi4", q: "4. Es que ______ cansado hoy.", a: "estoy" },
              {
                id: "vi5",
                q: "5. Quedamos ______ las seis ______ el parque.",
                a: "a en",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-background rounded-xl border border-border"
              >
                <span className="text-xs font-bold">{item.q}</span>
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    className="w-24 bg-muted border border-border rounded px-2 py-1 text-xs outline-none focus:border-indigo-600"
                    onChange={(e) => handleInputChange(item.id, e.target.value)}
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

        {/* VII. PRACTICE CHOOSE */}
        <div className="space-y-6 border-t border-border pt-8">
          <h3 className="text-xs font-black uppercase text-muted-foreground border-l-4 border-indigo-600 pl-3">
            VII. Practice — Choose the Correct Option
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                id: "vii1",
                q: "1. ¿___ a salir esta noche?",
                opt: "a) Vamos b) Vamos a c) Vamos al",
                a: "vamos",
              },
              {
                id: "vii2",
                q: "2. ¿Qué te parece si ___ mañana?",
                opt: "a) salimos b) salir c) salimos a",
                a: "salimos",
              },
              {
                id: "vii3",
                q: "3. — ¿Vamos al cine? — ___.",
                opt: "a) Es que trabajo b) Vale c) Porque sí",
                a: "vale",
              },
              {
                id: "vii4",
                q: "4. A las ocho ___ el parque.",
                opt: "a) a b) en c) por",
                a: "en",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="p-4 bg-background rounded-xl border border-border space-y-2"
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
                    className="text-indigo-600"
                  >
                    <CheckCircle2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VIII. PRACTICE RESPOND */}
        <div className="space-y-6 border-t border-border pt-8">
          <h3 className="text-xs font-black uppercase text-indigo-600 border-l-4 border-indigo-600 pl-3">
            VIII. Practice — Respond Appropriately
          </h3>
          <div className="space-y-4">
            {[
              {
                id: "viii1",
                q: "1. — ¿Vamos a salir hoy? (Accept)",
                a: "vale",
              },
              {
                id: "viii2",
                q: "2. — ¿Qué te parece si quedamos mañana? (Reject politely)",
                a: "es que trabajo",
              },
              { id: "viii3", q: "3. — ¿Qué día quedamos?", a: "el sabado" },
            ].map((item) => (
              <div key={item.id} className="space-y-2">
                <p className="text-xs font-bold">{item.q}</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="flex-1 bg-background border border-border rounded-lg px-4 py-2 text-xs outline-none"
                    placeholder="Type your response..."
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

      {/* IX. CONVERSATION */}
      <section className="space-y-6">
        <h2 className="text-xs font-black uppercase text-indigo-600 flex items-center gap-2 border-b border-indigo-500/20 pb-2">
          <MessageSquare size={18} /> IX. Conversation Questions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs italic">
          {[
            "¿Vamos a salir este fin de semana?",
            "¿Qué te parece si estudiamos juntos?",
            "¿Te viene bien mañana?",
            "¿A qué hora quedamos normalmente?",
            "¿Dónde quedamos?",
          ].map((q, i) => (
            <div
              key={i}
              className="p-3 bg-indigo-500/5 rounded-xl border border-indigo-500/10 italic"
            >
              {q}
            </div>
          ))}
        </div>
      </section>

      {/* X. EXTENDED QUIZ */}
      <section className="p-8 sm:p-12 bg-slate-900 text-white rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <AlertTriangle size={80} />
        </div>
        <h2 className="text-xs font-black uppercase tracking-widest text-indigo-400 mb-8 border-b border-indigo-400/20 pb-4">
          X. Extended Quiz - Create a Plan
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4 text-sm opacity-80 leading-relaxed">
            <p className="font-bold text-indigo-400">Assignment Details:</p>
            <p>Write an 8–10 line dialogue or story. You must include:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>A proposal</li>
              <li>An acceptance</li>
              <li>A rejection with "es que"</li>
              <li>Day, time, and place</li>
              <li>At least 2 questions</li>
            </ul>
          </div>
          <div className="space-y-4">
            <textarea
              className="w-full h-48 bg-white/5 border border-slate-700 rounded-2xl p-4 text-sm outline-none focus:border-indigo-400 transition-colors"
              placeholder="Escribe tu plan aquí..."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default grammar_lesson_26;
