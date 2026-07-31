"use client";

import { useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    typeof document === "undefined"
      ? false
      : document.documentElement.classList.contains("dark"),
  );

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-md border border-border px-3 py-2 text-sm font-medium text-muted transition hover:border-accent hover:bg-accent-soft hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      aria-label="Toggle dark mode"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
