/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        secondary: "#c9a87c",
        accent: "#e8d5c4",
        light: "#f5f3f0",
        "gold-light": "#c2ba95",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Montserrat", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};
