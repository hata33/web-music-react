const { resolve } = require("path");
const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components")
    }
  }
}