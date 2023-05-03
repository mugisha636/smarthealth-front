/** @type {import('tailwindcss').Config} */
	module.exports = {
	  content: ["./src/**/*.{html,js}"],
	  theme: {
		extend: {
		  backgroundImage: theme => ({
			'signBg': "url('/src/images/SignUpBg.png')",
			'aboutHeaderBg': "url('/src/images/aboutHeader.png')",
			'appoint': "url('/src/images/appoint.png')",
			'productsHeaderBg': "url('/src/images/productHeader.png')"
		  }),
		  fontFamily: theme => ({
			'textF': ['poppins']
		  }),
		},
	  },
	  plugins: [],
	}