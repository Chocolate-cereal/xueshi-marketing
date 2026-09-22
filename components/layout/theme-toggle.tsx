"use client";
export function ThemeToggle() {
  function toggleTheme() {
    const dark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* Theme still works when storage is unavailable. */
    }
  }
  return (
    <button
      type="button"
      className="theme-button"
      onClick={toggleTheme}
      aria-label="Change colour theme"
    >
      <span className="show-light">Use dark theme</span>
      <span className="show-dark">Use light theme</span>
    </button>
  );
}
