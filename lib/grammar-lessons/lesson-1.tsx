'use client'
import type React from "react";
import { useState } from "react";

const grammar_lesson_1: React.FC = () => {
  const [reveals, setReveals] = useState<{ [key: string]: boolean }>({});

  const toggleReveal = (id: string) => {
    setReveals((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-12 pb-20">
      {/* SECTION 1: VOWELS */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
            1
          </span>
          <h2 className="text-2xl font-bold text-foreground">
            Spanish Vowels (Las Vocales)
          </h2>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          Spanish vowels are always pronounced clearly and consistently, unlike
          English where the same vowel can have multiple sounds. Mastering them
          is key to correct pronunciation.
        </p>

        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-muted/50 border-b border-border text-foreground">
              <tr>
                <th className="px-4 py-3 font-semibold">Vowel</th>
                <th className="px-4 py-3 font-semibold">Approx. Sound</th>
                <th className="px-4 py-3 font-semibold">Examples</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm sm:text-base">
              {[
                ["A", "/a/ (like َ أ in Arabic)", "Casa, Mano"],
                ["E", "/e/ (like َ إ)", "Bebé, Escuela"],
                ["I", "/i/ (like ي)", "Libro, Fiesta"],
                ["O", "/o/ (like وأ)", "Ojo, Flor"],
                ["U", "/u/ (like و)", "Luna, Mundo"],
              ].map(([v, sound, ex]) => (
                <tr key={v} className="hover:bg-muted/20 transition-colors">
                  <td className="px-4 py-3 font-bold text-accent text-lg">
                    {v}
                  </td>
                  <td className="px-4 py-3 text-foreground">{sound}</td>
                  <td className="px-4 py-3 text-muted-foreground italic">
                    {ex}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-foreground pt-4">
          Vowel Combinations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <table className="w-full text-left text-sm">
              <tbody className="divide-y divide-border">
                {/* Mapping first half */}
                {[
                  ["au", "/au/", "Aumentar"],
                  ["ae", "/ae/", "Aeropuerto"],
                  ["ai", "/ai/", "Aire"],
                  ["ao", "/ao/", "Cacao"],
                  ["eu", "/eu/", "Europa"],
                  ["ua", "/ua/", "Uruguay"],
                ].map(([c, s, e]) => (
                  <tr key={c} className="hover:bg-muted/10">
                    <td className="px-4 py-2 font-bold text-accent">{c}</td>
                    <td className="px-4 py-2 text-foreground">{s}</td>
                    <td className="px-4 py-2 text-muted-foreground">{e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <table className="w-full text-left text-sm">
              <tbody className="divide-y divide-border">
                {/* Mapping second half */}
                {[
                  ["ue", "/ue/", "Fuente"],
                  ["ui", "/ui/", "Cuidar"],
                  ["ia", "/ia/", "Ciencia"],
                  ["ie", "/ie/", "Abierto"],
                  ["iu", "/iu/", "Ciudad"],
                  ["io", "/io/", "Precio"],
                ].map(([c, s, e]) => (
                  <tr key={c} className="hover:bg-muted/10">
                    <td className="px-4 py-2 font-bold text-accent">{c}</td>
                    <td className="px-4 py-2 text-foreground">{s}</td>
                    <td className="px-4 py-2 text-muted-foreground">{e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* INTERACTIVE QUIZ 1 */}
        <div className="p-6 rounded-xl bg-secondary/30 border border-border space-y-4">
          <h4 className="font-bold text-foreground flex items-center gap-2">
            <span className="text-lg">🎧</span> Quiz 1: Pronunciation Practice
          </h4>
          <div className="space-y-3">
            {[
              {
                id: "v1",
                q: "How do you pronounce 'Flor'?",
                a: "Pronounced with a clear /o/ like 'force' (Fl-ohr).",
              },
              {
                id: "v2",
                q: "Which vowels are in 'Aeropuerto'?",
                a: "A-E (hiatus), O, U-E (diphthong), O.",
              },
              {
                id: "v3",
                q: "Read 'Cuidar' aloud. What is the diphthong?",
                a: "The diphthong is 'ui' (/wi/).",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-background rounded-lg border border-border"
              >
                <span className="text-sm font-medium">{item.q}</span>
                <button
                  onClick={() => toggleReveal(item.id)}
                  className="text-xs font-bold text-accent hover:underline uppercase tracking-tighter"
                >
                  {reveals[item.id] ? item.a : "Reveal Answer"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: PRONOUNS */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
            2
          </span>
          <h2 className="text-2xl font-bold text-foreground">
            Personal Pronouns
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-border bg-card space-y-3">
            <h4 className="font-bold border-b border-border pb-2">Singular</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-bold text-accent">Yo</span> — I
              </li>
              <li>
                <span className="font-bold text-accent">Tú</span> — You
                (informal)
              </li>
              <li>
                <span className="font-bold text-accent">Usted</span> — You
                (formal)
              </li>
              <li>
                <span className="font-bold text-accent">Él / Ella</span> — He /
                She
              </li>
            </ul>
          </div>
          <div className="p-5 rounded-xl border border-border bg-card space-y-3">
            <h4 className="font-bold border-b border-border pb-2">Plural</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-bold text-accent">Nosotros/as</span> — We
              </li>
              <li>
                <span className="font-bold text-accent">Vosotros/as</span> — You
                (Spain)
              </li>
              <li>
                <span className="font-bold text-accent">Ustedes</span> — You
                (LatAm)
              </li>
              <li>
                <span className="font-bold text-accent">Ellos / Ellas</span> —
                They
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-500/10 text-blue-500 border border-blue-500/20 rounded-full text-xs font-semibold italic">
            Tip: Use "Tú" for friends
          </span>
          <span className="px-3 py-1 bg-purple-500/10 text-purple-500 border border-purple-500/20 rounded-full text-xs font-semibold italic">
            Tip: "Ustedes" is used in Latin America
          </span>
        </div>
      </section>

      {/* SECTION 3: LLAMARSE */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
            3
          </span>
          <h2 className="text-2xl font-bold text-foreground">
            Verb "Llamarse"
          </h2>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-md">
          <table className="w-full text-left border-collapse">
            <thead className="bg-muted text-foreground">
              <tr>
                <th className="px-4 py-3 font-semibold">Pronoun</th>
                <th className="px-4 py-3 font-semibold">Conjugation</th>
                <th className="px-4 py-3 font-semibold hidden sm:table-cell">
                  Example
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["Yo", "me llamo", "Me llamo Juan."],
                ["Tú", "te llamas", "Te llamas Ana."],
                ["Él/Ella/Ud.", "se llama", "Se llama Carlos."],
                ["Nosotros/as", "nos llamamos", "Nos llamamos Marta."],
                ["Vosotros/as", "os llamáis", "Os llamáis Pedro."],
                ["Ellos/as/Uds.", "se llaman", "Se llaman María."],
              ].map(([p, c, e]) => (
                <tr key={p} className="hover:bg-muted/10 transition-colors">
                  <td className="px-4 py-3 font-medium">{p}</td>
                  <td className="px-4 py-3 font-bold text-accent">{c}</td>
                  <td className="px-4 py-3 text-muted-foreground italic hidden sm:table-cell">
                    {e}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-lg border-l-4 border-amber-500 bg-amber-500/10">
          <p className="text-sm font-bold text-amber-600 dark:text-amber-400 uppercase mb-1">
            Common Mistake
          </p>
          <p className="text-sm text-foreground">
            Don't use "llamar" alone for names. <b>"Llamo Juan"</b> means you
            are calling him on the phone. Use <b>"Me llamo Juan"</b>.
          </p>
        </div>
      </section>

      {/* NEXT STEPS */}
      <section className="p-8 rounded-2xl bg-accent/5 border border-accent/20">
        <h2 className="text-xl font-bold text-foreground mb-4">Next Steps</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { t: "Record", d: "Record yourself reading the vowel chart." },
            { t: "Introduce", d: "Practice saying 'Me llamo...' aloud." },
            { t: "Compare", d: "Find 3 words with diphthongs in the wild." },
          ].map((item, i) => (
            <li key={i} className="space-y-1">
              <span className="text-xs font-bold text-accent uppercase tracking-widest">
                {item.t}
              </span>
              <p className="text-sm text-muted-foreground">{item.d}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default grammar_lesson_1;
