module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "6rem",
        "2xl": "10rem",
      },
    },
    extend: {
      colors: {
        mainRed: "#9F0707",
        darkRed: "#7F0909",
        mainBlue: "#000235",
        darkBlue: "#00011D",
      },
    },
  },

  plugins: [],
};
