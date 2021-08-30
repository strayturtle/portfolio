module.exports = {
  plugins: [
    require("autoprefixer")({
      grid: true,
      browsers: ["last 2 versions", "> 1% in JP", "iOS >= 11", "Android >= 6"],
    }),
  ],
};
