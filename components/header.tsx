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
    <nav className="border-b border-border/60 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight hover:opacity-80 transition-opacity"
        >
          Aprende Español
        </Link>
        <div className="hidden md:flex items-center gap-1 flex-shrink-0">
          {MAIN_NAV.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap",
                  isActive
                    ? "text-foreground bg-muted"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
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
