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
      },
      spacing: {
        "navigation-bar-height": "48px",
        "safe-x":
          "env(safe-area-inset-left, 0px) env(safe-area-inset-right, 0px)",
        "safe-bottom": "env(safe-area-inset-bottom, 0px)",
      },
      screens: {
        xs: "375px",
        sm: "390px",
        md: "430px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
