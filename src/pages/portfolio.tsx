import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { PromoLayout } from '../components/promo-layout'
import { Title } from '../components/title'
import { Separator } from '../components/separator'
import styled from 'styled-components'
import { colors, shadow } from '../styles'

const Portfolio = (props) => {
  const projects = props.data.allMarkdownRemark.edges
  return (
    <PromoLayout
      title={"Felipe's Portfolio"}
      top={
        <Title>
          Here are some <strong>projects</strong> of mine
        </Title>
      }
      bottom={projects.map((p) => (
        <ShowCase key={p.node.frontmatter.title} project={p} />
      ))}
    />
  )
}

const ShowCase = ({ project }) => {
  return (
    <ShowCaseLayout>
      <ShowCaseImage fluid={project.node.frontmatter.projectImage.childImageSharp.fluid} />
      <Description>
        <h1>{project.node.frontmatter.title}</h1>
        <Separator />
        <div dangerouslySetInnerHTML={{ __html: project.node.html }} />
      </Description>
    </ShowCaseLayout>
  )
}

const ShowCaseImage = styled(Img)`
  border: 3px ${colors.blue} solid;
  border-radius: 3px;
  width: 100%;

  @media (min-width: 800px) {
    width: 50%;
  }
`

const ShowCaseLayout = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2.5em;
  background: white;
  ${shadow()};


  @media (min-width: 800px) {
    flex-direction: row;
    height: 350px; // I want something better here!

    &:nth-of-type(even) {
      flex-direction: row-reverse;
    }
  }

  @media (min-width: 1200px) {
    width: 70%;
  }
`

const Description = styled.article`
  padding: 0 1em 0 1em;
  width: 100%;
  font-size: 0.75rem;

  h1 {
    margin: 1rem;
    font-size: 1rem;
    text-align: center;
    text-transform: uppercase;
  }

  @media (min-width: 800px) {
    width: 50%;
  }
`

export const pageQuery = graphql`
  {
    allMarkdownRemark(filter: { fields: { slug: { regex: "/portfolio/" } } }) {
      edges {
        node {
          html
          fields {
            slug
          }
          frontmatter {
            title
            projectImage {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Portfolio
