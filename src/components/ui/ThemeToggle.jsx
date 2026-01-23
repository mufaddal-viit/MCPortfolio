import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const STORAGE_KEY = "theme";

const getInitialTheme = () => "dark";

export default function ThemeToggle({
  className = "",
  fixed = true,
  showLabel = fixed,
}) {
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
  const label = theme === "dark" ? "Light mode" : "Dark mode";

  return (
    <button
      type="button"
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={theme === "dark"}
      title={`Switch to ${nextTheme} mode`}
      onClick={() => setTheme(nextTheme)}
      disabled
      className={`${fixed ? "fixed bottom-6 right-6 z-50 px-4 py-2 text-sm font-semibold" : "size-11"} inline-flex items-center justify-center gap-2 rounded-full border border-brown/40 bg-transparent text-brown shadow-lg shadow-black/20 transition hover:scale-[1.03] dark:border-orange/60  hover:dark:bg-transparent dark:text-white ${className} hover:cursor-not-allowed`}
    >
      {showLabel && <span>{label}</span>}
      {theme === "dark" ? <Moon className="size-4" /> : <Sun className="size-4" />}
    </button>
  );
}
