import React from 'react'
import style from './blog.module.css'
import get from 'lodash/get'
import { Link, graphql } from 'gatsby'

export default function Blog(props) {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const siteDescription = get(props, 'props.data.site.siteMetadata.description')
  const [first, ...posts] = get(props, 'data.allMarkdownRemark.edges')

  return (
    <div className={style.allBlogs}>
      <section className={style.promo}>
        <Article post={first} isPromo />
      </section>
      <section className={style.blogPreviews}>
        {posts.map(p => (
          <Article post={p} />
        ))}
      </section>
    </div>
  )
}

const Article = ({ post, isPromo }) => {
  const title = post.node.frontmatter.title
  const header = isPromo ? (
    <PromoHeader title={title} />
  ) : (
    <Header title={title} />
  )
  return (
    <article className={style.post}>
      {header}
      <p>{post.node.excerpt}</p>
      <footer className={style.footer}>
        <p>{post.node.frontmatter.date}</p>
      </footer>
      <Link to={post.node.fields.slug} className={style.readMore} />
    </article>
  )
}

const PromoHeader = ({ title }) => {
  return (
    <header>
      <span className={style.welcomeEmoji}>👉</span>
      <h1>{title}</h1>
    </header>
  )
}

const Header = ({ title }) => {
  return (
    <header>
      <h4>{title}</h4>
    </header>
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
      filter: { fields: { slug: { ne: "/" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
