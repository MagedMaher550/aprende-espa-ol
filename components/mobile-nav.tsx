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
          className="p-2 rounded-lg border border-border hover:bg-secondary transition-colors"
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
          <div
            className="bg-card/95 backdrop-blur-sm border-b border-border/40 p-4 space-y-3 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {MAIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
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
