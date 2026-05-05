import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Brain, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-[999px] bg-[radial-gradient(circle_at_30%_30%,rgba(230,57,70,0.18),transparent_55%),radial-gradient(circle_at_70%_40%,rgba(244,162,97,0.18),transparent_50%),radial-gradient(circle_at_50%_70%,rgba(255,209,102,0.14),transparent_55%)] blur-2xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 sm:pt-20 sm:pb-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
                <Sparkles className="w-4 h-4 shrink-0 aspect-square text-accent" />
                Minimal, structured Spanish learning
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]">
                Learn Spanish with clarity, rhythm, and confidence.
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
                Grammar that finally clicks. Vocabulary you’ll actually use. A calm, premium experience built for consistent practice.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button asChild size="lg" className="w-full sm:w-auto min-h-[44px]">
                  <Link href="/study" aria-label="Start learning Spanish">
                    Start Learning <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto min-h-[44px]">
                  <Link href="/grammar">Explore Grammar</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="w-full sm:w-auto justify-center min-h-[44px]"
                >
                  <Link href="/vocabulary">Browse Vocabulary</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Card className="relative overflow-hidden border bg-card/70 shadow-sm backdrop-blur">
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Your learning path</p>
                    <p className="text-xl font-semibold tracking-tight">Start in minutes.</p>
                  </div>

                  <div className="grid gap-3">
                    <div className="flex items-start gap-3 rounded-2xl border bg-background/60 p-4">
                      <div className="size-10 rounded-2xl bg-primary/10 border border-primary/15 grid place-items-center">
                        <Brain className="w-5 h-5 shrink-0 aspect-square text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium">Understand grammar</p>
                        <p className="text-sm text-muted-foreground">
                          Clear lessons, searchable topics, and bite-sized explanations.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl border bg-background/60 p-4">
                      <div className="size-10 rounded-2xl bg-accent/20 border border-accent/25 grid place-items-center">
                        <BookOpen className="w-5 h-5 shrink-0 aspect-square text-accent-foreground" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium">Build vocabulary</p>
                        <p className="text-sm text-muted-foreground">
                          Themed collections designed for real conversations.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-muted/60 border p-4">
                    <p className="text-sm text-muted-foreground">
                      Tip: Use <span className="text-foreground font-medium">Study</span> daily for spaced repetition and steady progress.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES / BENEFITS */}
      <section className="border-t border-border/60 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-semibold">Everything you need, nothing you don’t.</h2>
            <p className="text-muted-foreground">
              A focused system that makes learning feel calm, structured, and rewarding.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border bg-card/70 backdrop-blur p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
              <div className="space-y-3">
                <p className="text-sm font-medium text-muted-foreground">Grammar</p>
                <h3 className="text-lg font-semibold tracking-tight">Structured lessons</h3>
                <p className="text-sm text-muted-foreground">
                  Step-by-step topics from beginner to advanced—easy to scan, easy to revisit.
                </p>
              </div>
            </Card>
            <Card className="border bg-card/70 backdrop-blur p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
              <div className="space-y-3">
                <p className="text-sm font-medium text-muted-foreground">Vocabulary</p>
                <h3 className="text-lg font-semibold tracking-tight">Real-world collections</h3>
                <p className="text-sm text-muted-foreground">
                  Learn practical words grouped by theme—designed for recall and usage.
                </p>
              </div>
            </Card>
            <Card className="border bg-card/70 backdrop-blur p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
              <div className="space-y-3">
                <p className="text-sm font-medium text-muted-foreground">Study</p>
                <h3 className="text-lg font-semibold tracking-tight">Built for consistency</h3>
                <p className="text-sm text-muted-foreground">
                  A clean practice experience with smooth interactions and clear feedback.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* LESSONS / CONTENT */}
      <section className="border-t border-border/60 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5 space-y-3">
              <h2 className="text-2xl sm:text-3xl font-semibold">Choose your next session.</h2>
              <p className="text-muted-foreground">
                Jump into a focused track—grammar, vocabulary, or spaced-repetition study.
              </p>
            </div>
            <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
              <Link
                href="/grammar"
                className="group rounded-3xl border bg-card/70 backdrop-blur p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Grammar</p>
                    <p className="text-lg font-semibold tracking-tight group-hover:text-foreground">
                      Browse lessons
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Search topics and progress in a clean, structured way.
                    </p>
                  </div>
                  <div className="size-11 rounded-2xl bg-primary/10 border border-primary/15 grid place-items-center">
                    <ArrowRight className="w-4 h-4 shrink-0 aspect-square text-primary" />
                  </div>
                </div>
              </Link>

              <Link
                href="/vocabulary"
                className="group rounded-3xl border bg-card/70 backdrop-blur p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Vocabulary</p>
                    <p className="text-lg font-semibold tracking-tight group-hover:text-foreground">
                      Explore collections
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Themed sets designed for real conversations and recall.
                    </p>
                  </div>
                  <div className="size-11 rounded-2xl bg-accent/20 border border-accent/25 grid place-items-center">
                    <ArrowRight className="w-4 h-4 shrink-0 aspect-square text-accent-foreground" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <div className="rounded-3xl border bg-background p-8 sm:p-10 shadow-sm">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8 space-y-2">
                <h2 className="text-2xl sm:text-3xl font-semibold">Start a calm, consistent Spanish routine.</h2>
                <p className="text-muted-foreground">
                  Open Study and do a short session—your future self will thank you.
                </p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/study">
                    Start Learning <ArrowRight className="w-4 h-4 shrink-0 aspect-square" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
