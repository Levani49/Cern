/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      variants: {},
      fontFamily: {
        custom: ["Poppins", "sans-serif"],
      },
      colors: {
        dark: "#212529",
        light: "#dfe6e9",
        blue: "#6ea8fe",
      },
      screens: {
        xsm: "400px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
