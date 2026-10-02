import { B1Card, B1Examples, B1Heading, B1Section } from "./b1-lesson-layout";

const adjectiveMeanings = [
  ["Bueno", "tener buena calidad / ser buena persona", "Este restaurante es muy bueno. · Juan es una buena persona.", "tener buen sabor / ser atractivo", "La comida está muy buena. · Ese actor está muy bueno. (coloquial)"],
  ["Abierto", "tener una personalidad abierta", "María es muy abierta y acepta opiniones diferentes.", "no estar cerrado", "El supermercado está abierto."],
  ["Negro", "tener el color negro", "Mi coche es negro.", "estar muy enfadado o muy sucio", "Estoy negro porque llevo una hora esperando. · Después de trabajar en el jardín, estoy negro."],
  ["Malo", "tener mala calidad / ser una mala persona", "Esta película es mala. · Ese hombre es malo.", "estar enfermo / estar en mal estado", "Hoy estoy malo. · La leche está mala."],
  ["Rico", "tener mucho dinero", "Mi vecino es rico.", "tener buen sabor", "Este pastel está riquísimo."],
  ["Orgulloso", "ser una característica de la personalidad", "Pedro es muy orgulloso y nunca pide ayuda.", "sentir orgullo (estar orgulloso de)", "Estoy orgulloso de mi trabajo."],
  ["Atento", "ser amable y considerado", "Carlos es muy atento con sus invitados.", "prestar atención", "Estate atento a las instrucciones."],
  ["Interesado", "buscar el propio beneficio", "No confío en él; es muy interesado.", "tener interés en algo (estar interesado en)", "Estoy interesado en aprender español."],
  ["Católico", "pertenecer a la religión católica", "Mi familia es católica.", "no encontrarse bien (coloquial): no estar muy católico", "Hoy no estoy muy católico; creo que estoy enfermo."],
  ["Verde", "tener el color verde", "La camiseta es verde.", "no estar maduro / tener poca experiencia", "El plátano está verde. · Todavía estoy verde en este trabajo."],
];

export default function GrammarLesson52() {
  return <main className="mx-auto w-full max-w-6xl space-y-10 bg-background text-foreground sm:space-y-12">
    <B1Heading lesson={52} title="Expresiones con SER y ESTAR" subtitle="Algunos adjetivos cambian de significado según usamos ser o estar." />
    <B1Card><p className="text-sm leading-7 text-muted-foreground">La idea general es:</p><div className="mt-3 grid gap-3 sm:grid-cols-2"><p className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4 font-bold">SER → característica o cualidad</p><p className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4 font-bold">ESTAR → estado o situación</p></div><p className="mt-3 text-sm leading-7">Pero con algunos adjetivos, el significado cambia.</p></B1Card>
    <B1Section number="1–10" title="Adjetivos que cambian de significado"><div className="grid gap-5 lg:grid-cols-2">{adjectiveMeanings.map(([adjective, serMeaning, serExamples, estarMeaning, estarExamples], index) => <B1Card key={adjective}><h3 className="text-lg font-bold">{index + 1}. {adjective}</h3><div className="mt-4 grid gap-3 sm:grid-cols-2"><div className="rounded-xl border border-border/70 bg-background/80 p-4"><h4 className="text-xs font-black uppercase tracking-wider text-indigo-600">SER</h4><p className="mt-2 text-sm text-muted-foreground">{serMeaning}</p><p className="mt-3 text-sm leading-6">{serExamples}</p></div><div className="rounded-xl border border-border/70 bg-background/80 p-4"><h4 className="text-xs font-black uppercase tracking-wider text-emerald-600">ESTAR</h4><p className="mt-2 text-sm text-muted-foreground">{estarMeaning}</p><p className="mt-3 text-sm leading-6">{estarExamples}</p></div></div></B1Card>)}</div></B1Section>
  </main>;
}