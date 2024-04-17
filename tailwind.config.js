/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'bottom': '10px 0px 25px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}

