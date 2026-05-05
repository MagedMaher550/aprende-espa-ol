"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { MAIN_NAV } from "@/lib/navigation/mainNav";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Menu Button */}
      <div className="flex items-center gap-2 md:hidden">
        <ThemeToggle />
        <button
          onClick={toggleMenu}
          className="h-11 w-11 inline-flex items-center justify-center rounded-xl border border-border bg-background/70 hover:bg-secondary transition-all duration-200"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 top-16 md:hidden z-40"
          onClick={closeMenu}
        >
          <div className="absolute inset-0 bg-foreground/10 backdrop-blur-[2px]" />
          <div
            className="relative bg-card/95 backdrop-blur-md border-b border-border/60 px-4 py-4 space-y-2 flex flex-col shadow-sm"
            onClick={(e) => e.stopPropagation()}
          >
            {MAIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="h-11 px-3 rounded-xl text-sm font-medium text-foreground/90 hover:text-foreground hover:bg-muted/70 transition-all duration-200 flex items-center"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
