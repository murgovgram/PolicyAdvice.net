const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        colorOrange: '#FF6600',
        colorheader: '#F6F6F6',
        colorTextBlue: '#0F5499',
        backgroundGray: '#E5E5E5',
        colorLightblue: '#E0FBFC',
        colorStrongblue: '#8CCDF3'
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      Montserrat: ['Montserrat']
    },


  },
  variants: {
    extend: {},
    display: ['responsive', 'group-hover', 'group-focus'],
  },
  plugins: []
}
