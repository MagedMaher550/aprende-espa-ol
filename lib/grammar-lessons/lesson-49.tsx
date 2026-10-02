import { B1Card, B1Section } from "./b1-lesson-layout";

const subjunctiveAr = [
  ["yo", "-e"], ["tú", "-es"], ["él/ella", "-e"],
  ["nosotros", "-emos"], ["vosotros", "-éis"], ["ellos", "-en"],
];

const subjunctiveErIr = [
  ["yo", "-a"], ["tú", "-as"], ["él/ella", "-a"],
  ["nosotros", "-amos"], ["vosotros", "-áis"], ["ellos", "-an"],
];

const irregulars = [
  ["tener", "tenga"], ["hacer", "haga"], ["decir", "diga"], ["venir", "venga"],
  ["poder", "pueda"], ["querer", "quiera"], ["poner", "ponga"], ["oír", "oiga"],
  ["ser", "sea"], ["estar", "esté"], ["ir", "vaya"], ["haber", "haya"],
  ["saber", "sepa"], ["dar", "dé"], ["salir", "salga"], ["seguir", "siga"],
];

const useGroups = [
  ["Deseos y voluntad", "querer, esperar, necesitar, preferir, desear...", ["Quiero que vengas.", "Espero que apruebes.", "Necesito que me ayudes.", "Prefiero que te quedes."]],
  ["Emociones", "Expresiones que expresan una emoción.", ["Me alegra que estés aquí.", "Me preocupa que no tengas tiempo.", "Me sorprende que hables español.", "Me encanta que estudies tanto."]],
  ["Valoraciones", "es importante que, es necesario que, es bueno que, es malo que...", ["Es importante que estudies.", "Es necesario que duermas bien.", "Es bueno que hagas ejercicio.", "Es mejor que descanses."]],
  ["Duda y negación", "Cuando expresamos duda o negamos que algo sea verdad.", ["Dudo que sea verdad.", "No creo que tengas razón.", "No estoy seguro de que pueda venir."]],
  ["Posibilidad", "Cuando algo es posible pero no seguro.", ["Es posible que llueva.", "Es probable que lleguen tarde.", "Puede que tenga razón."]],
];

