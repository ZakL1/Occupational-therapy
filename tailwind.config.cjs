/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        'primary-dark': '#355f41',
        'accent-green': '#a1cbad',
        'light-teal': '#d5e6e6',
        'very-light-teal': '#ebf3f3',
        'warm-cream': '#fff5ec',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'], // default body font
        heading: ['Nunito', 'sans-serif'],   // for titles/headings
      },
    },
  },
  plugins: [],
}
