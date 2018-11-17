import React from 'react'
import style from './portfolio.module.scss'
import get from 'lodash/get'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { PromoLayout } from '../components/promo-layout'
import { Title } from '../components/title'
import { Separator } from '../components/separator'

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
    <section className={style.showCase}>
      <Img
        className={style.showCaseImage}
        fluid={project.node.frontmatter.projectImage.childImageSharp.fluid}
      />
      <article className={style.description}>
        <h1>{project.node.frontmatter.title}</h1>

        <Separator />

        <div dangerouslySetInnerHTML={{ __html: project.node.html }} />
      </article>
    </section>
  )
}

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
