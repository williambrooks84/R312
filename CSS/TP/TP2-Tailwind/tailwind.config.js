/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Include files in the src folder
    "./*.html" // Include HTML files in the current folder
  ],
  theme: {
    extend: {
      backgroundImage: {
        img: "url('https://images4.alphacoders.com/355/35544.jpg')"
      },
      family:{
        "sans": "Open Sans",
        "serif": "Bellefair",
        "sans-cond": "Barlow Condensed", 
        "sans-normal": "Barlow"
      },

      colors:{
        "bg-color": "hsl(var(--clr-bg) / <alpha-value>)",
        "text-color": "hsl(var(--clr-text) / <alpha-value>)",
        "dark": "hsl(230 35% 7%)",
        "light": "hsl(231 77% 90%)",
        "white": "hsl(0 0% 100%)",
      },

      fontSize:{
        "S-900": "clamp(5rem, 8vw + 1rem, 9.375rem)",
        "S-800": "3.5rem",
        "S-700": "1.5rem",
        "S-600": "1rem",
        "S-500": "1rem",
        "S-400": "0.9375rem",
        "S-300": "1rem",
        "S-200": "0.875rem",

        "M-800": "6.25rem",
        "M-700": "3.5rem",
        "M-600": "2rem",
        "M-500": "1.75rem",
        "M-400": "1.125rem"
        }
      },

      weight:{
        "400": "400",
        "700": "700"
      }
    },
  plugins: [],
}
