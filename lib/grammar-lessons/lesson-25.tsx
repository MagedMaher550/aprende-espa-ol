"use client";
import type React from "react";
import { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  ArrowRightCircle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Send,
  BookOpen,
  Repeat,
  MinusCircle,
  MessageSquare,
  AlertTriangle,
} from "lucide-react";

const grammar_lesson_25: React.FC = () => {
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
      {/* I. CONCEPT & STRUCTURE */}
      <section className="space-y-8">
        <h2 className="text-2xl font-black uppercase tracking-tighter border-b-2 border-blue-600 pb-2">
          I. Futuro Próximo — IR + A + INFINITIVE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 bg-muted/30 p-6 rounded-2xl border border-border">
            <h3 className="text-sm font-bold uppercase text-blue-600">
              Structure (Fixed Formula)
            </h3>
            <p className="text-xl font-black text-center py-4 bg-background rounded-xl border border-blue-500/20">
              IR (conjugated) + A + INFINITIVE
            </p>
            <ul className="text-sm space-y-2 opacity-80 list-disc list-inside">
              <li>The main verb stays in the infinitive.</li>
              <li>Only IR is conjugated.</li>
              <li>
                Used for clear plans, intentions, and decisions already made.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase text-blue-600 flex items-center gap-2">
              <Repeat size={18} /> 1. Conjugation of IR (Present Tense)
            </h3>
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-[10px] uppercase font-black tracking-widest">
                  <tr>
                    <th className="p-3">Person</th>
                    <th className="p-3">IR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 bg-card font-medium italic">yo</td>
                    <td className="p-3 font-bold text-blue-600">voy</td>
                  </tr>
                  <tr>
                    <td className="p-3 bg-card font-medium italic">tú</td>
                    <td className="p-3 font-bold text-blue-600">vas</td>
                  </tr>
                  <tr>
                    <td className="p-3 bg-card font-medium italic">
                      él / ella / usted
                    </td>
                    <td className="p-3 font-bold text-blue-600">va</td>
                  </tr>
                  <tr>
                    <td className="p-3 bg-card font-medium italic">
                      nosotros / nosotras
                    </td>
                    <td className="p-3 font-bold text-blue-600">vamos</td>
                  </tr>
                  <tr>
                    <td className="p-3 bg-card font-medium italic">
                      vosotros / vosotras
                    </td>
                    <td className="p-3 font-bold text-blue-600">vais</td>
                  </tr>
                  <tr>
                    <td className="p-3 bg-card font-medium italic">
                      ellos / ellas / ustedes
                    </td>
                    <td className="p-3 font-bold text-blue-600">van</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CORE STRUCTURE EXAMPLES */}
      <section className="space-y-6">
        <h3 className="text-xs font-black uppercase text-blue-600">
          2. Core Structure Examples
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Voy a estudiar.",
            "Vas a trabajar mañana.",
            "Él va a viajar a España.",
            "Vamos a comer fuera.",
          ].map((ex, i) => (
            <div
              key={i}
              className="p-4 bg-card border border-border rounded-xl text-sm font-bold italic text-center shadow-sm"
            >
              {ex}
            </div>
          ))}
        </div>
      </section>

      {/* INFINITIVES & TIME */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-xs font-black uppercase flex items-center gap-2 text-emerald-600">
            <BookOpen size={18} /> 3. Common Infinitives & Examples
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "estudiar",
              "trabajar",
              "comer",
              "viajar",
              "descansar",
              "comprar",
              "salir",
              "hacer",
              "ver",
              "llamar",
            ].map((v) => (
              <span
                key={v}
                className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-medium"
              >
                {v}
              </span>
            ))}
          </div>
          <div className="p-4 bg-muted/20 rounded-xl space-y-2 text-xs italic">
            <p>• Voy a estudiar español.</p>
            <p>• Vamos a viajar en verano.</p>
            <p>• Ella va a trabajar mañana.</p>
            <p>• Van a hacer ejercicio.</p>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xs font-black uppercase flex items-center gap-2 text-blue-600">
            <Clock size={18} /> 4. Time Expressions
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              "hoy",
              "mañana",
              "esta noche",
              "esta semana",
              "este fin de semana",
              "pronto",
              "más tarde",
            ].map((t) => (
              <div
                key={t}
                className="p-2 border border-border bg-card text-center text-[10px] font-bold uppercase rounded-lg"
              >
                {t}
              </div>
            ))}
          </div>
          <div className="p-4 bg-blue-500/5 rounded-xl space-y-2 text-xs italic">
            <p>• Voy a llamar mañana.</p>
            <p>• Vamos a salir esta noche.</p>
            <p>• Él va a descansar este fin de semana.</p>
          </div>
        </div>
      </section>

      {/* NEGATIVE & QUESTIONS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h3 className="text-xs font-black uppercase flex items-center gap-2 text-rose-600">
            <MinusCircle size={18} /> 5. Negative Form
          </h3>
          <div className="p-6 bg-rose-500/5 border border-rose-500/20 rounded-3xl space-y-3">
            <p className="text-[10px] font-black uppercase text-rose-700">
              NO + IR + A + INFINITIVE
            </p>
            <div className="text-xs italic space-y-1.5 opacity-80">
              <p>• No voy a salir hoy.</p>
              <p>• No vamos a trabajar mañana.</p>
              <p>• Ella no va a comer carne.</p>
              <p>• No van a viajar este mes.</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-black uppercase flex items-center gap-2 text-blue-600">
            <HelpCircle size={18} /> 6. Questions
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 bg-muted/30 rounded-2xl">
              <p className="text-[10px] font-black uppercase mb-2">
                Yes / No Questions
              </p>
              <p className="text-xs italic opacity-80">
                • ¿Vas a estudiar hoy? / ¿Van a viajar mañana? / ¿Vamos a comer
                aquí?
              </p>
            </div>
            <div className="p-4 bg-muted/30 rounded-2xl">
              <p className="text-[10px] font-black uppercase mb-2">
                Information Questions
              </p>
              <p className="text-xs italic opacity-80">
                • ¿Qué vas a hacer hoy? / ¿Cuándo vas a trabajar? / ¿Dónde van a
                viajar?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* II. EXAMPLES BY PERSON */}
      <section className="p-8 bg-blue-600 text-white rounded-3xl space-y-4 shadow-xl">
        <h2 className="text-xs font-black uppercase tracking-widest border-b border-white/20 pb-2">
          II. Examples by Person
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium italic">
          <p>• Yo voy a estudiar esta noche.</p>
          <p>• Tú vas a trabajar mañana.</p>
          <p>• Él va a descansar hoy.</p>
          <p>• Nosotros vamos a salir el viernes.</p>
          <p>• Ellos van a viajar pronto.</p>
        </div>
      </section>

      {/* PRACTICE DRILLS (ALL QUESTIONS INCLUDED) */}
      <section className="space-y-12 bg-muted/10 p-4 sm:p-10 rounded-3xl border border-border">
        <h2 className="text-3xl font-black uppercase text-center text-blue-600">
          Practice Drills
        </h2>

        {/* III. PRACTICE COMPLETE */}
        <div className="space-y-6">
          <h3 className="text-xs font-black uppercase text-muted-foreground border-l-4 border-blue-600 pl-3">
            III. Practice — Complete the Sentence
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: "p1", q: "1. Yo ______ a estudiar esta noche.", a: "voy" },
              {
                id: "p2",
                q: "2. Nosotros ______ a comer fuera hoy.",
                a: "vamos",
              },
              { id: "p3", q: "3. Ella ______ a trabajar mañana.", a: "va" },
              { id: "p4", q: "4. Tú ______ a viajar este mes.", a: "vas" },
              {
                id: "p5",
                q: "5. Ellos ______ a descansar el fin de semana.",
                a: "van",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-background rounded-xl border border-border"
              >
                <span className="text-xs font-bold">{item.q}</span>
                <input
                  type="text"
                  className="w-16 bg-muted border border-border rounded px-2 py-1 text-xs outline-none focus:border-blue-600"
                  onChange={(e) => handleInputChange(item.id, e.target.value)}
                />
                <button
                  onClick={() => checkAnswer(item.id, item.a)}
                  className="text-blue-600"
                >
                  <CheckCircle2 size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* IV. PRACTICE CHOOSE */}
        <div className="space-y-6 border-t border-border pt-8">
          <h3 className="text-xs font-black uppercase text-muted-foreground border-l-4 border-blue-600 pl-3">
            IV. Practice — Choose the Correct Option
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                id: "o1",
                q: "1. Yo ___ a estudiar español.",
                opt: "a) voy b) va c) vamos",
                a: "voy",
              },
              {
                id: "o2",
                q: "2. Nosotros ___ a salir hoy.",
                opt: "a) va b) vamos c) van",
                a: "vamos",
              },
              {
                id: "o3",
                q: "3. Ella ___ a trabajar mañana.",
                opt: "a) vas b) va c) voy",
                a: "va",
              },
              {
                id: "o4",
                q: "4. ¿Tú ___ a comer aquí?",
                opt: "a) vas b) va c) voy",
                a: "vas",
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
                    className="text-blue-600"
                  >
                    <CheckCircle2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* V. PRACTICE NEGATIVE */}
        <div className="space-y-6 border-t border-border pt-8">
          <h3 className="text-xs font-black uppercase text-rose-600 border-l-4 border-rose-600 pl-3">
            V. Practice — Make It Negative
          </h3>
          <div className="space-y-4">
            {[
              {
                id: "n1",
                q: "1. Voy a trabajar hoy.",
                a: "no voy a trabajar hoy",
              },
              {
                id: "n2",
                q: "2. Vamos a salir esta noche.",
                a: "no vamos a salir esta noche",
              },
              {
                id: "n3",
                q: "3. Ella va a viajar mañana.",
                a: "ella no va a viajar mañana",
              },
            ].map((item) => (
              <div key={item.id} className="space-y-2">
                <p className="text-xs">
                  Sentence: <b>{item.q}</b>
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="flex-1 bg-background border border-border rounded-lg px-4 py-2 text-xs outline-none focus:border-rose-500"
                    placeholder="Type negative here..."
                    onChange={(e) => handleInputChange(item.id, e.target.value)}
                  />
                  <button
                    onClick={() => checkAnswer(item.id, item.a)}
                    className="bg-rose-500 text-white p-2 rounded-lg"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VI. PRACTICE TRANSLATE */}
        <div className="space-y-6 border-t border-border pt-8">
          <h3 className="text-xs font-black uppercase text-blue-600 border-l-4 border-blue-600 pl-3">
            VI. Practice — Translate
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                id: "tr1",
                en: "1. I am going to study tonight.",
                es: "voy a estudiar esta noche",
              },
              {
                id: "tr2",
                en: "2. We are going to travel this weekend.",
                es: "vamos a viajar este fin de semana",
              },
              {
                id: "tr3",
                en: "3. She is not going to work today.",
                es: "ella no va a trabajar hoy",
              },
              {
                id: "tr4",
                en: "4. Are you going to eat here?",
                es: "¿vas a comer aquí?",
              },
              {
                id: "tr5",
                en: "5. They are going to rest tomorrow.",
                es: "ellos van a descansar mañana",
              },
            ].map((item) => (
              <div key={item.id} className="space-y-2 group">
                <p className="text-[10px] font-black text-muted-foreground uppercase">
                  {item.en}
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="flex-1 bg-background border border-border rounded-xl px-4 py-2 text-xs outline-none focus:ring-1 focus:ring-blue-600"
                    onChange={(e) => handleInputChange(item.id, e.target.value)}
                  />
                  <button
                    onClick={() => checkAnswer(item.id, item.es)}
                    className="bg-blue-600 text-white p-2 rounded-xl"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VII. CONVERSATION QUESTIONS */}
      <section className="space-y-6">
        <h2 className="text-xs font-black uppercase text-orange-600 flex items-center gap-2 border-b border-orange-500/20 pb-2">
          <MessageSquare size={18} /> VII. Conversation Questions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs italic">
          {[
            "¿Qué vas a hacer hoy?",
            "¿Vas a trabajar mañana?",
            "¿Vas a estudiar español esta semana?",
            "¿Van a salir este fin de semana?",
            "¿Vas a viajar pronto?",
          ].map((q, i) => (
            <div
              key={i}
              className="p-3 bg-orange-500/5 rounded-xl border border-orange-500/10"
            >
              {q}
            </div>
          ))}
        </div>
      </section>

      {/* VIII. MINI DIALOGUE MODELS */}
      <section className="space-y-6">
        <h2 className="text-xs font-black uppercase text-blue-600 border-b border-blue-500/20 pb-2">
          VIII. Mini Dialogue Models
        </h2>
        <div className="space-y-4">
          {[
            { q: "¿Qué vas a hacer hoy?", a: "Voy a estudiar y descansar." },
            {
              q: "¿Van a salir esta noche?",
              a: "No, vamos a quedarnos en casa.",
            },
            {
              q: "¿Vas a trabajar mañana?",
              a: "Sí, voy a trabajar por la mañana.",
            },
          ].map((d, i) => (
            <div
              key={i}
              className="p-4 bg-muted/20 rounded-2xl border border-border text-sm italic"
            >
              <p className="mb-1 text-muted-foreground">Example {i + 1}:</p>
              <p className="ml-4">— {d.q}</p>
              <p className="ml-4 text-blue-600 font-bold">— {d.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IX. EXTENDED QUIZ */}
      <section className="p-8 sm:p-12 bg-slate-900 text-white rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <AlertTriangle size={80} />
        </div>
        <h2 className="text-xs font-black uppercase tracking-widest text-blue-400 mb-8 border-b border-blue-400/20 pb-4">
          IX. Extended Quiz - Create Your Own Plan
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4 text-sm opacity-80 leading-relaxed">
            <p className="font-bold text-blue-400">Assignment Details:</p>
            <p>
              Write 8–10 lines about your future activities. Your paragraph must
              include:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Futuro próximo (IR + A + infinitive)</li>
              <li>At least 3 time expressions</li>
              <li>Affirmative and negative sentences</li>
              <li>At least 2 questions</li>
            </ul>
            <p className="mt-4 text-xs italic">
              Suggested Topics: daily plans, weekend plans, study routine, work
              schedule, or travel plans.
            </p>
          </div>
          <div className="space-y-4">
            <textarea
              className="w-full h-48 bg-white/5 border border-slate-700 rounded-2xl p-4 text-sm outline-none focus:border-blue-400 transition-colors"
              placeholder="Type your 8-10 line plan here..."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default grammar_lesson_25;
