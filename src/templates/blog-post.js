import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import style from './blog-post.module.scss'
import icon from '../assets/favicon.png'
import { NavBar } from '../components/navigation'
import { Tags } from '../components/tags'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const tags = post.frontmatter.tags || []
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    const title = get(post, 'frontmatter.title')

    return (
      <React.Fragment>
        <NavBar center />
        <main className={style.main}>
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            meta={[{ name: 'description', content: siteDescription }]}
            title={`${title} | ${siteTitle}`}
            link={[{ rel: 'shortcut icon', type: 'image/png', href: icon }]}
          />
          <article>
            <h1 className={style.title}>{title}</h1>
            <div className={style.metadata}>
              <span className={style.date}>{post.frontmatter.date}</span>
              <Tags tags={tags} blue />
            </div>

            <div dangerouslySetInnerHTML={{ __html: post.html }} />

            <hr />
          </article>
          <Navigation previous={previous} next={next} />
        </main>
      </React.Fragment>
    )
  }
}

const Navigation = ({ previous, next }) => {
  return (
    <ul className={style.navigation}>
      {next && (
        <li className={style.next}>
          <Link
            className={style.navigationButton}
            to={next.fields.slug}
            rel="prev"
          >
            <FaAngleLeft />
            <span>NEWER POSTS</span>
          </Link>
        </li>
      )}
      {previous && (
        <li className={style.previous}>
          <Link
            className={style.navigationButton}
            to={previous.fields.slug}
            rel="next"
          >
            <span>OLDER POSTS</span>
            <FaAngleRight />
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
        tags
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
