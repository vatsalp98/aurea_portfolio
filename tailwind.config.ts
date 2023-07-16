import { type Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        primary:
          "0 0 5px theme('colors.light'), 0 0 20px theme('colors.primary')",
        customBlue:
          "0 0 5px theme('colors.blue.500'), 0 0 20px theme('colors.blue.400')",
      },
      colors: {
        dark: "#18191A",
        light: "#F3F2F2",
        cardDark: "#242526",
        hoverDark: "#3A3B3C",
        secondaryTextDark: "#B0B3B8",
        gradDarkStart: "#414141",
        gradDarkEnd: "#000000",
        gradStart: "#864BA2",
        gradEnd: "#BF3A30",
        primary: "#5F0A87",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "479px" },
    },
  },
  plugins: [],
} satisfies Config;
