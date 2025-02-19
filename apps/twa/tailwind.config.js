import sharedConfig from "@repo/tailwind-config";

/** @type {import('tailwindcss').Config} */
export default {
  ...sharedConfig,
  content: [
    ...sharedConfig.content,
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
};
