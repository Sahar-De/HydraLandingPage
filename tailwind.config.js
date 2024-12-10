/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    backgroundSize:{
      '90%':'90%'
    },
    extend: {
      container:{
        center:true,
        padding:{
          md:'2rem'
        }
      },
      colors:{
        purple:"#C0B7E8"
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen xl": {
            maxWidth: "1280px",
          },
        },
      });
    },
  ],
}

