import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32">
        <div className="space-y-8">
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-balance leading-tight tracking-tight">
              Master Spanish with clarity and confidence
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Learn grammar fundamentals and expand your vocabulary through our
              clean, focused learning platform. No distractions, just pure
              learning.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/grammar"
              className="inline-flex items-center justify-center px-8 py-3 bg-foreground text-background font-medium rounded-xl hover:opacity-90 transition-all duration-200 hover:scale-105 text-base"
            >
              Explore Grammar
            </Link>
            <Link
              href="/vocabulary"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-border bg-background text-foreground font-medium rounded-xl hover:bg-muted transition-all duration-200 hover:scale-105 text-base"
            >
              Browse Vocabulary
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border/60 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="rounded-2xl shadow-sm border p-6 hover:shadow-md transition-shadow duration-200">
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-foreground">
                  Grammar Lessons
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Comprehensive, structured lessons covering all essential grammar
                  topics from beginner to advanced levels.
                </p>
              </div>
            </Card>
            <Card className="rounded-2xl shadow-sm border p-6 hover:shadow-md transition-shadow duration-200">
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-foreground">
                  Vocabulary Collections
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Organized word sets by theme. Learn practical vocabulary for
                  real-world conversations.
                </p>
              </div>
            </Card>
            <Card className="rounded-2xl shadow-sm border p-6 hover:shadow-md transition-shadow duration-200">
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-foreground">
                  Content-First Design
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Minimal, typography-driven interface that puts your learning
                  first. No unnecessary distractions.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
