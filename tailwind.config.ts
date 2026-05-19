import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sage: { DEFAULT: "#87A878", dark: "#6F8F62" },
        terracotta: { DEFAULT: "#C4845A", dark: "#A86E47" },
        forest: "#2C3E2D",
        sand: "#E8DCC8",
        cream: "#F5F0E8",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-playfair)", ...defaultTheme.fontFamily.serif],
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(44,62,45,0.08), 0 4px 16px -4px rgba(44,62,45,0.06)",
        softer: "0 1px 3px rgba(44,62,45,0.06)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
