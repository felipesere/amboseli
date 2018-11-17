import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Tags } from './tags'

export const AvailableTags = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark(
            limit: 1000
            filter: { frontmatter: { draft: { ne: true } } }
          ) {
            edges {
              node {
                frontmatter {
                  tags
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const tags = extractTags(data.allMarkdownRemark.edges)
        return <Tags tags={tags} />
      }}
    />
  )
}

const extractTags = (posts) => {
  let tags = []
  posts.forEach((p) => (tags = tags.concat(p.node.frontmatter.tags || [])))
  return Array.from(new Set(tags))
}
