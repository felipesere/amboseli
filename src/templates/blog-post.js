import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import style from './blog-post.module.css'
import { NavBar } from '../components/navigation'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <React.Fragment>
        <NavBar/>
        <main className={style.main}>
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            meta={[{ name: 'description', content: siteDescription }]}
            title={`${post.frontmatter.title} | ${siteTitle}`}
          />
          <article className={style.post}>
            <h1 className={style.title}>{post.frontmatter.title}</h1>
            <p className={style.date}>{post.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.html }}/>

            <hr />
          </article>
          <Navigation previous={previous} next={next}/>
        </main>
      </React.Fragment>
    )
  }
}

const Navigation = ({ previous, next }) => {
  return (
    <ul className={style.navigation}>
      {previous && (
        <li className={style.previous}>
          <Link className={style.navigationButton} to={previous.fields.slug} rel="prev">
            <FaAngleLeft/>
            <span>NEWER POSTS</span>
          </Link>
        </li>
      )}
      {next && (
        <li className={style.next}>
          <Link className={style.navigationButton} to={next.fields.slug} rel="next">
            <span>OLDER POSTS</span>
            <FaAngleRight/>
          </Link>
        </li>
      )}
    </ul>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
