import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#3868A7',
          200: '#305A91',
          300: '#294D7B',
          400: '#223F66',
          500: '#223F66',
          600: '#15273F',
        },
        secondary: {
          100: '#C2E5FF',
          200: '#85CCFF',
          300: '#0077CC',
          400: '#0065AD',
          500: '#00538F',
        },
        write: {
          100: 'FFFFFF',
          200: '#E9F0F8',
          300: '#D4E0F1',
          400: '#BED1E9',
          500: '#A9C2E2',
          600: '#93B2DB',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
