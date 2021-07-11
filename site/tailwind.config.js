const { colors } = require("tailwindcss/defaultTheme")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      extend: {
        fontFamily: {
          sans: ["Inter", ...defaultTheme.fontFamily.sans],
        },
      },
      screens: {
        xs: "500px",
        ...defaultTheme.screens,
      },
    },
    colors: {
      ...colors,
      dark: {
        600: "#242424",
        700: "#222222",
        800: "#1e1e1e",
        900: "#121212",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
