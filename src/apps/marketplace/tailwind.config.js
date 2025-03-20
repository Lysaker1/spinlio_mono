/** @type {import('tailwindcss').Config} */
const { join } = require("path");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../shared/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "gray-bg": "#F0F0F0",
      },
    },
  },
  plugins: [],
}; 