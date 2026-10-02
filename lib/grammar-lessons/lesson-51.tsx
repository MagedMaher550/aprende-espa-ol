import { B1Card, B1Examples, B1Heading, B1Section, B1Table } from "./b1-lesson-layout";

const feelings = [
  ["Me irrita", "Algo me pone nervioso/a o me hace sentir irritación.", "Me irrita escuchar música muy alta por la noche.", "Me irrita que mis vecinos pongan música muy alta por la noche."],
  ["Me molesta", "Algo no me gusta y me produce molestia.", "Me molesta esperar mucho tiempo en una cola.", "Me molesta que la gente llegue tarde."],
  ["Me indigna", "Algo me produce mucha rabia porque considero que es injusto, incorrecto o inaceptable.", "Me indigna ver a personas que no respetan las normas.", "Me indigna que algunas personas traten mal a los animales."],
  ["Me fastidia", "Algo me molesta o me resulta desagradable. Es una expresión bastante común y coloquial.", "Me fastidia tener que levantarme temprano los lunes.", "Me fastidia que cancelen los planes a última hora."],
  ["Me da rabia", "Algo me produce mucha rabia, frustración o enfado.", "Me da rabia perder el tiempo en cosas innecesarias.", "Me da rabia que algunas personas no cumplan sus promesas."],
  ["Me da miedo", "Algo me produce miedo o preocupación.", "Me da miedo viajar solo de noche.", "Me da miedo que pase algo durante el viaje."],
  ["Me da vergüenza", "Algo me hace sentir vergüenza o incomodidad.", "Me da vergüenza hablar delante de muchas personas.", "Me da vergüenza que otras personas escuchen mis errores."],
];

const impersonal = [
  ["Es una vergüenza", "Se utiliza para decir que una situación es muy negativa, injusta o inaceptable.", "Es una vergüenza que haya personas que no tengan acceso a una vivienda digna.", "Es una vergüenza que algunas empresas no respeten los derechos de sus trabajadores."],
  ["Es una pena", "Se utiliza para expresar tristeza o decepción ante una situación.", "Es una pena que no puedas venir con nosotros.", "Es una pena que el museo esté cerrado hoy."],
  ["Es una lástima", "Tiene un significado muy parecido a es una pena. Expresa tristeza o decepción por algo.", "Es una lástima que no tengamos más tiempo para visitar la ciudad.", "Es una lástima que hayas perdido el tren."],
  ["Es intolerable", "Significa que una situación no se puede aceptar o soportar. Es una expresión más fuerte y más formal que me molesta o me fastidia.", "Es intolerable que los trabajadores reciban un salario tan bajo.", "Es intolerable que algunas personas tengan que trabajar en esas condiciones."],
  ["Es inadmisible", "Significa que algo no puede aceptarse porque es incorrecto, injusto o inaceptable. Es una expresión bastante formal y fuerte.", "Es inadmisible que una empresa trate así a sus empleados.", "Es inadmisible que los pasajeros tengan que esperar tantas horas sin recibir información."],
];

const summaryRows = [
  ["Me irrita", "Me pone nervioso/a o me irrita", "Me irrita que hables tan alto."],
  ["Me molesta", "No me gusta / me causa molestia", "Me molesta esperar."],
  ["Me indigna", "Me produce mucha rabia ante algo injusto", "Me indigna que traten así a los animales."],
  ["Me fastidia", "Me molesta; registro más coloquial", "Me fastidia que llegues tarde."],
  ["Me da rabia", "Me produce enfado o frustración", "Me da rabia perder el tiempo."],
  ["Me da miedo", "Me produce miedo o preocupación", "Me da miedo que pase algo."],
  ["Me da vergüenza", "Me produce vergüenza", "Me da vergüenza hablar en público."],
  ["Es una vergüenza", "Considero una situación muy negativa/inaceptable", "Es una vergüenza que pase esto."],
  ["Es una pena", "Expresa tristeza o decepción", "Es una pena que no puedas venir."],
  ["Es una lástima", "Expresa tristeza o decepción", "Es una lástima que no tengas tiempo."],
  ["Es intolerable", "No se puede aceptar o soportar", "Es intolerable que trabajen así."],
  ["Es inadmisible", "No se puede aceptar; expresión fuerte/formal", "Es inadmisible que hagan eso."],
];

