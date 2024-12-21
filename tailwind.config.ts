import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const spacing = require('tailwindcss/defaultTheme').spacing;

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        anzac: {
          50: '#FCF8E9',
          100: '#F8F1D3',
          200: '#F2E3A6',
          300: '#EBD57A',
          400: '#E5C64D',
          500: '#E0BD2F',
          600: '#B2931A',
          700: '#856F14',
          800: '#594A0D',
          900: '#2C2507'
        },
        blue: {
          10: '#FAFAFF',
          50: '#EBECFA',
          100: '#D7DAF4',
          200: '#AEB4EA',
          300: '#868FDF',
          400: '#5D69D5',
          500: '#3C4BCC',
          600: '#2A36A2',
          700: '#202979',
          800: '#151B51',
          900: '#0B0E28',
          950: '#050714'
        },
        grey: {
          50: '#F1F1F3',
          100: '#E3E3E8',
          200: '#C7C8D1',
          300: '#ABACBA',
          400: '#8F91A3',
          500: '#787A90',
          600: '#5C5E70',
          700: '#454654',
          800: '#2E2F38',
          900: '#17171C',
          950: '#0C0C0E'
        },
        red: {
          50: '#FFE5E5',
          100: '#FFCCCC',
          200: '#FF9999',
          300: '#FF6666',
          400: '#FF3333',
          500: '#FF0000',
          600: '#CC0000',
          700: '#990000',
          800: '#660000',
          900: '#330000',
          950: '#1A0000'
        },
        green: {
          50: '#E5FFE5',
          100: '#CCFFCC',
          200: '#99FF99',
          300: '#66FF66',
          400: '#33FF33',
          500: '#00FF00',
          600: '#00CC00',
          700: '#009900',
          800: '#006600',
          900: '#003300',
          950: '#001A00'
        },
        yellow: {
          50: '#FFFDE5',
          100: '#FFFBCC',
          200: '#FFF799',
          300: '#FFF266',
          400: '#FFEE33',
          500: '#FFEA00',
          600: '#CCBB00',
          700: '#998C00',
          800: '#665E00',
          900: '#332F00',
          950: '#1A1700'
        },
        black: '#221F1F',
        primary: {
          default: colors.blue[500],
          subtle: colors.blue[50],
          lighter: colors.blue[300],
          darker: colors.blue[700],
          label: colors.blue[500]
        },
        secondary: {
          default: colors.yellow[500],
          subtle: colors.yellow[50],
          lighter: colors.yellow[300],
          darker: colors.yellow[700],
          label: colors.yellow[500]
        },
        success: {
          default: colors.green[500],
          subtle: colors.green[50],
          lighter: colors.green[300],
          darker: colors.green[700],
          label: colors.green[500]
        },
        error: {
          default: colors.red[500],
          subtle: colors.red[50],
          lighter: colors.red[300],
          darker: colors.red[700],
          label: colors.red[500]
        }
        // greyscale: {
        //   default: colors.red[500],
        //   subtle: colors.red[50],
        //   lighter: colors.red[300],
        //   darker: colors.red[700],
        //   label: colors.red[500],
        // }
      },
      spacing: {
        '3xs': spacing['0.5'],
        '2xs': spacing['1'],
        xs: spacing['1.5'],
        s: spacing['2'],
        m: spacing['3'],
        l: spacing['4'],
        xl: spacing['5'],
        '2xl': spacing['6'],
        '3xl': spacing['8'],
        '4xl': spacing['10'],
        full: '999px',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
} satisfies Config;
