import React from 'react'
import style from './portfolio.module.scss'
import get from 'lodash/get'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { NavBar } from '../components/navigation'
import { Article } from '../components/article'
import { AvailableTags } from '../components/available-tags'
import { Promo } from '../components/promo'
import { PromoLayout } from '../components/promo-layout'
import { Title } from '../components/title'

const Portfolio = props => {
  const projects = props.data.allMarkdownRemark.edges
  return (
    <PromoLayout
      top={
        <Title>
          Here are some <strong>projects</strong> of mine
        </Title>
      }
      bottom={projects.map(p => <ShowCase key={p.title} project={p} />)}
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
        <hr className={style.separator} />
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
