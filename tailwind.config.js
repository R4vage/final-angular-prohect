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
      gridTemplateRows: {
        smlayout: '56px repeat(5, minmax(0, 1fr))',
        layout: '64px repeat(5, minmax(0, 1fr))',
      },
      gridTemplateColumns: {
        layout: 'repeat(2, minmax(150px, 1fr)) repeat(10, minmax(0, 1fr))',
        tableTracks: '25px, 5fr, minmax(40px,1fr)',
        playlistTracks: '25px, 2fr, 2fr, minmax(40px,1fr)',
      },
    },
  },
  plugins: [],
};
