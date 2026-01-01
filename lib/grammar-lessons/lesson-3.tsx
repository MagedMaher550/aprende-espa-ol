'use client'
import type React from "react";
import { useState } from "react";

const grammar_lesson_3: React.FC = () => {
  const [reveals, setReveals] = useState<{ [key: string]: boolean }>({});

  const toggleReveal = (id: string) => {
    setReveals((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-12 pb-20">
      {/* SECTION 1: GENDER RULES */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
            1
          </span>
          <h2 className="text-2xl font-bold text-foreground">
            Gender Rules (Masculine & Feminine)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Masculine Card */}
          <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
            <div className="bg-blue-500/10 px-4 py-3 border-b border-border font-bold text-blue-600 dark:text-blue-400 flex justify-between">
              <span>Masculine (El)</span>
              <span className="text-xs uppercase tracking-widest opacity-70 italic">
                -o, -or, -aje, -ma
              </span>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase mb-1">
                  Common Patterns
                </p>
                <ul className="text-sm space-y-1">
                  <li>
                    <span className="font-bold">Most end in -o:</span> chico,
                    toro
                  </li>
                  <li>
                    <span className="font-bold">-or / -aje:</span> profesor,
                    paisaje, mensaje
                  </li>
                  <li>
                    <span className="font-bold">-ma (Greek):</span> sistema,
                    tema, problema
                  </li>
                </ul>
              </div>
              <div className="pt-2 border-t border-border/50">
                <p className="text-xs font-bold text-amber-600 uppercase mb-1">
                  ⚠️ Tricky -a Endings
                </p>
                <p className="text-sm italic">
                  el día, el mapa, el planeta, el sofá, el agua
                </p>
              </div>
            </div>
          </div>

          {/* Feminine Card */}
          <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
            <div className="bg-pink-500/10 px-4 py-3 border-b border-border font-bold text-pink-600 dark:text-pink-400 flex justify-between">
              <span>Feminine (La)</span>
              <span className="text-xs uppercase tracking-widest opacity-70 italic">
                -a, -ción, -dad, -is
              </span>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase mb-1">
                  Common Patterns
                </p>
                <ul className="text-sm space-y-1">
                  <li>
                    <span className="font-bold">Most end in -a:</span> chica,
                    vaca
                  </li>
                  <li>
                    <span className="font-bold">-ción / -dad / -tud:</span>{" "}
                    canción, ciudad, juventud
                  </li>
                  <li>
                    <span className="font-bold">-is / -umbre:</span> crisis,
                    costumbre
                  </li>
                </ul>
              </div>
              <div className="pt-2 border-t border-border/50">
                <p className="text-xs font-bold text-amber-600 uppercase mb-1">
                  ⚠️ Tricky -o Endings
                </p>
                <p className="text-sm italic">
                  la foto, la moto, la mano, la radio
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Gender Neutral Box */}
        <div className="p-4 rounded-lg border border-border bg-muted/30">
          <p className="text-sm font-bold text-foreground mb-1">
            Common Gender (el/la)
          </p>
          <p className="text-sm text-muted-foreground">
            Words ending in{" "}
            <span className="text-foreground font-medium">-ista</span> or{" "}
            <span className="text-foreground font-medium">-ente</span> usually
            use the same form for both genders:{" "}
            <i>el/la periodista, el/la estudiante.</i>
          </p>
        </div>
      </section>

      {/* SECTION 2: PLURALS & ARTICLES */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
            2
          </span>
          <h2 className="text-2xl font-bold text-foreground">
            Pluralization & Articles
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Plural Rules</h3>
            <div className="rounded-xl border border-border bg-card divide-y divide-border overflow-hidden">
              <div className="p-3 flex justify-between text-sm">
                <span>
                  Vowel + <span className="font-bold text-accent">-s</span>
                </span>
                <span className="italic text-muted-foreground">
                  libro → libros
                </span>
              </div>
              <div className="p-3 flex justify-between text-sm">
                <span>
                  Consonant + <span className="font-bold text-accent">-es</span>
                </span>
                <span className="italic text-muted-foreground">
                  papel → papeles
                </span>
              </div>
              <div className="p-3 flex justify-between text-sm bg-amber-500/5">
                <span>
                  <span className="font-bold text-amber-600">z → c</span> + -es
                </span>
                <span className="italic text-muted-foreground">
                  pez → peces
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Articles</h3>
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[300px]">
                  <thead className="bg-muted/50 border-b border-border text-xs uppercase tracking-tighter">
                    <tr>
                      <th className="px-4 py-2">Type</th>
                      <th className="px-4 py-2">M. Sing.</th>
                      <th className="px-4 py-2">F. Sing.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-sm">
                    <tr>
                      <td className="px-4 py-3 font-medium">Definite</td>
                      <td className="px-4 py-3 text-accent font-bold">El</td>
                      <td className="px-4 py-3 text-accent font-bold">La</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Indefinite</td>
                      <td className="px-4 py-3 text-accent font-bold">Un</td>
                      <td className="px-4 py-3 text-accent font-bold">Una</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PRACTICE EXERCISES */}
      <section className="p-6 rounded-xl bg-secondary/30 border border-border space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">
            Interactive Practice
          </h2>
          <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-bold uppercase">
            Exercise 3.A
          </span>
        </div>

        <div className="space-y-4">
          {[
            {
              id: "l3q1",
              q: "1. ¿Cuál es correcto? — (El / La) día es largo.",
              a: "El día (Masculine Exception)",
            },
            {
              id: "l3q2",
              q: "2. ¿Cuál es correcto? — (La / El) mano derecha.",
              a: "La mano (Feminine Exception)",
            },
            { id: "l3q3", q: "3. Plural: un pez → _________", a: "unos peces" },
            {
              id: "l3q4",
              q: "4. Femenino de 'doctor' → _________",
              a: "doctora",
            },
            {
              id: "l3q5",
              q: "5. Plural: una canción → _________",
              a: "unas canciones",
            },
          ].map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-background rounded-lg border border-border shadow-sm"
            >
              <span className="text-sm font-medium leading-tight">
                {item.q}
              </span>
              <button
                onClick={() => toggleReveal(item.id)}
                className="px-4 py-2 text-xs font-bold text-accent border border-accent/20 rounded-md hover:bg-accent/5 transition-colors shrink-0 uppercase tracking-tighter"
              >
                {reveals[item.id] ? item.a : "Check Answer"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* COMMON PITFALLS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5">
          <h4 className="text-red-500 font-bold text-sm mb-2 flex items-center gap-2">
            <span>🚫</span> Common Pitfalls
          </h4>
          <ul className="text-xs space-y-1 text-muted-foreground">
            <li>• Using "La" for -a words like "día" or "mapa".</li>
            <li>• Forgetting the z → c change in plurals.</li>
            <li>• Not matching the article gender to the noun.</li>
          </ul>
        </div>
        <div className="p-4 rounded-xl border border-accent/20 bg-accent/5">
          <h4 className="text-accent font-bold text-sm mb-2 flex items-center gap-2">
            <span>🚀</span> Next Steps
          </h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Create 10 sentences using both masculine and feminine nouns.
            Practice pluralizing 15 random objects in your room.
          </p>
        </div>
      </section>
    </div>
  );
};

export default grammar_lesson_3;
