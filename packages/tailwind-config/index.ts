import type { Config } from "tailwindcss";
import { animations, easeIn, easeOut, keyframes } from "./animations";

export default {
  content: ["../../packages/ui/src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "muted-foreground": "var(--muted-foreground)",
        "separator-non-opaque": "var(--separator-non-opaque)",
        /** text */
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-contrast": "var(--text-contrast)",
        /** accent, allow opacity */
        "accent-blue": "rgb(var(--accent-blue-rgb) / <alpha-value>)",
        "accent-purple": "rgb(var(--accent-purple-rgb) / <alpha-value>)",
        /** tag */
        "tag-background": "var(--tag-background)",
        "tag-contrast-background": "var(--tag-contrast-background)",
      },
      spacing: {
        "safe-x":
          "env(safe-area-inset-left, 0px) env(safe-area-inset-right, 0px)",
        "safe-bottom": "env(safe-area-inset-bottom, 0px)",
        "page-padding": "16px",
      },
      keyframes: {
        ...keyframes,
      },
      animation: {
        ...animations,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
