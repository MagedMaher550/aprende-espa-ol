import { B1Card, B1Examples, B1Heading, B1Section, B1Table } from "./b1-lesson-layout";
const examples = {
 porque: ["No fui al gimnasio porque estaba cansado.", "Estoy estudiando español porque quiero trabajar en el extranjero.", "Me duele el cuerpo porque ayer hice mucho ejercicio.", "No pude asistir a la reunión porque tenía otro compromiso."],
 como: ["Como estaba lloviendo, decidimos quedarnos en casa.", "Como tenía mucho trabajo, no pude salir.", "Como mañana tengo un examen, voy a estudiar esta noche.", "Como había mucho tráfico, llegué tarde al trabajo."],
 debido: ["El partido fue cancelado debido a la lluvia.", "Llegué tarde debido al tráfico.", "El vuelo sufrió un retraso debido a problemas técnicos."],
 causa: ["El accidente ocurrió a causa de la niebla.", "El evento fue suspendido a causa del mal tiempo.", "No pudimos viajar a causa de problemas económicos."],
 debidoQue: ["El partido fue cancelado debido a que estaba lloviendo.", "Llegué tarde a causa de que había mucho tráfico.", "La empresa tuvo pérdidas debido a que disminuyeron las ventas."],
 porAdjetivo: ["No hice los deberes por vago.", "Perdió la oportunidad por impaciente."],
 porNombre: ["No pude dormir por el ruido.", "El accidente ocurrió por negligencia.", "Cancelaron el viaje por falta de dinero."],
 porInfinitivo: ["No hizo los deberes por ser un vago.", "Lo despidieron por llegar tarde constantemente.", "No consiguió el puesto por no tener suficiente experiencia.", "Fue multado por conducir demasiado rápido."],
 puesto: ["Puesto que no tienes experiencia, tendrás que recibir formación.", "Podemos empezar la reunión, puesto que todos han llegado.", "Puesto que mañana es festivo, las oficinas permanecerán cerradas."],
 dado: ["Dado que no hay suficientes plazas, tendremos que esperar.", "Dado que mañana tengo un examen, no podré salir.", "No hace falta que vengas mañana, dado que el trabajo ya está terminado."],
 ya: ["Ya que estás aquí, podrías ayudarme.", "Ya que no vas a venir a la cena, ¿podrías cuidar de los niños?", "Ya que tienes tiempo libre, deberías aprovecharlo."],
};
const connectorRows = [
 ["Porque", "Porque + indicativo", "Neutro y muy frecuente."], ["Como", "Como + indicativo", "Normalmente introduce la causa al principio."],
 ["Debido a", "Debido a + sustantivo", "Formal."], ["Debido a que", "Debido a que + indicativo", "Formal."],
 ["A causa de", "A causa de + sustantivo", "Formal."], ["A causa de que", "A causa de que + indicativo", "Formal."],
 ["Por", "Por + adjetivo / sustantivo / infinitivo", "Neutro."], ["Puesto que", "Puesto que + indicativo", "Formal."],
 ["Dado que", "Dado que + indicativo", "Formal."], ["Ya que", "Ya que + indicativo", "Neutro y frecuente."],
];
export default function GrammarLesson54() {
 return <main className="mx-auto w-full max-w-6xl space-y-8 text-foreground sm:space-y-12">
  <B1Heading lesson={54} title="Las oraciones causales" subtitle="Aprende a expresar por qué ocurre algo y a elegir entre los conectores causales más frecuentes y formales." />
  <B1Section number="1" title="¿Qué son las oraciones causales?"><B1Card>
   <p className="text-sm leading-7 text-muted-foreground sm:text-base">Las oraciones causales se utilizan para expresar la causa o el motivo por el que ocurre una acción o situación. Responden a la pregunta: <strong className="text-foreground">¿Por qué?</strong></p>
   <p className="mt-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4 font-semibold">No fui al trabajo porque estaba enfermo.<br/><span className="mt-2 block text-sm font-normal text-muted-foreground">Causa: estaba enfermo. · Consecuencia: no fui al trabajo.</span></p>
   <p className="mt-4 text-sm leading-7 text-muted-foreground">En español existen diferentes conectores causales. Algunos son más neutros y frecuentes, mientras que otros se utilizan principalmente en contextos formales.</p>
  </B1Card></B1Section>
  <B1Section number="2" title="Principales conectores causales"><div className="space-y-5">
   <B1Card><h3 className="text-lg font-bold">2.1. Porque + indicativo</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">Después de porque utilizamos normalmente el indicativo, ya que presentamos la causa como una información o un hecho. Porque es el conector causal más neutro y también el más utilizado en español. Se utiliza para explicar directamente la causa de una acción o situación.</p><p className="mt-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4 text-center text-sm font-semibold">Oración principal + porque + indicativo</p><h4 className="mb-3 mt-5 text-sm font-bold">Ejemplos</h4><B1Examples items={examples.porque}/><p className="mt-4 text-sm font-bold">Importante:</p></B1Card>
   <B1Card><h3 className="text-lg font-bold">2.2. Como + indicativo</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">Como también se utiliza para expresar causas. La diferencia principal respecto a porque es que normalmente se coloca al principio de la oración, antes de la oración principal.</p><p className="mt-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4 text-center text-sm font-semibold">Como + indicativo, + oración principal</p><h4 className="mb-3 mt-5 text-sm font-bold">Ejemplos</h4><B1Examples items={examples.como}/><p className="mt-4 text-sm leading-7 text-muted-foreground">Como causal suele introducir una causa que sirve de explicación para la oración principal.</p><h4 className="mb-3 mt-4 text-sm font-bold">Compara</h4><B1Examples items={["No fui al gimnasio porque estaba cansado.", "Como estaba cansado, no fui al gimnasio."]}/><p className="mt-4 text-sm leading-7 text-muted-foreground">Las dos oraciones expresan la misma relación de causa y consecuencia, pero cambia el orden.</p><p className="mt-4 text-sm font-bold">Importante:</p></B1Card>
  </div></B1Section>
  <B1Section number="3" title="Debido a / A causa de"><B1Card>
   <p className="text-sm leading-7 text-muted-foreground">Estos conectores son equivalentes a porque, pero suelen utilizarse en contextos más formales, especialmente en la lengua escrita.</p>
   <h3 className="mt-5 font-bold">3.1. Debido a + sustantivo</h3><p className="mt-2 text-sm">Estructura: Debido a + sustantivo.</p><div className="mt-3"><B1Examples items={examples.debido}/></div>
   <h3 className="mt-5 font-bold">3.2. A causa de + sustantivo</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">Tiene prácticamente el mismo significado que debido a.</p><div className="mt-3"><B1Examples items={examples.causa}/></div>
   <h3 className="mt-5 font-bold">3.3. Debido a que / A causa de que + indicativo</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">Cuando queremos introducir una oración completa en lugar de un sustantivo, utilizamos estas estructuras seguidas de que + indicativo.</p><div className="mt-3"><B1Examples items={examples.debidoQue}/></div>
   <p className="mt-5 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4 text-sm leading-7"><strong>Importante:</strong><br/>Debido a / A causa de + sustantivo.<br/>Debido a que / A causa de que + indicativo.</p><h4 className="mb-3 mt-4 text-sm font-bold">Compara</h4><B1Examples items={["El vuelo se retrasó debido a la niebla.", "El vuelo se retrasó debido a que había niebla."]}/>
  </B1Card></B1Section>
  <B1Section number="4" title="Por + adjetivo / sustantivo / infinitivo"><B1Card>
   <p className="text-sm leading-7 text-muted-foreground">La preposición por también puede utilizarse para expresar causas. Puede ir seguida de un adjetivo, un sustantivo o un verbo en infinitivo.</p>
   <h3 className="mt-5 font-bold">4.1. Por + adjetivo</h3><div className="mt-3"><B1Examples items={examples.porAdjetivo}/></div>
   <h3 className="mt-5 font-bold">4.2. Por + sustantivo</h3><div className="mt-3"><B1Examples items={examples.porNombre}/></div>
   <h3 className="mt-5 font-bold">4.3. Por + infinitivo</h3><div className="mt-3"><B1Examples items={examples.porInfinitivo}/></div>
   <h4 className="mb-3 mt-5 text-sm font-bold">Compara las siguientes estructuras</h4><B1Examples items={["No hace los deberes por vago.", "No hace los deberes por ser un vago.", "No hace los deberes porque es un vago."]}/>
   <p className="mt-4 text-sm leading-7 text-muted-foreground">Las tres expresiones presentan una causa similar, pero utilizan estructuras gramaticales diferentes.</p>
  </B1Card></B1Section>
  <B1Section number="5" title="Puesto que / Dado que / Ya que + indicativo"><B1Card>
   <p className="text-sm leading-7 text-muted-foreground">Estos conectores causales indican que la causa es conocida, evidente o compartida por los interlocutores. Son equivalentes a porque, pero suelen utilizarse en contextos más formales o cuando queremos presentar la causa como algo que ya se conoce. Pueden aparecer delante o detrás de la oración principal.</p>
   <h3 className="mt-5 font-bold">5.1. Puesto que</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">Se utiliza principalmente en contextos formales y escritos.</p><div className="mt-3"><B1Examples items={examples.puesto}/></div>
   <h3 className="mt-5 font-bold">5.2. Dado que</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">Tiene un significado muy parecido a puesto que y es frecuente en textos formales, explicaciones e informes.</p><div className="mt-3"><B1Examples items={examples.dado}/></div>
   <h3 className="mt-5 font-bold">5.3. Ya que</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">Es muy frecuente tanto en conversaciones como en textos escritos.</p><div className="mt-3"><B1Examples items={examples.ya}/></div>
   <p className="mt-5 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4 text-sm leading-7"><strong>Importante:</strong><br/>Los tres conectores van seguidos del indicativo.<br/>Pueden colocarse delante o detrás de la oración principal.</p>
  </B1Card></B1Section>
  <B1Section number="6" title="Diferencias entre los conectores causales"><B1Card><B1Table headers={["Conector","Estructura","Uso"]} rows={connectorRows}/></B1Card></B1Section>
  <B1Section number="7" title="Comparación: porque, como y ya que"><B1Card><div className="grid gap-4 md:grid-cols-3">
   <div className="rounded-2xl border border-border/70 bg-background/80 p-4 sm:p-5"><h3 className="font-black text-indigo-600">PORQUE</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">Se utiliza para explicar directamente el motivo de algo.</p><p className="mt-3 text-sm font-semibold leading-6">No fui a clase porque estaba enfermo.</p></div>
   <div className="rounded-2xl border border-border/70 bg-background/80 p-4 sm:p-5"><h3 className="font-black text-indigo-600">COMO</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">Introduce normalmente la causa al principio de la oración.</p><p className="mt-3 text-sm font-semibold leading-6">Como estaba enfermo, no fui a clase.</p></div>
   <div className="rounded-2xl border border-border/70 bg-background/80 p-4 sm:p-5"><h3 className="font-black text-indigo-600">YA QUE</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">Introduce una causa que el hablante considera conocida o compartida por los interlocutores.</p><p className="mt-3 text-sm font-semibold leading-6">Ya que estás enfermo, deberías quedarte en casa.</p></div>
  </div></B1Card></B1Section>
 </main>;
}
