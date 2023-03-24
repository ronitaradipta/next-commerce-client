/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      heading: ["Poppins", "sans-serif"],
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        popUp: "popUp 2.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        popUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(0px)",
          },
          "40%": {
            opacity: 1,
            transform: "translateY(150px)",
          },
          "75%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
      },
    },
  },
};
