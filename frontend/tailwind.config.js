/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E31B1B',
        primaryDark: '#F58518',
        secondary: '#ffff00'
      }
    }
  },
  plugins: []
};
