module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  dark: false,
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ] 
}