import { B1Card, B1Examples, B1Heading, B1Section, B1Table } from "./b1-lesson-layout";

const futureHaber = [["Yo", "habré"], ["Tú", "habrás"], ["Él / Ella / Usted", "habrá"], ["Nosotros/as", "habremos"], ["Vosotros/as", "habréis"], ["Ellos / Ellas / Ustedes", "habrán"]];
const futureTerminar = [["Yo", "habré terminado"], ["Tú", "habrás terminado"], ["Él / Ella / Usted", "habrá terminado"], ["Nosotros/as", "habremos terminado"], ["Vosotros/as", "habréis terminado"], ["Ellos / Ellas / Ustedes", "habrán terminado"]];

export default function GrammarLesson57() {
  return <main className="mx-auto w-full max-w-6xl space-y-8 text-foreground sm:space-y-12">
    <B1Heading lesson={57} title="El Futuro Perfecto de Indicativo" subtitle="Expresa acciones que todavía no han sucedido, pero que estarán terminadas antes de un momento futuro." />
    <B1Section number="1" title="¿Qué es el Futuro Perfecto?"><B1Card>
      <p className="text-sm leading-7 text-muted-foreground">El Futuro Perfecto de Indicativo se utiliza para expresar una acción que estará terminada antes de un momento determinado del futuro. Es decir, hablamos de algo que todavía no ha sucedido, pero que estará completado en un momento futuro.</p>
      <h3 className="mb-3 mt-5 text-sm font-bold">Ejemplos</h3><B1Examples items={["Mañana a las ocho de la tarde, habré terminado mi clase de español.", "En tres años, habré cumplido treinta años.", "Para el próximo viernes, habremos terminado el proyecto."]} />
    </B1Card></B1Section>
    <B1Section number="2" title="Formación del Futuro Perfecto"><B1Card>
      <p className="text-lg font-black">HABER (en futuro simple) + PARTICIPIO PASADO</p>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">El verbo auxiliar haber se conjuga en futuro simple, mientras que el verbo principal se utiliza en participio pasado.</p>
      <h3 className="mb-4 mt-6 text-lg font-bold">Conjugación del verbo HABER</h3><B1Table headers={["Pronombre personal", "Futuro simple de HABER"]} rows={futureHaber} />
    </B1Card></B1Section>
    <B1Section number="3" title="El Participio Pasado"><B1Card>
      <p className="mb-5 text-sm leading-7 text-muted-foreground">Para formar el participio pasado de los verbos regulares, seguimos estas reglas:</p>
      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-border/70 bg-background/80 p-5"><h3 className="font-bold">Verbos terminados en -AR</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Quitamos la terminación -ar y añadimos -ado.</p><p className="mt-3 text-sm leading-6">Hablar → hablado<br/>Terminar → terminado<br/>Trabajar → trabajado</p></article>
        <article className="rounded-2xl border border-border/70 bg-background/80 p-5"><h3 className="font-bold">Verbos terminados en -ER</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Quitamos la terminación -er y añadimos -ido.</p><p className="mt-3 text-sm leading-6">Comer → comido<br/>Aprender → aprendido<br/>Beber → bebido</p></article>
        <article className="rounded-2xl border border-border/70 bg-background/80 p-5"><h3 className="font-bold">Verbos terminados en -IR</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Quitamos la terminación -ir y añadimos -ido.</p><p className="mt-3 text-sm leading-6">Vivir → vivido<br/>Cumplir → cumplido<br/>Salir → salido</p></article>
      </div>
      <p className="mt-5 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4 text-sm leading-7"><strong>Importante:</strong> El participio pasado no cambia según el sujeto. Siempre mantiene la misma forma, independientemente de la persona gramatical.</p>
    </B1Card></B1Section>
    <B1Section number="4" title="Conjugación completa: ejemplo con el verbo TERMINAR"><B1Card><B1Table headers={["Pronombre personal", "Futuro Perfecto"]} rows={futureTerminar} /></B1Card></B1Section>
    <B1Section number="5" title="Usos del Futuro Perfecto"><B1Card>
      <p className="mb-5 text-sm leading-7 text-muted-foreground">Utilizamos el Futuro Perfecto principalmente para expresar acciones que estarán terminadas antes de un momento determinado del futuro.</p>
      <B1Examples items={["1. Mañana a las ocho de la tarde, habré terminado mi clase de español.", "2. En tres años, habré cumplido treinta años.", "3. Para el próximo viernes, habremos terminado el proyecto.", "4. Cuando llegues, ya habré preparado la cena.", "5. Para finales de este año, habrán aprendido mucho español."]} />
    </B1Card></B1Section>
    <B1Section number="6" title="Expresiones temporales"><B1Card>
      <p className="text-sm leading-7 text-muted-foreground">El Futuro Perfecto suele aparecer acompañado de expresiones temporales que indican el momento en el que una acción ya estará terminada. Algunas de las expresiones más frecuentes son:</p>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm leading-6">{["Mañana a esta hora.", "Para mañana.", "Para la próxima semana.", "En dos años.", "Para entonces.", "Antes de...", "Cuando..."].map((x) => <li key={x} className="rounded-xl border border-border/70 bg-background/80 p-3">• {x}</li>)}</ul>
      <h3 className="mb-3 mt-5 text-sm font-bold">Ejemplos</h3><B1Examples items={["Para mañana, habré terminado mis deberes.", "En cinco años, habremos aprendido mucho español.", "Para entonces, ellos habrán llegado a casa.", "Antes del próximo lunes, habré enviado todos los documentos."]} />
    </B1Card></B1Section>
  </main>;
}
