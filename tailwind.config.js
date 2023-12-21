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
      },
    },
  },
  plugins: [],
};
