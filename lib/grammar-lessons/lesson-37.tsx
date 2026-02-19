"use client";
import type React from "react";
import { useState } from "react";
import {
  Wallet,
  Users,
  CreditCard,
  Split,
  PiggyBank,
  Calendar,
  CheckCircle2,
  Info,
  DollarSign,
  ArrowRight,
  ShoppingCart,
  Receipt
} from "lucide-react";

const GrammarLesson37: React.FC = () => {
  const [userInputs, setUserInputs] = useState<{ [key: string]: string }>({});
  const [feedback, setFeedback] = useState<{ [key: string]: boolean | null }>({});

  const handleInputChange = (id: string, val: string) => {
    setUserInputs((prev) => ({ ...prev, [id]: val.toLowerCase().trim() }));
  };

  const checkAnswer = (id: string, correct: string[]) => {
    const input = userInputs[id] || "";
    setFeedback((prev) => ({
      ...prev,
      [id]: correct.some(ans => ans.toLowerCase().trim() === input),
    }));
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-10 sm:py-16 bg-background text-foreground space-y-16 sm:space-y-24 antialiased font-sans overflow-x-hidden">

      {/* SECTION 1: SOCIAL PAYMENTS */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b-2 border-emerald-500 pb-2 w-fit">
          <Users size={24} className="text-emerald-500" />
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter">I. Social Context: Splitting the Bill</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-border rounded-2xl p-6 bg-muted/5 space-y-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-600"><Split size={20} /></div>
              <span className="text-[10px] font-mono opacity-40 italic">EQUAL SPLIT</span>
            </div>
            <h3 className="text-xl font-black">Pagar a medias</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">Everyone pays the same amount, regardless of what they ate.</p>
            <div className="p-3 bg-background rounded-xl border border-dashed border-emerald-200">
              <p className="text-[11px] font-bold text-emerald-700 italic">"Pagamos a medias la cena."</p>
            </div>
          </div>

          <div className="border border-border rounded-2xl p-6 bg-muted/5 space-y-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-600"><Receipt size={20} /></div>
              <span className="text-[10px] font-mono opacity-40 italic">LOGISTICS</span>
            </div>
            <h3 className="text-xl font-black">Dividir la cuenta</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">Similar to medias, but focuses on the physical act of splitting the check.</p>
            <div className="p-3 bg-background rounded-xl border border-dashed border-blue-200">
              <p className="text-[11px] font-bold text-blue-700 italic">"¿Podemos dividir la cuenta?"</p>
            </div>
          </div>

          <div className="border border-border rounded-2xl p-6 bg-muted/5 space-y-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-amber-500/10 rounded-lg text-amber-600"><DollarSign size={20} /></div>
              <span className="text-[10px] font-mono opacity-40 italic">INDIVIDUAL</span>
            </div>
            <h3 className="text-xl font-black italic text-sm leading-tight">Pagar cada uno su consumición</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">You pay for your steak; I pay for my water. No subsidies!</p>
            <div className="p-3 bg-background rounded-xl border border-dashed border-amber-200">
              <p className="text-[11px] font-bold text-amber-700 italic">"Mejor pagamos cada uno lo suyo."</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: GROUP & TIME PAYMENTS */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <PiggyBank size={22} className="text-indigo-500" />
            <h2 className="text-lg font-black uppercase tracking-tight">II. Poner bote (Before Buying)</h2>
          </div>
          <div className="p-6 bg-indigo-500/5 border-2 border-indigo-500/10 rounded-3xl space-y-4">
            <p className="text-sm font-medium">Common for parties or group gifts. Everyone chips in money <b>before</b> the purchase is made.</p>
            <p className="text-sm italic font-black text-indigo-800">"Ponemos bote para la fiesta."</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Calendar size={22} className="text-rose-500" />
            <h2 className="text-lg font-black uppercase tracking-tight">III. Pagar a plazos (Financing)</h2>
          </div>
          <div className="p-6 bg-rose-500/5 border-2 border-rose-500/10 rounded-3xl space-y-4">
            <p className="text-sm font-medium">Paying in installments over months/years. Used for expensive items like cars or phones.</p>
            <p className="text-sm italic font-black text-rose-800">"Compramos el móvil a plazos."</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE PAYMENT MATRIX */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <Info size={22} className="text-slate-500" />
          <h2 className="text-lg font-black uppercase tracking-tight">IV. The Payment Matrix</h2>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead className="bg-muted/50 text-[10px] font-black uppercase tracking-widest border-b">
              <tr>
                <th className="px-6 py-4">Expression</th>
                <th className="px-6 py-4">Equal Amount?</th>
                <th className="px-6 py-4">Timing</th>
                <th className="px-6 py-4">Context</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b hover:bg-muted/30">
                <td className="px-6 py-4 font-black text-emerald-600">Pagar a medias</td>
                <td className="px-6 py-4">Yes</td>
                <td className="px-6 py-4">After</td>
                <td className="px-6 py-4 opacity-70 italic">Dining with a best friend</td>
              </tr>
              <tr className="border-b hover:bg-muted/30">
                <td className="px-6 py-4 font-black text-amber-600">Cada uno lo suyo</td>
                <td className="px-6 py-4">No</td>
                <td className="px-6 py-4">After</td>
                <td className="px-6 py-4 opacity-70 italic">Bar/Casual snacks</td>
              </tr>
              <tr className="border-b hover:bg-muted/30">
                <td className="px-6 py-4 font-black text-indigo-600">Poner bote</td>
                <td className="px-6 py-4">Yes (Fixed)</td>
                <td className="px-6 py-4">Before</td>
                <td className="px-6 py-4 opacity-70 italic">Purchasing party drinks</td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="px-6 py-4 font-black text-rose-600">Pagar a plazos</td>
                <td className="px-6 py-4">No (Divided)</td>
                <td className="px-6 py-4">Over Time</td>
                <td className="px-6 py-4 opacity-70 italic">Buying a laptop</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 4: PAYMENT LAB (RESPONSIVE FIX) */}
      <section className="bg-slate-900 text-slate-50 p-6 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl space-y-10">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">Active Drill</div>
          <h2 className="text-3xl sm:text-5xl font-black italic tracking-tighter uppercase">Payment Lab</h2>
          <p className="text-slate-400 text-xs sm:text-sm uppercase tracking-widest font-bold">Choose the correct payment method for the scenario</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {[
            { id: "p1", q: "We all give 10€ before buying drinks.", a: ["Poner bote"], type: "Group Action" },
            { id: "p2", q: "We split the restaurant bill equally.", a: ["Pagar a medias", "Dividir la cuenta"], type: "Equal Split" },
            { id: "p3", q: "I pay for my own food only.", a: ["Pagar cada uno su consumición", "Pagar cada uno lo suyo"], type: "Individual" },
            { id: "p4", q: "I pay the car over 12 months.", a: ["Pagar a plazos"], type: "Installments" },
            { id: "p5", q: "Everyone contributes money before buying a gift.", a: ["Poner bote"], type: "Pre-payment" },
            { id: "p6", q: "Dividing the check specifically at a restaurant.", a: ["Dividir la cuenta"], type: "The Bill" },
          ].map((item) => (
            <div key={item.id} className="bg-slate-800/40 p-5 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">{item.type}</span>
                  {feedback[item.id] !== undefined && (
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded ${feedback[item.id] ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'}`}>
                      {feedback[item.id] ? 'CORRECT' : 'WRONG'}
                    </span>
                  )}
                </div>
                <p className="text-sm font-bold italic leading-relaxed">"{item.q}"</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Escribe aquí..."
                  className="flex-1 bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  onChange={(e) => handleInputChange(item.id, e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && checkAnswer(item.id, item.a)}
                />
                <button
                  onClick={() => checkAnswer(item.id, item.a)}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white h-10 sm:w-12 rounded-xl flex items-center justify-center transition-all active:scale-95 shadow-lg shadow-emerald-900/20"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-12 border-t border-border grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="space-y-3">
          <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground"><Wallet size={14} /> Real-Life Phrases</h4>
          <ul className="text-sm font-bold space-y-1.5 italic opacity-80">
            <li>• ¿Pagamos a medias?</li>
            <li>• ¿Dividimos la cuenta?</li>
            <li>• ¿Cada uno paga lo suyo?</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground"><CreditCard size={14} /> Shop Questions</h4>
          <ul className="text-sm font-bold space-y-1.5 italic opacity-80">
            <li>• ¿Se puede pagar a plazos?</li>
            <li>• ¿Ponemos bote?</li>
          </ul>
        </div>
        <div className="flex items-end justify-end opacity-30 text-[10px] font-mono uppercase tracking-[0.2em] text-right">
          Lesson 37: Financial & Social Logic
        </div>
      </footer>
    </div>
  );
};

export default GrammarLesson37;