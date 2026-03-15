import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export const THEME_STORAGE_KEY = "theme-preference";
const DEFAULT_THEME = "system";
const THEMES = new Set(["light", "dark", "system"]);

const ThemeContext = createContext(null);

const isThemeValue = (value) => THEMES.has(value);

const getSystemTheme = () => {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const getStoredTheme = () => {
  if (typeof window === "undefined") return DEFAULT_THEME;

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  return isThemeValue(storedTheme) ? storedTheme : DEFAULT_THEME;
};

const resolveThemePreference = (themePreference) =>
  themePreference === "system" ? getSystemTheme() : themePreference;

const applyThemeToRoot = (themePreference) => {
  if (typeof document === "undefined") {
    return resolveThemePreference(themePreference);
  }

  const resolvedTheme = resolveThemePreference(themePreference);
  const root = document.documentElement;

  root.dataset.theme = resolvedTheme;
  root.dataset.themePreference = themePreference;
  root.classList.toggle("dark", resolvedTheme === "dark");
  root.style.colorScheme = resolvedTheme;

  return resolvedTheme;
};

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(getStoredTheme);
  const [resolvedTheme, setResolvedTheme] = useState(() =>
    applyThemeToRoot(getStoredTheme()),
  );

  useEffect(() => {
    const nextResolvedTheme = applyThemeToRoot(theme);
    setResolvedTheme(nextResolvedTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (theme !== "system") return;
      setResolvedTheme(applyThemeToRoot("system"));
    };

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, [theme]);

  const setTheme = (nextTheme) => {
    if (!isThemeValue(nextTheme)) return;
    setThemeState(nextTheme);
  };

  const toggleTheme = () => {
    setThemeState((currentTheme) => {
      const currentResolvedTheme =
        currentTheme === "system"
          ? resolveThemePreference("system")
          : currentTheme;

      return currentResolvedTheme === "dark" ? "light" : "dark";
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
