import React from 'react'
import { graphql } from 'gatsby'
import { Article } from '../components/article'
import { PromoLayout } from '../components/promo-layout'
import { Title } from '../components/title'

const Tags = ({ pageContext, data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <PromoLayout
      title={'Tagged articles'}
      top={
        <Title>
          These articles are tagged as <strong>{pageContext.tag}</strong>
        </Title>
      }
      bottom={posts.map((p) => (
        <Article key={p.node.frontmatter.title} post={p} />
      ))}
    />
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`
