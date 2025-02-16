const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      colors: {
        "blue-ribbon": {
          50: "#eef3ff",
          100: "#d9e3ff",
          200: "#bccfff",
          300: "#8eb0ff",
          400: "#5986ff",
          500: "#355dff",
          600: "#1b37f5",
          700: "#1425e1",
          800: "#171fb6",
          900: "#19228f",
          950: "#141757",
        },
        rose: {
          50: "#fef1f8",
          100: "#fee5f2",
          200: "#fecce6",
          300: "#ffa2d2",
          400: "#fd69b1",
          500: "#f72585",
          600: "#e81a6e",
          700: "#ca0c54",
          800: "#a70d45",
          900: "#8b103c",
          950: "#550220",
        },
        emerald: {
          50: "#f2fbf4",
          100: "#e1f7e6",
          200: "#c5edcd",
          300: "#97dea6",
          400: "#4fbf67",
          500: "#3daa55",
          600: "#2d8c42",
          700: "#266f36",
          800: "#23582f",
          900: "#1e4929",
          950: "#0c2713",
        },
        orange: {
          50: "#fefaec",
          100: "#fcf0c9",
          200: "#f9df8e",
          300: "#f6c445",
          400: "#f4b22b",
          500: "#ee9112",
          600: "#d36d0c",
          700: "#af4c0e",
          800: "#8e3b12",
          900: "#753112",
          950: "#431805",
        },
        "boston-blue": {
          50: "#f1f8fa",
          100: "#dcecf1",
          200: "#bddae4",
          300: "#8fbfd1",
          400: "#5a9db6",
          500: "#438aa7",
          600: "#376a83",
          700: "#32586c",
          800: "#2f4a5b",
          900: "#2b3f4e",
          950: "#182834",
        },
        "santas-gray": {
          50: "#f5f6f8",
          100: "#eeeef1",
          200: "#dfe1e6",
          300: "#cbced6",
          400: "#b5b8c4",
          500: "#9699aa",
          600: "#8b8ca0",
          700: "#78798a",
          800: "#626371",
          900: "#52525d",
          950: "#303136",
        },
        denim: "#022959",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
