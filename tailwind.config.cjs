/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      variants: {},
      colors: {
        accent1: "rgb(50, 207, 142)",
        accent2: "rgb(110, 168, 254)",
        accent3: "rgb(140, 146, 164)",
        textColor: "rgb(223, 230, 233)",
        dark1: "rgb(24, 28, 32)",
        dark2: "rgba(14, 14, 14, 0.47)",
        dark3: "rgba(8, 8, 8, 0.24)",
        gray1: "rgb(41,45,57)",
        highlight1: "rgba(255, 255, 255, 0.16)"
      },
      screens: {
        xsm: "400px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px"
      }
    }
  },
  plugins: []
};
