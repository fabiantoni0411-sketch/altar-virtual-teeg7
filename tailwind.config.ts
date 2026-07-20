import type { Config } from "tailwindcss";

// Sistema de tokens do Altar Virtual TEEG7
// Azul royal em degradê + branco + dourado suave, clima de luz/névoa espiritual
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        altar: {
          navy: "#0B1447",     // azul royal profundo (fundo)
          royal: "#1E3A8A",    // azul royal principal
          royalLight: "#3B5FCB", // azul royal claro (degradê)
          gold: "#D4AF6A",     // dourado suave (detalhes)
          goldLight: "#F0DCA6",// dourado claro (brilho)
          mist: "#E8ECFB",     // névoa/branco azulado
          white: "#FDFDFF",
        },
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
      backgroundImage: {
        "altar-gradient":
          "radial-gradient(ellipse at top, #1E3A8A 0%, #0B1447 60%, #05081F 100%)",
        "gold-shine":
          "linear-gradient(135deg, #F0DCA6 0%, #D4AF6A 50%, #B88A3F 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(212,175,106,0.25)",
        candle: "0 0 25px rgba(255,200,120,0.55)",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1", transform: "scaleY(1)" },
          "50%": { opacity: "0.85", transform: "scaleY(0.96)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        flicker: "flicker 2.2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
