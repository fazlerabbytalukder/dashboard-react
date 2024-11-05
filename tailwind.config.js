/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F15B25',
        secondary: '#6F6F6F',
        backColor: '#F8F8F8'
      },
      height: {
        sidebar: 'calc(100vh - 97px)',
      }
    },
  },
  plugins: [],
}

