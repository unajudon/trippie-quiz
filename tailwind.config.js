/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        youpurple: "#7B61FF",
        youturquoise: "#00C2C2",
        youdark: "#2E2E2E",
        youlight: "#F7F8FA",
        yougray: "#E6E9F0",
        youwhite: "#ffffff",
      },
    },
  },
  plugins: [],
};