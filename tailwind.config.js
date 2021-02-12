module.exports = {
  purge: [
    "./src/**/*.{ts,tsx}"
  ],
  darkMode: false,
  theme: {
    extend: {
      colors : {
        primary : "var(--primary-color)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
