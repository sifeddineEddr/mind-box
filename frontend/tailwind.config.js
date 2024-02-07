/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      colors: {
        brandBlue: "#0D042A",
        brandDarkBlue: "#06001B",
        brandRed: "#C70C00",
        brandLightRed: "#FF3427",
      },
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
      },
    },
  },
};
