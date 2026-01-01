export default function grammar_lesson_1() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Introduction</h2>
        <p className="text-muted-foreground leading-relaxed">
          The present tense in Spanish is used to describe actions that are
          happening now or habitual actions. It's one of the most frequently
          used tenses in Spanish conversation.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Regular Verbs
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Regular verbs in the present tense follow consistent patterns based on
          their ending: -AR, -ER, or -IR.
        </p>

        <div className="space-y-3 mt-4">
          <div className="p-4 bg-secondary/30 rounded-lg">
            <h3 className="font-semibold text-foreground mb-2">
              -AR Verb Example: Hablar (to speak)
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-foreground">Yo</span>
                <span className="text-accent font-medium">hablo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">Tú</span>
                <span className="text-accent font-medium">hablas</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">Él/Ella/Usted</span>
                <span className="text-accent font-medium">habla</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">Nosotros/as</span>
                <span className="text-accent font-medium">hablamos</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">Vosotros/as</span>
                <span className="text-accent font-medium">habláis</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">Ellos/Ellas/Ustedes</span>
                <span className="text-accent font-medium">hablan</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-secondary/30 rounded-lg">
            <h3 className="font-semibold text-foreground mb-2">
              -ER Verb Example: Comer (to eat)
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-foreground">Yo</span>
                <span className="text-accent font-medium">como</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">Tú</span>
                <span className="text-accent font-medium">comes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">Él/Ella/Usted</span>
                <span className="text-accent font-medium">come</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">Nosotros/as</span>
                <span className="text-accent font-medium">comemos</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">Vosotros/as</span>
                <span className="text-accent font-medium">coméis</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground">Ellos/Ellas/Ustedes</span>
                <span className="text-accent font-medium">comen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Common Examples
        </h2>
        <div className="space-y-3">
          <div className="p-4 border border-border rounded-lg">
            <p className="text-foreground font-medium mb-2">
              Yo hablo español.
            </p>
            <p className="text-muted-foreground text-sm">I speak Spanish.</p>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <p className="text-foreground font-medium mb-2">
              Ella come una manzana.
            </p>
            <p className="text-muted-foreground text-sm">She eats an apple.</p>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <p className="text-foreground font-medium mb-2">
              Nosotros vivimos en Madrid.
            </p>
            <p className="text-muted-foreground text-sm">We live in Madrid.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
