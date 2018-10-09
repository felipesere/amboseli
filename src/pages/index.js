import React from 'react'
import Helmet from 'react-helmet'
import { SplitLayout } from '../components/split-layout'
import { ThreeColumns, List } from '../components/three-columns'
import style from './index.module.css'
import { graphql, Link } from 'gatsby'
import github from './github.png'
import twitter from './twitter.png'
import keybase from './keybase.png'

const Tagline = ({ children }) => {
  const [first, second, third] = children
    .split('.')
    .map(t => t.replace(/ /g, ''))
    .map(name => name + '. ')
  return (
    <h1 className={style.tagline}>
      {first}
      <strong>{second}</strong>
      {third}
    </h1>
  )
}

const Name = ({ children }) => {
  return <p className={style.name}>{children}</p>
}

const Prose = ({ text }) => {
  return (
    <div className={style.prose} dangerouslySetInnerHTML={{ __html: text }} />
  )
}

export default function Me({ data, location }) {
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
  const post = data.markdownRemark

  return (
    <SplitLayout location={location} image={data.profile}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={siteTitle}
      />
      <div className={style.content}>
        <Name>{post.frontmatter.name}</Name>

        <Tagline>{post.frontmatter.tagline}</Tagline>

        <Prose text={post.html} />

        <ThreeColumns>
          <Connect />
          <Social />
          <Network />
        </ThreeColumns>
      </div>
    </SplitLayout>
  )
}

const Network = () => {

  return <List title="Network" elements={['Link 1', 'Link 2', 'Link 3']} />
}
const Social = () => {

  return <List title="Social" elements={
    [
      <a href='https://twitter.com/felipesere'>
        <img src={twitter} className={style.socialIcon}/>Twitter
      </a>,
      <a href='https://github.com/felipesere'>
        <img src={github} className={style.socialIcon}/>Github
      </a>,
      <a href='https://keybase.io/felipesere'>
        <img src={keybase} className={style.socialIcon}/>Keybase
      </a>
    ]
  } />
}
const Connect = () => {
  return (
    <List
      title="Connect"
      elements={[
        <Link to="/blog">Blog</Link>,
        <a href='mailto:felipesere@gmail.com'>
          Email
        </a>,
      ]}
    />
  )
}
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(fileAbsolutePath: { regex: "/pages/index.md/" }) {
      id
      excerpt
      html
      frontmatter {
        name
        tagline
      }
    }
    profile: file(relativePath: {eq: "felipe.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
         ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
