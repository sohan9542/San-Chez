module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pr: "#111E36",
        sr: "#c9c8c5",
        tr: "#1CDCDC",
        hr: "#e2edff",
        nr:"#172A4B"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}