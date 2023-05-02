/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      signupBackgroundImage: theme => ({
        'signBg': "url('/src/images/SignUpBg.png')"
      }),
      aboutBackgroundImage: theme => ({
        'aboutHeaderBg': "url('/src/images/aboutHeader.png')"
      }),
      appointmentBackgroundImage: theme => ({
        'appoint': "url('/src/images/appoint.png')"
      }),
      productBackgroundImage: theme => ({
        'productsHeaderBg': "url('/src/images/productHeader.png')"
      }),
      fontFamily: theme => ({
        'textF': ['poppins']
      }),
    },
  },
  plugins: [],
}