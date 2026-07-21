/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "var(--brand)", dark: "var(--brand-deep)", light: "#4b8bea" },
        canvas: "var(--canvas)",
        surface: { DEFAULT: "var(--surface)", strong: "var(--surface-strong)" },
        ink: { DEFAULT: "var(--ink)", soft: "var(--surface)", raised: "var(--surface-strong)" },
        muted: "var(--muted)",
        line: { DEFAULT: "var(--line)", strong: "var(--line-strong)" },
      },
      fontFamily: { display: ["'Space Grotesk'", "system-ui", "sans-serif"], mono: ["'JetBrains Mono'", "monospace"] },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
      },
      animation: { "fade-up": "fade-up .6s ease-out forwards", "fade-in": "fade-in .8s ease-out forwards" },
    },
  },
  plugins: [],
};
