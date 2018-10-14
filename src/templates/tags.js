import React from 'react'
import { Link, graphql } from 'gatsby'
import { NavBar } from '../components/navigation'
import { Article } from '../components/article'
import style from './tags.module.scss'

const Tags = ({pageContext, data}) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <React.Fragment>
      <NavBar />
      <div className={style.allBlogs}>
        <section className={style.promo}>
          <h1 className={style.title}>These articles are tagged as <strong>{pageContext.tag}</strong></h1>
        </section>
        <section className={style.blogPreviews}>
          {posts.map(p => (
            <Article key={p.node.frontmatter.title} post={p} />
          ))}
        </section>
      </div>
    </React.Fragment>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
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
