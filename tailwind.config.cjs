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
        transparentLight: "rgb(8 8 8 / 24%)",
        transparentDark: "#0e0e0e78",
        transparentBackground: "rgba(8, 8, 8, 0.24)",
        transparentGray: "#ffffff29",
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
