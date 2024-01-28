/** @type {import('tailwindcss').Config} */
const { createPlugin } = require('windy-radix-palette')
const colors = createPlugin()

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [colors.plugin],
}
