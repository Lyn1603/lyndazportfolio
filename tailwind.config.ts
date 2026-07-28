import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "indigo-night": "hsl(260 60% 8%)",
        "indigo-deep": "hsl(258 65% 12%)",
        "lavender-glow": "hsl(270 70% 85%)",
        "star-bright": "hsl(280 100% 98%)",
        "accent-pink": "hsl(320 100% 70%)",
        "border-dim": "hsl(270 70% 85% / 0.15)",
      },
      fontFamily: {
        display: ["VT323", "monospace"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      keyframes: {
        starPulse: {
          "0%, 100%": { opacity: "0.3", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        heroSlide: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "star-pulse": "starPulse 3s infinite ease-in-out",
        "hero-slide": "heroSlide 0.6s ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
