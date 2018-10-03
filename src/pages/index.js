import React from 'react'
import Helmet from 'react-helmet'
import { SplitLayout } from '../components/split-layout'
import { ThreeColumns, List } from '../components/three-columns'
import style from './index.module.css'
import { graphql } from 'gatsby'

const Tagline = ({ children }) => {
  return (
    <h1 className={style.tagline}>{children}</h1>
  )
}

const Name = ({ children }) => {
  return (
    <p className={style.name}>{children}</p>
  )
}

const Prose = ({ text }) => {
  return (<div className={style.prose} dangerouslySetInnerHTML={{ __html:  text }} />)
}

export default function Me({ data, location }) {
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
  const post = data.allMarkdownRemark.edges[0].node
  console.log(post.frontmatter.name)

  return (
    <SplitLayout location={location}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={siteTitle}
      />
      <div className={style.content}>
        <Name>Felipe Seré</Name>

        <Tagline>Engineer. <strong>Coach.</strong> Photographer.</Tagline>

        <Prose text={post.html} />

        <ThreeColumns>
          <Connect/>
          <Social/>
          <Network/>
        </ThreeColumns>
      </div>
    </SplitLayout>
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
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages/index.md/"}}) {
      edges {
        node {
          html
          frontmatter {
            name
            tagline
          }
        }
      }
    }
  }
`

const Network = () => {
  return (
    <List title="Network" elements={['Link 1', 'Link 2', 'Link 3']}/>
  )
}

const Social = () => {
  return (
    <List title="Social" elements={['Twitter', 'Github', 'Instagram']}/>
  )
}

const Connect = () => {
  return (
    <List title="Connect" elements={['Blog', 'Email', 'Newsletter']}/>
  )
}

