/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        castiron: {
          950: '#07090A',
          900: '#0B0E10',
          DEFAULT: '#101417',
          800: '#171D21',
          700: '#232B32',
          600: '#323D46',
        },
        vellum: {
          50: '#FAFBF8',
          DEFAULT: '#F4F4F0',
          100: '#F4F4F0',
          200: '#E8E8E2',
          300: '#DCDCD4',
        },
        steel: {
          50: '#F8FAFB',
          100: '#F0F3F5',
          200: '#E2E6E9',
          DEFAULT: '#D3D8DC',
          300: '#D3D8DC',
          400: '#B6BFC6',
          500: '#8B959E',
          600: '#5E6871',
          700: '#434B52',
        },
        vermilion: {
          DEFAULT: '#D94A1E',
          hover: '#C23E15',
          dark: '#A3330E',
          light: '#FBECE7',
          border: '#B83B13',
        },
        // Legacy aliases
        navy: {
          DEFAULT: '#101417',
          900: '#0B0E10',
          800: '#171D21',
          700: '#232B32',
        },
        warmwhite: {
          DEFAULT: '#F4F4F0',
          50: '#FAFBF8',
          100: '#F4F4F0',
          200: '#E8E8E2',
        },
        graphite: {
          DEFAULT: '#232B32',
          900: '#101417',
          700: '#323D46',
          600: '#434B52',
          500: '#5E6871',
          400: '#8B959E',
        },
        industrial: {
          orange: {
            DEFAULT: '#D94A1E',
            hover: '#C23E15',
            dark: '#A3330E',
            light: '#FBECE7',
          }
        }
      },
      fontFamily: {
        sans: ['Calibri', 'Carlito', 'Candara', 'Segoe UI', '-apple-system', 'Noto Sans JP', 'Hiragino Sans', 'Meiryo', 'sans-serif'],
        calibri: ['Calibri', 'Carlito', 'Candara', 'Segoe UI', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
        jp: ['Noto Sans JP', 'Calibri', 'Carlito', 'Hiragino Sans', 'Meiryo', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.035em',
        tight: '-0.02em',
        eyebrow: '0.14em',
        spec: '0.08em',
      },
      borderRadius: {
        none: '0px',
        DEFAULT: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        full: '9999px',
      }
    },
  },
  plugins: [],
}
