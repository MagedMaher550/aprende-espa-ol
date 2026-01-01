"use client";
import type React from "react";
import { useState, useEffect } from "react";
import {
  Thermometer,
  Activity,
  Check,
  Wind,
  Layers,
  Brain,
  Stethoscope,
  HeartPulse,
  Scale,
  Plus,
  AlertTriangle,
  Pill,
  History,
} from "lucide-react";

const grammar_lesson_24: React.FC = () => {
  const [userInputs, setUserInputs] = useState<{ [key: string]: string }>({});
  const [feedback, setFeedback] = useState<{
    [key: string]: "correct" | "incorrect" | null;
  }>({});
  const [progress, setProgress] = useState<number>(0);

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

  useEffect(() => {
    const totalPossible = 18;
    const currentCorrect = Object.values(feedback).filter(
      (v) => v === "correct"
    ).length;
    setProgress((currentCorrect / totalPossible) * 100);
  }, [feedback]);

  return (
    <div className="mx-auto w-full max-w-5xl space-y-16 sm:space-y-24 px-4 pb-40 pt-10 sm:px-6 bg-background text-foreground font-sans">
      {/* SECTION I: ADVANCED QUANTIFIERS */}
      <section className="space-y-10">
        <div className="flex flex-col sm:flex-row items-start gap-4 border-b border-orange-500/20 pb-6">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-orange-600 text-xl font-black text-white shadow-lg">
            I
          </div>
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-orange-900 dark:text-orange-50">
              Quantifiers (Intensity & Volume)
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground italic">
              Mastering the difference between modifying things (Nouns) and
              actions (Verbs).
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-widest flex items-center gap-2 text-orange-600">
              <Layers size={18} /> Adjective Agreement (Nouns)
            </h3>
            <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
              <table className="w-full min-w-[500px] text-xs text-left">
                <thead className="bg-orange-500/10 border-b border-border text-orange-800 dark:text-orange-200">
                  <tr>
                    <th className="p-4 font-bold">Meaning</th>
                    <th className="p-4 font-bold">Masc. S/P</th>
                    <th className="p-4 font-bold">Fem. S/P</th>
                    <th className="p-4 font-bold italic">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-4 font-bold">Too much</td>
                    <td className="p-4 whitespace-nowrap">Demasiado/s</td>
                    <td className="p-4 whitespace-nowrap">Demasiada/s</td>
                    <td className="p-4 opacity-60">Demasiada azúcar</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">A lot</td>
                    <td className="p-4">Mucho/s</td>
                    <td className="p-4">Mucha/s</td>
                    <td className="p-4 opacity-60">Muchas llamadas</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">Few/Little</td>
                    <td className="p-4">Poco/s</td>
                    <td className="p-4">Poca/s</td>
                    <td className="p-4 opacity-60">Pocos estudiantes</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">Enough</td>
                    <td className="p-4" colSpan={2}>
                      Bastante / Bastantes
                    </td>
                    <td className="p-4 opacity-60">Bastante gente</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-widest flex items-center gap-2 text-orange-600">
              <Wind size={18} /> Adverb Logic (Verbs)
            </h3>
            <div className="p-6 sm:p-8 rounded-2xl bg-orange-950 text-orange-50 border-l-4 border-orange-500">
              <div className="flex gap-4 items-start mb-4">
                <AlertTriangle className="text-orange-400 shrink-0" size={24} />
                <p className="text-xs leading-relaxed">
                  Adverbs do{" "}
                  <span className="text-orange-400 font-bold uppercase underline">
                    not change
                  </span>{" "}
                  for gender or number. They always end in{" "}
                  <span className="text-white font-bold">-o</span> (or -e for
                  bastante).
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { es: "Trabaja demasiado.", en: "She works too much." },
                  { es: "Coméis poco.", en: "You all eat little." },
                  { es: "Leemos bastante.", en: "We read quite a bit." },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-3 rounded bg-white/5 text-[10px] sm:text-xs"
                  >
                    <span className="font-mono text-orange-200">{item.es}</span>
                    <span className="opacity-40 italic">{item.en}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION II: THE VERB DOLER */}
      <section className="space-y-10">
        <div className="flex flex-col sm:flex-row items-start gap-4 border-b border-rose-500/20 pb-6">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-rose-600 text-xl font-black text-white shadow-lg">
            II
          </div>
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-rose-900 dark:text-rose-50">
              The Verb Doler (Pain Analysis)
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground italic">
              Think of it as "The body part causes pain to me."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl border border-rose-200 bg-rose-50 dark:bg-rose-950/20 md:col-span-1">
            <h3 className="text-[10px] font-black uppercase text-rose-600 mb-4">
              Agreement Rule
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-white dark:bg-black/40 rounded-xl border border-rose-100 shadow-sm">
                <p className="text-lg font-black text-rose-600">DUELE</p>
                <p className="text-[10px] opacity-60">Singular Noun</p>
              </div>
              <div className="p-3 bg-white dark:bg-black/40 rounded-xl border border-rose-100 shadow-sm">
                <p className="text-lg font-black text-rose-600">DUELEN</p>
                <p className="text-[10px] opacity-60">Plural Noun</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { id: "d1", q: "My back hurts.", a: "me duele la espalda" },
                { id: "d2", q: "Your eyes hurt.", a: "te duelen los ojos" },
                {
                  id: "d3",
                  q: "Juan's teeth hurt.",
                  a: "a juan le duelen los dientes",
                },
                {
                  id: "d4",
                  q: "Our knees hurt.",
                  a: "nos duelen las rodillas",
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl border border-border bg-card/40"
                >
                  <p className="text-[10px] font-bold mb-2 opacity-50">
                    {item.q}
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="flex-1 bg-transparent border-b border-rose-500/40 text-xs py-1 outline-none"
                      placeholder="Escribe en español..."
                      onChange={(e) =>
                        handleInputChange(item.id, e.target.value)
                      }
                    />
                    <button
                      onClick={() => checkAnswer(item.id, item.a)}
                      className="text-rose-600 shrink-0"
                    >
                      <Check size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION III: MEDICAL SYNDROMES */}
      <section className="space-y-10">
        <div className="flex flex-col sm:flex-row items-start gap-4 border-b border-emerald-500/20 pb-6">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-xl font-black text-white shadow-lg">
            III
          </div>
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-emerald-900 dark:text-emerald-50">
              Clinical Expressions: Estar vs. Tener
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Estar Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 p-3 bg-emerald-500 text-white rounded-t-2xl font-black uppercase text-xs">
              <Activity size={16} /> ESTAR + Adjetivo (States)
            </div>
            <div className="p-6 rounded-b-2xl border-x border-b border-emerald-100 bg-emerald-50/30 dark:bg-emerald-950/10 space-y-3">
              <p className="text-[10px] leading-relaxed italic text-emerald-800 dark:text-emerald-200">
                Used for temporary physical feelings. Adjectives must match the
                gender of the speaker.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Mareado/a",
                  "Cansado/a",
                  "Resfriado/a",
                  "Enfermo/a",
                  "Nervioso/a",
                  "Mejor",
                ].map((s) => (
                  <div
                    key={s}
                    className="p-2 text-center border border-emerald-200 rounded-lg text-[10px] font-bold bg-background"
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tener Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 p-3 bg-cyan-600 text-white rounded-t-2xl font-black uppercase text-xs">
              <Thermometer size={16} /> TENER + Sustantivo (Symptoms)
            </div>
            <div className="p-6 rounded-b-2xl border-x border-b border-cyan-100 bg-cyan-50/30 dark:bg-cyan-950/10 space-y-3">
              <p className="text-[10px] leading-relaxed italic text-cyan-800 dark:text-cyan-200">
                Used for specific medical conditions or "possessing" a symptom.
                Nouns do not change.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {["Gripe", "Fiebre", "Tos", "Jaqueca", "Dolor", "Alergia"].map(
                  (s) => (
                    <div
                      key={s}
                      className="p-2 text-center border border-cyan-200 rounded-lg text-[10px] font-bold bg-background"
                    >
                      {s}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Case Study Quiz */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-slate-100 space-y-10 relative overflow-hidden border border-slate-700 overflow-x-auto">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <HeartPulse size={120} />
          </div>

          <div className="space-y-2 relative overflow-x-auto">
            <h3 className="text-emerald-400 font-black uppercase text-xs tracking-[0.3em]">
              Caso Clínico #104
            </h3>
            <p className="text-xl sm:text-2xl font-light">
              Translate the patient's symptoms into Spanish.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 relative">
            {[
              {
                id: "c1",
                en: "I have a cough and I am very tired.",
                es: "tengo tos y estoy muy cansado",
              },
              {
                id: "c2",
                en: "She has the flu and her throat hurts.",
                es: "ella tiene gripe y le duele la garganta",
              },
              {
                id: "c3",
                en: "We are dizzy and our eyes hurt.",
                es: "estamos mareados y nos duelen los ojos",
              },
              {
                id: "c4",
                en: "I have a fever and too much stress.",
                es: "tengo fiebre y demasiado estrés",
              },
            ].map((item) => (
              <div key={item.id} className="space-y-3 group">
                <p className="text-[10px] font-black uppercase text-slate-500 group-hover:text-emerald-400 transition-colors">
                  {item.en}
                </p>
                <div className="flex gap-3">
                  <input
                    type="text"
                    className="flex-1 bg-white/5 border border-slate-700 rounded-xl px-4 py-3 text-xs outline-none focus:border-emerald-500 focus:bg-white/10 transition-all"
                    placeholder="Respuesta..."
                    onChange={(e) => handleInputChange(item.id, e.target.value)}
                  />
                  <button
                    onClick={() => checkAnswer(item.id, item.es)}
                    className="bg-emerald-600 hover:bg-emerald-500 p-3 rounded-xl transition-colors"
                  >
                    <Check size={18} />
                  </button>
                </div>
                {feedback[item.id] && (
                  <p
                    className={`text-[9px] font-black uppercase tracking-widest ${
                      feedback[item.id] === "correct"
                        ? "text-emerald-400"
                        : "text-rose-400"
                    }`}
                  >
                    {feedback[item.id] === "correct"
                      ? "Success // Correcto"
                      : "Error // Try Again"}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MASTER RECAP */}
      <footer className="pt-20 border-t border-border">
        <div className="flex flex-col items-center gap-10">
          <div className="flex items-center gap-4 text-[10px] font-black uppercase text-muted-foreground">
            <Scale size={16} /> Progress Tracker
          </div>
          <div className="w-full max-w-md h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500 transition-all duration-1000"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
            {[
              "Agreement Required (Adj)",
              "Invariable Form (Adv)",
              "Duele (Singular)",
              "Duelen (Plural)",
            ].map((tag) => (
              <div
                key={tag}
                className="p-4 border border-border rounded-2xl text-[9px] font-black uppercase text-center opacity-50 group hover:opacity-100 hover:border-orange-500 transition-all"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default grammar_lesson_24;
