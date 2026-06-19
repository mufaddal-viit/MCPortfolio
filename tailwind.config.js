/** @type {import('tailwindcss').Config} */
const withOpacity = (cssVariable) => `rgb(var(${cssVariable}) / <alpha-value>)`;

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      // Semantic theme tokens backed by CSS variables.
      page: withOpacity("--page"),
      "page-alt": withOpacity("--page-alt"),
      surface: withOpacity("--surface"),
      "surface-2": withOpacity("--surface-2"),
      "surface-elevated": withOpacity("--surface-elevated"),
      primary: withOpacity("--text-primary"),
      secondary: withOpacity("--text-secondary"),
      muted: withOpacity("--text-muted"),
      default: withOpacity("--border"),
      "default-strong": withOpacity("--border-strong"),
      accent: withOpacity("--accent"),
      "accent-strong": withOpacity("--accent-strong"),
      "accent-2": withOpacity("--accent-2"),
      "accent-2-strong": withOpacity("--accent-2-strong"),
      success: withOpacity("--success"),
      warning: withOpacity("--warning"),
      danger: withOpacity("--danger"),
      overlay: withOpacity("--overlay"),
      "tooltip-bg": withOpacity("--tooltip-bg"),
      "tooltip-fg": withOpacity("--tooltip-fg"),
      particle: withOpacity("--particle"),
      cursor: withOpacity("--cursor"),
      "glow-primary": withOpacity("--glow-primary"),
      "glow-secondary": withOpacity("--glow-secondary"),
      "input-bg": withOpacity("--input-bg"),
      "input-fg": withOpacity("--input-fg"),

      // Brand / technology colors also come from CSS variables so the repo has
      // a single color source of truth.
      html: withOpacity("--brand-html"),
      css: withOpacity("--brand-css"),
      javascript: withOpacity("--brand-javascript"),
      typescript: withOpacity("--brand-typescript"),
      react: withOpacity("--brand-react"),
      redux: withOpacity("--brand-redux"),
      tailwind: withOpacity("--brand-tailwind"),
      nodejs: withOpacity("--brand-nodejs"),
      express: withOpacity("--brand-express"),
      github: withOpacity("--brand-github"),
      mysql: withOpacity("--brand-mysql"),
      mongodb: withOpacity("--brand-mongodb"),
    },
    extend: {
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
        card: "1.25rem",
      },
      // Consistent elevation system so every surface shares the same depth language.
      boxShadow: {
        soft: "0 1px 2px rgb(var(--overlay) / 0.04), 0 8px 24px rgb(var(--overlay) / 0.06)",
        card: "0 4px 12px rgb(var(--overlay) / 0.06), 0 18px 48px rgb(var(--overlay) / 0.10)",
        "card-hover":
          "0 8px 20px rgb(var(--overlay) / 0.10), 0 28px 64px rgb(var(--overlay) / 0.16)",
        glow: "0 0 0 1px rgb(var(--accent) / 0.25), 0 12px 40px rgb(var(--accent) / 0.20)",
      },
      // Section rhythm tokens replace scattered mt-[100px]/max-w-[1200px] magic values.
      maxWidth: {
        content: "1200px",
      },
      spacing: {
        section: "6.5rem",
      },
      keyframes: {
        "drift-pulse": {
          "0%, 100%": {
            opacity: "0.4",
            transform: "translateX(10%)",
          },
          "50%": {
            opacity: "1",
            transform: "translateX(70%)",
          },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        drift: "drift-pulse 8s ease-in-out infinite",
        "spin-slow": "spin 28s linear infinite",
        "spin-slow-reverse": "spin 20s linear infinite reverse",
        "spin-fast": "spin 1.5s linear infinite",
      },
    },
    fontFamily: {
      sans: ["Josefin Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      "arabic-display": ["Reem Kufi", "sans-serif"],
    },
    fontSize: {
      // A deliberate type ramp (size / line-height) for consistent vertical rhythm.
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.6rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.8rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1.1" }],
      "6xl": ["3.75rem", { lineHeight: "1.05" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
    },
  },
  plugins: [require("tailwindcss-animate")],
};
