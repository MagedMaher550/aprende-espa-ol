import { B1Card, B1Examples, B1Heading, B1Section, B1Table } from "./b1-lesson-layout";

const forms = [
  { title: "Pretérito Perfecto de Indicativo", formation: "HABER (Presente de Indicativo) + Participio.", use: "Expresa acciones pasadas relacionadas con el presente.", rows: [["Yo", "he"], ["Tú", "has"], ["Él / Ella", "ha"], ["Nosotros/as", "hemos"], ["Vosotros/as", "habéis"], ["Ellos/as", "han"]], examples: ["Hoy he estudiado español.", "Esta semana hemos trabajado mucho."] },
  { title: "Pretérito Pluscuamperfecto de Indicativo", formation: "HABER (Pretérito Imperfecto) + Participio.", use: "Expresa una acción que ocurrió antes de otra acción pasada.", rows: [["Yo", "había"], ["Tú", "habías"], ["Él / Ella", "había"], ["Nosotros/as", "habíamos"], ["Vosotros/as", "habíais"], ["Ellos/as", "habían"]], examples: ["Cuando llegué a clase, la profesora ya había empezado la lección.", "Cuando llamé, mi amigo ya había salido."] },
  { title: "Pretérito Perfecto de Subjuntivo", formation: "HABER (Presente de Subjuntivo) + Participio.", use: "Expresa acciones pasadas en contextos que requieren el subjuntivo, como deseos, emociones, dudas y esperanzas.", rows: [["Yo", "haya"], ["Tú", "hayas"], ["Él / Ella", "haya"], ["Nosotros/as", "hayamos"], ["Vosotros/as", "hayáis"], ["Ellos/as", "hayan"]], examples: ["Espero que mi amigo haya aprobado el examen.", "Me alegro de que hayas encontrado trabajo."] },
  { title: "Futuro Perfecto de Indicativo", formation: "HABER (Futuro Simple) + Participio.", use: "Expresa una acción que estará terminada antes de un momento determinado del futuro.", rows: [["Yo", "habré"], ["Tú", "habrás"], ["Él / Ella", "habrá"], ["Nosotros/as", "habremos"], ["Vosotros/as", "habréis"], ["Ellos/as", "habrán"]], examples: ["Mañana habré terminado mi trabajo.", "En tres años, habré cumplido treinta años."] },
];

export default function GrammarLesson58() {
  return <main className="mx-auto w-full max-w-6xl space-y-8 text-foreground sm:space-y-12">
    <B1Heading lesson={58} title="Los diferentes usos del verbo HABER" subtitle="Repasa cómo se conjuga HABER como auxiliar para formar los tiempos compuestos en español." />
    <B1Section number="1" title="Introducción"><B1Card><p className="text-sm leading-7 text-muted-foreground">El verbo HABER se utiliza como auxiliar para formar los tiempos compuestos en español.</p><p className="mt-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4 font-black">Estructura: HABER + PARTICIPIO PASADO</p></B1Card></B1Section>
    {forms.map((form, index) => <B1Section key={form.title} number={String(index + 2)} title={form.title}><B1Card>
      <p className="text-sm font-bold leading-7">Formación: {form.formation}</p>
      <div className="mt-5"><B1Table headers={["Pronombre", "HABER"]} rows={form.rows} /></div>
      <p className="mt-5 text-sm leading-7 text-muted-foreground"><strong className="text-foreground">Uso:</strong> {form.use}</p>
      <h3 className="mb-3 mt-5 text-sm font-bold">Ejemplos</h3><B1Examples items={form.examples} />
    </B1Card></B1Section>)}
  </main>;
}
