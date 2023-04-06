import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Space Grotesk", "sans-serif"],
      body: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        "button-primary": "var(--button-primary)", // ajouter des variantes aux bouton et changer le jaune
        "button-text": "var(--button-text)",
        background: "var(--background)",
        headline: "var(--headline)",
        paragraph: "var(--paragraph)",
        stroke: "var(--stroke)",
        main: "var(-main)",
        highlight: "var(--highlight)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        "background-invert": "var(--background-invert)",
        "tertiary-25": "var(--tertiary-25)",
        "background-invert-25": "var(--background-invert-25)",
      },
    },
  },
  plugins: [],
} satisfies Config;
