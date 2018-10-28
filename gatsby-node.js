const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const tagsTemplate = path.resolve('./src/templates/tags.js')

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
              filter: { fields: { slug: { regex: "/blog/" } } }
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    draft
                    tags
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        let posts = result.data.allMarkdownRemark.edges

        let published = _.filter(posts, post => {
          if (process.env.NODE_ENV !== 'production') {
            return true
          }
          const draft = post.node.frontmatter.draft
          if (draft) {
            console.log(` Not generating draft ${post.node.frontmatter.title}`)
            return false
          } else {
            return true
          }
        })

        published.forEach((post, index) => {
          const previous =
            index === published.length - 1 ? null : published[index + 1].node
          const next = index === 0 ? null : published[index - 1].node

          createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })

        let tags = []
        published.forEach(x => {
          tags = tags.concat(x.node.frontmatter.tags || [])
        })
        tags = _.uniq(tags)

        tags.forEach(tag => {
          createPage({
            path: `/tags/${tag}`,
            component: tagsTemplate,
            context: { tag },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
