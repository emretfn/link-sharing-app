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
          DEFAULT: "#633CFF",
          hover: "#BEADFF",
          light: "#EFEBFF",
        },
        grey: {
          DEFAULT: "#737373",
          dark: "#333333",
          light: "#FAFAFA",
          border: "#D9D9D9",
        },
        white: "#FFFFFF",
        red: "#FF3939",
      },
      fontSize: {
        sm: "0.75rem",
        "4xl": "2rem",
      },
      boxShadow: {
        active: "0px 0px 32px 0px rgba(99, 60, 255, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
