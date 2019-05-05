import * as React from 'react'
import Helmet from 'react-helmet'
import { SplitLayout } from '../components/split-layout'
import { graphql } from 'gatsby'
import icon from '../assets/favicon.png'
import { Separator } from '../components/separator'
import styled from 'styled-components'

import {
  Email,
  Github,
  Icons,
  Keybase,
  LinkedIn,
  Twitter,
  Xing,
} from '../components/social'
import { colors } from '../styles'

const Tagline = ({ children }) => {
  const [first, second, third] = children
    .split('.')
    .map((t) => t.replace(/ /g, ''))
    .map((name) => name + '. ')
  return (
    <TaglineLayout>
      {first}
      <strong>{second}</strong>
      {third}
    </TaglineLayout>
  )
}

const TaglineLayout = styled.h1`
  font-size: 12vw;
  word-spacing: 100vw;

  @media (min-width: 800px) {
    font-size: 4.5vw;
  }

  strong {
    color: ${colors.blue};
  }
`

const Name = styled.p`
  margin-top: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.75rem;
`

const Prose = ({ text }) => (<div dangerouslySetInnerHTML={{ __html: text }}/>)

const Me = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
  const post = data.markdownRemark

  return (
    <SplitLayout image={data.profile}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={siteTitle}
        link={[{ rel: 'shortcut icon', type: 'image/png', href: icon }]}
      />
      <Content>
        <Name>{post.frontmatter.name}</Name>

        <Tagline>{post.frontmatter.tagline}</Tagline>

        <Prose text={post.html}/>

        <Separator/>

        <Social/>
      </Content>
    </SplitLayout>
  )
}
export default Me

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 0 10px;

  @media (min-width: 800px) {
    padding: 0;
  }
`

const Social = () => {
  return (
    <SocialBar>
      <ReachMe>You can reach me on:</ReachMe>
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
    </SocialBar>
  )
}

const ReachMe = styled.p`
  margin-right: 1em;
  font-size: 0.8rem;
`

const SocialBar = styled.div`
  margin-bottom: 2rem;
`

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
