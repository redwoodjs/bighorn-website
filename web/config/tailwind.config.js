/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
      },
      colors: {
        licorice: '#181311' /* dark brown */,
        sulu: '#c4f482' /* lime green */,
        maiTai: '#a86338' /* tan */,
        battleshipGray: '#828282' /* gray */,
        darkPastelRed: '#bf4722' /* redwood red */,
        labels: {
          soon: { text: '#5D960C', bg: '#dcf8b4' } /* green */,
          later: { text: '#944711', bg: '#F1AB78' } /* orange */,
          done: { text: '#477185', bg: '#B097B2' } /* purple */,
          planned: { text: '#944711', bg: '#BCD1DB' } /* blue */,
        },
        white: '#ffffff',
        black: '#000000',
      },
      padding: {
        page: '6.25rem',
        18: '4.5rem',
      },
    },
    fontFamily: {
      serif: ['mandrel-normal', 'serif'],
      sans: ['Public Sans', 'sans-serif'],
    },
  },
  plugins: [],
}
