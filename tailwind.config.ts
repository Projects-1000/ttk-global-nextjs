import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const spacing = require('tailwindcss/defaultTheme').spacing;
const plugin = require('tailwindcss/plugin');

const spacingObject = {
  '3xs': spacing['0.5'], //2
  '2xs': spacing['1'], //4
  xs: spacing['1.5'], //6
  s: spacing['2'], //8
  m: spacing['3'], //12
  l: spacing['4'], //16
  xl: spacing['5'], //20
  '2xl': spacing['6'], //24
  '3xl': spacing['8'], //32
  '4xl': spacing['10'], //40
  full: '999px', //full
  desktop_container: 'var(--desktop-container-padding-x)',
  laptop_container: 'var(--laptop-container-padding-x)',
  tablet_container: 'var(--tablet-container-padding-x)',
  mobile_container: 'var(--mobile-container-padding-x)',
  desktop_header: 'var(--desktop-header-height)',
  desktop_section_padding: 'var(--desktop-section-paddingY)'
};

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx,scss}'
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
        gray: {
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
        },
        greyscale: {
          surface: {
            default: colors.gray[200],
            subtle: colors.gray[100],
            disable: colors.gray[200]
          },
          border: {
            default: colors.gray[400],
            subtle: colors.gray[300],
            darker: colors.gray[700]
          },
          title: colors.gray[900],
          body: colors.gray[800],
          subtitle: colors.gray[600],
          caption: colors.gray[500],
          negative: colors.gray[50],
          disable: colors.gray[400]
        }
      },
      spacing: spacingObject,
      fontFamily: {
        sans: ['var(--font-montserrat)', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        h1: ['48px', '56px'],
        h2: ['36px', '40px'],
        h3: ['30px', '36px'],
        h4: ['24px', '32px'],
        headline: ['20px', '28px'],
        body: ['16px', '24px'],
        subtitle: ['14px', '20px'],
        caption: ['14px', '20px'],
        footnote: ['12px', '16px']
      },
      fontWeight: {
        bold: '700',
        semibold: '600',
        regular: '400',
        light: '200'
      }
    },
    borderRadius: spacingObject,
    screens: {
      mobile: '376px', //< 376px
      tablet: '376px', //376 <= screen < 769px
      laptop: '769px', //769 <= screen < 1025
      desktop: '1025px' //>=1025
    }
  },
  plugins: [
    plugin(function ({
      addUtilities,
      theme
    }: {
      addUtilities: (utilities: Record<string, any>) => void;
      theme: (path: string) => any;
    }) {
      const typoClasses: Record<string, any> = {};
      const fontSizes = theme('fontSize') as Record<string, [string, string]>;
      const fontWeights = theme('fontWeight') as Record<string, number>;

      for (const [typoName, [size, lineHeight]] of Object.entries(fontSizes)) {
        for (const [weightName, weightValue] of Object.entries(fontWeights)) {
          typoClasses[`.${typoName}-${weightName}`] = {
            fontSize: size,
            lineHeight,
            fontWeight: weightValue
          };
        }
      }

      addUtilities(typoClasses);
    })
  ],
  corePlugins: {
    preflight: false,
    container: false
  }
} satisfies Config;
