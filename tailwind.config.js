/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        red: "0 0 0 500px #cf0d1449",
        or: "0 0 0 500px #c94c1742",
      },
      screens: {
        sm: "640px",
        lg: "1024px",
        "max-sm": { max: "1023px" }, 
      },
    },
  },
  plugins: [],
};