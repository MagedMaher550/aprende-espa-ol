"use client";
import type React from "react";
import { useState } from "react";
import {
  User,
  Package,
  CheckCircle2,
  Zap,
  ArrowRight,
  Minus,
  Plus,
  Info,
  AlertCircle,
  MessageSquare,
  Repeat,
  Search
} from "lucide-react";

const GrammarLesson35: React.FC = () => {
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
    <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 py-10 sm:py-16 bg-background text-foreground space-y-16 sm:space-y-24 antialiased font-sans overflow-x-hidden">
      {/* SECTION 1: THE INVARIABLE PRONOUNS */}
      <section className="space-y-8">
        <div className="flex items-center gap-2">
          <div className="h-6 w-1 bg-indigo-500"></div>
          <h2 className="text-lg font-black uppercase tracking-tight">1. Invariable Pronouns</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Human Category */}
          <div className="border border-border rounded-xl p-5 sm:p-6 bg-muted/10 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-2">
                <User size={16} className="text-indigo-500" />
                <span className="text-xs font-black uppercase tracking-widest">Humans</span>
              </div>
              <span className="text-[10px] font-mono opacity-40">INVARIABLE</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-indigo-500 uppercase italic">+ Affirmative</p>
                <p className="text-xl sm:text-2xl font-black tracking-tighter">Alguien</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">"Someone"</p>
              </div>
              <div className="space-y-1 border-l pl-4">
                <p className="text-[9px] font-bold text-rose-500 uppercase italic">- Negative</p>
                <p className="text-xl sm:text-2xl font-black tracking-tighter">Nadie</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">"No one"</p>
              </div>
            </div>
          </div>

          {/* Object Category */}
          <div className="border border-border rounded-xl p-5 sm:p-6 bg-muted/10 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-2">
                <Package size={16} className="text-emerald-500" />
                <span className="text-xs font-black uppercase tracking-widest">Objects</span>
              </div>
              <span className="text-[10px] font-mono opacity-40">INVARIABLE</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-emerald-500 uppercase italic">+ Affirmative</p>
                <p className="text-xl sm:text-2xl font-black tracking-tighter">Algo</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">"Something"</p>
              </div>
              <div className="space-y-1 border-l pl-4">
                <p className="text-[9px] font-bold text-rose-500 uppercase italic">- Negative</p>
                <p className="text-xl sm:text-2xl font-black tracking-tighter">Nada</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">"Nothing"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE ADJECTIVE MATRIX */}
      <section className="space-y-8">
        <div className="flex items-center gap-2">
          <div className="h-6 w-1 bg-indigo-500"></div>
          <h2 className="text-lg font-black uppercase tracking-tight">2. Adjectival Agreement Matrix</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 border border-border p-5 sm:p-8 rounded-2xl">
          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase text-indigo-500 flex items-center gap-2">
              <Plus size={12} /> Some / Any (Algún)
            </h3>
            <div className="space-y-2 font-mono text-sm">
              {[
                { label: "M. Sing.", word: "algún", extra: "Apocope" },
                { label: "F. Sing.", word: "alguna" },
                { label: "M. Plur.", word: "algunos" },
                { label: "F. Plur.", word: "algunas" }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between p-3 bg-muted/30 rounded border border-border">
                  <span className="opacity-50 uppercase text-[10px]">{item.label}</span>
                  <span className="font-bold">{item.word}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase text-rose-500 flex items-center gap-2">
              <Minus size={12} /> No / None (Ningún)
            </h3>
            <div className="space-y-2 font-mono text-sm">
              {[
                { label: "M. Sing.", word: "ningún", extra: "Apocope" },
                { label: "F. Sing.", word: "ninguna" },
                { label: "M. Plur.", word: "ningunos", ghost: true },
                { label: "F. Plur.", word: "ningunas", ghost: true }
              ].map((item, idx) => (
                <div key={idx} className={`flex justify-between p-3 bg-muted/30 rounded border border-border ${item.ghost ? 'opacity-30' : ''}`}>
                  <span className="opacity-50 uppercase text-[10px]">{item.label}</span>
                  <span className="font-bold">{item.word} {item.ghost && "*"}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 p-5 sm:p-6 bg-amber-500/5 border border-amber-500/20 rounded-xl items-start">
          <Zap size={20} className="text-amber-500 shrink-0 mt-1" />
          <div className="space-y-2">
            <p className="text-xs font-black uppercase text-amber-600 tracking-wider">The Apócope Rule</p>
            <p className="text-[13px] leading-relaxed">
              When <b>alguno/ninguno</b> precedes a <b>masculine singular noun</b>, the final "o" is dropped and an accent is added.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 border-t border-amber-500/10">
              <div className="text-[11px] font-mono"><span className="opacity-40">Adjective:</span> ¿Tienes <b className="text-amber-600 underline">algún</b> libro?</div>
              <div className="text-[11px] font-mono"><span className="opacity-40">Pronoun:</span> No tengo <b className="text-amber-600 underline">ninguno</b>.</div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: EXAMPLES & CONTEXTUAL USAGE */}
      <section className="space-y-8">
        <div className="flex items-center gap-2">
          <div className="h-6 w-1 bg-indigo-500"></div>
          <h2 className="text-lg font-black uppercase tracking-tight">3. Conversational Contexts</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              ctx: "Social Encounter",
              span: "¿Conoces a alguien aquí?",
              eng: "Do you know anyone here?",
              color: "border-indigo-500/30"
            },
            {
              ctx: "Negative Response",
              span: "No, no conozco a nadie.",
              eng: "No, I don't know anyone.",
              color: "border-rose-500/30"
            },
            {
              ctx: "Object Inquiry",
              span: "¿Necesitas algo de la tienda?",
              eng: "Do you need something from the store?",
              color: "border-emerald-500/30"
            },
            {
              ctx: "Quantity Negation",
              span: "No tengo ninguna duda.",
              eng: "I don't have any doubt.",
              color: "border-amber-500/30"
            },
            {
              ctx: "Presence Check",
              span: "¿Hay algún restaurante cerca?",
              eng: "Is there any restaurant nearby?",
              color: "border-indigo-500/30"
            },
            {
              ctx: "Total Negation",
              span: "Aquí no hay nada interesante.",
              eng: "There is nothing interesting here.",
              color: "border-rose-500/30"
            }
          ].map((item, i) => (
            <div key={i} className={`p-5 rounded-xl border-2 bg-muted/5 ${item.color} space-y-2 group hover:bg-background transition-all`}>
              <div className="flex items-center gap-2 opacity-50">
                <MessageSquare size={12} />
                <span className="text-[9px] font-black uppercase tracking-tighter">{item.ctx}</span>
              </div>
              <p className="text-sm font-black italic">"{item.span}"</p>
              <p className="text-[11px] text-muted-foreground font-medium">{item.eng}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: SYNTAX & DOUBLE NEGATION */}
      <section className="space-y-8">
        <div className="flex items-center gap-2">
          <div className="h-6 w-1 bg-indigo-500"></div>
          <h2 className="text-lg font-black uppercase tracking-tight">4. Syntactic Structure</h2>
        </div>

        <div className="space-y-4">
          {[
            {
              rule: "Post-Verbal Negation",
              syntax: "No + [Verb] + [Indefinite]",
              example: "No veo a nadie.",
              note: "Standard double negation structure."
            },
            {
              rule: "Pre-Verbal Negation",
              syntax: "[Indefinite] + [Verb]",
              example: "Nadie me ve.",
              note: "The 'No' vanishes when the indefinite starts the sentence."
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-4 sm:gap-6 p-5 sm:p-6 border rounded-xl hover:bg-muted/5 transition-colors group">
              <div className="md:w-1/3 space-y-1">
                <h4 className="font-bold text-sm tracking-tight">{item.rule}</h4>
                <code className="text-[10px] font-mono text-indigo-500 block uppercase">{item.syntax}</code>
              </div>
              <div className="md:w-2/3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xl font-black italic tracking-tighter">"{item.example}"</p>
                <p className="text-[11px] text-muted-foreground font-medium sm:border-l sm:pl-4">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: INTERACTIVE LABORATORY (RESPONSIVE FIX) */}
      <section className="space-y-8 bg-muted/20 p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2rem] border border-border">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 px-3 py-1 rounded-full text-indigo-600 mb-2">
            <Search size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest">Active Drill</span>
          </div>
          <h2 className="text-3xl font-black tracking-tighter uppercase italic">Grammar Laboratory</h2>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Morphology & Syntax Validation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {[
            { id: "v1", q: "¿Ves a _______?", a: "alguien", label: "Pronoun (People)" },
            { id: "v2", q: "No, no veo a _______.", a: "nadie", label: "Negative Pronoun" },
            { id: "v3", q: "¿Tienes _______ idea?", a: "alguna", label: "Fem. Agreement" },
            { id: "v4", q: "No tengo _______ plan.", a: "ningún", label: "Apocope M. Sing" },
            { id: "v5", q: "No quiero _______.", a: "nada", label: "Pronoun (Objects)" },
            { id: "v6", q: "_______ personas vienen.", a: "algunas", label: "Fem. Plural" },
          ].map((item) => (
            <div key={item.id} className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-background p-4 rounded-xl border border-border shadow-sm hover:border-indigo-500/50 transition-colors">
              <div className="space-y-1">
                <p className="text-[9px] font-black text-indigo-500 uppercase tracking-widest">{item.label}</p>
                <p className="text-xs font-bold leading-tight">{item.q}</p>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <input
                  type="text"
                  placeholder="Type..."
                  className={`flex-1 sm:w-28 bg-muted/50 border rounded-lg px-2 py-2 text-xs outline-none transition-all ${feedback[item.id] === true ? 'border-emerald-500 ring-2 ring-emerald-500/10' : feedback[item.id] === false ? 'border-rose-500 ring-2 ring-rose-500/10' : 'focus:border-indigo-500'}`}
                  onChange={(e) => handleInputChange(item.id, e.target.value)}
                  onBlur={() => checkAnswer(item.id, item.a)}
                />
                <button
                  onClick={() => checkAnswer(item.id, item.a)}
                  className={`p-2 rounded-lg transition-colors ${feedback[item.id] === true ? 'bg-emerald-500 text-white' : 'bg-muted text-muted-foreground'}`}
                >
                  <CheckCircle2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
};

export default GrammarLesson35;