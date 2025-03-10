/** @type {import('tailwindcss').Config} */
const { join } = require("path");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-bg": "#F0F0F0",
      },
      hideScrollbar: {
        "&::-webkit-scrollbar": {
          display: "none",
        },
      },
    },
  },
  plugins: [],
};
