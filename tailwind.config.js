/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        black: '#040303',
        'black-100': '#292929',
        gray: '#BEBEBE',
        'gray-100': '#494949',
        green: '#5CB85C',
        blue: '#399CE8',
        yellow: '#FFDD55',
        'yellow-100': '#D0B484',
        red: '#C52828'
      },
      fontFamily: {
        sans: ['Inter'], 
      },
    },
  },
  plugins: [],
}

