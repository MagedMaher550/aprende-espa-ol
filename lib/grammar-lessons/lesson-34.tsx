"use client";
import type React from "react";
import { useState } from "react";
import {
  Hash,
  CheckCircle2,
  AlertTriangle,
  Zap,
  ShieldCheck,
  Repeat,
  Layers,
  Info,
  ArrowRight,
  HelpCircle,
  Globe,
  ExternalLink,
} from "lucide-react";

const grammar_lesson_34: React.FC = () => {
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
      
      {/* HEADER SECTION */}
      <section className="text-center space-y-4">
        <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 text-[10px] font-black uppercase tracking-widest mb-2">
          Advanced Grammar
        </div>
        <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-indigo-600 uppercase">
          Lesson 34: Large Numbers
        </h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
          Moving beyond 100 requires understanding gender agreement and the Spanish numerical hierarchy.
        </p>
      </section>

      {/* I. THE HUNDREDS - ELABORATED */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b-2 border-indigo-600 pb-2">
          <Hash className="text-indigo-600 shrink-0" />
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter">I. Hundreds (200–900)</h2>
        </div>
        
        <p className="text-sm leading-relaxed text-muted-foreground">
          Unlike "one hundred" (<em>cien</em>), all hundreds from 200 to 900 have both a <b>masculine</b> and <b>feminine</b> form. They function exactly like adjectives.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { n: "200", m: "doscientos", f: "doscientas" },
            { n: "300", m: "trescientos", f: "trescientas" },
            { n: "400", m: "cuatrocientos", f: "cuatrocientas" },
            { n: "500", m: "quinientos", f: "quinientas", irr: true },
            { n: "600", m: "seiscientos", f: "seiscientas" },
            { n: "700", m: "setecientos", f: "setecientas", irr: true },
            { n: "800", m: "ochocientos", f: "ochocientas" },
            { n: "900", m: "novecientos", f: "novecientas", irr: true }
          ].map((item) => (
            <div key={item.n} className={`p-4 rounded-2xl border transition-all ${item.irr ? 'bg-amber-500/5 border-amber-500/30' : 'bg-muted/30 border-border'}`}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-black text-indigo-600">{item.n}</span>
                {item.irr && <span className="text-[8px] font-bold text-amber-600 uppercase">Irregular Stem</span>}
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold">{item.m}</p>
                <p className="text-xs font-medium text-rose-500/80">{item.f}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* II. AGREEMENT LOGIC - ELABORATED */}
      <section className="bg-indigo-50 dark:bg-indigo-950/20 p-6 md:p-8 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 space-y-6">
        <h3 className="text-lg font-black uppercase text-indigo-700 flex items-center gap-2">
          <Layers size={20} /> How Agreement Works
        </h3>
        <p className="text-sm opacity-90 leading-relaxed">
          Just as <b>"comido"</b> (eaten) stays fixed in the Pretérito Perfecto but changes to <b>"comida"</b> when describing a pizza, numbers change based on the <b>gender of the noun</b> they follow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="text-[10px] font-black uppercase text-indigo-600 tracking-widest">Masculine Nouns</h4>
            <div className="bg-background p-4 rounded-xl border border-border space-y-2">
              <p className="text-sm"><b>Doscientos</b> euros <span className="text-[10px] opacity-50 ml-2">(Euro = Masc)</span></p>
              <p className="text-sm"><b>Quinientos</b> coches <span className="text-[10px] opacity-50 ml-2">(Coche = Masc)</span></p>
              <p className="text-sm"><b>Novecientos</b> aviones <span className="text-[10px] opacity-50 ml-2">(Avión = Masc)</span></p>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-[10px] font-black uppercase text-rose-600 tracking-widest">Feminine Nouns</h4>
            <div className="bg-background p-4 rounded-xl border border-border space-y-2">
              <p className="text-sm text-rose-600 font-medium"><b>Doscientas</b> personas <span className="text-[10px] opacity-50 ml-2">(Persona = Fem)</span></p>
              <p className="text-sm text-rose-600 font-medium"><b>Setecientas</b> páginas <span className="text-[10px] opacity-50 ml-2">(Página = Fem)</span></p>
              <p className="text-sm text-rose-600 font-medium"><b>Novecientas</b> casas <span className="text-[10px] opacity-50 ml-2">(Casa = Fem)</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* III. THE "MIL" RULE - ELABORATED */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b-2 border-emerald-600 pb-2">
          <ShieldCheck className="text-emerald-600 shrink-0" />
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter">II. The Thousands (Mil)</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <p className="text-sm leading-relaxed">
              The word <b>mil</b> is much simpler than the hundreds, but it has two rigid rules you must never break:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-muted/30 rounded-xl border border-border border-l-4 border-l-emerald-500">
                <span className="text-[10px] font-black uppercase text-emerald-600">Rule 1: No "Un"</span>
                <p className="text-xs mt-1">Never say "un mil." Just say <b>mil</b>.</p>
              </div>
              <div className="p-4 bg-muted/30 rounded-xl border border-border border-l-4 border-l-emerald-500">
                <span className="text-[10px] font-black uppercase text-emerald-600">Rule 2: No Plural</span>
                <p className="text-xs mt-1">2,000 is <b>dos mil</b>, never "dos miles."</p>
              </div>
            </div>
          </div>
          <div className="bg-emerald-600 text-white p-6 rounded-3xl flex flex-col justify-center shadow-lg">
            <p className="text-[10px] font-black uppercase opacity-80 mb-2">Example Structure</p>
            <p className="text-2xl font-black">12,400</p>
            <p className="text-sm font-medium mt-1">Doce mil cuatrocientos</p>
          </div>
        </div>
      </section>

      {/* IV. THE LONG SCALE - MILLIONS & BILLIONS */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b-2 border-blue-600 pb-2">
          <Info className="text-blue-600 shrink-0" />
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter">III. Millions & Billions</h2>
        </div>
        
        <div className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-200 dark:border-blue-900/50 space-y-6">
          <p className="text-sm leading-relaxed">
            Spanish uses the <b>Long Scale</b>. This means "Billion" does not mean what you think it means in English.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-background p-4 rounded-xl border border-border shadow-sm">
              <span className="text-[10px] font-black text-blue-600">1,000,000</span>
              <p className="text-sm font-bold">Un millón</p>
              <p className="text-[10px] opacity-60 italic mt-1">(Add "de" before nouns: un millón de personas)</p>
            </div>
            <div className="bg-background p-4 rounded-xl border border-border border-t-4 border-t-amber-500 shadow-sm">
              <span className="text-[10px] font-black text-amber-600 italic">English Billion (1,000,000,000)</span>
              <p className="text-sm font-bold">Mil millones</p>
              <p className="text-[10px] opacity-60 italic mt-1">(Literally: "A thousand millions")</p>
            </div>
            <div className="bg-background p-4 rounded-xl border border-border border-t-4 border-t-rose-600 shadow-sm">
              <span className="text-[10px] font-black text-rose-600 italic">English Trillion (1,000,000,000,000)</span>
              <p className="text-sm font-bold underline">Un billón</p>
              <p className="text-[10px] opacity-60 italic mt-1">(Only used for a million millions!)</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: GIANT NUMBER BREAKDOWN */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b-2 border-slate-600 pb-2">
          <Globe className="text-slate-600 shrink-0" />
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter">IV. Giant Number Breakdown</h2>
        </div>
        <div className="space-y-6">
          {[
            { 
              n: "223,356,345,123,578", 
              t: "doscientos veintitrés billones trescientos cincuenta y seis mil trescientos cuarenta y cinco millones ciento veintitrés mil quinientos setenta y ocho",
              parts: ["223 Billones", "356,345 Millones", "123,578"]
            },
            { 
              n: "555,912,700,432,199", 
              t: "quinientos cincuenta y cinco billones novecientos doce mil setecientos millones cuatrocientos treinta y dos mil ciento noventa y nueve",
              parts: ["555 Billones", "912,700 Millones", "432,199"]
            },
            { 
              n: "888,777,666,555,444", 
              t: "ochocientos ochenta y ocho billones setecientos setenta y siete mil seiscientos sesenta y seis millones quinientos cincuenta y cinco mil cuatrocientos cuarenta y cuatro",
              parts: ["888 Billones", "777,666 Millones", "555,444"]
            },
            { 
              n: "112,450,900,100,750", 
              t: "ciento doce billones cuatrocientos cincuenta mil novecientos millones cien mil setecientos cincuenta",
              parts: ["112 Billones", "450,900 Millones", "100,750"]
            },
            { 
              n: "999,999,999,999,999", 
              t: "novecientos noventa y nueve billones novecientos noventa y nueve mil novecientos noventa y nueve millones novecientos noventa y nueve mil novecientos noventa y nueve",
              parts: ["999 Billones", "999,999 Millones", "999,999"]
            }
          ].map((ex, i) => (
            <div key={i} className="group p-6 bg-slate-50 dark:bg-slate-900/40 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-indigo-400 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                <span className="text-lg md:text-2xl font-black font-mono text-indigo-600 tracking-tight">{ex.n}</span>
                <div className="flex gap-2">
                  {ex.parts.map((p, idx) => (
                    <span key={idx} className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-[9px] font-bold rounded uppercase">{p}</span>
                  ))}
                </div>
              </div>
              <p className="text-xs md:text-sm font-medium leading-relaxed first-letter:uppercase text-slate-700 dark:text-slate-300">
                {ex.t}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* V. INTERACTIVE LAB */}
      <section className="space-y-8 bg-muted/10 p-5 md:p-10 rounded-3xl border border-border">
        <h2 className="text-2xl md:text-3xl font-black uppercase text-center text-indigo-600">Interactive Lab</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-[10px] font-black uppercase text-muted-foreground border-l-4 border-indigo-600 pl-3">
              Drill I: Agreement & Irregulars
            </h3>
            <div className="space-y-3">
              {[
                { id: "n1", q: "500 (páginas)", a: "quinientas" },
                { id: "n2", q: "700 (hombres)", a: "setecientos" },
                { id: "n3", q: "900 (mujeres)", a: "novecientas" },
              ].map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-background rounded-xl border border-border gap-3">
                  <span className="text-xs font-bold">{item.q}</span>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className={`flex-1 sm:w-32 bg-muted border rounded px-2 py-1 text-xs outline-none ${feedback[item.id] === 'correct' ? 'border-emerald-500 bg-emerald-500/5' : feedback[item.id] === 'incorrect' ? 'border-rose-500 bg-rose-500/5' : 'border-border'}`}
                      onChange={(e) => handleInputChange(item.id, e.target.value)}
                    />
                    <button onClick={() => checkAnswer(item.id, item.a)} className="text-indigo-600">
                      <CheckCircle2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-[10px] font-black uppercase text-muted-foreground border-l-4 border-emerald-600 pl-3">
              Drill II: Large Numbers
            </h3>
            <div className="space-y-3">
              {[
                { id: "m1", q: "1,000 (personas)", a: "mil" },
                { id: "m2", q: "2,000 (coches)", a: "dos mil" },
                { id: "m3", q: "1,000,000,000 (US Billion)", a: "mil millones" },
              ].map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-background rounded-xl border border-border gap-3">
                  <span className="text-xs font-bold">{item.q}</span>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="flex-1 sm:w-40 bg-muted border border-border rounded px-2 py-1 text-xs outline-none"
                      onChange={(e) => handleInputChange(item.id, e.target.value)}
                    />
                    <button onClick={() => checkAnswer(item.id, item.a)} className="text-indigo-600">
                      <CheckCircle2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VI. THE WRITING CHALLENGE */}
      <section className="p-6 md:p-12 bg-indigo-950 text-white rounded-3xl border border-indigo-800 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <HelpCircle size={120} />
        </div>
        <h2 className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-6 border-b border-indigo-400/20 pb-4">
          X. Writing Practice
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          <div className="space-y-4 text-[11px] opacity-80 leading-relaxed">
            <p className="font-bold text-indigo-400 uppercase tracking-tighter">Your Challenge:</p>
            <p>Write out these massive numbers in full Spanish text. Remember the reading order: <b>Millions → Thousands → Hundreds → Tens</b>.</p>
            <ul className="space-y-2">
              <li className="p-2 bg-white/5 rounded border border-white/10">1. <b>712,544,362,111</b></li>
              <li className="p-2 bg-white/5 rounded border border-white/10">2. <b>964,696,423,009</b></li>
            </ul>
          </div>
          <div className="space-y-3">
            <textarea
              className="w-full h-32 md:h-40 bg-white/5 border border-indigo-700 rounded-2xl p-4 text-xs outline-none focus:border-indigo-400 transition-colors placeholder:opacity-30"
              placeholder="712,544,362,111 → Setecientos doce mil millones..."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default grammar_lesson_34;