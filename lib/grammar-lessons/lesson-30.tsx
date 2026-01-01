"use client";
import type React from "react";
import { useState } from "react";
import {
  CheckCircle2,
  Zap,
  BookOpen,
  Info,
  AlertTriangle,
  MessageSquare,
  ListChecks,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

const grammar_lesson_30 = () => {
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
      {/* 1. PURPOSE */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
          <MessageSquare className="text-indigo-500" /> 1. Usage of the
          Imperative
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Orders", desc: "¡Cierra la puerta!" },
            { title: "Advice", desc: "Bebe más agua." },
            { title: "Permission", desc: "Pasa, por favor." },
            { title: "Instructions", desc: "Dobla a la derecha." },
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 shadow-sm"
            >
              <p className="text-xs font-black uppercase text-indigo-600 mb-1">
                {item.title}
              </p>
              <p className="text-sm italic opacity-80">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. REGULAR VERBS - CARD SYSTEM */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
          <ListChecks className="text-emerald-500" /> 2. Regular Verb Endings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { subject: "Tú", ar: "a", er: "e", ir: "e" },
            { subject: "Vosotros", ar: "ad", er: "ed", ir: "id" },
            { subject: "Usted", ar: "e", er: "a", ir: "a" },
            { subject: "Ustedes", ar: "en", er: "an", ir: "an" },
          ].map((item) => (
            <div
              key={item.subject}
              className="p-5 rounded-2xl border border-border bg-card shadow-sm hover:border-emerald-500/50 transition-colors"
            >
              <h3 className="text-lg font-bold text-emerald-600 mb-3">
                {item.subject}
              </h3>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex justify-between border-b border-border/50 pb-1">
                  <span className="opacity-60">-AR</span>
                  <span className="font-bold">-{item.ar}</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-1">
                  <span className="opacity-60">-ER</span>
                  <span className="font-bold">-{item.er}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-60">-IR</span>
                  <span className="font-bold">-{item.ir}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {["¡Habla!", "¡Más alto!", "Bebe agua", "Vive en tu ciudad"].map(
            (ex) => (
              <span
                key={ex}
                className="px-3 py-1 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold border border-emerald-500/20 italic"
              >
                {ex}
              </span>
            )
          )}
        </div>
      </section>

      {/* 3. STEM CHANGING */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
          <RefreshCw className="text-amber-500" /> 3. Stem-Changing Verbs
        </h2>
        <div className="p-4 bg-amber-500/10 text-amber-800 dark:text-amber-200 rounded-xl text-sm italic">
          <strong>Rule:</strong> Stem changes apply to all except{" "}
          <u>vosotros</u>.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              v: "entender",
              change: "e → ie",
              f: ["entiende", "entended", "entienda", "entiendan"],
            },
            {
              v: "dormir",
              change: "o → ue",
              f: ["duerme", "dormid", "duerma", "duerman"],
            },
            {
              v: "perder",
              change: "e → i",
              f: ["pirde", "perded", "pirda", "pirdan"],
            },
            {
              v: "jugar",
              change: "u → ue",
              f: ["juega", "jugad", "juegue", "jueguen"],
            },
          ].map((item) => (
            <div
              key={item.v}
              className="p-4 rounded-2xl border border-border bg-card"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black px-2 py-0.5 bg-amber-500 text-white rounded-md">
                  {item.change}
                </span>
                <span className="font-bold uppercase tracking-tighter">
                  {item.v}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs italic opacity-80">
                {item.f.map((f) => (
                  <p key={f}>• {f}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SPELLING CHANGES */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
          <Zap className="text-rose-500" /> 4. Spelling-Change Verbs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { rule: "-CAR → -QU", verb: "sacar", forms: ["saque", "saquen"] },
            { rule: "-GAR → -GU", verb: "pagar", forms: ["pague", "paguen"] },
            { rule: "-ZAR → -C", verb: "cruzar", forms: ["cruce", "crucen"] },
          ].map((item) => (
            <div
              key={item.verb}
              className="p-4 rounded-xl border border-border bg-rose-500/[0.03] text-center"
            >
              <p className="text-[10px] font-black text-rose-500 mb-2">
                {item.rule}
              </p>
              <p className="font-bold text-lg mb-1">{item.verb}</p>
              <div className="flex justify-center gap-2 text-sm italic opacity-70">
                <span>{item.forms[0]}</span> | <span>{item.forms[1]}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FULLY IRREGULAR - GRID CARDS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
          <AlertTriangle className="text-orange-500" /> 5. Irregular Imperative
          Verbs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[
            { v: "salir", f: ["sal", "salid", "salga", "salgan"] },
            { v: "tener", f: ["ten", "tened", "tenga", "tengan"] },
            { v: "poner", f: ["pon", "poned", "ponga", "pongan"] },
            { v: "decir", f: ["di", "decid", "diga", "digan"] },
            { v: "traer", f: ["trae", "traed", "traiga", "traigan"] },
            { v: "hacer", f: ["haz", "haced", "haga", "hagan"] },
            { v: "oír", f: ["oye", "oíd", "oiga", "oigan"] },
            { v: "venir", f: ["ven", "venid", "venga", "vengan"] },
            { v: "ver", f: ["ve", "ved", "vea", "vean"] },
            { v: "ir", f: ["ve", "id", "vaya", "vayan"] },
            { v: "ser", f: ["sé", "sed", "sea", "sean"] },
            { v: "saber", f: ["sabe", "sabed", "sepa", "sepan"] },
          ].map((item) => (
            <div
              key={item.v}
              className="p-4 rounded-xl border border-border bg-card hover:shadow-md transition-shadow"
            >
              <p className="font-black text-xs text-orange-600 uppercase mb-3 border-b pb-1">
                {item.v}
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                <div className="flex justify-between italic">
                  <span className="opacity-50">Tú</span>{" "}
                  <span className="font-bold text-indigo-600">{item.f[0]}</span>
                </div>
                <div className="flex justify-between italic">
                  <span className="opacity-50">Vos</span>{" "}
                  <span>{item.f[1]}</span>
                </div>
                <div className="flex justify-between italic">
                  <span className="opacity-50">Ud</span>{" "}
                  <span>{item.f[2]}</span>
                </div>
                <div className="flex justify-between italic">
                  <span className="opacity-50">Uds</span>{" "}
                  <span>{item.f[3]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6 & 7. SPECIAL ENDINGS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-3xl border border-border bg-sky-500/[0.05] space-y-4">
          <h3 className="font-bold text-lg flex items-center gap-2 text-sky-700 dark:text-sky-400">
            <Info size={18} /> 6. -ZCA Changes (obedecer)
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm italic font-medium">
            <p>• obedece</p>
            <p>• obedeced</p>
            <p>• obedezca</p>
            <p>• obedezcan</p>
          </div>
          <p className="text-xs opacity-70 italic border-t pt-2">
            "Obedece a tus padres"
          </p>
        </div>

        <div className="p-6 rounded-3xl border border-border bg-violet-500/[0.05] space-y-4">
          <h3 className="font-bold text-lg flex items-center gap-2 text-violet-700 dark:text-violet-400">
            <Info size={18} /> 7. -GIR / -UIR Verbs
          </h3>
          <div className="flex justify-between gap-4">
            <div className="space-y-1 text-xs">
              <p className="font-black uppercase text-[10px] mb-1">Elegir</p>
              <p>
                Tú: <b>Elige</b>
              </p>
              <p>
                Vos: <b>Elegid</b>
              </p>
              <p>
                Ud: <b>Elija</b>
              </p>
              <p>
                Uds: <b>Elijan</b>
              </p>
            </div>
            <div className="space-y-1 text-xs">
              <p className="font-black uppercase text-[10px] mb-1">Influir</p>
              <p>
                Tú: <b>influye</b>
              </p>
              <p>
                Vos: <b>influid</b>
              </p>
              <p>
                Ud: <b>influya</b>
              </p>
              <p>
                Uds: <b>influyan</b>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8 & 9. REFLEXIVE & ACCENTS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2 border-b pb-2">
          <BookOpen className="text-indigo-500" /> 8 & 9. Reflexive Pronouns &
          Accents
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              v: "levantarse",
              f: ["levántate", "levantaos", "levántese", "levántense"],
            },
            {
              v: "acostarse",
              f: ["acuéstate", "acostaos", "acuéstese", "acuéstense"],
            },
            {
              v: "divertirse",
              f: ["diviértete", "divertíos", "diviértase", "diviértanse"],
            },
          ].map((item) => (
            <div
              key={item.v}
              className="p-5 rounded-2xl border border-border bg-card"
            >
              <p className="font-black text-indigo-500 mb-3 text-center border-b pb-2">
                {item.v}
              </p>
              <div className="space-y-2 text-sm italic text-center">
                {item.f.map((f) => (
                  <p key={f}>{f}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 bg-rose-500/10 border-l-4 border-rose-500 rounded-r-xl text-xs flex gap-3 items-start">
          <AlertTriangle className="text-rose-500 shrink-0" size={16} />
          <p>
            <strong>Accent Rule:</strong> When pronouns are attached, an accent
            is added or kept to preserve the original stress.
          </p>
        </div>
      </section>

      {/* INTERACTIVE DRILLS */}
      <section className="space-y-8 pt-8 border-t border-border">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black">Interactive Drills</h2>
          <p className="text-sm opacity-60 italic">
            Apply the rules to the prompts below
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { id: "d1", q: "Tú / Hablar (Speak!)", a: "habla" },
            { id: "d2", q: "Ustedes / Comer (Eat!)", a: "coman" },
            { id: "d3", q: "Tú / Poner (Put/Place!)", a: "pon" },
            { id: "d4", q: "Tú / Levantarse (Get up!)", a: "levántate" },
            { id: "d5", q: "Ud / Salir (Leave!)", a: "salga" },
            { id: "d6", q: "Tú / Venir (Come!)", a: "ven" },
          ].map((item) => (
            <div
              key={item.id}
              className="p-4 bg-card rounded-2xl border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <span className="text-sm font-semibold flex items-center gap-2">
                <ArrowRight size={14} className="text-indigo-500" />
                {item.q}
              </span>
              <div className="flex gap-2">
                <input
                  type="text"
                  className={`flex-1 sm:w-36 bg-muted border-none rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 transition-all ${
                    feedback[item.id] === "correct"
                      ? "ring-emerald-500"
                      : feedback[item.id] === "incorrect"
                      ? "ring-rose-500"
                      : "ring-indigo-500"
                  }`}
                  placeholder="Answer..."
                  onChange={(e) => handleInputChange(item.id, e.target.value)}
                />
                <button
                  onClick={() => checkAnswer(item.id, item.a)}
                  className="p-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors shadow-sm"
                >
                  <CheckCircle2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL SUMMARY */}
      <footer className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-10">
        <div className="p-8 bg-indigo-600 text-white rounded-[2rem] shadow-xl space-y-4">
          <h3 className="text-xs font-black uppercase tracking-widest opacity-70 flex items-center gap-2">
            <BookOpen size={16} /> Homework Assignment
          </h3>
          <p className="text-xl font-medium italic leading-relaxed">
            "Escribe diez consejos para una vida sana"
          </p>
          <p className="text-sm opacity-80">
            (Write ten pieces of advice for a healthy life)
          </p>
        </div>

        <div className="p-8 bg-card border border-border rounded-[2rem] shadow-sm flex flex-col justify-center">
          <h3 className="text-xs font-black uppercase tracking-widest mb-4 text-muted-foreground">
            Lesson Overview
          </h3>
          <div className="grid grid-cols-2 gap-2 text-[11px] opacity-80">
            <span>• Regular Endings</span>
            <span>• Stem Changes</span>
            <span>• Orthographic shifts</span>
            <span>• Fully Irregulars</span>
            <span>• Reflexive Attachment</span>
            <span>• Accent Rules</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default grammar_lesson_30;