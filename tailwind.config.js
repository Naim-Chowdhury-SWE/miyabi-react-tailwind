/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        golden: "#DCCA87",
      },
      fontFamily: {
        cormorant: ["Cormorant Upright", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
    plugins: [],
  },
};
