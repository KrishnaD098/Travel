/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#4f7333",
        secondary: "#FFD700",
        new:"#FFD23F",
      },
      container:{
        center: true,
        padding:{
          DEFAULT:"1rem",
          sm:"2rem",
          lg: "4rem",
          xl: "5rem",
          '2xl': "6rem",
        }
      }
    },
  },
  plugins: [],
}

