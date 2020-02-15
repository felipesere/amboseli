const dayjs = require("dayjs");

console.log(dayjs);

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('assets')

  // Find and copy any `jpg` files, maintaining directory structure.
  eleventyConfig.addPassthroughCopy("/blogs/**/*.jpg");

  eleventyConfig.addNunjucksShortcode("humanDate", function(date) {
    return dayjs(date).format('MMMM D, YYYY');
  });

  return {
    passthroughFileCopy: true
  }
}
