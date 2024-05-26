/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-theme': '#240750',
        'new-theme': '#030637', 
      }, 
      gridTemplateColumns: {
        '3fr-2fr': '3fr  2fr'
      },
    },
  },
  plugins: [],
}

