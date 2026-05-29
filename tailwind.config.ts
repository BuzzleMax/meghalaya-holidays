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
          DEFAULT: "#1B4332", // Deep Pine Green
          dark: "#0D2818",
          light: "#2D5A42",
        },
        background: {
          DEFAULT: "#FAFAF8", // Warm Mist White
          dark: "#F0F0EE",
          card: "#FFFFFF",
        },
        text: {
          DEFAULT: "#1A1A1A", // Clean Charcoal
          light: "#4A4A4A",
          muted: "#6B7280",
        },
        accent: {
          DEFAULT: "#FF6B35", // Electric Orange
          hover: "#E55A2B",
          glow: "#FFB347", // Gold Glow
        },
        success: {
          DEFAULT: "#10B981", // Emerald
        },
        glass: {
          light: "rgba(255, 255, 255, 0.8)",
          dark: "rgba(255, 255, 255, 0.95)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(to bottom, rgba(27, 67, 50, 0.85) 0%, rgba(27, 67, 50, 0.6) 40%, rgba(250, 250, 248, 1) 100%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
      },
      boxShadow: {
        "card": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
      },
      borderWidth: {
        "thin": "0.5px",
      },
    },
  },
  plugins: [],
};

export default config;
