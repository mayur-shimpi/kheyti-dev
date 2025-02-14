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
        cronosMedium: ['Cronos Pro Caption', 'sans-serif'],
        cronosRegular: ['Cronos Pro Regular', 'sans-serif'],
        cronosLight: ['Cronos Pro Light', 'sans-serif'],
        cronosExtraLight: ['Cronos Pro Light Subhead', 'sans-serif'],
        cronosSemiBold: ['Cronos Pro Semibold', 'sans-serif'],
        cronosBold: ['Cronos Pro Bold', 'sans-serif'],
      },
      colors: {
        'primary' : "#489A4B",
        'primary100': "#2bb6737a",
        'primary400':"#2BB673",
        'primary500': "#489A4B",
        'primary600': "#006abc",
        'black500' : "#030303",
        'black600' : "#080808",
        'gray100':"#bebebe",
        'gray200':"#F6F9F3",
        'gray300': "#FAFAFA",
        'gray400': "#D9D9D9",
        'gray500': "#DEDEDE",
        'gray600': "#808080",
        'gray700':"#313131",
        'gray800':"#404040",
        'secondary' : "#00bfff",
        'transparent' : "#00000000",
      },
    },
  },
  plugins: [],
} satisfies Config;
