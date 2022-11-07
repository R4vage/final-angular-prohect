/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      aspectRatio: {
        '3/4': '3 / 4',
      },
      colors: {
        purple: {
          primary: '#7b1fa2',
        },
        green: {
          accent: '#69f0ae',
        },
      },
    },
  },
  plugins: [],
};
