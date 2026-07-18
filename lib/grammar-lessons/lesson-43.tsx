"use client";

import type React from "react";
import { useState } from "react";
import { ArrowRight, CheckCircle2, HelpCircle, Sparkles } from "lucide-react";

type Feedback = "correct" | "incorrect" | null;

const normalize = (value: string) => value
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[¿?¡!.,;]/g, "")
  .replace(/\s+/g, " ")
  .trim();

const endings = [
  ["Yo", "-ía", "hablaría"], ["Tú", "-ías", "hablarías"],
  ["Él / Ella / Usted", "-ía", "hablaría"], ["Nosotros", "-íamos", "hablaríamos"],
  ["Vosotros", "-íais", "hablaríais"], ["Ellos / Ustedes", "-ían", "hablarían"],
];

const regularForms = [
  ["Yo", "hablaría", "comería", "viviría"], ["Tú", "hablarías", "comerías", "vivirías"],
  ["Él", "hablaría", "comería", "viviría"], ["Nosotros", "hablaríamos", "comeríamos", "viviríamos"],
  ["Vosotros", "hablaríais", "comeríais", "viviríais"], ["Ellos", "hablarían", "comerían", "vivirían"],
];

const irregularStems = [
  ["haber", "habr-"], ["caber", "cabr-"], ["saber", "sabr-"], ["poder", "podr-"],
  ["querer", "querr-"], ["poner", "pondr-"], ["vender", "vendr-"], ["salir", "saldr-"],
  ["valer", "valdr-"], ["tener", "tendr-"], ["hacer", "har-"], ["decir", "dir-"],
];

const practiceItems = [
  { id: "wish-1", prompt: "I would like a coffee.", answer: ["Me gustaría un café", "Querría un café"] },
  { id: "wish-2", prompt: "We would like to visit Spain.", answer: "Nos gustaría visitar España" },
  { id: "advice-1", prompt: "Yo que tú ____________ más agua. (ver / beber / salir)", answer: "bebería" },
  { id: "polite-1", prompt: "Rewrite politely: Ayúdame.", answer: "¿Podrías ayudarme?" },
  { id: "polite-2", prompt: "Rewrite politely: Dame tu número.", answer: "¿Podrías darme tu número?" },
  { id: "guess-1", prompt: "He was probably at home.", answer: "Estaría en casa" },
  { id: "a-1", prompt: "Yo ________ un coche nuevo.", options: "a) compraré   b) compraría   c) compraba", answer: "compraría" },
  { id: "a-2", prompt: "¿________ ayudarme?", options: "a) Puedes   b) Podrías   c) Pudiste", answer: "podrías" },
  { id: "a-3", prompt: "Nosotros ________ viajar por Europa.", options: "a) viajaríamos   b) viajaremos   c) viajábamos", answer: "viajaríamos" },
  { id: "a-4", prompt: "Ella ________ más tiempo.", options: "a) tendría   b) tiene   c) tuvo", answer: "tendría" },
  { id: "a-5", prompt: "Yo que tú ________ más.", options: "a) estudiaría   b) estudiaré   c) estudio", answer: "estudiaría" },
  { id: "b-1", prompt: "Yo (hacer)", answer: "haría" },
  { id: "b-2", prompt: "Nosotros (tener)", answer: "tendríamos" },
  { id: "b-3", prompt: "Ellos (venir)", answer: "vendrían" },
  { id: "b-4", prompt: "Tú (poder)", answer: "podrías" },
  { id: "b-5", prompt: "Usted (decir)", answer: "diría" },
  { id: "c-1", prompt: "I would like to travel.", answer: "Me gustaría viajar" },
  { id: "c-2", prompt: "Could you help me?", answer: "¿Podrías ayudarme?" },
  { id: "c-3", prompt: "If I were you, I would study.", answer: "Yo que tú estudiaría" },
  { id: "c-4", prompt: "They would come tomorrow.", answer: "Vendrían mañana" },
  { id: "c-5", prompt: "She would have more money.", answer: "Tendría más dinero" },
];

