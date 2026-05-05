export function GlobalFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-foreground">Aprende Español</p>
            <p className="text-sm text-muted-foreground">
              A clean, focused platform for Spanish grammar and vocabulary.
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 — Learn steadily, speak naturally.
          </p>
        </div>
      </div>
    </footer>
  );
}
