import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "az-cyan": "#00d4ff",
        "az-teal": "#00b894",
        "az-blue": "#0984e3",
        "az-dark": "#060d1a",
        "az-navy": "#0a1628",
        "az-card": "#0d1f35",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-orbitron)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "wave": "wave 2s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "eq-bar": "eq-bar 1.2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { textShadow: "0 0 10px #00d4ff, 0 0 20px #00d4ff" },
          "100%": { textShadow: "0 0 20px #00d4ff, 0 0 40px #00d4ff, 0 0 80px #00b894" },
        },
        wave: {
          "0%, 100%": { transform: "scaleY(0.5)" },
          "50%": { transform: "scaleY(1.5)" },
        },
        "eq-bar": {
          "0%": { transform: "scaleY(0.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      backgroundImage: {
        "az-gradient": "linear-gradient(135deg, #00d4ff 0%, #00b894 50%, #0984e3 100%)",
        "dark-radial": "radial-gradient(ellipse at center, #0d1f35 0%, #060d1a 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
