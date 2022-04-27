module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pr: "#111E36",
        sr: "rgba(47, 138, 245, .16)",
        tr: "#6C86AD",
        br:"#131823"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}