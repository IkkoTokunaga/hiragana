import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
        },
      },
      fontFamily: {
        rounded: [
          '"Hiragino Maru Gothic ProN"',
          '"Hiragino Maru Gothic Pro"',
          '"M PLUS Rounded 1c"',
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
