import type { Config } from "tailwindcss";

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
        /** accent */
        "accent-blue": "var(--accent-blue)",
        "accent-purple": "var(--accent-purple)",
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
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "slide-in-right": "slide-in-right 0.2s ease-in-out",
        "slide-out-right": "slide-out-right 0.2s ease-in-out",
        "slide-in-left": "slide-in-left 0.2s ease-in-out",
        "slide-out-left": "slide-out-left 0.2s ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
