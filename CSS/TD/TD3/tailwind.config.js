/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        img: "url('https://images4.alphacoders.com/355/35544.jpg')"
      },

      textColor: {
        'white': 'rgb(var(--clr-white))',
      },

      backgroundColor:{
        "bg-500": "hsl(var(--clr-bg)/<alpha-value)",
      }
    },
  },
  plugins: [],
}

