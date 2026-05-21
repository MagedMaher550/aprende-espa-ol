"use client";
import type React from "react";

const grammar_lesson_41: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <main className="space-y-12">
          <section className="space-y-6">
            <div className="rounded-[32px] border border-border/70 bg-muted/10 p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">1. Conjugation Rules</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                Very few irregular verbs make the imperfect one of the simplest past tenses.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="rounded-[28px] border border-border/70 bg-muted/5 p-5 shadow-sm transition-all duration-200 hover:border-border hover:bg-muted/15 sm:p-6">
                <h3 className="text-lg font-semibold">-AR Verbs</h3>
                <p className="mt-2 text-sm italic text-muted-foreground">
                  Remove <span className="font-mono">-ar</span> and add:
                </p>
                <div className="mt-5 space-y-2 text-sm">
                  {[
                    ["Yo", "-aba"],
                    ["Tú", "-abas"],
                    ["Él / Ella / Usted", "-aba"],
                    ["Nosotros", "-ábamos"],
                    ["Vosotros", "-abais"],
                    ["Ellos / Ustedes", "-aban"],
                  ].map(([person, ending]) => (
                    <div key={person} className="flex items-center justify-between gap-4 rounded-3xl border border-border/60 bg-background/80 px-4 py-3">
                      <dt className="text-sm text-muted-foreground">{person}</dt>
                      <dd className="text-sm font-mono text-foreground">{ending}</dd>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[28px] border border-border/70 bg-muted/5 p-5 shadow-sm transition-all duration-200 hover:border-border hover:bg-muted/15 sm:p-6">
                <h3 className="text-lg font-semibold">-ER / -IR Verbs</h3>
                <p className="mt-2 text-sm italic text-muted-foreground">
                  Remove <span className="font-mono">-er</span> or <span className="font-mono">-ir</span> and add:
                </p>
                <div className="mt-5 space-y-2 text-sm">
                  {[
                    ["Yo", "-ía"],
                    ["Tú", "-ías"],
                    ["Él / Ella / Usted", "-ía"],
                    ["Nosotros", "-íamos"],
                    ["Vosotros", "-íais"],
                    ["Ellos / Ustedes", "-ían"],
                  ].map(([person, ending]) => (
                    <div key={person} className="flex items-center justify-between gap-4 rounded-3xl border border-border/60 bg-background/80 px-4 py-3">
                      <dt className="text-sm text-muted-foreground">{person}</dt>
                      <dd className="text-sm font-mono text-foreground">{ending}</dd>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <article className="rounded-[32px] border border-border/70 bg-muted/5 p-5 shadow-sm transition-all duration-200 hover:border-border hover:bg-muted/15 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold">Irregular Verbs (only three)</h3>
                <p className="text-sm italic text-muted-foreground sm:ml-4">
                  The only true irregulars are <b>ir</b>, <b>ser</b>, and <b>ver</b>.
                </p>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-border/60 bg-background/80 p-4">
                  <p className="text-sm font-semibold">Ir — ir</p>
                  <table className="mt-4 w-full text-sm text-left">
                    <tbody className="divide-y divide-border">
                      {[
                        ["Yo", "iba"],
                        ["Tú", "ibas"],
                        ["Él / Ella / Usted", "iba"],
                        ["Nosotros", "íbamos"],
                        ["Vosotros", "ibais"],
                        ["Ellos / Ustedes", "iban"],
                      ].map(([person, conjugation]) => (
                        <tr
                          key={person}
                          className="transition-colors duration-200 hover:bg-muted/10"
                        >
                          <td className="whitespace-nowrap px-3 py-2 text-sm text-muted-foreground">{person}</td>
                          <td className="px-3 py-2 font-mono text-sm">{conjugation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="mt-4 text-sm italic text-muted-foreground">
                    Ej: Yo iba a la escuela todos los días.
                  </p>
                </div>

                <div className="rounded-3xl border border-border/60 bg-background/80 p-4">
                  <p className="text-sm font-semibold">Ser — To be</p>
                  <table className="mt-4 w-full text-sm text-left">
                    <tbody className="divide-y divide-border">
                      {[
                        ["Yo", "era"],
                        ["Tú", "eras"],
                        ["Él / Ella / Usted", "era"],
                        ["Nosotros", "éramos"],
                        ["Vosotros", "erais"],
                        ["Ellos / Ustedes", "eran"],
                      ].map(([person, conjugation]) => (
                        <tr
                          key={person}
                          className="transition-colors duration-200 hover:bg-muted/10"
                        >
                          <td className="whitespace-nowrap px-3 py-2 text-sm text-muted-foreground">{person}</td>
                          <td className="px-3 py-2 font-mono text-sm">{conjugation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="mt-4 text-sm italic text-muted-foreground">
                    Ej: Cuando era niño, jugaba mucho.
                  </p>
                </div>

                <div className="rounded-3xl border border-border/60 bg-background/80 p-4">
                  <p className="text-sm font-semibold">Ver — ver</p>
                  <table className="mt-4 w-full text-sm text-left">
                    <tbody className="divide-y divide-border">
                      {[
                        ["Yo", "veía"],
                        ["Tú", "veías"],
                        ["Él / Ella / Usted", "veía"],
                        ["Nosotros", "veíamos"],
                        ["Vosotros", "veíais"],
                        ["Ellos / Ustedes", "veían"],
                      ].map(([person, conjugation]) => (
                        <tr
                          key={person}
                          className="transition-colors duration-200 hover:bg-muted/10"
                        >
                          <td className="whitespace-nowrap px-3 py-2 text-sm text-muted-foreground">{person}</td>
                          <td className="px-3 py-2 font-mono text-sm">{conjugation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="mt-4 text-sm italic text-muted-foreground">
                    Ej: Yo veía la televisión cada tarde.
                  </p>
                </div>
              </div>
            </article>

            <p className="text-sm italic text-muted-foreground">
              Irregular verbs: only three are irregular in the imperfect.
            </p>
          </section>

          <section className="space-y-6">
            <div className="rounded-[32px] border border-border/70 bg-muted/10 p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">2. Uses of El Imperfecto</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                The imperfect focuses on background, habits, descriptions, ongoing actions, and simultaneous events.
              </p>
            </div>

            <div className="grid gap-6 xl:grid-cols-3">
              <article className="rounded-[28px] border border-border/70 bg-white/5 p-5 shadow-sm transition-all duration-200 hover:border-border hover:bg-white/10 sm:p-6">
                <h3 className="text-lg font-semibold">Habitual Actions</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Used for repeated or routine actions. Often appears with frequency words.
                </p>
                <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/60 bg-background/70 px-3 py-2">siempre — always</div>
                  <div className="rounded-2xl border border-border/60 bg-background/70 px-3 py-2">todos los días — every day</div>
                  <div className="rounded-2xl border border-border/60 bg-background/70 px-3 py-2">normalmente — normally</div>
                  <div className="rounded-2xl border border-border/60 bg-background/70 px-3 py-2">muchas veces — many times</div>
                </div>
              </article>

              <article className="rounded-[28px] border border-border/70 bg-white/5 p-5 shadow-sm transition-all duration-200 hover:border-border hover:bg-white/10 sm:p-6">
                <h3 className="text-lg font-semibold">Descriptions & Background</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  People, places, weather, time, age, emotions — think of painting the scene.
                </p>
                <ul className="mt-4 list-disc list-inside text-sm space-y-2 text-foreground">
                  <li>Mi profesor tenía barba. → My teacher had a beard.</li>
                  <li>La casa era blanca y grande. → The house was white and big.</li>
                  <li>Ella tenía ojos verdes. → She had green eyes.</li>
                  <li>Yo estaba cansado. → I was tired.</li>
                  <li>Nosotros estábamos felices. → We were happy.</li>
                  <li>Hacía calor. → It was hot.</li>
                  <li>Llovía mucho. → It rained a lot.</li>
                  <li>Eran las ocho. → It was eight o'clock.</li>
                  <li>Yo tenía diez años. → I was ten years old.</li>
                </ul>
              </article>

              <article className="rounded-[28px] border border-border/70 bg-white/5 p-5 shadow-sm transition-all duration-200 hover:border-border hover:bg-white/10 sm:p-6">
                <h3 className="text-lg font-semibold">Actions in Progress & Simultaneous Actions</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Used for ongoing actions (was doing) and when two actions happen at the same time (mientras = while).
                </p>
                <ul className="mt-4 list-disc list-inside text-sm space-y-2">
                  <li>Yo estudiaba cuando llamaste. → I was studying when you called.</li>
                  <li>Mientras yo estudiaba, mi hermano escuchaba música. → While I was studying, my brother listened to music.</li>
                </ul>
              </article>
            </div>
          </section>

          <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-[28px] border border-border/70 bg-muted/5 p-5 shadow-sm transition-all duration-200 hover:border-border hover:bg-muted/15 sm:p-6">
              <h3 className="text-lg font-semibold">Compare: Imperfect vs Preterite</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                The imperfect describes habits or background; the preterite describes specific completed events.
              </p>
              <ul className="mt-4 list-disc list-inside text-sm space-y-2">
                <li><b>Imperfect:</b> Yo jugaba fútbol todos los sábados. — (habit)</li>
                <li><b>Preterite:</b> Yo jugué fútbol ayer. — (one completed action)</li>
                <li className="italic">Use imperfect for repeated/routine or background; use preterite for completed, bounded events.</li>
              </ul>
            </article>

            <article className="rounded-[28px] border border-border/70 bg-muted/5 p-5 shadow-sm transition-all duration-200 hover:border-border hover:bg-muted/15 sm:p-6">
              <h3 className="text-lg font-semibold">Quick Reference</h3>
              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <div className="rounded-2xl border border-border/60 bg-background/80 p-3">
                  <p className="font-semibold">-AR endings</p>
                  <p className="mt-2 font-mono text-[0.95rem]">-aba, -abas, -aba, -ábamos, -abais, -aban</p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/80 p-3">
                  <p className="font-semibold">-ER / -IR endings</p>
                  <p className="mt-2 font-mono text-[0.95rem]">-ía, -ías, -ía, -íamos, -íais, -ían</p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/80 p-3">
                  <p className="font-semibold">Irregulars</p>
                  <p className="mt-2 font-mono text-[0.95rem]">ir: iba… • ser: era… • ver: veía…</p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/80 p-3">
                  <p className="font-semibold">Signals</p>
                  <p className="mt-2 text-[0.85rem] text-muted-foreground">siempre, a menudo, muchas veces, normalmente, mientras</p>
                </div>
              </div>
            </article>
          </section>

          <section className="space-y-4">
            <div className="rounded-[32px] border border-border/70 bg-muted/10 p-5 shadow-sm sm:p-6">
              <h2 className="text-2xl font-bold tracking-tight">Practice</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Write 3–5 sentences using the imperfect: one habitual, one descriptive, one simultaneous.
              </p>
            </div>
            <textarea
              className="w-full min-h-[220px] rounded-[28px] border border-border/70 bg-background/90 p-5 text-sm leading-6 text-foreground outline-none transition-shadow duration-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 resize-vertical"
              placeholder="Escribe aquí..."
            />
          </section>
        </main>
      </div>
    </div>
  );
};

export default grammar_lesson_41;
