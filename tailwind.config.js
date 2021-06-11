module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "600px",
      md: "905px",
      lg: "1240px",
      xl: "1440px",
    },
  },
  variants: {
    extend: {
      cursor: ["hover", "focus", "disabled"],
      opacity: ["disabled"],
      backgroundColor: ["active", "disabled", "first"],
      borderColor: ["active", "disabled"],
      textColor: ["active", "disabled"],
      margin: ["first"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
