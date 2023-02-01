/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors:{
        brand:'#fd1d8d',
      },
      backgroundImage:{
        banner: `url('../public/images/banner.jpg')`,
      }
    },
  },
  plugins: [],
}
