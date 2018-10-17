import React from 'react'
import { Link, graphql } from 'gatsby'
import { NavBar } from '../components/navigation'
import { Article } from '../components/article'
import { Promo } from '../components/promo'
import style from './tags.module.scss'

const Tags = ({ pageContext, data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <React.Fragment>
      <NavBar />
      <div className={style.allBlogs}>
        <Promo>
          <h1 className={style.title}>
            These articles are tagged as <strong>{pageContext.tag}</strong>
          </h1>
        </Promo>
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
