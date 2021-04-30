const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@apis": path.resolve(__dirname, "src/assets/apis"),
      "@images": path.resolve(__dirname, "src/assets/media/images"),
      "@templates": path.resolve(__dirname, "src/components/Templates"),
      "@src": path.resolve(__dirname, "src"),
      "@blogs": path.resolve(__dirname, "src/assets/blogs"),
      // "@blogs": path.resolve(__dirname, "src/assets/blogs"),
    },
  },
};
