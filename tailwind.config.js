/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
