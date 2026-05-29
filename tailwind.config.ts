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
        primary: {
          DEFAULT: "#123524", // Deep Pine Green
          dark: "#0d281a",
          light: "#1a4a32",
        },
        background: {
          DEFAULT: "#F7F7F5", // Warm Mist White
          dark: "#E8E8E6",
        },
        text: {
          DEFAULT: "#1F2937", // Clean Charcoal
          light: "#4B5563",
        },
        accent: {
          DEFAULT: "#F59E0B", // Sunrise Orange
          hover: "#D97706",
          glow: "#FBBF24", // Gold Glow
        },
        success: {
          DEFAULT: "#10B981", // Emerald
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(to bottom, rgba(18, 53, 36, 0.7) 0%, rgba(18, 53, 36, 0.4) 50%, rgba(247, 247, 245, 1) 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
