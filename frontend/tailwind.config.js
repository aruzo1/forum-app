module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx", "./contexts/**/*.tsx"],
  theme: {
    extend: {
      container: {
        screens: { DEFAULT: "1280px" },
        padding: { DEFAULT: "1rem" },
        center: true,
      },
      colors: {
        brand: {
          DEFAULT: "#3ECE79",
          light: "#8be2af",
          dark: "#38b96d",
        },
        error: "#fa4848",
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
      },
    },
  },
  plugins: [],
};
