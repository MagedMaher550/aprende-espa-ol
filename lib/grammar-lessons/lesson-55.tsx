import { B1Card, B1Examples, B1Heading, B1Section, B1Table } from "./b1-lesson-layout";

const thanksInfinitive = [
  "Muchas gracias por ayudarme.",
  "Muchas gracias por tu invitación.",
  "Gracias por haber venido.",
  "Muchas gracias por los regalos.",
];

const grateful = [
  "Estoy muy agradecido por tu apoyo.",
  "Estamos agradecidos por vuestra ayuda.",
  "Estoy agradecida por haber tenido esta oportunidad.",
];

const thanksSubjunctive = [
  "Te agradezco que me hayas invitado.",
  "Le agradezco que haya venido.",
  "Te agradezco mucho que siempre me escuches.",
];

const sorryInfinitive = [
  "Siento mucho no poder ir a tu fiesta.",
  "Siento mucho llegar tarde.",
  "Siento mucho no haberte llamado.",
  "Siento mucho no poder ayudarte.",
];

const sorrySubjunctive = [
  "Siento mucho que no puedas venir.",
  "Siento mucho que estés enfermo.",
  "Siento mucho que hayamos tenido que cancelar la reunión.",
  "Siento mucho que no hayas conseguido el trabajo.",
];

const apologies = [
  "Me disculpo por llegar tarde.",
  "Me disculpo por no poder asistir.",
  "Nos disculpamos por las molestias.",
  "Le pido disculpas por mi comportamiento.",
];

const askForgiveness = [
  "Te pido que me disculpes.",
  "Le ruego que me disculpe.",
  "Les pido que me disculpen por el retraso.",
];

const summaryRows = [
  ["Gracias por + infinitivo", "Gracias por ayudarme."],
  ["Agradecer que + subjuntivo", "Te agradezco que me ayudes."],
  ["Sentir + infinitivo", "Siento llegar tarde."],
  ["Sentir que + subjuntivo", "Siento que no puedas venir."],
  ["Disculparse por + infinitivo", "Me disculpo por llegar tarde."],
  ["Pedir que + subjuntivo", "Te pido que me disculpes."],
];

export default function GrammarLesson55() {
  return <main className="mx-auto w-full max-w-6xl space-y-8 text-foreground sm:space-y-12">
    <B1Heading lesson={55} title="Agradecer y disculparse" subtitle="Aprende a expresar agradecimiento, disculparte y pedir perdón con las estructuras y el modo verbal adecuados." />

    <B1Section number="1" title="Expresar agradecimiento">
      <div className="space-y-5">
        <B1Card>
          <h3 className="text-lg font-bold">A. Muchas gracias por + infinitivo / sustantivo</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">Se utiliza para agradecer una acción o algo que hemos recibido.</p>
          <h4 className="mb-3 mt-5 text-sm font-bold">Ejemplos</h4><B1Examples items={thanksInfinitive} />
        </B1Card>
        <B1Card>
          <h3 className="text-lg font-bold">B. Estar agradecido/a por + infinitivo / sustantivo</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">Expresa un sentimiento de gratitud.</p>
          <h4 className="mb-3 mt-5 text-sm font-bold">Ejemplos</h4><B1Examples items={grateful} />
        </B1Card>
        <B1Card>
          <h3 className="text-lg font-bold">C. Te / Le agradezco que + subjuntivo</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">Se utiliza para agradecer algo que otra persona ha hecho.</p>
          <div className="mt-4"><B1Examples items={thanksSubjunctive} /></div>
          <p className="mt-5 text-sm font-bold">Recuerda:</p>
          <ul className="mt-2 list-inside list-disc space-y-2 text-sm leading-7 text-muted-foreground"><li><strong className="text-foreground">Te:</strong> tratamiento informal (tú).</li><li><strong className="text-foreground">Le:</strong> tratamiento formal (usted).</li></ul>
          <div className="mt-5 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4"><B1Examples items={["¡No sabes cuánto te lo agradezco!", "¡No sabes cómo te lo agradezco!"]} /></div>
        </B1Card>
        <B1Card><h3 className="text-lg font-bold">D. Otras expresiones</h3><div className="mt-4"><B1Examples items={["¡Muchísimas gracias!", "Mil gracias."]} /></div></B1Card>
      </div>
    </B1Section>

    <B1Section number="2" title="Disculparse">
      <div className="space-y-5">
        <B1Card>
          <h3 className="text-lg font-bold">A. Siento mucho + infinitivo</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">Se utiliza cuando hablamos de una acción que nosotros mismos no podemos hacer o hemos hecho.</p>
          <h4 className="mb-3 mt-5 text-sm font-bold">Ejemplos</h4><B1Examples items={sorryInfinitive} />
        </B1Card>
        <B1Card>
          <h3 className="text-lg font-bold">B. Siento mucho que + subjuntivo</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">Se utiliza cuando hablamos de una situación relacionada con otra persona o con un sujeto diferente.</p>
          <h4 className="mb-3 mt-5 text-sm font-bold">Ejemplos</h4><B1Examples items={sorrySubjunctive} />
          <h4 className="mb-3 mt-5 text-sm font-bold">Diferencia</h4>
          <B1Examples items={["Siento mucho no poder ir. (Yo no puedo ir).", "Siento mucho que no puedas ir. (Tú no puedes ir)."]} />
        </B1Card>
        <B1Card>
          <h3 className="text-lg font-bold">C. Disculparse por + infinitivo / sustantivo</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">Se utiliza especialmente en situaciones formales.</p>
          <h4 className="mb-3 mt-5 text-sm font-bold">Ejemplos</h4><B1Examples items={apologies} />
        </B1Card>
        <B1Card>
          <h3 className="text-lg font-bold">D. Pedir que me disculpen</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">Se utiliza para pedir perdón a alguien.</p>
          <h4 className="mb-3 mt-5 text-sm font-bold">Ejemplos</h4><B1Examples items={askForgiveness} />
        </B1Card>
        <B1Card><h3 className="text-lg font-bold">E. Otras expresiones</h3><div className="mt-4"><B1Examples items={["Lo siento mucho.", "Mis disculpas.", "Mis más sinceras disculpas.", "¡No sabes cuánto lo siento!"]} /></div></B1Card>
      </div>
    </B1Section>

    <B1Section number="3" title="Resumen gramatical">
      <B1Card>
        <B1Table headers={["Estructura", "Ejemplo"]} rows={summaryRows} />
        <p className="mt-5 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4 text-sm leading-7"><strong>Importante:</strong> Después de <em>por</em> utilizamos el infinitivo cuando hablamos de una acción. Después de <em>que</em>, utilizamos el subjuntivo en las estructuras de agradecimiento, disculpa y petición explicadas anteriormente.</p>
      </B1Card>
    </B1Section>
  </main>;
}
