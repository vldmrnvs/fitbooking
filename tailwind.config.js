/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        // Use the imported Geist font directly. The font is loaded in
        // `globals.css` via a Google Fonts @import. We include a fallback of
        // `sans-serif` to ensure graceful degradation if the font fails to
        // load.
        geist: ['Geist', 'sans-serif']
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        fitbooking: {
          primary: '#4876F5',
          secondary: '#F09770',
          accent: '#344FA0',
          neutral: '#111827',
          'base-100': '#F9FAFB'
        }
      }
    ]
  }
};