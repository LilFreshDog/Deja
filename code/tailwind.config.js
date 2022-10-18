/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./Components/*.{js,jsx,ts,tsx}", "./Components/**/*.{js,jsx,ts,tsx}", "./**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fafafa",
        black: "#1e1c1c"
      },

    },
  },
  plugins: [],
  assets: ["./assets/fonts/"],
}
