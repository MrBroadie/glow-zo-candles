/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
    },
  },
  plugins: [],
};
