import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import { Article } from '../components/article'
import { AvailableTags } from '../components/available-tags'
import { PromoLayout } from '../components/promo-layout'

const notDraft = (post) => {
  if (!inProd()) {
    return true
  }

  return get(post, 'node.frontmatter.draft') !== true
}

const inProd = () => process.env.NODE_ENV === 'production'

export default function Blog(props) {
  const [first, ...posts] = get(props, 'data.allMarkdownRemark.edges').filter(
    (p) => notDraft(p)
  )

  return (
    <PromoLayout
      title={"Felipe's Blogs"}
      top={<Article post={first} isPromo withShadow={false} />}
      bottom={
        <React.Fragment>
          <AvailableTags />
          {posts.map((p) => (
            <Article key={p.node.frontmatter.title} post={p} />
          ))}
        </React.Fragment>
      }
    />
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { slug: { regex: "/blog/" } } }
    ) {
      edges {
        node {
          html
          excerpt
          fields {
            slug
          }
          frontmatter {
            draft
            date(formatString: "DD MMMM, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`
