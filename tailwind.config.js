/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          normal: '#06121e',
          dark: '#040f1a',
          light: '#0c2135',
        },
        secondary: {
          normal: '#090d11',
          dark: '#06090c',
          light: '#1a1f25',
        },
        black: {
          normal: '#232224',
          dark: '#161617',
          light: '#353436',
        },
        white: {
          normal: '#fff',
          dark: '#edeaef',
          light: '#fefbff',
        },
        red: {
          normal: '#d94140',
          dark: '#b42b2b',
          light: '#d34040',
        },
        gray: '#b3b3b3',
      },

      fontFamily: {
        lora: ['Lora', 'serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

