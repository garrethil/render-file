const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      headerBG: "#858689",
      highlight: "#0c2cec",
    },
    fontFamily: {
      sans: ["Press Start 2P", "sans-serif"],
    },
    backgroundImage: {
      "custom-gradient": "linear-gradient(to bottom, #83b6d8, #c990ddaf)",
    },
    extend: {},
  },
  plugins: [],
});
