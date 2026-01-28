/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        GoogleSans: ['GoogleSans', 'sans'],
        sans: ['GoogleSans', ...defaultTheme.fontFamily.sans],
        RobotoMono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        'Blue500': '#4285f4',
        'Red500': '#ea4335',
        'Yellow500': '#fbbc04',
        'Green500': '#34a853',
        'Grey200': '#e8eaed',
        'Grey900': '#202124',
        'LightBlue': '#BBDEFB',
        // IWD 2026 Theme Colors - Purple/Violet
        'IWDPurple': '#7C3AED', // Primary vibrant purple
        'IWDDeepPurple': '#5B21B6', // Deep purple
        'IWDDarkPurple': '#4C1D95', // Dark purple for backgrounds
        'IWDLightPurple': '#A78BFA', // Light purple accent
        'IWDViolet': '#8B5CF6', // Violet
        'IWDPink': '#EC4899', // Pink accent
        'IWDMagenta': '#D946EF', // Magenta accent
        'IWDBackground': '#0f0a1a', // Very dark purple-black background
        'IWDCard': '#1a1025', // Dark card background
        'IWDText': '#E9D5FF', // Light purple text
        // Legacy aliases for easier migration
        'DFBlue': '#7C3AED', // Now maps to IWD Purple
        'DFGreen': '#8B5CF6', // Now maps to IWD Violet
        'DFTeal': '#A78BFA', // Now maps to IWD Light Purple
        'DFBackground': '#0f0a1a' // Now maps to dark background
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
