const dayjs = require('dayjs')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('assets')
  eleventyConfig.addPassthroughCopy('/blogs/**/*.jpg')

  eleventyConfig.addCollection('blogs', function(collection) {
    return collection.getFilteredByGlob('blogs/*/*.md')
  })

  eleventyConfig.addNunjucksShortcode('humanDate', function(date) {
    return dayjs(date).format('MMMM D, YYYY')
  })

  eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-syntaxhighlight"));

  return {
    passthroughFileCopy: true,
  }
}
