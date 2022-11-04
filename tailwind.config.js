/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        purple: {
          primary: '#9c27b0',
        },
        green: {
          accent: '#69f0ae',
        },
      },
    },
  },
  plugins: [],
};
