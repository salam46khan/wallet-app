/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NormalFont: ["Manrope", "sans-serif"]
      },
      colors: {
        primaryColor: '#714EFF'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ]
}

