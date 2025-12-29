/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Verify these extensions match your files
  ],
  theme: {
    extend: {
      colors: {
        'ethio-green': '#2E7D32',
        'ethio-gold': '#FBC02D',
      },
    },
  },
  plugins: [],
}