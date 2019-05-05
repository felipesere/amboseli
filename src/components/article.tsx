import React from 'react'
import { Link } from 'gatsby'
import striptags from 'striptags'
import { TagLabels } from './tags'
import styled from 'styled-components'
import { coreWidth, shadow } from '../styles'

export const Article = ({ post, isPromo, withShadow = true }) => {
  const title = post.node.frontmatter.title
  const html = post.node.html
  const ArticleHeader = isPromo ? PromoHeader : Header

  return (
    <InnerArticle withShadow={withShadow}>
      <ArticleHeader title={title} />
      <p>{post.node.excerpt}</p>
      <Footer>
        <p>{post.node.frontmatter.date}</p>
        <p>
          {timeToRead(html)}
          min read
        </p>
        <Tags>
          <TagLabels tags={post.node.frontmatter.tags} />
        </Tags>
      </Footer>
      <ReadMore to={post.node.fields.slug} />
    </InnerArticle>
  )
}

type ArticleProps = {
  withShadow: boolean,
}

const InnerArticle = styled.article<ArticleProps>`
  ${coreWidth()};
  padding: 30px;
  margin-bottom: 30px;

  position: relative;
  background: white;
  border-radius: 3px;
  
  ${(props) => props.withShadow ? shadow() : ''};
`

const PromoHeader = ({ title }) => {
  return (
    <header>
      <WelcomeEmoji>🆕</WelcomeEmoji>
      <h1>{title}</h1>
    </header>
  )
}

const Tags = styled.div`
  flex-grow: 1;
  width: 100%;
  margin-top: 0.25rem;

  @media (min-width: 800px) {
    margin-top: 0;
    width: 50%;
  }
`

const ReadMore = styled(Link)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const WelcomeEmoji = styled.span`
  font-size: 30px;
  line-height: 1;
`

const Header = ({ title }) => {
  return (
    <header>
      <h4>{title}</h4>
    </header>
  )
}

const Footer = styled.footer`
  font-size: 0.65rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`

const timeToRead = (html) =>
  Math.max(Math.round(striptags(html).split(' ').length / 200), 1)
