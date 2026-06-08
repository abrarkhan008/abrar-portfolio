/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        gold: {
          400: "#f5c842",
          500: "#e6b800",
          600: "#c9a000",
        },
      },
    },
  },
  plugins: [],
};
