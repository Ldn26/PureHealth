/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0064F7",
        secendary: "#",
        lightgraycolor: "#F6F7F9",
        darkgraycolor: "#979797",
        blackcolor: "#151515",
      },
      fontFamily: {
        interrg: "interrg",
        intermd: "intermd",
        intersb: "intersb",
      },
    },
  },
  plugins: [],
};

