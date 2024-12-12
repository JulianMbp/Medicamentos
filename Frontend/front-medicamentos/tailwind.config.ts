import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'p-olivine': {
          '50': '#f3f8ed',
          '100': '#e2f0d7',
          '200': '#c8e2b4',
          '300': '#a5cf87',
          '400': '#91c171',
          '500': '#679f43',
          '600': '#4e7e32',
          '700': '#3d612a',
          '800': '#344e26',
          '900': '#2e4324',
          '950': '#15240f',
        },
        'p-harvest-gold': {
          '50': '#fbf8f1',
          '100': '#f7efdd',
          '200': '#eeddba',
          '300': '#e2c48f',
          '400': '#daae72',
          '500': '#cd8d42',
          '600': '#bf7737',
          '700': '#9e5e30',
          '800': '#7f4b2d',
          '900': '#673f27',
          '950': '#372013',
        },


        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
