/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFF3E2',
      'purple': '#3f3cbb',
      'primary': '#FFE15D',
      'secondary': '#C07F00',
      'tertiary': '#A61F69',
      'accent': '#42032C',
      'metal': '#565584',
      'shine': '#ecebff',
      }
    },
    plugins: [],
  }

}