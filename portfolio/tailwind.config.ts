import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react"
const { createThemes } = require('tw-colors');
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(),
  createThemes({
    light: {
      's-primary': '#ffffff',
      's-secondary': '',
      'b-primary': '#99c7fb',
      'b-secondary': '#c9a9e9',
    },
    dark: {
      's-primary': '#000000',
      's-secondary': '#3f3f46',
      'b-primary': '#338ef7',
      'b-secondary': '#7828c8',
    }
  })]
};
export default config;
