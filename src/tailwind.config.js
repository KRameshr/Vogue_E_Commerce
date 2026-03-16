/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ['"DM Sans"', "sans-serif"],
      },
      colors: {
        noir: "#0a0a0a",
        chalk: "#f8f7f4",
        stone: "#e8e6e1",
        mist: "#9e9e9e",
      },
      letterSpacing: {
        widest: "0.25em",
        ultra: "0.4em",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};
