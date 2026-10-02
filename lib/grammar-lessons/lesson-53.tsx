import { B1Card, B1Heading, B1Section, B1Table } from "./b1-lesson-layout";

const whenRows = [
  ["Presente / habitual", "cuando + presente + presente", "Cuando vuelvo, veo la televisión."],
  ["Pasado", "cuando + pasado + pasado", "Cuando salía, iba de tapas."],
  ["Futuro", "cuando + presente de subjuntivo + futuro", "Cuando sea universitario, podré disfrutar de descuentos."],
];

export default function GrammarLesson53() {
  return <main className="mx-auto w-full max-w-6xl space-y-10 bg-background text-foreground sm:space-y-12">
    <B1Heading lesson={53} title="La regla de «cuando»" subtitle="Elige indicativo o subjuntivo después de cuando según si la acción es habitual, pasada o futura." />
    <B1Card><p className="text-sm leading-7 text-muted-foreground">Las oraciones con cuando se construyen con indicativo si expresan una acción presente o pasada.</p><p className="mt-3 text-sm leading-7 text-muted-foreground">Si expresan una acción futura, usamos:</p><p className="mt-3 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4 text-center font-mono font-bold">presente de subjuntivo + futuro simple</p></B1Card>

    <B1Section number="1" title="Cuando + presente + presente"><B1Card>
      <h3 className="font-bold">Acción habitual</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">Usamos esta estructura cuando hablamos de una acción que ocurre normalmente o se repite.</p>
      <p className="mt-4 rounded-xl border border-border/70 bg-background/80 p-4 text-sm font-semibold">Cuando vuelvo del colegio, veo la televisión.</p><h3 className="mt-4 font-bold">Otros ejemplos</h3><div className="mt-3 grid gap-3 sm:grid-cols-2"><p className="rounded-xl bg-background/80 p-4 text-sm">Cuando llego a casa, descanso.</p><p className="rounded-xl bg-background/80 p-4 text-sm">Cuando tengo tiempo libre, salgo con mis amigos.</p></div>
    </B1Card></B1Section>

    <B1Section number="2" title="Cuando + pasado + pasado"><B1Card>
      <p className="text-sm leading-7 text-muted-foreground">Usamos cuando + indicativo para hablar de acciones que ocurrieron en el pasado.</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2"><p className="rounded-xl border border-border/70 bg-background/80 p-4 text-sm">Cuando salía de trabajar, iba de tapas con mis amigos.</p><p className="rounded-xl border border-border/70 bg-background/80 p-4 text-sm">Cuando era pequeño, jugaba con mis amigos.</p><p className="rounded-xl border border-border/70 bg-background/80 p-4 text-sm">Cuando vivía en Madrid, iba mucho al centro.</p></div>
    </B1Card></B1Section>

    <B1Section number="3" title="Cuando + presente de subjuntivo + futuro simple"><B1Card>
      <p className="text-sm leading-7 text-muted-foreground">Cuando hablamos de una acción futura, usamos el presente de subjuntivo después de cuando y normalmente el futuro simple en la otra oración.</p>
      <h3 className="mt-4 font-bold">Ejemplos</h3><div className="mt-3 grid gap-3 sm:grid-cols-2"><p className="rounded-xl border border-border/70 bg-background/80 p-4 text-sm">Cuando sea universitario, podré disfrutar de diversos descuentos.</p><p className="rounded-xl border border-border/70 bg-background/80 p-4 text-sm">Cuando te jubiles, vas a tener que hacer muchas cosas.</p><p className="rounded-xl border border-border/70 bg-background/80 p-4 text-sm">Cuando tenga un hijo, quiero enseñarle a ser buena persona.</p><p className="rounded-xl border border-border/70 bg-background/80 p-4 text-sm">Cuando me jubile, pienso hacer un viaje a París.</p></div>
      <h3 className="mt-5 font-bold">También podemos usar una orden</h3><p className="mt-3 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4 text-sm">Cuando llegues al aeropuerto, llámame.</p><p className="mt-2 text-sm"><b>llegues</b> → presente de subjuntivo · <b>llámame</b> → imperativo</p>
    </B1Card></B1Section>

    <B1Section number="4" title="Resumen"><B1Card><B1Table headers={["Uso", "Estructura", "Ejemplo"]} rows={whenRows} /></B1Card></B1Section>

    <B1Section number="5" title="Regla clave"><B1Card>
      <div className="grid gap-3 sm:grid-cols-2"><p className="rounded-xl border border-border/70 bg-background/80 p-4 font-bold">Presente o pasado → indicativo</p><p className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4 font-bold">Futuro → presente de subjuntivo + futuro simple</p></div>
    </B1Card></B1Section>
  </main>;
}