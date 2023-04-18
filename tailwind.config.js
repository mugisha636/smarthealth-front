/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme =>({
        'signBg': "url('/src/images/SignUpBg.png')"
      }),
      fontFamily: theme=>({
        'textF': ['poppins']
      }),
    },
  },
  plugins: [],
}