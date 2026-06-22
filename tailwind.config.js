/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'rich-black': {
          DEFAULT: '#0A0A0A',
          50: '#4A4A4A',
          100: '#333333',
          200: '#1F1F1F',
          300: '#131313',
          400: '#0B0B0B',
          500: '#0A0A0A',
          600: '#060606',
          700: '#030303',
          800: '#010101',
          900: '#000000',
        },
        charcoal: {
          DEFAULT: '#121212',
          50: '#4C4C4C',
          100: '#3B3B3B',
          200: '#2C2C2C',
          300: '#222222',
          400: '#181818',
          500: '#121212',
          600: '#0E0E0E',
          700: '#090909',
          800: '#050505',
          900: '#020202',
        },
        'charcoal-soft': {
          DEFAULT: '#1E1E1E',
        },
        'ivory-white': {
          DEFAULT: '#F5F1E8',
          50: '#FBF8F3',
          100: '#F7F3EE',
          200: '#F0E9E0',
          300: '#E9DFD0',
          400: '#E1D4C0',
          500: '#D8D1C5',
        },
        'soft-beige': {
          DEFAULT: '#D8D1C5',
        },
        'luxury-gold': {
          DEFAULT: '#C8A45D',
          50: '#F2E7C6',
          100: '#E7D3A7',
          200: '#D9B976',
          300: '#C8A45D',
          400: '#B08C4E',
          500: '#9B7643',
          600: '#7A5D33',
          700: '#5B4325',
          800: '#3B2B18',
          900: '#1C140B',
        },
        'champagne-gold': {
          DEFAULT: '#D6B87A',
        },
        'warm-bronze': {
          DEFAULT: '#A67C52',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(4rem, 12vw, 12rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(3rem, 8vw, 10rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2.5rem, 6vw, 6rem)', { lineHeight: '1', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(2rem, 4vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      animation: {
        'blob': 'blob 20s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(20px, -30px) scale(1.1)' },
          '50%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '75%': { transform: 'translate(30px, 10px) scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
