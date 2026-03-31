"use client";
import React, { useState } from "react";
import {
  CheckCircle2,
  AlertCircle,
  BookOpen,
  Zap,
  Layout,
} from "lucide-react";

const grammar_lesson_38 = () => {
  const [inputs, setInputs] = useState<{ [k: string]: string }>({});
  const [feedback, setFeedback] = useState<{ [k: string]: string }>({});

  const handle = (id: string, val: string) => {
    setInputs((p) => ({ ...p, [id]: val.toLowerCase().trim() }));
  };

  const check = (id: string, correct: string) => {
    setFeedback((p) => ({
      ...p,
      [id]:
        inputs[id] === correct.toLowerCase().trim()
          ? "correct"
          : "incorrect",
    }));
  };

  // ✅ Styled Example Component
  const Example = ({
    original,
    result,
  }: {
    original: string;
    result: string;
  }) => (
    <div className="p-3 bg-muted/30 border border-border rounded-lg text-sm">
      <p className="opacity-70">{original}</p>
      <p className="font-semibold text-indigo-500 mt-1">{result}</p>
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-40 bg-background text-foreground">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">

        {/* MAIN */}
        <div className="xl:col-span-2 space-y-12">

          {/* CORE IDEA */}
          <section>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Layout className="text-indigo-500" /> Core Idea
            </h2>

            <div className="p-6 bg-card border rounded-2xl mt-4 text-sm">
              Avoid repetition using object pronouns.
              <div className="mt-3">
                <Example
                  original="Doy el libro a María"
                  result="Se lo doy"
                />
              </div>
            </div>
          </section>

          {/* CD */}
          <section>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <BookOpen className="text-sky-500" /> Complemento Directo (CD)
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="p-5 bg-card border rounded-xl text-sm">
                Receives the action directly.
                <p className="italic mt-2">¿Qué? / ¿A quién?</p>
              </div>

              <div className="p-5 bg-card border rounded-xl">
                <p className="font-bold text-xs mb-2">Pronouns</p>
                <div className="grid grid-cols-2 text-sm">
                  <div>
                    <p className="font-bold">Singular</p>
                    <p>me</p>
                    <p>te</p>
                    <p>lo / la</p>
                  </div>
                  <div>
                    <p className="font-bold">Plural</p>
                    <p>nos</p>
                    <p>os</p>
                    <p>los / las</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ✅ FIXED EXAMPLES */}
            <div className="grid sm:grid-cols-2 gap-2 mt-4">
              <Example original="Veo a Juan" result="Lo veo" />
              <Example original="Veo a Ana" result="La veo" />
              <Example original="Como las frutas" result="Las como" />
              <Example original="Compro el coche" result="Lo compro" />
            </div>
          </section>

          {/* CID */}
          <section>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <BookOpen className="text-emerald-500" /> Complemento Indirecto (CID)
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="p-5 bg-card border rounded-xl text-sm">
                Person receiving benefit.
                <p className="italic mt-2">¿A quién? / ¿Para quién?</p>
              </div>

              <div className="p-5 bg-card border rounded-xl">
                <p className="font-bold text-xs mb-2">Pronouns</p>
                <div className="grid grid-cols-2 text-sm">
                  <div>
                    <p className="font-bold">Singular</p>
                    <p>me</p>
                    <p>te</p>
                    <p>le</p>
                  </div>
                  <div>
                    <p className="font-bold">Plural</p>
                    <p>nos</p>
                    <p>os</p>
                    <p>les</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ✅ FIXED EXAMPLES */}
            <div className="grid sm:grid-cols-2 gap-2 mt-4">
              <Example
                original="Doy un regalo a María"
                result="Le doy un regalo"
              />
              <Example
                original="Escribo a mis amigos"
                result="Les escribo"
              />
              <Example
                original="Traigo comida a ti"
                result="Te traigo comida"
              />
            </div>
          </section>

          {/* DIFFERENCE */}
          <section className="p-6 bg-muted/20 border rounded-2xl">
            <h3 className="font-bold">Key Difference</h3>
            <p className="text-sm mt-2">
              CD → receives action <br />
              CID → receives benefit
            </p>
          </section>

          {/* VERB BEHAVIOR */}
          <section>
            <h2 className="text-xl font-bold flex gap-2 items-center">
              <Zap className="text-amber-500" /> Verb Behavior
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="p-5 bg-card border rounded-xl">
                <p className="font-bold text-sm mb-2">CD Verbs</p>
                <ul className="text-sm italic">
                  <li>esperar → <span className="text-indigo-500">Te espero</span></li>
                  <li>querer → <span className="text-indigo-500">La quiero</span></li>
                  <li>llamar → <span className="text-indigo-500">Lo llamo</span></li>
                </ul>
              </div>

              <div className="p-5 bg-card border rounded-xl">
                <p className="font-bold text-sm mb-2">CID Verbs</p>
                <ul className="text-sm italic">
                  <li>dar → <span className="text-indigo-500">Le doy</span></li>
                  <li>decir → <span className="text-indigo-500">Le digo</span></li>
                  <li>enviar → <span className="text-indigo-500">Le envío</span></li>
                </ul>
              </div>
            </div>
          </section>

          {/* TRANSFORMATIONS */}
          <section>
            <h3 className="font-bold mb-4">Full Transformations</h3>

            <div className="grid sm:grid-cols-2 gap-2">
              <Example
                original="La madre cocina la cena para nosotros"
                result="La madre nos la cocina"
              />
              <Example
                original="María hace los deberes a ti"
                result="María te los hace"
              />
              <Example
                original="El abuelo compra caramelos a sus nietos"
                result="El abuelo se los compra"
              />
              <Example
                original="Escribo una carta a ella"
                result="Se la escribo"
              />
            </div>
          </section>

          {/* PRACTICE */}
          <section>
            <h2 className="text-2xl font-bold text-center mb-6">
              Practice (Full)
            </h2>

            {[
              { id: "1", q: "Doy el libro a María", a: "se lo doy" },
              { id: "2", q: "Envío cartas a ellos", a: "les envío cartas" },
              { id: "3", q: "Veo a Juan", a: "lo veo" },
              { id: "4", q: "Escribo una carta a ella", a: "se la escribo" },
            ].map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-3 p-4 border rounded-xl bg-card mb-3"
              >
                <span className="text-sm">{item.q}</span>

                <div className="flex gap-2">
                  <input
                    className="flex-1 px-2 py-1 text-xs border rounded bg-muted"
                    onChange={(e) => handle(item.id, e.target.value)}
                  />
                  <button onClick={() => check(item.id, item.a)}>
                    <CheckCircle2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </section>

          {/* SUMMARY */}
          <footer className="p-8 bg-indigo-600 text-white rounded-2xl text-center">
            CD → lo/la/los/las <br />
            CID → me/te/le/nos/os/les <br />
            Order → CID + CD <br />
            le → se
          </footer>
        </div>

        {/* SIDEBAR — FIXED */}
        <div className="xl:col-span-1 space-y-6 xl:sticky xl:top-24 h-fit">

          <div className="p-6 bg-card border rounded-2xl">
            <h3 className="font-bold mb-3 text-sm">Pronouns</h3>

            <div className="text-xs space-y-3">
              <div>
                <p className="text-sky-500 font-semibold">CD</p>
                <p>lo / la / los / las</p>
              </div>

              <div>
                <p className="text-emerald-500 font-semibold">CID</p>
                <p>me / te / le / nos / os / les</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-indigo-600 text-white rounded-2xl">
            <h3 className="text-sm font-bold mb-3">Rules</h3>
            <ul className="text-xs space-y-1">
              <li>Order → CID + CD</li>
              <li>le / les → se</li>
              <li>Before verb OR attached</li>
            </ul>
          </div>

          <div className="p-6 bg-card border rounded-2xl">
            <h3 className="text-sm font-bold mb-3">Quick Examples</h3>
            <ul className="text-xs italic space-y-1">
              <li>Se lo doy</li>
              <li>Te la envío</li>
              <li>Se las mando</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default grammar_lesson_38;