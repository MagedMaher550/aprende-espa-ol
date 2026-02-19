import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";
import { MAIN_NAV } from "@/lib/navigation/mainNav";

export function Header() {
  return (
    <nav className="border-b border-border/40 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4 relative">
        <Link
          href="/"
          className="text-lg sm:text-xl md:text-2xl font-bold text-foreground"
        >
          Aprende Español
        </Link>
        <div className="hidden md:flex items-center gap-2 sm:gap-4 md:gap-8 flex-shrink-0">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
        <MobileNav />
      </div>
    </nav>
  );
}
