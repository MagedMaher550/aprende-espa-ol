import { B1Card, B1Examples, B1Heading, B1Section, B1Table } from "./b1-lesson-layout";

const haberRows = [
  ["Yo", "Haya"],
  ["Tú", "Hayas"],
  ["Él / Ella / Usted", "Haya"],
  ["Nosotros/as", "Hayamos"],
  ["Vosotros/as", "Hayáis"],
  ["Ellos / Ellas / Ustedes", "Hayan"],
];

const participleRows = [
  ["Hacer", "Hecho"], ["Escribir", "Escrito"],
  ["Decir", "Dicho"], ["Abrir", "Abierto"],
  ["Morir", "Muerto"], ["Volver", "Vuelto"],
  ["Poner", "Puesto"], ["Ver", "Visto"],
  ["Resolver", "Resuelto"],
];

const tenseComparison = [
  ["Espero que vengas.", "Espero que hayas venido."],
  ["Me alegra que estés aquí.", "Me alegra que hayas llegado."],
  ["Dudo que lo sepa.", "Dudo que lo haya sabido."],
];

const frequentExpressions = [
  "Espero que...", "Ojalá...", "Me alegra que...", "Me sorprende que...",
  "Dudo que...", "No creo que...", "Es posible que...", "Es una pena que...",
];

const exercises = [
  "1. Espero que tú __________ (aprobar) el examen.",
  "2. Me alegra que vosotros __________ (venir).",
  "3. Dudo que ellos __________ (terminar) el proyecto.",
  "4. Es posible que María __________ (hacer) los deberes.",
  "5. No creo que nosotros __________ (recibir) el mensaje.",
  "6. Me sorprende que él __________ (decir) eso.",
];

const solutions = [
  "1. Hayas aprobado.", "2. Hayáis venido.", "3. Hayan terminado.",
  "4. Haya hecho.", "5. Hayamos recibido.", "6. Haya dicho.",
];

