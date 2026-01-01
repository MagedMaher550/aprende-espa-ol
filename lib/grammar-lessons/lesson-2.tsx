"use client";
import type React from "react";
import { useState } from "react";

const grammar_lesson_2: React.FC = () => {
  const [reveals, setReveals] = useState<{ [key: string]: boolean }>({});

  const toggleReveal = (id: string) => {
    setReveals((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-12 pb-20">
      {/* SECTION 1: REFLEXIVE VERBS */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
            1
          </span>
          <h2 className="text-2xl font-bold text-foreground">
            Reflexive Verbs: Llamarse & Apellidarse
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-secondary/20 border border-border">
            <p className="font-bold text-accent">Llamarse</p>
            <p className="text-sm text-muted-foreground italic">
              To be called (First names)
            </p>
          </div>
          <div className="p-4 rounded-lg bg-secondary/20 border border-border">
            <p className="font-bold text-accent">Apellidarse</p>
            <p className="text-sm text-muted-foreground italic">
              To have as a surname (Last names)
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-muted/50 border-b border-border text-foreground text-sm sm:text-base">
                <tr>
                  <th className="px-4 py-3 font-semibold">Pronoun</th>
                  <th className="px-4 py-3 font-semibold">Llamarse</th>
                  <th className="px-4 py-3 font-semibold">Apellidarse</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm sm:text-base">
                {[
                  ["Yo", "me llamo", "me apellido"],
                  ["Tú", "te llamas", "te apellidas"],
                  ["Él/Ella/Ud.", "se llama", "se apellida"],
                  ["Nosotros/as", "nos llamamos", "nos apellidamos"],
                  ["Vosotros/as", "os llamáis", "os apellidáis"],
                  ["Ellos/as/Uds.", "se llaman", "se apellidan"],
                ].map(([p, l, a]) => (
                  <tr key={p} className="hover:bg-muted/10 transition-colors">
                    <td className="px-4 py-3 font-medium text-foreground">
                      {p}
                    </td>
                    <td className="px-4 py-3 font-bold text-accent">{l}</td>
                    <td className="px-4 py-3 font-bold text-accent/80">{a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* QUIZ 1 */}
        <div className="p-6 rounded-xl bg-secondary/30 border border-border space-y-4">
          <h4 className="font-bold text-foreground flex items-center gap-2">
            📝 Quiz 1
          </h4>
          <div className="space-y-3">
            {[
              {
                id: "l2q1_1",
                q: "Translate: 'My surname is Saleh.'",
                a: "Me apellido Saleh.",
              },
              {
                id: "l2q1_2",
                q: "How do you say 'His name is Pedro'?",
                a: "Se llama Pedro.",
              },
              {
                id: "l2q1_3",
                q: "Conjugate 'apellidarse' for 'nosotros'.",
                a: "Nos apellidamos.",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-background rounded-lg border border-border"
              >
                <span className="text-sm font-medium">{item.q}</span>
                <button
                  onClick={() => toggleReveal(item.id)}
                  className="text-xs font-bold text-accent uppercase tracking-tighter shrink-0"
                >
                  {reveals[item.id] ? item.a : "Reveal Answer"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: SER */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
            2
          </span>
          <h2 className="text-2xl font-bold text-foreground">
            The Verb "Ser" (To Be)
          </h2>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          The verb <span className="font-bold text-foreground italic">ser</span>{" "}
          is used for identity, profession, nationality, and origin.
        </p>

        <div className="overflow-hidden overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
          <table className="w-full text-left border-collapse text-sm sm:text-base">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                <th className="px-4 py-3 font-semibold text-foreground">
                  Pronoun
                </th>
                <th className="px-4 py-3 font-semibold text-foreground">
                  Conjugation
                </th>
                <th className="px-4 py-3 font-semibold">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["Yo", "soy", "Yo soy estudiante."],
                ["Tú", "eres", "Tú eres médico."],
                ["Él/Ella/Ud.", "es", "Él es español."],
                ["Nosotros/as", "somos", "Nosotros somos amigos."],
                ["Vosotros/as", "sois", "Vosotros sois turistas."],
                ["Ellos/as/Uds.", "son", "Ellas son profesoras."],
              ].map(([p, c, e]) => (
                <tr key={p} className="hover:bg-muted/10 transition-colors">
                  <td className="px-4 py-3 font-medium">{p}</td>
                  <td className="px-4 py-3 font-bold text-accent">{c}</td>
                  <td className="px-4 py-3 text-muted-foreground">{e}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-lg border-l-4 border-blue-500 bg-blue-500/10">
          <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase mb-1">
            Grammar Note
          </p>
          <p className="text-sm text-foreground">
            Nationalities are written in <b>lowercase</b> in Spanish (e.g.,{" "}
            <i>egipcio, español</i>).
          </p>
        </div>
      </section>

      {/* SECTION 3: CONVERSATIONAL QUESTIONS */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
            3
          </span>
          <h2 className="text-2xl font-bold text-foreground">
            Asking for Info
          </h2>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead className="bg-muted/80 text-foreground">
                <tr>
                  <th className="px-4 py-3 font-semibold">Question</th>
                  <th className="px-4 py-3 font-semibold">Meaning</th>
                  <th className="px-4 py-3 font-semibold italic">
                    Example Answer
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["¿Cómo te llamas?", "What is your name?", "Me llamo Ahmed."],
                  ["¿De dónde eres?", "Where are you from?", "Soy de Egipto."],
                  [
                    "¿Cuál es tu nacionalidad?",
                    "What is your nationality?",
                    "Soy egipcio/a.",
                  ],
                ].map(([q, m, a], i) => (
                  <tr key={i} className="hover:bg-muted/10">
                    <td className="px-4 py-3 font-bold text-accent">{q}</td>
                    <td className="px-4 py-3 text-foreground">{m}</td>
                    <td className="px-4 py-3 text-muted-foreground">{a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* QUIZ 3 */}
        <div className="p-6 rounded-xl bg-secondary/30 border border-border space-y-4">
          <h4 className="font-bold text-foreground">📝 Quiz 3</h4>
          <div className="space-y-3">
            {[
              {
                id: "l2q3_1",
                q: "How to ask someone formally for their surname?",
                a: "¿Cómo se apellida usted?",
              },
              {
                id: "l2q3_2",
                q: "Translate: 'My name is Laura and my surname is Torres.'",
                a: "Me llamo Laura y me apellido Torres.",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-background rounded-lg border border-border"
              >
                <span className="text-sm font-medium">{item.q}</span>
                <button
                  onClick={() => toggleReveal(item.id)}
                  className="text-xs font-bold text-accent uppercase tracking-tighter"
                >
                  {reveals[item.id] ? item.a : "Reveal Answer"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ERROR PREVENTION / COMMON MISTAKES */}
      <section className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
        <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <span className="text-red-500">⚠️</span> Common Mistakes
        </h2>
        <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
          <li className="flex gap-2">
            <span>•</span>{" "}
            <span>
              Forgetting reflexive pronouns (
              <span className="text-foreground italic">me, te, se</span>).
            </span>
          </li>
          <li className="flex gap-2">
            <span>•</span>{" "}
            <span>
              Using <span className="text-red-500 font-medium">"estoy de"</span>{" "}
              instead of{" "}
              <span className="text-accent font-medium font-bold">
                "soy de"
              </span>{" "}
              for origin.
            </span>
          </li>
          <li className="flex gap-2">
            <span>•</span>{" "}
            <span>Writing nationalities with uppercase letters.</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default grammar_lesson_2;
