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
        "hero-gradient": "linear-gradient(to bottom, rgba(18, 53, 36, 0.85) 0%, rgba(18, 53, 36, 0.6) 40%, rgba(247, 247, 245, 1) 100%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)",
      },
      backdropBlur: {
        xs: "2px",
        'glass': "12px",
      },
      boxShadow: {
        'glass': "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        'card': "0 4px 24px rgba(0, 0, 0, 0.06)",
        'card-hover': "0 8px 32px rgba(0, 0, 0, 0.12)",
        'glow': "0 0 20px rgba(245, 158, 11, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