export default function GrammarLesson56() {
  return <main className="mx-auto w-full max-w-6xl space-y-8 text-foreground sm:space-y-12">
    <B1Heading lesson={56} title="El pretérito perfecto de subjuntivo" subtitle="Aprende a expresar deseos, emociones, dudas y valoraciones sobre acciones que ya se han realizado." />

    <B1Section number="1" title="Uso">
      <B1Card>
        <p className="text-sm leading-7 text-muted-foreground">Se utiliza para expresar deseos, emociones, dudas, opiniones y valoraciones sobre acciones que ya se han realizado.</p>
        <h3 className="mb-3 mt-5 text-sm font-bold">Ejemplos</h3>
        <B1Examples items={["Espero que hayas aprobado el examen.", "Me alegra que hayas venido.", "Dudo que hayan terminado el trabajo.", "Es una pena que no hayamos podido ir."]} />
      </B1Card>
    </B1Section>

    <B1Section number="2" title="Formación">
      <div className="grid gap-5 lg:grid-cols-2">
        <B1Card>
          <h3 className="text-lg font-bold">Presente de subjuntivo del verbo HABER + participio</h3>
          <div className="mt-5"><B1Table headers={["Persona", "HABER"]} rows={haberRows} /></div>
          <p className="mt-5 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4 text-sm leading-7"><strong>Importante:</strong> El participio no cambia según la persona. Ejemplo: haya hablado, hayas hablado, hayamos hablado.</p>
        </B1Card>
        <B1Card>
          <h3 className="text-lg font-bold">Participios irregulares más comunes</h3>
          <div className="mt-5"><B1Table headers={["Infinitivo", "Participio"]} rows={participleRows} /></div>
        </B1Card>
      </div>
    </B1Section>

    <B1Section number="3" title="Principales usos">
      <div className="grid gap-5 md:grid-cols-2">
        <B1Card><h3 className="text-lg font-bold">A. Deseos y esperanzas</h3><div className="mt-4"><B1Examples items={["Espero que hayas encontrado trabajo.", "Ojalá hayan aprobado el examen."]} /></div></B1Card>
        <B1Card><h3 className="text-lg font-bold">B. Emociones y sentimientos</h3><div className="mt-4"><B1Examples items={["Me alegra que hayas venido.", "Me sorprende que haya conseguido el trabajo."]} /></div></B1Card>
        <B1Card><h3 className="text-lg font-bold">C. Dudas e incertidumbre</h3><div className="mt-4"><B1Examples items={["Dudo que hayan recibido el mensaje.", "No creo que hayas cometido un error."]} /></div></B1Card>
        <B1Card><h3 className="text-lg font-bold">D. Opiniones y valoraciones</h3><div className="mt-4"><B1Examples items={["Es importante que hayas estudiado.", "Es una pena que no hayamos podido asistir."]} /></div></B1Card>
      </div>
    </B1Section>

    <B1Section number="4" title="Diferencia entre presente y pretérito perfecto de subjuntivo">
      <B1Card>
        <p className="mb-5 text-sm leading-7 text-muted-foreground">La diferencia principal está en el momento en que ocurre la acción.</p>
        <B1Table headers={["Presente de subjuntivo", "Pretérito perfecto de subjuntivo"]} rows={tenseComparison} />
        <ul className="mt-5 list-inside list-disc space-y-2 text-sm leading-7 text-muted-foreground">
          <li><strong className="text-foreground">Presente:</strong> Acción presente, simultánea o futura.</li>
          <li><strong className="text-foreground">Pretérito perfecto:</strong> Acción ya terminada antes del momento de referencia.</li>
        </ul>
      </B1Card>
    </B1Section>

    <B1Section number="5" title="Diferencia entre indicativo y subjuntivo">
      <B1Card>
        <ul className="list-inside list-disc space-y-2 text-sm leading-7 text-muted-foreground">
          <li><strong className="text-foreground">Indicativo:</strong> Expresa hechos o información que se presentan como reales.</li>
          <li><strong className="text-foreground">Subjuntivo:</strong> Expresa deseos, emociones, dudas y valoraciones.</li>
        </ul>
        <h3 className="mb-3 mt-5 text-sm font-bold">Ejemplos</h3>
        <B1Examples items={["Sé que has aprobado el examen. (Indicativo)", "Espero que hayas aprobado el examen. (Subjuntivo)"]} />
      </B1Card>
    </B1Section>

    <B1Section number="6" title="Estructura y expresiones frecuentes">
      <B1Card>
        <p className="mb-5 text-sm leading-7 text-muted-foreground">Algunas expresiones que suelen introducir el pretérito perfecto de subjuntivo:</p>
        <B1Examples items={frequentExpressions} />
      </B1Card>
    </B1Section>

    <B1Section number="7" title="Ejercicios">
      <B1Card>
        <p className="mb-5 text-sm leading-7 text-muted-foreground">Completa las siguientes frases utilizando el pretérito perfecto de subjuntivo.</p>
        <ol className="grid gap-3 sm:grid-cols-2">
          {exercises.map((exercise) => <li key={exercise} className="break-words rounded-xl border border-border/70 bg-background/80 p-4 text-sm leading-7">{exercise}</li>)}
        </ol>
      </B1Card>
      <B1Card>
        <h3 className="text-lg font-bold">Soluciones</h3>
        <ol className="mt-4 grid gap-3 sm:grid-cols-2">
          {solutions.map((solution) => <li key={solution} className="rounded-xl border border-border/70 bg-background/80 p-4 text-sm leading-7">{solution}</li>)}
        </ol>
      </B1Card>
    </B1Section>

    <B1Section number="8" title="Resumen">
      <B1Card>
        <p className="text-sm leading-7"><strong>Pretérito perfecto de subjuntivo = HABER en presente de subjuntivo + participio.</strong></p>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">Se utiliza para expresar deseos, emociones, dudas y valoraciones sobre acciones ya terminadas.</p>
        <p className="mt-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4 text-sm leading-7"><strong>Ejemplo:</strong> Espero que hayas aprendido la lección.</p>
      </B1Card>
    </B1Section>
  </main>;
}
