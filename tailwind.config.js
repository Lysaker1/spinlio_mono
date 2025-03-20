/** @type {import('tailwindcss').Config} */
const { join } = require("path");
module.exports = {
  content: [
    "./src/frontend/**/*.{js,jsx,ts,tsx}",
    // Don't include all .js files which might match node_modules
  ],
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
