import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 md:py-32">
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight text-foreground">
              Master Spanish with clarity and confidence
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Learn grammar fundamentals and expand your vocabulary through our
              clean, focused learning platform. No distractions, just pure
              learning.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
            <Link
              href="/grammar"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors text-sm sm:text-base"
            >
              Explore Grammar
            </Link>
            <Link
              href="/vocabulary"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 border border-border bg-background text-foreground font-medium rounded-lg hover:bg-secondary transition-colors text-sm sm:text-base"
            >
              Browse Vocabulary
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border/40 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-base sm:text-lg font-semibold text-foreground">
                Grammar Lessons
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Comprehensive, structured lessons covering all essential grammar
                topics from beginner to advanced levels.
              </p>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-base sm:text-lg font-semibold text-foreground">
                Vocabulary Collections
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Organized word sets by theme. Learn practical vocabulary for
                real-world conversations.
              </p>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-base sm:text-lg font-semibold text-foreground">
                Content-First Design
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Minimal, typography-driven interface that puts your learning
                first. No unnecessary distractions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
