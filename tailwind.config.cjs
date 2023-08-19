const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.astro"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Editorial New"', ...defaultTheme.fontFamily.serif],
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "gray.100", // Change this to your desired text color
          },
        },
      },
    },
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
