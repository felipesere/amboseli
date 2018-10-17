import React from 'react'
import { Link, graphql } from 'gatsby'
import { NavBar } from '../components/navigation'
import { Article } from '../components/article'
import { Promo } from '../components/promo'
import { PromoLayout } from '../components/promo-layout'
import { Title } from '../components/title'

const Tags = ({ pageContext, data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <PromoLayout
      top={
        <Title>
          These articles are tagged as <strong>{pageContext.tag}</strong>
        </Title>
      }
      bottom={posts.map(p => (
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
