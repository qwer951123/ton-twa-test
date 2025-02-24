export const easeIn = "cubic-bezier(0.0, 0, 0.2, 1)";
export const easeOut = "cubic-bezier(0.4, 0, 1, 1)";

export const keyframes = {
  "slide-in-bottom": {
    "0%": { transform: "translateY(100%)" },
    "100%": { transform: "translateY(0)" },
  },
  "slide-out-bottom": {
    "0%": { transform: "translateY(0)" },
    "100%": { transform: "translateY(100%)" },
  },
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
  "fade-in": {
    "0%": { opacity: "0" },
    "100%": { opacity: "1" },
  },
  "fade-out": {
    "0%": { opacity: "1" },
    "100%": { opacity: "0" },
  },
};

export const animations = {
  "slide-in-bottom": `slide-in-bottom 0.25s ${easeIn}`,
  "slide-out-bottom": `slide-out-bottom 0.2s ${easeOut}`,
  "slide-in-right": `slide-in-right 0.25s ${easeIn}`,
  "slide-out-right": `slide-out-right 0.2s ${easeOut}`,
  "slide-in-left": `slide-in-left 0.25s ${easeIn}`,
  "slide-out-left": `slide-out-left 0.2s ${easeOut}`,
  "fade-in": `fade-in 0.25s ${easeIn}`,
  "fade-out": `fade-out 0.2s ${easeOut}`,
};
