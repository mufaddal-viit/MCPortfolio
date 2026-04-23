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
      },
      animation: {
        drift: "drift-pulse 8s ease-in-out infinite",
      },
    },
    fontFamily: {
      "arabic-display": ["Reem Kufi", "sans-serif"],
    },
  },
  plugins: [require("tailwindcss-animate")],
};
