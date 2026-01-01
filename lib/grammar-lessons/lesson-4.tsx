"use client";
import type React from "react";
import { useState } from "react";

const grammar_lesson_4: React.FC = () => {
  const [reveals, setReveals] = useState<{ [key: string]: boolean }>({});

  const toggleReveal = (id: string) => {
    setReveals((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-16 pb-24">
      {/* 1. CUÁNTO */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground text-xl font-black shadow-lg">
            1
          </span>
          <h2 className="text-3xl font-bold text-foreground">
            Cuánto / Cuánta / Cuántos / Cuántas
          </h2>
        </div>
        <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Used to ask about <strong>quantity or price</strong>. These words
            are variable; they <strong>must agree in gender and number</strong>{" "}
            with the noun they refer to.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-3 bg-accent/5 rounded-lg border-l-4 border-accent">
              <p className="font-bold">¿Cuánto cuesta este libro?</p>
              <p className="text-sm text-muted-foreground">
                How much does this book cost?
              </p>
            </div>
            <div className="p-3 bg-accent/5 rounded-lg border-l-4 border-accent">
              <p className="font-bold">¿Cuántas manzanas quieres?</p>
              <p className="text-sm text-muted-foreground">
                How many apples do you want?
              </p>
            </div>
            <div className="p-3 bg-accent/5 rounded-lg border-l-4 border-accent">
              <p className="font-bold">¿Cuántos días vas a estar aquí?</p>
              <p className="text-sm text-muted-foreground">
                How many days will you be here?
              </p>
            </div>
            <div className="p-3 bg-accent/5 rounded-lg border-l-4 border-accent">
              <p className="font-bold">¿Cuánta agua bebes al día?</p>
              <p className="text-sm text-muted-foreground">
                How much water do you drink per day?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CUÁL */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground text-xl font-black shadow-lg">
            2
          </span>
          <h2 className="text-3xl font-bold text-foreground">Cuál / Cuáles</h2>
        </div>
        <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Used to <strong>choose from a set of options</strong> (Which / Which
            ones). It does not change with gender, but it does change for
            plural.
          </p>
          <div className="space-y-3">
            <div className="p-3 bg-muted/50 rounded-lg">
              <p className="font-bold italic">
                ¿Cuál es tu color favorito?{" "}
                <span className="text-muted-foreground font-normal">
                  — Which is your favorite color?
                </span>
              </p>
            </div>
            <div className="p-3 bg-muted/50 rounded-lg">
              <p className="font-bold italic">
                ¿Cuáles son tus libros preferidos?{" "}
                <span className="text-muted-foreground font-normal">
                  — Which ones are your favorite books?
                </span>
              </p>
            </div>
            <div className="p-3 bg-muted/50 rounded-lg">
              <p className="font-bold italic">
                ¿Cuál prefieres, té o café?{" "}
                <span className="text-muted-foreground font-normal">
                  — Which do you prefer, tea or coffee?
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUÉ */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground text-xl font-black shadow-lg">
            3
          </span>
          <h2 className="text-3xl font-bold text-foreground">Qué</h2>
        </div>
        <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Used to ask for a{" "}
            <strong>definition, explanation, or object</strong> (What).
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground font-medium pl-4">
            <li>
              ¿Qué es esto?{" "}
              <span className="text-muted-foreground font-normal">
                — What is this?
              </span>
            </li>
            <li>
              ¿Qué quieres comer?{" "}
              <span className="text-muted-foreground font-normal">
                — What do you want to eat?
              </span>
            </li>
            <li>
              ¿Qué haces hoy?{" "}
              <span className="text-muted-foreground font-normal">
                — What are you doing today?
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* 4. CUÁNDO */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground text-xl font-black shadow-lg">
            4
          </span>
          <h2 className="text-3xl font-bold text-foreground">Cuándo</h2>
        </div>
        <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
          <p className="text-muted-foreground">
            Used to ask about <strong>time, date, or moment</strong> (When).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-border bg-background shadow-sm">
              <p className="font-bold">¿Cuándo empieza la clase?</p>
              <p className="text-sm text-muted-foreground">
                When does the class start?
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-background shadow-sm">
              <p className="font-bold">¿Cuándo es tu cumpleaños?</p>
              <p className="text-sm text-muted-foreground">
                When is your birthday?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. QUIÉN */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground text-xl font-black shadow-lg">
            5
          </span>
          <h2 className="text-3xl font-bold text-foreground">
            Quién / Quiénes
          </h2>
        </div>
        <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Used to ask about a <strong>person or people</strong> (Who / Who
            plural).
          </p>
          <div className="space-y-3 pl-4 border-l-2 border-accent/20">
            <p className="font-bold">
              ¿Quién es ella?{" "}
              <span className="text-muted-foreground font-normal">
                — Who is she?
              </span>
            </p>
            <p className="font-bold">
              ¿Quiénes son tus amigos?{" "}
              <span className="text-muted-foreground font-normal">
                — Who are your friends?
              </span>
            </p>
            <p className="font-bold">
              ¿Quién llama por teléfono?{" "}
              <span className="text-muted-foreground font-normal">
                — Who is calling on the phone?
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* 6. DÓNDE */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground text-xl font-black shadow-lg">
            6
          </span>
          <h2 className="text-3xl font-bold text-foreground">Dónde</h2>
        </div>
        <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
          <p className="text-muted-foreground">
            Used to ask about <strong>place or location</strong> (Where).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-3 bg-secondary/20 rounded-lg text-center">
              <p className="font-bold italic">¿Dónde vives?</p>
              <p className="text-xs text-muted-foreground">
                Where do you live?
              </p>
            </div>
            <div className="p-3 bg-secondary/20 rounded-lg text-center">
              <p className="font-bold italic">¿Dónde está el baño?</p>
              <p className="text-xs text-muted-foreground">
                Where is the bathroom?
              </p>
            </div>
            <div className="p-3 bg-secondary/20 rounded-lg text-center">
              <p className="font-bold italic">¿Dónde trabajas?</p>
              <p className="text-xs text-muted-foreground">
                Where do you work?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. POR QUÉ */}
      <section className="space-y-6">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground text-xl font-black shadow-lg">
            7
          </span>
          <h2 className="text-3xl font-bold text-foreground">Por qué</h2>
        </div>
        <div className="p-6 rounded-2xl border border-border bg-card shadow-sm space-y-4">
          <p className="text-muted-foreground">
            Used to ask about <strong>reason or cause</strong> (Why).
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="font-black text-accent text-2xl">?</div>
              <div>
                <p className="font-bold">¿Por qué estudias español?</p>
                <p className="text-sm text-muted-foreground">
                  Why do you study Spanish?
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="font-black text-accent text-2xl">?</div>
              <div>
                <p className="font-bold">¿Por qué llegaste tarde?</p>
                <p className="text-sm text-muted-foreground">
                  Why did you arrive late?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE ELABORATION & RULES */}
      <section className="space-y-8 bg-accent/5 p-8 rounded-[2rem] border border-accent/20">
        <h2 className="text-2xl font-black text-foreground">
          Deep Dive: Grammar Elaborations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-bold text-accent">
              The Accent Rule (La Tilde)
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every interrogative word in Spanish carries a written accent when
              used in a question. This distinguishes <strong>¿Qué?</strong>{" "}
              (What?) from <strong>que</strong> (that/which) and{" "}
              <strong>¿Dónde?</strong> (Where?) from <strong>donde</strong>{" "}
              (where, relative).
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-accent">Prepositions in Questions</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              In Spanish, you cannot end a sentence with a preposition. If you
              want to ask "Where are you <strong>from</strong>?", the
              preposition moves to the front: <strong>¿De dónde eres?</strong>
            </p>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE MASTERY QUIZ */}
      <section className="p-10 rounded-[2.5rem] bg-foreground text-background dark:bg-card dark:text-foreground space-y-8">
        <h2 className="text-3xl font-black tracking-tight text-center sm:text-left">
          Comprehensive Mastery Quiz
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              id: "Q1",
              q: "How many apples do you want? (Agreement check)",
              a: "¿Cuántas manzanas quieres?",
            },
            {
              id: "Q2",
              q: "Which ones are your favorite books?",
              a: "¿Cuáles son tus libros preferidos?",
            },
            {
              id: "Q3",
              q: "What is this? (Asking for definition)",
              a: "¿Qué es esto?",
            },
            {
              id: "Q4",
              q: "When does the class start?",
              a: "¿Cuándo empieza la clase?",
            },
            {
              id: "Q5",
              q: "Who (plural) are your friends?",
              a: "¿Quiénes son tus amigos?",
            },
            { id: "Q6", q: "Where do you work?", a: "¿Dónde trabajas?" },
            {
              id: "Q7",
              q: "Why did you arrive late?",
              a: "¿Por qué llegaste tarde?",
            },
            {
              id: "Q8",
              q: "How much water do you drink per day? (Fem/Sing agreement)",
              a: "¿Cuánta agua bebes al día?",
            },
            {
              id: "Q9",
              q: "Who is calling on the phone?",
              a: "¿Quién llama por teléfono?",
            },
            {
              id: "Q10",
              q: "Where is the bathroom?",
              a: "¿Dónde está el baño?",
            },
            {
              id: "Q11",
              q: "Which do you prefer, tea or coffee?",
              a: "¿Cuál prefieres, té o café?",
            },
            {
              id: "Q12",
              q: "How much does this book cost?",
              a: "¿Cuánto cuesta este libro?",
            },
          ].map((item, idx) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-background/10 border border-background/20 space-y-3"
            >
              <p className="font-bold text-sm">
                Question {idx + 1}: {item.q}
              </p>
              <button
                onClick={() => toggleReveal(item.id)}
                className="w-full py-2 bg-accent text-accent-foreground text-xs font-black rounded-lg uppercase tracking-tighter"
              >
                {reveals[item.id] ? item.a : "Check Answer"}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default grammar_lesson_4;
