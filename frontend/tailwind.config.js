module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./contexts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        screens: { DEFAULT: "1280px" },
        padding: { DEFAULT: "1rem" },
        center: true,
      },
      colors: {
        neutral: {
          100: "#d0d0d0",
          200: "#b8b9b9",
          300: "#a0a1a1",
          400: "#717372",
          500: "#595b5b",
          600: "#414443",
          700: "#2a2c2c",
          800: "#121514",
          900: "#000a03",
        },
        brand: {
          100: "#d0f7e0",
          200: "#b4f0cd",
          300: "#8be2af",
          400: "#3ECE79",
          500: "#38b96d",
          600: "#32a561",
          700: "#2b9055",
          800: "#257c49",
          900: "#1f673d",
        },
        error: "#fa4848",
      },
    },
  },
  plugins: [],
};
