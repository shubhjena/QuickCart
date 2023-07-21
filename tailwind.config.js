/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      spacing: {
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
      },
      colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFF3E2',
      'black': '#1B1A17',
      'alpha': '#FFE15D',
      'beta': '#C07F00',
      'gamma': '#A61F69',
      'accent': '#42032C',
      'metal': '#565584',
      'shine': '#ecebff',
      }
    },
    plugins: [],
  }

}