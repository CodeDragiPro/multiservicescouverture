/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#2d3b43',
      'secondary': '#4d6f67',
      'white': '#ffffff',
      'black': '#000000'
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(77,111,103,1) 0%, rgba(45,59,67,1) 100%)',
      },
    },
  },
  plugins: [],
}