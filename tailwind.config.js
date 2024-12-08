/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        colorBorderAnimation: {
          '0%, 100%': { borderColor: '#ff4b2b' },
          '25%': { borderColor: '#ff416c' },
          '50%': { borderColor: '#0072ff' },
          '75%': { borderColor: '#00f260' },
        },
      },
      animation: {
        colorBorder: 'colorBorderAnimation 3s infinite linear',
      },
    },
  },
  plugins: [],
}
