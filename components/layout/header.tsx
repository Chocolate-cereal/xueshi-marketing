"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="font-semibold tracking-[-0.02em] text-foreground transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          Xueshi<span className="font-medium text-muted"> Marketing</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {siteConfig.navigation.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-muted transition hover:bg-accent-soft hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                  active && "bg-accent-soft text-accent",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-md border border-border px-3 py-2 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-menu"
          className="border-t border-border bg-background px-6 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-2">
            {siteConfig.navigation.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-sm font-medium text-muted transition hover:bg-accent-soft hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                    active && "bg-accent-soft text-accent",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
            <ThemeToggle />
          </div>
        </nav>
      ) : null}
    </header>
  );
}
