/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'bg-1' : "url(./assets/bg1.jpg)",
      }
    },
  },
  plugins: [],
}