export default function GrammarLesson51() {
  return <main className="mx-auto w-full max-w-6xl space-y-10 bg-background text-foreground sm:space-y-12">
    <B1Heading lesson={51} title="Expresar sentimientos negativos" subtitle="Expresa molestia, rabia, miedo, vergüenza, tristeza y rechazo, y elige entre infinitivo y subjuntivo." />

    <B1Section number="1" title="¿Cómo expresamos sentimientos negativos?"><div className="grid gap-5 lg:grid-cols-2"><B1Card>
      <h3 className="text-lg font-bold">A. Cuando el sujeto es el mismo</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">Cuando la persona que siente la emoción también realiza la acción, usamos:</p><p className="mt-3 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-3 text-center font-mono font-bold">Expresión + infinitivo</p><B1Examples items={["Me molesta esperar tanto.", "Me da miedo conducir de noche."]} /><p className="mt-3 text-sm">La persona que siente la emoción y la persona que realiza la acción es la misma: yo.</p>
    </B1Card><B1Card>
      <h3 className="text-lg font-bold">B. Cuando los sujetos son diferentes</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">Cuando la persona que siente la emoción es diferente de la persona que realiza la acción, usamos:</p><p className="mt-3 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-3 text-center font-mono font-bold">Expresión + que + subjuntivo</p><B1Examples items={["Me molesta que llegues tarde.", "Me da miedo que mi hermano conduzca de noche."]} /><ul className="mt-3 space-y-1 text-sm"><li>Yo siento la emoción.</li><li>Tú / mi hermano realizas la acción.</li><li>Por eso usamos que + subjuntivo.</li></ul>
    </B1Card></div><B1Card>
      <h3 className="font-bold">Compara</h3><p className="mt-3 text-sm"><b>Me molesta trabajar los domingos.</b> → Yo trabajo los domingos y eso me molesta.</p><p className="mt-2 text-sm"><b>Me molesta que mi jefe me llame los domingos.</b> → Yo siento la molestia, pero mi jefe realiza la acción.</p>
    </B1Card></B1Section>

    <B1Section number="2" title="Expresiones para expresar sentimientos negativos"><div className="grid gap-5 lg:grid-cols-2">{feelings.map(([title, meaning, infinitive, subjunctive]) => <B1Card key={title}><h3 className="text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Significado: {meaning}</p><p className="mt-3 rounded-xl bg-background/80 p-3 text-sm"><b>Con infinitivo:</b> {infinitive}</p><p className="mt-2 rounded-xl bg-background/80 p-3 text-sm"><b>Con que + subjuntivo:</b> {subjunctive}</p></B1Card>)}</div></B1Section>

    <B1Section number="3" title="Expresiones impersonales"><B1Card>
      <p className="text-sm leading-7 text-muted-foreground">También podemos expresar sentimientos negativos utilizando expresiones como:</p><div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">{["Es una vergüenza", "Es una pena", "Es una lástima", "Es intolerable", "Es inadmisible"].map((item) => <p key={item} className="rounded-xl border border-border/70 bg-background/80 p-3 text-sm font-bold">{item}</p>)}</div><p className="mt-3 text-sm leading-7">Estas expresiones normalmente se utilizan para valorar o reaccionar ante una situación.</p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">{impersonal.map(([title, meaning, firstExample, secondExample]) => <div key={title} className="rounded-xl border border-border/70 bg-background/80 p-4"><h3 className="font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{meaning}</p><p className="mt-3 text-sm">{firstExample}</p><p className="mt-2 text-sm">{secondExample}</p>{title === "Es una lástima" && <p className="mt-3 border-t border-border/70 pt-3 text-sm"><b>Diferencia:</b> Es una pena y es una lástima son muy similares y, en muchos casos, pueden utilizarse indistintamente. <i>Es una pena que no puedas venir. Es una lástima que no puedas venir.</i></p>}</div>)}</div>
    </B1Card></B1Section>

    <B1Section number="4" title="Infinitivo o subjuntivo: ¿cuál usamos?"><B1Card>
      <p className="text-sm leading-7 text-muted-foreground">La diferencia más importante es quién realiza la acción.</p><div className="mt-4 grid gap-4 md:grid-cols-2"><div className="rounded-xl border border-border/70 bg-background/80 p-4"><h3 className="font-bold">Mismo sujeto → infinitivo</h3><p className="mt-2 text-sm">Me da miedo conducir de noche.</p><p className="mt-2 text-sm text-muted-foreground">Yo tengo miedo. Yo conduzco.</p></div><div className="rounded-xl border border-border/70 bg-background/80 p-4"><h3 className="font-bold">Sujetos diferentes → que + subjuntivo</h3><p className="mt-2 text-sm">Me da miedo que mi hermano conduzca de noche.</p><p className="mt-2 text-sm text-muted-foreground">Yo tengo miedo. Mi hermano conduce.</p></div></div>
      <h3 className="mt-5 font-bold">Más ejemplos</h3><B1Examples items={["Me molesta trabajar los sábados. → Yo trabajo.", "Me molesta que mi jefe me haga trabajar los sábados. → Mi jefe hace la acción.", "Me da vergüenza hablar en público. → Yo hablo.", "Me da vergüenza que mis compañeros me escuchen hablar en público. → Mis compañeros escuchan.", "Me indigna ver animales abandonados. → Yo veo.", "Me indigna que algunas personas abandonen a sus animales. → Otras personas abandonan."]} />
    </B1Card></B1Section>

    <B1Section number="5" title="Resumen de las expresiones"><B1Card><B1Table headers={["Expresión", "Significado / uso", "Ejemplo"]} rows={summaryRows} /></B1Card></B1Section>

    <B1Section number="6" title="Observa la diferencia de intensidad"><B1Card>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{[
        ["Molestia", "Me molesta...", "Me fastidia...", "Me irrita..."],
        ["Rabia / indignación", "Me da rabia...", "Me indigna..."],
        ["Miedo", "Me da miedo..."],
        ["Vergüenza", "Me da vergüenza...", "Es una vergüenza..."],
        ["Tristeza / decepción", "Es una pena...", "Es una lástima..."],
        ["Rechazo fuerte", "Es intolerable...", "Es inadmisible..."],
      ].map(([title, ...items]) => <div key={title} className="rounded-xl border border-border/70 bg-background/80 p-4"><h3 className="font-bold">{title}</h3><ul className="mt-2 space-y-1 text-sm">{items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div>
      <p className="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 text-sm leading-7"><b>Importante:</b> la intensidad depende también del contexto y de la entonación. Es intolerable y es inadmisible son expresiones especialmente fuertes y suelen aparecer en situaciones formales o cuando queremos mostrar una reacción muy contundente.</p>
    </B1Card></B1Section>

    <B1Section number="7" title="Ejemplos completos"><B1Card><B1Examples items={["Me irrita que la gente hable durante las películas.", "Me molesta tener que esperar tanto tiempo.", "Me indigna que algunas personas no respeten a los demás.", "Me fastidia que cambien los planes en el último momento.", "Me da rabia cometer el mismo error otra vez.", "Me da miedo que mi familia llegue tarde a casa.", "Me da vergüenza hablar español delante de muchas personas.", "Es una vergüenza que haya tanta basura en las calles.", "Es una pena que no podamos quedarnos más tiempo.", "Es una lástima que hayas perdido esa oportunidad.", "Es intolerable que los clientes tengan que esperar horas para recibir atención.", "Es inadmisible que una empresa no respete los derechos de sus trabajadores."]} /></B1Card></B1Section>

    <B1Section number="8" title="Regla para recordar"><B1Card>
      <div className="grid gap-4 md:grid-cols-2"><div className="rounded-xl bg-background/80 p-4"><h3 className="font-black">MISMO SUJETO</h3><p className="mt-2 font-mono text-sm">Expresión + infinitivo</p><B1Examples items={["Me molesta esperar.", "Me da miedo conducir.", "Me da vergüenza hablar."]} /></div><div className="rounded-xl bg-background/80 p-4"><h3 className="font-black">SUJETOS DIFERENTES</h3><p className="mt-2 font-mono text-sm">Expresión + que + subjuntivo</p><B1Examples items={["Me molesta que llegues tarde.", "Me da miedo que conduzcas de noche.", "Me da vergüenza que me escuchen."]} /></div></div>
      <p className="mt-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4 text-center font-bold">Fórmula clave: Misma persona → INFINITIVO · Persona diferente → QUE + SUBJUNTIVO</p>
    </B1Card></B1Section>
  </main>;
}