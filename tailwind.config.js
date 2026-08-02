/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e9fbfa',
          100: '#c6f4f2',
          200: '#8ee6e2',
          300: '#4fd1cc',
          400: '#22b7b1',
          500: '#159b95',
          600: '#127d78',
          700: '#126661',
          800: '#12514d',
          900: '#0a2e2c',
        },
        accent: {
          50: '#fff6e6',
          100: '#ffe8bf',
          200: '#ffd285',
          300: '#feb84a',
          400: '#f7a223',
          500: '#e88a0f',
          600: '#c66c08',
          700: '#9a520a',
        },
      },
      fontFamily: {
        display: ['var(--font-poppins)', 'sans-serif'],
        script: ['var(--font-caveat)', 'cursive'],
      },
    },
  },
  plugins: [],
};
