const dayjs = require('dayjs')

module.exports = function(eleventyConfig) {
  /* Due to having compiled CSS, don't use git ignore when running the server */
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPassthroughCopy('assets')
  eleventyConfig.addPassthroughCopy('blogs/**/*.jpg')
  eleventyConfig.addPassthroughCopy({'.well-known':'.well-known'})

  eleventyConfig.addCollection('blogs', function(collection) {
    return collection.getFilteredByGlob('blogs/*/*.md').filter(item => !item.data.draft);
  })

  eleventyConfig.addNunjucksShortcode('humanDate', function(date) {
    return dayjs(date).format('MMMM D, YYYY')
  })
  eleventyConfig.addNunjucksShortcode('machineDate', function(date) {
    return dayjs(date).format('YYYY-MM-DD')
  })

  eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'))
  let markdownIt = require('markdown-it')
  let markdownItEmoji = require('markdown-it-emoji')
  eleventyConfig.setLibrary('md', markdownIt({ html: true, code: true }).use(markdownItEmoji))
  return {
    passthroughFileCopy: true,
  }
}
