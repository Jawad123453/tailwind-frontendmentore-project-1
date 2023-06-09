/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        BrightRed: "#f25f3a",
        DarkBlue: "#242d52",
        DarkGrayishBlue: "#9095a7",
        VeryDarkBlue: "#1d1e25",
        VeryPaleRed: "#ffefeb",
        VaryLightGray: "#fafafa",
      },
    },
  },
  plugins: [],
};
