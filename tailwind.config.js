/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    fontFamily: {
      'noto-sans': ['Noto Sans', 'serif'],
    },
    extend: {
      
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      "light",
      "dark",
      "business",
    ],
  },
};
