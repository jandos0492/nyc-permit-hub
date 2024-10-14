/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d5e2e6'
      },
      fontFamily: {
        playfair: ['Playfair Display'],
        lato: ['Lato']
      },
    },
  },
  plugins: [],
}