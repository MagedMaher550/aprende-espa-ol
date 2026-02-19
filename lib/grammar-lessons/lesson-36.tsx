"use client";
import type React from "react";
import { useState } from "react";
import {
  Plus,
  ArrowRightLeft,
  Zap,
  HelpCircle,
  Layers,
  CheckCircle2,
  Info,
  ListOrdered,
  Scale,
  LogOut,
  MessageSquare,
  AlertCircle,
  Lightbulb
} from "lucide-react";

const grammar_lesson_36: React.FC = () => {
  const [userInputs, setUserInputs] = useState<{ [key: string]: string }>({});
  const [feedback, setFeedback] = useState<{ [key: string]: boolean | null }>({});

  const handleInputChange = (id: string, val: string) => {
    setUserInputs((prev) => ({ ...prev, [id]: val.toLowerCase().trim() }));
  };

  const checkAnswer = (id: string, correct: string) => {
    setFeedback((prev) => ({
      ...prev,
      [id]: userInputs[id] === correct.toLowerCase().trim(),
    }));
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-8 sm:py-12 bg-background text-foreground space-y-16 sm:space-y-28 antialiased font-sans overflow-x-hidden">

      {/* 1. CORE CONNECTORS GRID: ADDITION, CONTRAST, CONSEQUENCE */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b-2 border-indigo-500 pb-2 w-fit">
          <Layers size={24} className="text-indigo-500" />
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter">I. The Foundation: Core Connections</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Part 1: Addition */}
          <div className="bg-muted/10 border border-border rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-blue-500">
              <Plus size={20} />
              <span className="text-xs font-black uppercase tracking-widest">Addition</span>
            </div>
            <div className="space-y-3">
              {[
                { s: "También", e: "Also", note: "Standard" },
                { s: "Además", e: "In addition", note: "Extra weight" },
                { s: "Asimismo", e: "Likewise", note: "Formal" }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-2 bg-background rounded-lg border border-border/50">
                  <span className="font-bold text-sm">{item.s}</span>
                  <span className="text-[10px] opacity-50 uppercase font-mono">{item.e}</span>
                </div>
              ))}
            </div>
            <p className="text-xs italic text-muted-foreground pt-2">"Es barato y <b>además</b> es bueno."</p>
          </div>

          {/* Part 2: Contrast */}
          <div className="bg-muted/10 border border-border rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-rose-500">
              <ArrowRightLeft size={20} />
              <span className="text-xs font-black uppercase tracking-widest">Contrast</span>
            </div>
            <div className="space-y-3">
              {[
                { s: "Pero", e: "But", note: "Informal" },
                { s: "Aunque", e: "Although", note: "Neutral" },
                { s: "Sin embargo", e: "However", note: "Formal" }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-2 bg-background rounded-lg border border-border/50">
                  <span className="font-bold text-sm">{item.s}</span>
                  <span className="text-[10px] opacity-50 uppercase font-mono">{item.e}</span>
                </div>
              ))}
            </div>
            <p className="text-xs italic text-muted-foreground pt-2">"Quiero salir, <b>pero</b> trabajo."</p>
          </div>

          {/* Part 3: Consequence */}
          <div className="bg-muted/10 border border-border rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-amber-500">
              <Zap size={20} />
              <span className="text-xs font-black uppercase tracking-widest">Consequence</span>
            </div>
            <div className="space-y-3">
              {[
                { s: "Así que", e: "So", note: "Spoken" },
                { s: "Por tanto", e: "Therefore", note: "Formal" },
                { s: "Por esta razón", e: "Reason", note: "Clear" }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-2 bg-background rounded-lg border border-border/50">
                  <span className="font-bold text-sm">{item.s}</span>
                  <span className="text-[10px] opacity-50 uppercase font-mono">{item.e}</span>
                </div>
              ))}
            </div>
            <p className="text-xs italic text-muted-foreground pt-2">"No tengo dinero, <b>así que</b> no salgo."</p>
          </div>
        </div>
      </section>

      {/* 2. ADVANCED STRUCTURES: CLARIFYING & ORDERING */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        {/* Clarifying Box */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <AlertCircle size={20} className="text-emerald-500" />
            <h2 className="text-lg font-black uppercase tracking-tight">II. Clarifying & Rephrasing</h2>
          </div>
          <div className="p-6 border-2 border-emerald-500/20 bg-emerald-500/5 rounded-3xl space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">Use these to explain an idea again in a simpler way.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-background border rounded-xl shadow-sm">
                <p className="text-lg font-black text-emerald-600">Es decir</p>
                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">"That is to say"</p>
              </div>
              <div className="p-4 bg-background border rounded-xl shadow-sm">
                <p className="text-lg font-black text-emerald-600">O sea</p>
                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">"In other words"</p>
              </div>
            </div>
            <div className="p-4 bg-white/50 rounded-lg border border-dashed border-emerald-300">
              <p className="text-xs font-medium italic">"No trabaja, <b>es decir</b>, no tiene empleo."</p>
            </div>
          </div>
        </div>

        {/* Ordering Box */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <ListOrdered size={20} className="text-indigo-500" />
            <h2 className="text-lg font-black uppercase tracking-tight">III. Ordering Ideas</h2>
          </div>
          <div className="p-6 border-2 border-indigo-500/20 bg-indigo-500/5 rounded-3xl space-y-4">
            <ul className="space-y-3">
              {[
                { s: "En primer lugar", e: "First" },
                { s: "En segundo lugar", e: "Second" },
                { s: "Por un lado... por otro lado...", e: "On one hand... on the other..." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-center">
                  <span className="h-6 w-6 rounded-full bg-indigo-500 text-white text-[10px] flex items-center justify-center font-bold">{i + 1}</span>
                  <div>
                    <p className="font-bold text-sm">{item.s}</p>
                    <p className="text-[10px] text-muted-foreground uppercase">{item.e}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-xs p-3 bg-indigo-100/50 rounded-lg italic">"<b>Por un lado</b> es barato; <b>por otro lado</b> es pequeño."</p>
          </div>
        </div>
      </section>

      {/* 3. COMPARISON & CONCLUDING (MATRIX STYLE) */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <Scale size={20} className="text-purple-500" />
          <h2 className="text-lg font-black uppercase tracking-tight">IV. Comparison & Finalization</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Comparison */}
          <div className="group p-5 border rounded-2xl hover:bg-muted/5 transition-colors relative overflow-hidden">
            <div className="absolute right-0 top-0 p-2 opacity-10"><Scale size={60} /></div>
            <h3 className="text-xs font-black uppercase text-purple-500 mb-4 tracking-widest">Comparison Signals</h3>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                <code className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-bold">Tanto... como...</code>
                <span className="text-xs text-muted-foreground">Both... and...</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                <code className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-bold">En cambio</code>
                <span className="text-xs text-muted-foreground">Instead / In contrast</span>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="group p-5 border rounded-2xl hover:bg-muted/5 transition-colors relative overflow-hidden">
            <div className="absolute right-0 top-0 p-2 opacity-10"><LogOut size={60} /></div>
            <h3 className="text-xs font-black uppercase text-slate-500 mb-4 tracking-widest">Finalization Signals</h3>
            <div className="flex flex-wrap gap-2">
              {["Finalmente", "En resumen", "En definitiva"].map((word) => (
                <span key={word} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-[11px] font-black">{word}</span>
              ))}
            </div>
            <p className="text-xs italic mt-4 text-muted-foreground">"<b>En resumen</b>, es una buena opción."</p>
          </div>
        </div>
      </section>

      {/* 4. DISCOURSE LABORATORY: THE INTERACTIVE QUIZ */}
      <section className="bg-indigo-950 text-indigo-50 p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black italic tracking-tighter uppercase">Discourse Laboratory</h2>
            <p className="text-indigo-300 text-xs sm:text-sm uppercase tracking-widest font-bold">Structure the sentences using the correct organizer</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              { id: "q1", q: "Tengo sueño, _______ me voy a dormir.", a: "así que", label: "Consequence" },
              { id: "q2", q: "Es inteligente; _______, no estudia nada.", a: "sin embargo", label: "Formal Contrast" },
              { id: "q3", q: "No tiene dinero, _______, es pobre.", a: "es decir", hint: "Clarification" },
              { id: "q4", q: "Me gusta el cine; _______, prefiero el teatro.", a: "en cambio", hint: "In contrast" },
              { id: "q5", q: "_______ mi padre como mi madre son altos.", a: "tanto", hint: "Tanto... como..." },
              { id: "q6", q: "_______ lugar, vamos a analizar el precio.", a: "en primer", hint: "Ordering" }
            ].map((item) => (
              <div key={item.id} className="bg-indigo-900/40 p-5 sm:p-6 rounded-2xl border border-indigo-700/50 space-y-4 hover:border-indigo-400 transition-all group">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-black text-indigo-400 uppercase tracking-[0.2em]">{item.label || item.hint}</span>
                  {feedback[item.id] !== undefined && (
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded ${feedback[item.id] ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'}`}>
                      {feedback[item.id] ? '✓ CORRECT' : '✕ TRY AGAIN'}
                    </span>
                  )}
                </div>

                <p className="text-base sm:text-lg font-bold italic leading-relaxed">"{item.q}"</p>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter organizer..."
                    className={`flex-1 bg-indigo-950/50 border border-indigo-700/50 rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-indigo-400 group-hover:border-indigo-500 ${feedback[item.id] === true ? 'border-emerald-500' : feedback[item.id] === false ? 'border-rose-500' : ''
                      }`}
                    onChange={(e) => handleInputChange(item.id, e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && checkAnswer(item.id, item.a)}
                  />
                  <button
                    onClick={() => checkAnswer(item.id, item.a)}
                    className="bg-indigo-500 hover:bg-indigo-400 text-white px-5 rounded-xl transition-all active:scale-95 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20"
                  >
                    <CheckCircle2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER TIPS & REGISTER */}
      <footer className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-border">
        <div className="flex gap-4 p-5 bg-blue-500/5 rounded-2xl border border-blue-500/20">
          <Lightbulb className="text-blue-500 shrink-0" size={20} />
          <div className="space-y-1">
            <h4 className="text-[10px] font-black uppercase text-blue-600 tracking-widest">Register Tip</h4>
            <p className="text-xs font-medium leading-relaxed opacity-80 italic">Always use <b>"Pero"</b> for casual speech, but switch to <b>"Sin embargo"</b> for formal writing or professional emails.</p>
          </div>
        </div>
        <div className="flex items-center justify-between md:justify-end gap-6 text-[10px] font-mono tracking-widest opacity-40 uppercase font-black">
          <span>A2.1 Discourse Mastery</span>
          <span className="hidden sm:inline">|</span>
          <span>© 2026 Learning Platform</span>
        </div>
      </footer>
    </div>
  );
};

export default grammar_lesson_36;