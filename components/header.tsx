"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";
import { MAIN_NAV } from "@/lib/navigation/mainNav";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-border/60 bg-background/70 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-base sm:text-lg font-semibold text-foreground tracking-tight hover:opacity-80 transition-opacity"
        >
          <span className="size-8 rounded-xl bg-primary/10 border border-primary/15 grid place-items-center">
            <span className="size-2.5 rounded-full bg-primary" />
          </span>
          <span>Aprende Español</span>
        </Link>
        <div className="hidden md:flex items-center gap-1 flex-shrink-0">
          {MAIN_NAV.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3.5 py-2 text-sm font-medium rounded-xl transition-all duration-200 whitespace-nowrap",
                  isActive
                    ? "text-foreground bg-muted shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>
        <MobileNav />
      </div>
    </nav>
  );
}
