/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        Muli: ['Muli', 'sans-serif'],
      },
      colors: {
        primary:{
          1: '#ED165F',
          2: '#e5e7eb',
          3: '#374151',
          4: '#F5F5F5',
          5: '#000000',
        }
      }
    },
  },
  plugins: [],
}

