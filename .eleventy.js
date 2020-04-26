module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  return {
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "_site",
      includes: "includes",
    },
  };
};
