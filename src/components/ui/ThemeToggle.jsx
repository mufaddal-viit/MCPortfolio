import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={theme === "dark"}
      title={`Switch to ${nextTheme} mode`}
      onClick={() => setTheme(nextTheme)}
      className="fixed bottom-6 right-6 z-50 rounded-full border border-brown/40 bg-newcolor/90 px-4 py-2 text-sm font-semibold text-brown shadow-lg shadow-black/20 transition hover:scale-[1.03] hover:bg-orange/20 dark:border-orange/60 dark:bg-brown/80 dark:text-white"
    >
      {theme === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}
