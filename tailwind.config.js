/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentCollor',
			'white': '#F8F9F9',
			'yellow': '#FFBA19',
			'black': {
				'100': '#575757',
				'200': '#1A1A1A',

			},
		},
    extend: {},
  },
  plugins: [],
}
