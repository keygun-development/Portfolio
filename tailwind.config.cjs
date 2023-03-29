/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{vue,ts,astro}"
  ],
  theme: {
    extend: {
      boxShadow: {
        inset: 'inset 0 0 13px 1px #000'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
