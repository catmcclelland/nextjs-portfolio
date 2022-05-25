module.exports = {
  content: ["./pages/*.{html,js}", "./components/*.{html,js}"],
  theme: {
    fontFamily: {
      mono: ["Space Mono"],
    },
    extend: {
      animation: {
        gradient: "gradient 3s linear infinite",
      },
      keyframes: {
        gradient: {
          "0%": { "background-position": "0 0" },
          "100%": { "background-position": "100% 0" },
        },
      },
    },
  },
  plugins: [],
};