export default function GrammarLesson49() {
  return <main className="mx-auto w-full max-w-6xl space-y-8 bg-background text-foreground sm:space-y-10 lg:space-y-12">
    <header className="grid gap-5 border-b border-border/70 pb-7 sm:pb-9 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.85fr)] lg:items-center lg:gap-10">
      <div>
        <p className="text-xs font-black uppercase tracking-[.18em] text-indigo-600">B1.1 · Lesson 49</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">El subjuntivo</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">El subjuntivo expresa la actitud del hablante: deseos, emociones, valoraciones, dudas, posibilidades y situaciones no confirmadas.</p>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <div className="rounded-xl border border-border/70 bg-muted/10 p-4 sm:p-5"><p className="text-[11px] font-black uppercase tracking-wider text-muted-foreground">Indicativo · hecho</p><p className="mt-2 text-sm font-semibold leading-6">Creo que Juan es inteligente.</p></div>
        <div className="rounded-xl border border-indigo-500/30 bg-indigo-500/5 p-4 sm:p-5"><p className="text-[11px] font-black uppercase tracking-wider text-indigo-600">Subjuntivo · actitud</p><p className="mt-2 text-sm font-semibold leading-6">No creo que Juan sea inteligente.</p></div>
      </div>
    </header>

    <B1Section number="1" title="¿Qué es el subjuntivo?"><div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]">
      <B1Card><p className="text-sm leading-7 text-muted-foreground">El subjuntivo es un modo verbal que usamos cuando hablamos de:</p><div className="mt-4 grid gap-2 sm:grid-cols-2">{["Deseos", "Emociones", "Valoraciones", "Dudas o negación", "Posibilidades", "Hipótesis", "Condiciones", "Situaciones no confirmadas o desconocidas"].map((item) => <p key={item} className="rounded-lg border border-border/60 bg-background/80 px-3 py-2.5 text-sm font-medium">{item}</p>)}</div></B1Card>
      <B1Card className="border-indigo-500/20 bg-indigo-500/5"><h3 className="text-base font-bold">La diferencia básica</h3><p className="mt-3 text-sm leading-6"><b>Indicativo</b> → información presentada como un hecho.</p><p className="mt-2 text-sm leading-6"><b>Subjuntivo</b> → actitud del hablante ante la información.</p><div className="mt-4 border-t border-indigo-500/20 pt-4 text-sm"><p><b>Creo que es verdad.</b> → indicativo</p><p className="mt-2"><b>No creo que sea verdad.</b> → subjuntivo</p></div></B1Card>
    </div></B1Section>

    <B1Section number="2" title="Estructura básica"><B1Card>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center"><div><p className="text-sm leading-7 text-muted-foreground">Cuando tenemos dos sujetos diferentes, normalmente usamos:</p><p className="mt-3 rounded-xl border border-indigo-500/25 bg-indigo-500/5 px-4 py-4 text-center font-mono text-sm font-bold sm:text-base">Verbo/expresión + que + subjuntivo</p></div><p className="text-sm leading-7">El primer verbo expresa la actitud, deseo, emoción, duda, valoración, etc. El segundo verbo va en subjuntivo.</p></div>
      <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">{["Quiero que vengas.", "Me alegra que estés aquí.", "No creo que sea verdad.", "Es importante que estudies."].map((item) => <p key={item} className="rounded-lg border border-border/60 bg-background/80 px-3 py-3 text-sm font-semibold">{item}</p>)}</div>
    </B1Card></B1Section>

    <B1Section number="3" title="Cuando el sujeto es el mismo"><div className="grid gap-4 md:grid-cols-2">
      <B1Card><div className="flex items-start justify-between gap-3"><div><p className="text-[11px] font-black uppercase tracking-wider text-emerald-700">Misma persona</p><h3 className="mt-1 text-lg font-bold">Infinitivo</h3></div><span aria-hidden="true" className="text-2xl font-light text-emerald-700">01</span></div><p className="mt-3 text-sm leading-6 text-muted-foreground">Cuando tenemos el mismo sujeto, normalmente usamos infinitivo, no subjuntivo.</p><div className="mt-4 space-y-2">{["Quiero viajar. Yo quiero + yo viajo.", "Espero aprobar.", "Necesito descansar."].map((item) => <p key={item} className="rounded-lg bg-background/80 px-3 py-2.5 text-sm">{item}</p>)}</div></B1Card>
      <B1Card className="border-indigo-500/25"><div className="flex items-start justify-between gap-3"><div><p className="text-[11px] font-black uppercase tracking-wider text-indigo-600">Personas diferentes</p><h3 className="mt-1 text-lg font-bold">Que + subjuntivo</h3></div><span aria-hidden="true" className="text-2xl font-light text-indigo-600">02</span></div><p className="mt-3 text-sm leading-6 text-muted-foreground">Si los sujetos son diferentes, usamos que + subjuntivo.</p><div className="mt-4 space-y-2">{["Quiero que tú viajes.", "Espero que tú apruebes.", "Necesito que tú descanses."].map((item) => <p key={item} className="rounded-lg bg-background/80 px-3 py-2.5 text-sm">{item}</p>)}</div></B1Card>
    </div><p className="rounded-xl border border-border/70 bg-muted/10 px-4 py-3 text-sm font-bold">Regla rápida: mismo sujeto → infinitivo · sujetos diferentes → que + subjuntivo</p></B1Section>

    <B1Section number="4" title="Principales usos del subjuntivo"><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{useGroups.map(([title, description, examples], index) => <B1Card key={title as string} className="h-full p-4 sm:p-5"><div className="flex items-start gap-3"><span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-sm font-black text-indigo-700">0{index + 1}</span><div className="min-w-0"><h3 className="font-bold">{title as string}</h3><p className="mt-1 text-xs leading-5 text-muted-foreground">{description as string}</p></div></div><ul className="mt-4 space-y-2">{(examples as string[]).map((item) => <li key={item} className="rounded-lg border border-border/50 bg-background/80 px-3 py-2.5 text-sm leading-5">{item}</li>)}</ul></B1Card>)}</div></B1Section>

    <B1Section number="5" title="Presente de subjuntivo"><B1Card>
      <p className="max-w-3xl text-sm leading-7 text-muted-foreground">Para formar el presente de subjuntivo, normalmente usamos la raíz de la forma yo del presente de indicativo y cambiamos las terminaciones.</p><div className="mt-4 grid gap-4 md:grid-cols-2">{[["Verbos -AR", subjunctiveAr], ["Verbos -ER / -IR", subjunctiveErIr]].map(([title, endings]) => <div key={title as string} className="rounded-xl border border-border/70 bg-background/60 p-4"><h3 className="font-bold">{title as string}</h3><div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">{(endings as string[][]).map(([person, ending]) => <div key={person} className="flex items-center justify-between gap-2 rounded-lg border border-border/50 bg-background px-3 py-2.5"><span className="text-xs text-muted-foreground">{person}</span><span className="font-mono text-sm font-bold">{ending}</span></div>)}</div></div>)}</div>
      <h3 className="mt-5 text-sm font-bold">Conjugaciones completas</h3><div className="mt-2 grid gap-2 md:grid-cols-3">{["Hablar: hable, hables, hable, hablemos, habléis, hablen", "Comer: coma, comas, coma, comamos, comáis, coman", "Vivir: viva, vivas, viva, vivamos, viváis, vivan"].map((item) => <p key={item} className="rounded-lg border border-border/60 bg-background/80 p-3 text-sm leading-6">{item}</p>)}</div>
    </B1Card></B1Section>

    <B1Section number="6" title="Irregulares importantes"><B1Card>
      <p className="text-sm leading-6 text-muted-foreground">Estos son algunos de los verbos que conviene memorizar:</p><div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">{irregulars.map(([verb, form]) => <div key={verb} className="rounded-lg border border-border/60 bg-background/80 px-3 py-2.5"><p className="text-xs text-muted-foreground">{verb}</p><p className="mt-0.5 font-mono text-sm font-bold text-indigo-700">{form}</p></div>)}</div>
      <h3 className="mt-5 text-sm font-bold">Ejemplos</h3><div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">{["Espero que estés bien.", "Quiero que vengas conmigo.", "No creo que sea verdad.", "Es posible que pueda ayudarte.", "Me alegra que tengas tiempo."].map((item) => <p key={item} className="rounded-lg bg-muted/50 px-3 py-2.5 text-sm">{item}</p>)}</div>
    </B1Card></B1Section>

    <B1Section number="7" title="Resumen"><B1Card className="border-emerald-500/25 bg-emerald-500/5">
      <div className="grid gap-3 sm:grid-cols-2"><div className="rounded-xl border border-border/60 bg-background/80 p-4"><p className="text-xs font-black uppercase tracking-wider text-muted-foreground">Indicativo</p><p className="mt-2 text-sm leading-6">Información presentada como un hecho:</p><p className="mt-2 font-semibold">Creo que es verdad.</p></div><div className="rounded-xl border border-emerald-500/25 bg-background/80 p-4"><p className="text-xs font-black uppercase tracking-wider text-emerald-700">Subjuntivo</p><p className="mt-2 text-sm leading-6">Deseo, emoción, valoración, duda, posibilidad, etc.:</p><p className="mt-2 font-semibold">Quiero que sea verdad.</p></div></div>
      <p className="mt-4 rounded-xl bg-background/80 px-4 py-3 text-center font-mono text-sm font-bold sm:text-base">Expresión + que + subjuntivo</p><div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">{["DESEO", "EMOCIÓN", "VALORACIÓN", "DUDA/NEGACIÓN", "POSIBILIDAD"].map((item) => <p key={item} className="rounded-lg border border-emerald-500/20 bg-background/80 px-3 py-2.5 text-center text-xs font-black tracking-wide">{item}<span className="mt-1 block text-[11px] font-medium text-muted-foreground">→ subjuntivo</span></p>)}</div>
    </B1Card></B1Section>
  </main>;
}
