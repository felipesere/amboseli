import React from 'react'
import cx from 'classnames'
import { Link } from 'gatsby'
import style from './article.module.scss'
import striptags from 'striptags'
import { Tags } from './tags'

export const Article = ({ post, isPromo, withShadow = true }) => {
  const title = post.node.frontmatter.title
  const header = isPromo ? (
    <PromoHeader title={title} />
  ) : (
    <Header title={title} />
  )

  const className = cx(style.post, {
    [style.withShadow]: withShadow,
  })
  return (
    <article className={className}>
      {header}
      <p>{post.node.excerpt}</p>
      <footer className={style.footer}>
        <p>{post.node.frontmatter.date}</p>
        <p>{timeToRead(post.node.html)}min read</p>
        <Tags tags={post.node.frontmatter.tags} blue />
      </footer>
      <Link to={post.node.fields.slug} className={style.readMore} />
    </article>
  )
}

const PromoHeader = ({ title }) => {
  return (
    <header>
      <span className={style.welcomeEmoji}>🆕</span>
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

const timeToRead = (html) => Math.max( Math.round( striptags(html).split(" ").length / 200), 1)
