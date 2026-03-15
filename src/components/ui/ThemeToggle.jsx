import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/theme/ThemeProvider";

export default function ThemeToggle({
  className = "",
  fixed = true,
  showLabel = fixed,
}) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
  const label = resolvedTheme === "dark" ? "Light mode" : "Dark mode";

  return (
    <button
      type="button"
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={resolvedTheme === "dark"}
      title={`Switch to ${nextTheme} mode`}
      onClick={toggleTheme}
      className={`${fixed ? "fixed bottom-6 right-6 z-50 px-4 py-2 text-sm font-semibold" : "size-11"} inline-flex items-center justify-center gap-2 rounded-full border border-default/50 bg-surface/70 text-primary shadow-lg shadow-overlay/15 transition hover:scale-[1.03] hover:bg-surface-elevated/90 ${className}`}
    >
      {showLabel && <span>{label}</span>}
      {resolvedTheme === "dark" ? (
        <Moon className="size-4" />
      ) : (
        <Sun className="size-4" />
      )}
    </button>
  );
}
