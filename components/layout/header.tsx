"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
export function Header({
  navigation,
}: {
  navigation: { label: string; href: string }[];
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="header-inner">
        <Link className="wordmark" href="/" onClick={() => setOpen(false)}>
          Xueshi<span> Marketing</span>
        </Link>
        <button
          ref={menuButton}
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav
          id="main-navigation"
          className={open ? "main-navigation is-open" : "main-navigation"}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={
                (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href))
                  ? "page"
                  : undefined
              }
              className={item.href === "/contact" ? "nav-contact" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
