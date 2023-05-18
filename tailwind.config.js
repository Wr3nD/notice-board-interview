/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "epptec-background": "url('/public/img/background-epptec.png')",
      },
      colors: {
        brandColor: "#041547",
        brandGray: "#727a93",
        secondColor: "#aa205a",
        link: "#278ea8",
      },
    },
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
      work: ["Work Sans", "sans-serif"],
    },
  },
};
