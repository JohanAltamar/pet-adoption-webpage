const { colors } = require(`tailwindcss/defaultTheme`);

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          md: "2rem",
        },
      },
    },
    minWidth: {
      0: "0",
      250: "250px",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#FBD10D",
      secondary: "#ffed4a",
      danger: "#e3342f",
    }),
  },
};
