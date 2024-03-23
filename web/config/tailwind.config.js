/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
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
          done: { text: '#513C51', bg: '#B097B2' } /* purple */,
          planned: { text: '#477185', bg: '#BCD1DB' } /* blue */,
        },
        white: '#ffffff',
        black: '#000000',
      },
      fontSize: {
        18: '4.5rem',
      },
      padding: {
        bentoX: '2rem',
        bentoY: '1.75rem',
        page: '6.25rem',
        18: '4.5rem',
      },
    },
    fontFamily: {
      serif: ['Cambon', 'serif'],
      sans: ['Public Sans', 'sans-serif'],
      mono: ['Roboto Mono', 'monospaced'],
    },
  },
  safelist: ['tag-soon', 'tag-later', 'tag-done', 'tag-planned'],
  plugins: [],
}
