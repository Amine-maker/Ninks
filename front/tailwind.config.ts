import type { Config } from "tailwindcss";

declare var require: any;

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
      boxShadow: {
        min: "0px 0px 3px 0px #a1a1a136;",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
} satisfies Config;

