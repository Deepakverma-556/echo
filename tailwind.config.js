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
      colors: {
        sky: "#3a3ef5",
        lightSky: "#32c8f1",
        darkBlue: "#01000b",
        lightBlue: "#3b28f6",
        darkSky:"#0c0838"
      },
      backgroundImage: {
        heroBg:"url('./assets/images/webp/hero-bg.webp')"
      }
    },
  },
  plugins: [],
}