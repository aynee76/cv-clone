/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cv-green': '#1b734f',
        "p-grey": "#39495a",
      },
    },
  },
  plugins: [],
}
