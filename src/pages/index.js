import React from 'react'
import Helmet from 'react-helmet'
import { SplitLayout } from '../components/split-layout'
import style from './index.module.scss'
import { graphql } from 'gatsby'
import icon from '../assets/favicon.png'
import { NavBar } from '../components/navigation'
import { Separator } from '../components/separator'

import { Email, Github, Icons, Keybase, LinkedIn, Twitter, Xing } from '../components/share/social'

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
    <div className={style.prose} dangerouslySetInnerHTML={{ __html: text }}/>
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
        link={[{ rel: 'shortcut icon', type: 'image/png', href: icon }]}
      />
      <div className={style.content}>
        <NavBar/>
        <Name>{post.frontmatter.name}</Name>

        <Tagline>{post.frontmatter.tagline}</Tagline>

        <Prose text={post.html}/>

        <Separator />

        <Social/>
      </div>
    </SplitLayout>
  )
}

const Social = () => {
  return (
    <div className={style.social}>
      <p className={style.reachMe}>You can reach me on:</p>
      <Icons>
        <a href="https://twitter.com/felipesere">
          <Twitter/>
        </a>
        <a href="https://github.com/felipesere">
          <Github/>
        </a>
        <a href="https://keybase.io/felipesere">
          <Keybase/>
        </a>
        <a href="https://www.xing.com/profile/Felipe_Sere">
          <Xing/>
        </a>
        <a href="https://uk.linkedin.com/in/felipe-sere-47a999106">
          <LinkedIn/>
        </a>
        <a href="mailto:felipesere@gmail.com">
          <Email/>
        </a>
      </Icons>
    </div>
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
    profile: file(relativePath: { eq: "felipe.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
