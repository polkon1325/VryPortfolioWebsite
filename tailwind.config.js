/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'bottom': '15px 0px 25px rgba(0, 0, 0, 0.5)',
        'inside': 'rgba(0, 0, 0, 0.35) -50px 0px 36px -28px inset'
      }
    },
  },
  plugins: [],
}

