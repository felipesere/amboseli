import React from 'react'
import style from './blog.module.css'
import get from 'lodash/get'
import { Link, graphql } from 'gatsby'

export default function Blog(props) {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const siteDescription = get(props, 'props.data.site.siteMetadata.description')
  const posts = get(props, 'data.allMarkdownRemark.edges')

  return (
    <div className={style.allBlogs}>
      <section className={style.promo}>
        <article className={style.post}>
          <header>
            <span className={style.welcomeEmoji}>👉</span>
            <h2 className="post-title">Creating a New Theme</h2>
          </header>
          <p className="post-summary">
            Introduction This tutorial will show you how to create a simple
            theme in Hugo. I assume that you are familiar with HTML, the bash
            command line, and that you are comfortable using Markdown to format
            content. I’ll explain how Hugo uses templates and how you can
            organize your templates to create a theme. I won’t cover using CSS
            to style your theme. We’ll start with creating a new site with a
            very basic template....
          </p>
          <footer className="post-footer">
            <p className="post-meta">2014.9.28</p>
          </footer>
          <a
            className="post-link"
            href="https://themes.gohugo.io//theme/hugo-paper/post/creating-a-new-theme/"
          />
        </article>
      </section>
      <section className={style.blogPreviews}>
        {posts.map(p => <PostPreview post={p} />)}
      </section>
    </div>
  )
}

const PostPreview = ({ post }) => {
  return (
    <article className={style.post}>
      <header class="post-header">
        <h4 class="post-title">{post.node.frontmatter.title}</h4>
      </header>
      <p class="post-summary">{post.node.excerpt}</p>
      <footer class="post-footer">
        <p class="post-meta">{post.node.frontmatter.date}</p>
      </footer>
      <Link to={post.node.fields.slug}>Read</Link>
    </article>
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
