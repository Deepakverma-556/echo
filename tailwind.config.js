/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: "1025px",
        md: "770px"
      },
      fontFamily: {
        outfit: ["outfit", "sans-serif"]
      },
      colors: {
        sky: "#3a3ef5",
        lightSky: "#32c8f1",
        darkBlue: "#01000b",
        lightBlue: "#3b28f6",
      }
    },
  },
  plugins: [],
}