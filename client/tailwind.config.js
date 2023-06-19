/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    minHeight: {
      screen: "70vh",
    },
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      height: (theme) => ({
        "screen/66": "66vh",
        "screen/50": "50vh",
        "screen/40": "40vh",
      }),
      colors: {
        darkBlue: "rgba(21,38,67,255)",
      },
      boxShadow: {
        custom: "4px 4px 6px -1px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
