/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        brutal: '5px 5px',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-zilla-slab)'],
        roboto: ['var(--font-roboto)'],
      }
    },
  },
  plugins: [],
}
