/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f97316',
        primaryDark: '#ea580c',
        secondary: '#1d4ed8'
      }
    }
  },
  plugins: []
};
