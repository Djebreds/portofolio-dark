import type { Config } from 'tailwindcss';
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');
const svgToDataUri = require('mini-svg-data-uri');

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
          600: '#003153',
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
      animation: {
        'text-reveal': 'text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s',
        'meteor-effect': 'meteor 5s linear infinite',
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
      keyframes: {
        'text-reveal': {
          '0%': {
            transform: 'translate(0, 100%)',
          },
          '100%': {
            transform: 'translate(0, 0)',
          },
        },
        scroll: {
          to: {
            transform: 'translate(calc(-200% - 0.5rem))',
          },
        },
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          'bg-grid': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="25" height="25" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          'bg-grid-small': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          'bg-dot': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="35" height="35" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme('backgroundColor')),
          type: 'color',
        },
      );
    },
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ':root': newVars,
  });
}
