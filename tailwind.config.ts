import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        strawberry: {
          50: "#fff0f3",
          100: "#ffe0e8",
          200: "#ffc1d1",
          300: "#ff92aa",
          400: "#ff5278",
          500: "#ff1f52",
          600: "#f5003a",
          700: "#cc0030",
          800: "#a8002c",
          900: "#8c0029",
        },
        candy: {
          pink: "#FF6B9D",
          yellow: "#FFE66D",
          mint: "#A8E6CF",
          lavender: "#C9B8FF",
          orange: "#FF9A3C",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
      },
      keyframes: {
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "sparkle": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.2)" },
        },
        "pop-in": {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        sparkle: "sparkle 2s ease-in-out infinite",
        "pop-in": "pop-in 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
