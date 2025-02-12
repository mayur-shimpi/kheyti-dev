import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cronos: ['"Cronos Pro"', 'sans-serif'],
      },
      colors: {
        'primary' : "#489A4B",
        'primary100': "#2bb6737a",
        'primary400':"#2BB673",
        'primary500': "#489A4B",
        'primary600': "#006abc",
        'black500' : "#030303",
        'black600' : "#080808",
        'gray300': "#FAFAFA",
        'gray400': "#D9D9D9",
        'gray500': "#DEDEDE",
        'gray600': "#808080",
        'secondary' : "#00bfff",
      },
    },
  },
  plugins: [],
} satisfies Config;
