import * as React from 'react'
import Helmet from 'react-helmet'
import { SplitLayout } from '../layout/split-layout'
import { graphql } from 'gatsby'
import icon from '../assets/favicon.png'
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
  flex: 0;
  font-size: 12vw;
  word-spacing: 100vw;

  @media (min-width: 800px) {
    font-size: 4vw;
  }

  strong {
    color: ${colors.blue};
  }
`

const Name = styled.p`
  flex: 0;
  margin-top: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.75rem;
`

const ProseContainer = styled.div`
  flex: 1;
`

const Prose = ({ text }) => (<ProseContainer dangerouslySetInnerHTML={{ __html: text }} />)

const Me = ({ data }) => {
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

        <Social/>
      </Content>
    </SplitLayout>
  )
}
export default Me

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  height: 100%;

  @media (min-width: 800px) {
    padding: 0;
  }
`

const Social = () => {
  return (
    <SocialBar>
      <ul>
        <li>
          <a href="https://twitter.com/felipesere">
            <Twitter/>
          </a>
        </li>
        <li>
          <a href="https://github.com/felipesere">
            <Github/>
          </a>
        </li>
        <li>
          <a href="https://keybase.io/felipesere">
            <Keybase/>
          </a>
        </li>
        <li>
          <a href="https://www.xing.com/profile/Felipe_Sere">
            <Xing/>
          </a>
        </li>
        <li>
          <a href="https://uk.linkedin.com/in/felipe-sere-47a999106">
            <LinkedIn/>
          </a>
        </li>
        <li>
          <a href="mailto:felipesere@gmail.com">
            <Email/>
          </a>
        </li>
      </ul>
    </SocialBar>
  )
}

const SocialBar = styled.div`
   flex: 0;
   margin: 0 2rem 2rem 2rem;
   
  @media (min-width: 800px) {
    margin: 0 0 2rem;
  }
   
  
  ul {
    list-style: none;
    text-align: center;
    margin: 0;
  }
  
  li {
    display: inline-block;
  }
  
  a {
    color: ${colors.almostBlack};
    text-decoration: none;
    
    &:hover {
      color: ${colors.blue};
    }
  } 
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
         fluid(maxWidth: 1080, traceSVG: {color: "#009ffd"}, quality: 100) {
         ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
