/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'dark-inner': '0px -28px 25px 19px rgba(0,0,0,0.05) inset', 
      },
    },
  },
  plugins: [],
}

