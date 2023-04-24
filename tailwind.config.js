/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme =>({
        'signBg': "url('/src/images/SignUpBg.png')"
      }),
      backgroundImage: theme =>({
        'aboutHeaderBg': "url('/src/images/aboutHeader.png')"
      }),
      backgroundImage: theme =>({
        'appoint': "url('/src/images/appoint.png')"
      }),
      backgroundImage: theme =>({
        'productsHeaderBg': "url('/src/images/productHeader.png')"
      }),
      fontFamily: theme=>({
        'textF': ['poppins']
      }),
    },
  },
  plugins: [],
}