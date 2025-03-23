/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./screens/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {

        // Background
        primary: '#03174C',
        secondary: '#000A25',

        // Components
        white: {
          primary: '#FFFFFF',
          secondary: '#EBEAEC',
          tertiary: '#E6E7F2'
        },

        purple: {
          light: '#8E97FD',
          semiDark: '#892FE0',
          dark: '#3D35B1'
        }
      }
    },
  },
  plugins: [],
}