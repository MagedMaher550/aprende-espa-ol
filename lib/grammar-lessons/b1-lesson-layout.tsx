import type { ReactNode } from "react";

export function B1Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <article className={`rounded-[26px] border border-border/70 bg-muted/10 p-5 shadow-sm sm:p-6 lg:p-8 ${className}`}>{children}</article>;
}

export function B1Heading({ lesson, title, subtitle }: { lesson: number; title: string; subtitle: string }) {
  return <section className="rounded-[30px] border border-border/70 bg-muted/15 p-5 shadow-sm sm:p-8 lg:p-10">
    <p className="text-xs font-black uppercase tracking-[.18em] text-indigo-600">B1.1 · Lesson {lesson}</p>
    <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{title}</h1>
    <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">{subtitle}</p>
  </section>;
}

export function B1Section({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return <section className="space-y-5"><h2 className="border-b-2 border-indigo-600 pb-2 text-xl font-black tracking-tight sm:text-2xl">{number}. {title}</h2>{children}</section>;
}

export function B1Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return <div className="overflow-hidden rounded-2xl border border-border/70">
    <div className="divide-y divide-border/70 md:hidden">{rows.map((row) => <dl key={row.join("|")} className="space-y-2 bg-background/90 p-4">{row.map((cell, i) => <div key={`${cell}-${i}`}><dt className="text-[10px] font-black uppercase tracking-wider text-muted-foreground">{headers[i]}</dt><dd className={`mt-0.5 break-words text-sm ${i ? "font-mono font-medium" : "font-semibold"}`}>{cell}</dd></div>)}</dl>)}</div>
    <table className="hidden w-full table-fixed text-left text-sm md:table"><thead className="bg-muted/50 text-muted-foreground"><tr>{headers.map((header, index) => <th key={`${header}-${index}`} className="px-4 py-3 font-bold">{header}</th>)}</tr></thead><tbody className="divide-y divide-border/70 bg-background/90">{rows.map((row) => <tr key={row.join("|")}>{row.map((cell, i) => <td key={`${cell}-${i}`} className={`break-words px-4 py-3 ${i ? "font-mono font-medium" : ""}`}>{cell}</td>)}</tr>)}</tbody></table>
  </div>;
}

export function B1Examples({ items }: { items: string[] }) {
  return <div className="grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">{items.map((item) => <p key={item} className="rounded-xl border border-border/70 bg-background/80 p-4 leading-6">{item}</p>)}</div>;
}
