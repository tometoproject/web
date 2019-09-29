module.exports = function (cfg) {
  cfg.addPassthroughCopy('admin')
  cfg.addPassthroughCopy('img')

  return {
    templateFormats: [
      "njk",
      "md",
      "css",
      "png"
    ]
  }
};
