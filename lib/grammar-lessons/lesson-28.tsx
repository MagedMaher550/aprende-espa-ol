"use client";
import type React from "react";
import { useState } from "react";
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
  Zap,
  ShieldCheck,
  Languages,
} from "lucide-react";

const grammar_lesson_28: React.FC = () => {
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
      {/* I. CONCEPTUAL FOUNDATION */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-tighter border-b-2 border-indigo-600 pb-2 flex items-center gap-2">
          <ShieldCheck className="text-indigo-600" /> I. The Conceptual
          Foundation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted/30 p-6 rounded-2xl border border-border">
            <h3 className="text-sm font-bold uppercase text-indigo-600 mb-4">
              Core Functions
            </h3>
            <ul className="space-y-2 text-sm italic">
              <li>• Completed actions (Ayer trabajé)</li>
              <li>• Clear boundaries (Viví allí cinco años)</li>
              <li>• Viewed as a whole (El proyecto terminó)</li>
            </ul>
          </div>
          <div className="bg-indigo-600 text-white p-6 rounded-2xl">
            <h3 className="text-sm font-bold uppercase mb-2">
              The Structural Logic
            </h3>
            <p className="text-xs opacity-90 leading-relaxed">
              In this tense, stress patterns change, causing stems to weaken or
              collapse. Most "irregularities" are actually the language
              protecting its sounds as stress shifts to the endings.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORY A: REGULAR VERBS */}
      <section className="space-y-8">
        <h2 className="text-2xl font-black uppercase tracking-tighter border-b-2 border-emerald-600 pb-2">
          Category A: Regular Verbs (The Control System)
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AR VERBS */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase text-emerald-600 flex items-center gap-2">
              <Repeat size={18} /> Regular -AR (Hablar)
            </h3>
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-[10px] uppercase font-black tracking-widest">
                  <tr>
                    <th className="p-3">Person</th>
                    <th className="p-3">Hablar</th>
                    <th className="p-3">Ending</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["yo", "hablé", "-é"],
                    ["tú", "hablaste", "-aste"],
                    ["él/ella/ud", "habló", "-ó"],
                    ["nosotros", "hablamos", "-amos"],
                    ["vosotros", "hablasteis", "-asteis"],
                    ["ellos/as", "hablaron", "-aron"],
                  ].map(([p, v, e]) => (
                    <tr key={p}>
                      <td className="p-3 bg-card italic">{p}</td>
                      <td className="p-3 font-bold text-emerald-600">{v}</td>
                      <td className="p-3 font-mono opacity-60 text-xs">{e}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ER/IR VERBS */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase text-emerald-600 flex items-center gap-2">
              <Repeat size={18} /> Regular -ER / -IR (Comer / Vivir)
            </h3>
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-[10px] uppercase font-black tracking-widest">
                  <tr>
                    <th className="p-3">Person</th>
                    <th className="p-3">Comer</th>
                    <th className="p-3">Vivir</th>
                    <th className="p-3">Ending</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["yo", "comí", "viví", "-í"],
                    ["tú", "comiste", "viviste", "-iste"],
                    ["él/ella/ud", "comió", "vivió", "-ió"],
                    ["nosotros", "comimos", "vivimos", "-imos"],
                    ["vosotros", "comisteis", "vivisteis", "-isteis"],
                    ["ellos/as", "comieron", "vivieron", "-ieron"],
                  ].map(([p, c, v, e]) => (
                    <tr key={p}>
                      <td className="p-3 bg-card italic">{p}</td>
                      <td className="p-3 font-bold text-emerald-600">{c}</td>
                      <td className="p-3 font-bold text-emerald-600">{v}</td>
                      <td className="p-3 font-mono opacity-60 text-xs">{e}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* REGULAR EXAMPLES GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            "Hablé ayer",
            "Trabajé hoy",
            "Estudié mucho",
            "Llegamos hoy",
            "Cerraron ya",
            "Comí en casa",
            "Bebimos café",
            "Aprendí eso",
            "Vendieron el auto",
            "Leí el sms",
            "Vivimos aquí",
            "Abrí la puerta",
            "Recibí correo",
            "Subimos al bus",
            "Decidieron ir",
          ].map((ex, i) => (
            <div
              key={i}
              className="p-3 bg-emerald-500/5 border border-emerald-500/10 rounded-lg text-[10px] font-bold text-center italic"
            >
              {ex}
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORY B: STEM CHANGES DISAPPEAR */}
      <section className="p-8 bg-amber-500/10 border border-amber-500/20 rounded-3xl space-y-4">
        <h2 className="text-xl font-black uppercase text-amber-700 flex items-center gap-2">
          <AlertTriangle /> Category B: Why Present Stem-Changes Disappear
        </h2>
        <p className="text-sm italic">
          In the Present, stress is on the <b>stem</b> (pienso). In the
          Pretérito, stress is on the <b>ending</b> (pensé). Diphthongs like{" "}
          <i>ie, ue</i> collapse.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-bold">
          <div className="p-2 bg-background rounded border">Pienso → Pensé</div>
          <div className="p-2 bg-background rounded border">Vuelvo → Volví</div>
          <div className="p-2 bg-background rounded border">Juego → Jugué</div>
          <div className="p-2 bg-background rounded border">Siento → Sentí</div>
        </div>
      </section>

      {/* CATEGORY C: TOTAL IRREGULARITY (SER/IR) */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black uppercase text-rose-600 border-b-2 border-rose-600 pb-2">
          Category C: Total Irregularity (Ser / Ir)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm text-left">
              <thead className="bg-rose-600 text-white text-[10px] uppercase font-black tracking-widest">
                <tr>
                  <th className="p-3">Person</th>
                  <th className="p-3">Ser / Ir</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {["Fui", "Fuiste", "Fue", "Fuimos", "Fuisteis", "Fueron"].map(
                  (v, i) => (
                    <tr key={v}>
                      <td className="p-3 bg-card italic">
                        {
                          [
                            "yo",
                            "tú",
                            "él/ella",
                            "nosotros",
                            "vosotros",
                            "ellos",
                          ][i]
                        }
                      </td>
                      <td className="p-3 font-bold text-rose-600">{v}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          <div className="space-y-4 text-sm">
            <p className="font-bold">Determining Meaning:</p>
            <p className="opacity-80">
              Only <b>context</b> tells you whether it means "to be" or "to go".
            </p>
            <ul className="space-y-2 italic text-rose-700">
              <li>• Fui estudiante (I was...)</li>
              <li>• Fui a casa (I went...)</li>
              <li>• El fiesta fue genial (The party was...)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CATEGORY E: STRONG PRETERITE VERBS */}
      <section className="space-y-8 bg-slate-900 text-white p-8 rounded-3xl shadow-2xl">
        <div className="space-y-2">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-blue-400">
            Category E: Strong Preterite Verbs
          </h2>
          <p className="text-sm text-slate-400">
            The Core System: Stress shifts to the stem, and all accents are
            lost.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            { v: "Tener", s: "Tuv-" },
            { v: "Estar", s: "Estuv-" },
            { v: "Poder", s: "Pud-" },
            { v: "Poner", s: "Pus-" },
            { v: "Saber", s: "Sup-" },
            { v: "Querer", s: "Quis-" },
            { v: "Venir", s: "Vin-" },
            { v: "Haber", s: "Hub-" },
          ].map((item) => (
            <div
              key={item.v}
              className="p-4 bg-white/5 border border-white/10 rounded-xl text-center"
            >
              <p className="text-[10px] uppercase text-blue-400 font-black">
                {item.v}
              </p>
              <p className="text-xl font-mono font-bold">{item.s}</p>
            </div>
          ))}
        </div>

        <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
          <h3 className="text-xs font-black uppercase mb-4 text-blue-400">
            Mandatory "Strong" Endings (No Accents)
          </h3>
          <div className="flex flex-wrap gap-4 justify-center font-mono text-lg">
            {["-e", "-iste", "-o", "-imos", "-isteis", "-ieron"].map((e) => (
              <span
                key={e}
                className="px-3 py-1 bg-background rounded-lg border border-white/10"
              >
                {e}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY G: J-STEMS & CATEGORY H: REAL CHANGES */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h3 className="text-sm font-black uppercase flex items-center gap-2 text-indigo-600">
            <Zap size={18} /> Category G: -J Stem Verbs
          </h3>
          <div className="p-6 bg-muted/30 rounded-3xl space-y-3 border border-border">
            <p className="text-[10px] font-black uppercase text-indigo-700">
              Decir / Traer / -ducir
            </p>
            <div className="text-xs space-y-2">
              <p>
                • Dije / Dijo / <b>Dijeron</b> (No 'i' in 3rd plural)
              </p>
              <p>
                • Traje / Trajo / <b>Trajeron</b>
              </p>
              <p>
                • Produje / Produjo / <b>Produjeron</b>
              </p>
              <div className="mt-4 p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded italic text-[10px]">
                Spanish avoids "j + i" in these positions. "Dijieron" is
                impossible.
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-black uppercase flex items-center gap-2 text-emerald-600">
            <Repeat size={18} /> Category H: Real Stem Changes (-IR Only)
          </h3>
          <div className="p-6 bg-muted/30 rounded-3xl space-y-3 border border-border">
            <p className="text-[10px] font-black uppercase text-emerald-700">
              Only 3rd Person (Sandal Verbs)
            </p>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <p className="font-bold border-b mb-1">E → I</p>
                <p>Pidió / Pidieron</p>
                <p>Sirvió / Sirvieron</p>
                <p>Repitió / Repitieron</p>
              </div>
              <div>
                <p className="font-bold border-b mb-1">O → U</p>
                <p>Durmió / Durmieron</p>
                <p>Murió / Murieron</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY I & J */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h3 className="text-sm font-black uppercase flex items-center gap-2 text-sky-600">
            <BookOpen size={18} /> Category I: Y-Insertion
          </h3>
          <div className="p-4 bg-sky-500/5 border border-sky-500/10 rounded-2xl text-xs italic">
            <p className="mb-2">
              Forms like "leió" are phonologically impossible.
            </p>
            <p>• Leer → Leyó / Leyeron</p>
            <p>• Oír → Oyó / Oyeron</p>
            <p>• Construir → Construyó</p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-black uppercase flex items-center gap-2 text-orange-600">
            <Languages size={18} /> Category J: Orthographic Changes
          </h3>
          <div className="p-4 bg-orange-500/5 border border-orange-500/10 rounded-2xl text-xs">
            <p className="font-bold mb-2 uppercase text-[10px]">
              Only in "Yo" form to protect sound:
            </p>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2 bg-background rounded border">
                Busqué (-car)
              </div>
              <div className="p-2 bg-background rounded border">
                Llegué (-gar)
              </div>
              <div className="p-2 bg-background rounded border">
                Empecé (-zar)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE DRILLS */}
      <section className="space-y-12 bg-muted/10 p-4 sm:p-10 rounded-3xl border border-border">
        <h2 className="text-3xl font-black uppercase text-center text-indigo-600">
          Practice Drills
        </h2>

        {/* DRILL 1: Regulars */}
        <div className="space-y-6">
          <h3 className="text-xs font-black uppercase text-muted-foreground border-l-4 border-emerald-600 pl-3">
            Drill I: Regular Conjugations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: "dr1", q: "1. Yo (hablar) con él ayer.", a: "hablé" },
              { id: "dr2", q: "2. Nosotros (comer) en casa.", a: "comimos" },
              { id: "dr3", q: "3. Ella (vivir) en Madrid.", a: "vivió" },
              { id: "dr4", q: "4. Tú (aprender) mucho.", a: "aprendiste" },
              { id: "dr5", q: "5. Ellos (vender) el coche.", a: "vendieron" },
            ].map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-background rounded-xl border border-border"
              >
                <span className="text-xs font-bold">{item.q}</span>
                <div className="flex gap-2">
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

        {/* DRILL 2: Irregulars */}
        <div className="space-y-6 border-t border-border pt-8">
          <h3 className="text-xs font-black uppercase text-muted-foreground border-l-4 border-rose-600 pl-3">
            Drill II: Strong & Irregular Verbs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: "ir1", q: "1. Yo (ir) al trabajo.", a: "fui" },
              { id: "ir2", q: "2. Él (hacer) la tarea.", a: "hizo" },
              {
                id: "ir3",
                q: "3. Nosotros (tener) un problema.",
                a: "tuvimos",
              },
              { id: "ir4", q: "4. Ellos (decir) la verdad.", a: "dijeron" },
              { id: "ir5", q: "5. Yo (poder) llegar tarde.", a: "pude" },
              { id: "ir6", q: "6. Ella (pedir) ayuda.", a: "pidió" },
            ].map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-background rounded-xl border border-border"
              >
                <span className="text-xs font-bold">{item.q}</span>
                <div className="flex gap-2">
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

        {/* DRILL 3: Translate */}
        <div className="space-y-6 border-t border-border pt-8">
          <h3 className="text-xs font-black uppercase text-indigo-600 border-l-4 border-indigo-600 pl-3">
            Drill III: Translate
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { id: "tr1", en: "1. I saw everything.", es: "vi todo" },
              { id: "tr2", en: "2. We went home.", es: "fuimos a casa" },
              { id: "tr3", en: "3. They slept little.", es: "durmieron poco" },
              { id: "tr4", en: "4. I arrived late.", es: "llegué tarde" },
              {
                id: "tr5",
                en: "5. There was a problem.",
                es: "hubo un problema",
              },
            ].map((item) => (
              <div key={item.id} className="space-y-2 group">
                <p className="text-[10px] font-black text-muted-foreground uppercase">
                  {item.en}
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="flex-1 bg-background border border-border rounded-xl px-4 py-2 text-xs outline-none focus:ring-1 focus:ring-indigo-600"
                    onChange={(e) => handleInputChange(item.id, e.target.value)}
                  />
                  <button
                    onClick={() => checkAnswer(item.id, item.es)}
                    className="bg-indigo-600 text-white p-2 rounded-xl"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONVERSATION & MINI DIALOGUES */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-xs font-black uppercase text-orange-600 flex items-center gap-2 border-b border-orange-500/20 pb-2">
            <MessageSquare size={18} /> Conversation Questions
          </h2>
          <div className="grid grid-cols-1 gap-3 text-xs italic">
            {[
              "¿Qué hiciste ayer?",
              "¿Adónde fuiste el fin de semana pasado?",
              "¿A qué hora llegaste a casa hoy?",
              "¿Hiciste la tarea antes de cenar?",
              "¿Qué comiste al mediodía?",
            ].map((q, i) => (
              <div
                key={i}
                className="p-3 bg-orange-500/5 rounded-xl border border-orange-500/10"
              >
                {q}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xs font-black uppercase text-indigo-600 border-b border-indigo-500/20 pb-2">
            Mini Dialogue Models
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "¿Adónde fuiste ayer?",
                a: "Fui al centro comercial con mi hermano.",
              },
              {
                q: "¿Pudiste terminar el trabajo?",
                a: "No, tuve muchos problemas con la conexión.",
              },
              {
                q: "¿Qué dijeron tus padres?",
                a: "No dijeron nada, estuvieron muy tranquilos.",
              },
            ].map((d, i) => (
              <div
                key={i}
                className="p-4 bg-muted/20 rounded-2xl border border-border text-sm italic"
              >
                <p className="ml-4">— {d.q}</p>
                <p className="ml-4 text-indigo-600 font-bold">— {d.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL TRUTH & WRITING */}
      <section className="p-8 sm:p-12 bg-indigo-950 text-white rounded-3xl border border-indigo-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Zap size={80} />
        </div>
        <h2 className="text-xs font-black uppercase tracking-widest text-indigo-400 mb-8 border-b border-indigo-400/20 pb-4">
          X. Writing Practice: Un Día en el Pasado
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4 text-sm opacity-80 leading-relaxed">
            <p className="font-bold text-indigo-400">Assignment Details:</p>
            <p>
              Write 8–10 lines about what you did yesterday or last weekend.
              Your paragraph must include:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>At least 3 regular verbs</li>
              <li>At least 2 "Strong" verbs (tuv-, pud-, etc.)</li>
              <li>At least 1 usage of Ser/Ir (Fui...)</li>
              <li>One sentence with a J-stem or Sandal verb</li>
            </ul>
          </div>
          <div className="space-y-4">
            <textarea
              className="w-full h-48 bg-white/5 border border-indigo-700 rounded-2xl p-4 text-sm outline-none focus:border-indigo-400 transition-colors"
              placeholder="Ayer, fui al trabajo temprano. Tuve una reunión..."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default grammar_lesson_28;
