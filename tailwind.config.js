/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        florabet: ["Florabet", "sans-serif"],
      },
      colors: {
        yblue: "#564da5",
      },
    },
  },
  plugins: [],
};
