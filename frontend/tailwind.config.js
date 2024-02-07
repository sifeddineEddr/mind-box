/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      boxShadow: {
        "3xl": `0 0 5px #FF3427,
        0 0 100px #C70C00,
        0 0 30px #FF3427,
        0 0 100px #C70C00`,
      },
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
