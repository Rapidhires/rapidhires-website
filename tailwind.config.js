/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0F1D27',
          DEFAULT: '#172B3A',
          800: '#1B3243',
          700: '#233E53',
        },
        graphite: {
          900: '#222A30',
          DEFAULT: '#303A42',
          700: '#404C55',
          600: '#55636D',
          500: '#71808D',
        },
        warmwhite: {
          DEFAULT: '#F7F7F4',
          50: '#FDFDFB',
          100: '#F7F7F4',
          200: '#EFEFEA',
        },
        steel: {
          100: '#EFF2F4',
          200: '#E4E8EA',
          DEFAULT: '#DCE1E3',
          400: '#B8C2C7',
          500: '#94A3AB',
        },
        industrial: {
          orange: {
            DEFAULT: '#D76B39',
            hover: '#C25B2A',
            dark: '#A6481A',
            light: '#F8EDE7',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        eyebrow: '0.12em',
      }
    },
  },
  plugins: [],
}