const grammar_lesson_43: React.FC = () => {
  const [userInputs, setUserInputs] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<Record<string, Feedback>>({});

  const check = (id: string, answer: string | string[]) => {
    const answers = Array.isArray(answer) ? answer : [answer];
    setFeedback((current) => ({ ...current, [id]: answers.some((item) => normalize(item) === normalize(userInputs[id] ?? "")) ? "correct" : "incorrect" }));
  };

  const inputClass = (id: string) => `w-full rounded-xl border px-3 py-2 text-sm outline-none transition ${
    feedback[id] === "correct" ? "border-emerald-500 bg-emerald-500/5" : feedback[id] === "incorrect" ? "border-rose-500 bg-rose-500/5" : "border-border bg-background focus:border-indigo-500"
  }`;

  const practice = (items: typeof practiceItems) => <div className="mt-5 grid gap-4 md:grid-cols-2">{items.map((item) => <div key={item.id} className="grid gap-2 rounded-2xl border border-border/60 bg-background/70 p-4"><div><p className="text-sm font-semibold">{item.prompt}</p>{item.options && <p className="mt-1 text-xs text-muted-foreground">{item.options}</p>}</div><div className="flex flex-col gap-2 sm:flex-row"><input value={userInputs[item.id] ?? ""} onChange={(event) => setUserInputs((current) => ({ ...current, [item.id]: event.target.value }))} className={inputClass(item.id)} placeholder="Answer" /><button type="button" onClick={() => check(item.id, item.answer)} className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-600 bg-indigo-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-indigo-700"><CheckCircle2 size={16} />Check</button></div></div>)}</div>;

  return <div className="w-full overflow-x-hidden bg-background text-foreground"><div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8"><main className="space-y-12">
    <section className="rounded-[32px] border border-border/70 bg-muted/10 p-6 shadow-sm sm:p-8"><div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between"><div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-widest text-indigo-600">El Condicional</p><h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">The conditional tense: wishes, advice, polite requests, and hypotheses</h2><p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">Use <b>el condicional simple</b> to talk about what would happen in certain circumstances. In English, it usually means <b>would</b>, <b>could</b>, or <b>might</b>.</p></div><Sparkles className="hidden text-indigo-600 md:block" size={42} /></div><div className="mt-6 grid gap-2 text-sm sm:grid-cols-2"><p className="rounded-2xl border border-border/60 bg-background/80 px-4 py-3">• Form the conditional tense.</p><p className="rounded-2xl border border-border/60 bg-background/80 px-4 py-3">• Recognize regular and irregular verbs.</p><p className="rounded-2xl border border-border/60 bg-background/80 px-4 py-3">• Express wishes, advice, and hypotheses.</p><p className="rounded-2xl border border-border/60 bg-background/80 px-4 py-3">• Use it in everyday conversations.</p></div></section>

    <section className="space-y-6"><div className="flex items-center gap-3 border-b-2 border-indigo-600 pb-2"><ArrowRight className="shrink-0 text-indigo-600" /><h2 className="text-xl font-black uppercase tracking-tight md:text-2xl">1. Formation and regular verbs</h2></div><div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]"><article className="rounded-[28px] border border-border/70 bg-muted/5 p-5 shadow-sm sm:p-6"><h3 className="text-lg font-semibold">Infinitive + Conditional Ending</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">Unlike most Spanish tenses, do not remove <b>-ar</b>, <b>-er</b>, or <b>-ir</b>. Add the ending to the entire infinitive.</p><div className="mt-5 space-y-2 text-sm"><p className="rounded-2xl border border-border/60 bg-background/80 px-4 py-3">Viajaría a España. — I would travel to Spain.</p><p className="rounded-2xl border border-border/60 bg-background/80 px-4 py-3">Compraría un coche. — I would buy a car.</p><p className="rounded-2xl border border-border/60 bg-background/80 px-4 py-3">Podría ayudarte. — I could help you.</p></div></article><article className="rounded-[28px] border border-border/70 bg-muted/5 p-5 shadow-sm sm:p-6"><h3 className="text-lg font-semibold">One Set of Endings</h3><div className="mt-5 grid gap-2 sm:grid-cols-2">{endings.map(([person, ending, example]) => <div key={person} className="flex items-center justify-between gap-3 rounded-2xl border border-border/60 bg-background/80 px-4 py-3"><span className="text-sm text-muted-foreground">{person}</span><span className="font-mono text-sm font-semibold">{ending} · {example}</span></div>)}</div></article></div><article className="rounded-[28px] border border-border/70 bg-muted/5 p-5 shadow-sm sm:p-6"><h3 className="text-lg font-semibold">Regular Verb Examples</h3><div className="mt-5 overflow-x-auto"><table className="w-full min-w-[620px] text-left text-sm"><thead className="border-b border-border text-muted-foreground"><tr>{["Subject", "Hablar", "Comer", "Vivir"].map((item) => <th key={item} className="px-3 py-2">{item}</th>)}</tr></thead><tbody className="divide-y divide-border/70">{regularForms.map((row) => <tr key={row[0]} className="transition-colors hover:bg-muted/10">{row.map((cell, index) => <td key={cell} className={`px-3 py-3 ${index ? "font-mono" : "font-semibold"}`}>{cell}</td>)}</tr>)}</tbody></table></div></article></section>

    <section className="space-y-6"><div className="flex items-center gap-3 border-b-2 border-indigo-600 pb-2"><ArrowRight className="shrink-0 text-indigo-600" /><h2 className="text-xl font-black uppercase tracking-tight md:text-2xl">2. Irregular verbs</h2></div><article className="rounded-[28px] border border-border/70 bg-muted/5 p-5 shadow-sm sm:p-6"><h3 className="text-lg font-semibold">Stem Changes Before the Ending</h3><p className="mt-2 text-sm text-muted-foreground">Some verbs change their stem before the conditional endings are added.</p><div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">{irregularStems.map(([verb, stem]) => <div key={verb} className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/80 px-4 py-3 text-sm"><span>{verb}</span><span className="font-mono font-semibold text-indigo-600">{stem}</span></div>)}</div></article></section>

    <section className="space-y-6"><div className="flex items-center gap-3 border-b-2 border-indigo-600 pb-2"><ArrowRight className="shrink-0 text-indigo-600" /><h2 className="text-xl font-black uppercase tracking-tight md:text-2xl">3. Uses of the conditional</h2></div><div className="grid gap-6 xl:grid-cols-2"><article className="rounded-[28px] border border-border/70 bg-muted/5 p-5 shadow-sm sm:p-6"><h3 className="text-lg font-semibold">A. Expressing Wishes (Deseos)</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">Use <b>gustar</b> very frequently.</p><div className="mt-4 space-y-2 text-sm"><p className="rounded-2xl border border-border/60 bg-background/80 px-4 py-3"><b>Me gustaría aprender español.</b><br /><span className="text-muted-foreground">I would like to learn Spanish.</span></p><p className="rounded-2xl border border-border/60 bg-background/80 px-4 py-3"><b>Nos gustaría viajar a México.</b><br /><span className="text-muted-foreground">We would like to travel to Mexico.</span></p></div>{practice(practiceItems.slice(0, 2))}</article><article className="rounded-[28px] border border-border/70 bg-muted/5 p-5 shadow-sm sm:p-6"><h3 className="text-lg font-semibold">B. Giving Advice (Consejos)</h3><p className="mt-2 text-sm leading-7 text-muted-foreground"><b>Yo que tú...</b> means “If I were you...”</p><div className="mt-4 space-y-2 text-sm"><p className="rounded-2xl border border-border/60 bg-background/80 px-4 py-3"><b>Yo que tú estudiaría más.</b><br /><span className="text-muted-foreground">If I were you, I would study more.</span></p><p className="rounded-2xl border border-border/60 bg-background/80 px-4 py-3"><b>Yo que tú no compraría ese coche.</b><br /><span className="text-muted-foreground">If I were you, I wouldn't buy that car.</span></p></div>{practice(practiceItems.slice(2, 3))}</article><article className="rounded-[28px] border border-border/70 bg-muted/5 p-5 shadow-sm sm:p-6"><h3 className="text-lg font-semibold">C. Making Polite Requests</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">The conditional makes a request less direct.</p><div className="mt-4 space-y-2 text-sm"><p className="rounded-2xl border border-border/60 bg-background/80 px-4 py-3"><span className="line-through text-muted-foreground">Abre la puerta.</span><br /><b>¿Podrías abrir la puerta?</b> — Could you open the door?</p><p className="rounded-2xl border border-border/60 bg-background/80 px-4 py-3"><b>¿Podrías repetir?</b> — Could you repeat?<br /><b>¿Querrías venir con nosotros?</b> — Would you like to come with us?</p></div>{practice(practiceItems.slice(3, 5))}</article><article className="rounded-[28px] border border-border/70 bg-muted/5 p-5 shadow-sm sm:p-6"><h3 className="text-lg font-semibold">D. Expressing Probability (Hypotheses)</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">Use the conditional when making a guess about the past.</p><div className="mt-4 space-y-2 text-sm"><p className="rounded-2xl border border-border/60 bg-background/80 px-4 py-3"><b>Serían las ocho.</b> — It was probably eight o'clock.</p><p className="rounded-2xl border border-border/60 bg-background/80 px-4 py-3"><b>Estaría trabajando.</b> — He was probably working.</p><p className="rounded-2xl border border-border/60 bg-background/80 px-4 py-3"><b>Tendrían mucho sueño.</b> — They were probably very tired.</p></div>{practice(practiceItems.slice(5, 6))}</article></div></section>

    <section className="grid gap-6 lg:grid-cols-2"><article className="rounded-[28px] border border-border/70 bg-muted/5 p-5 shadow-sm sm:p-6"><h2 className="text-xl font-bold">4. Common Expressions</h2><div className="mt-5 grid gap-2 text-sm">{[["Me gustaría...", "I would like..."], ["Yo que tú...", "If I were you..."], ["¿Podrías...?", "Could you...?"], ["¿Querrías...?", "Would you like...?"], ["Sería buena idea...", "It would be a good idea..."], ["No lo haría.", "I wouldn't do it."]].map(([spanish, english]) => <div key={spanish} className="grid grid-cols-2 gap-3 rounded-2xl border border-border/60 bg-background/80 px-4 py-3"><b>{spanish}</b><span className="text-muted-foreground">{english}</span></div>)}</div></article><article className="rounded-[28px] border border-border/70 bg-muted/5 p-5 shadow-sm sm:p-6"><h2 className="text-xl font-bold">5. Common Mistakes</h2><div className="mt-5 space-y-3 text-sm">{[["Hablaré si fuera rico.", "Hablaría si fuera rico."], ["Yo gustaría viajar.", "Me gustaría viajar."], ["Yo tendría gusta.", "Me gustaría."]].map(([wrong, right]) => <div key={wrong} className="grid gap-2 rounded-2xl border border-border/60 bg-background/80 p-4 sm:grid-cols-2"><span className="text-rose-600 line-through">{wrong}</span><span className="font-semibold text-emerald-600">{right}</span></div>)}</div></article></section>

    <section className="space-y-6"><div className="flex items-center gap-3 border-b-2 border-indigo-600 pb-2"><HelpCircle className="shrink-0 text-indigo-600" /><h2 className="text-xl font-black uppercase tracking-tight md:text-2xl">6. Practice Exercises</h2></div><article className="rounded-[28px] border border-border/70 bg-muted/5 p-5 shadow-sm sm:p-6"><h3 className="text-lg font-semibold">Exercise A — Choose the Correct Answer</h3>{practice(practiceItems.slice(6, 11))}</article><article className="rounded-[28px] border border-border/70 bg-muted/5 p-5 shadow-sm sm:p-6"><h3 className="text-lg font-semibold">Exercise B — Conjugate the Verb</h3>{practice(practiceItems.slice(11, 16))}</article><article className="rounded-[28px] border border-border/70 bg-muted/5 p-5 shadow-sm sm:p-6"><h3 className="text-lg font-semibold">Exercise C — Translate into Spanish</h3>{practice(practiceItems.slice(16, 21))}</article></section>
  </main></div></div>;
};

export default grammar_lesson_43;
