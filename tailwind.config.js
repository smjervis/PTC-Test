/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#8F90BE",
        "secondary": "#532EE4",
        "survey-green": "#10b981",
        "survey-red": "#F45D6F",
        "survey-grey": "#F8F8FC",
        "survey-light-grey": "#FCFCFE",
        "survey-dark-grey": "#55577E",
        "survey-black": "#292A3D",
        "survey-border": "#E1E1E1",
      },
    },
  },
  plugins: [],
};
