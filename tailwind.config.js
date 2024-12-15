/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    backgroundSize:{
      '90%':'90%'
    },
    backgroundImage:{
      'radial':'radial-gradient(circle, rgba(58,52,86,0.9) 0%, rgba(33,30,46,1) 100%)'
    },
    extend: {
      container:{
        center:true,
        padding:{
          md:'2rem'
        }
      },
      colors:{
        purple:"#C0B7E8",
        maincolor:'#302C42',
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

