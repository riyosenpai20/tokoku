/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: "Kumbh Sans",
    },
    container:{
      padding: {
        default: '30px',
        lg: '0'
      },
    },
    screen: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#222222',
        secondary: '#F5E6E0',
      },
      backgroundImage:{
        hero: "url('./img/bgHero.svg')",
      },
    },
  },
  plugins: [],
}