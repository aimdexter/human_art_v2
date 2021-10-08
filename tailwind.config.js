const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fuchsia: colors.fuchsia,
      },
      listStyleType: {
        square: 'square',
        roman: 'upper-roman',
      },
      fontFamily: {
        'fa': ['Poppins'],
        'Montserrat':['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('./public/images/hero.svg')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
