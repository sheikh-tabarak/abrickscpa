/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{js,ts,jsx,tsx,html}",
    "*.{js,ts,jsx,tsx,html}",
  ],
  extends:{
    colors: {
      mainBlue:'#062d60',
      logoBlue:'#7d93cc',
      logoYellow:'#e5e65e'
    },

    transitionProperty: {
      'colors': 'background-color, border-color, color, fill, stroke',
    },
  },
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'ans-serif'],
    },
  },
  plugins: [],
};

