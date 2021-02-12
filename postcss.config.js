const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
const autoprefixerCSS = require("autoprefixer");

module.exports = {
  plugins: [tailwindcss("./tailwind.config.js"), autoprefixerCSS],
};
