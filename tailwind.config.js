/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        futura: ['Futura', 'sans-serif']
      },
      colors: {
        primary: '#00BADB',
        secondary: '#FFA800'
      }
    },
  },
  plugins: [],
}

