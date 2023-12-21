/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster", "cursive"],
      },
      backgroundImage: {
        back1: "url('/src/assets/back1.jpg')",
        back2: "url('/src/assets/back2.jpg')",
        back3:
          "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('/src/assets/back1.jpg')",
      },
    },
  },
  plugins: [],
};
