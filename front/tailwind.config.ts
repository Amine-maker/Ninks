import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Space Grotesk", "sans-serif"],
      body: ["Inter", "sans-serif"],
    },
    extend: {
      maxWidth: {
        "8xl": "85rem",
      },
      colors: {
        "button-primary": "var(--button-primary)",
        "button-text": "var(--button-text)",
        background: "var(--background)",
        headline: "var(--headline)",
        paragraph: "var(--paragraph)",
        stroke: "var(--stroke)",
        main: "var(--main)",
        highlight: "var(--highlight)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        "background-invert": "var(--background-invert)",
        "tertiary-n-25": "var(--tertiary-n-25)",
        "tertiary-n-50": "var(--tertiary-n-50)",
        "background-invert-25": "var(--background-invert-25)",
        "paragraph-25": "var(--paragraph-25)",
      },
    },
  },
  plugins: [],
} satisfies Config;
