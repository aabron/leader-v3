/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'offwhite': '#EEEEEE' ,
      'navy': '#000080',
      'black': '#000000',
      'gray': '#999999'
    },
    fontFamily: {
      display: ["Rubik", "sans-serif"], 
    },
  },
  plugins: [],
}

