/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/theme');

module.exports = {
  content: [
    './node_modules/@nextui-org/theme/dist/components/button.js',
    './node_modules/@nextui-org/theme/dist/components/scroll-shadow.js',
    './src/**/*.{js,jsx,html}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui()],
};
