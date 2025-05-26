/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aldrich: ['Aldrich', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
}

