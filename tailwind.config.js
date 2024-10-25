/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily:{
        'NotoSans': ['Noto Sans', "Sans-serif"],
        'Oxanium': ['Oxanium'],
        'IBMPlexMono': ['IBM Plex Mono']
      }
    },
  },
  plugins: [require('daisyui')],
}

