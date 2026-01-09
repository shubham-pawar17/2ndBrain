/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100:"#FFFFFF",
          200:"#F9FBFC",
          600:"#72737C"
        },
        purple: {
          600: "#5046E4",
          500: "#6C66D1",
          300: "#DEE3FE",
        },
      },
    },
  },
  plugins: [],
};
