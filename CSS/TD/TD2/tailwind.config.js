/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        img: "url('https://images4.alphacoders.com/355/35544.jpg')"
      },

      colors:{
        "bg-color": "hsl(var(--clr-bg) / <alpha-value>)",
        "text-color": "hsl(var(--clr-text) / <alpha-value>)",
      }
    },
  },
  plugins: [],
}

