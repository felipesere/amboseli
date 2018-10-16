import React from 'react'
import style from './portfolio.module.scss'
import get from 'lodash/get'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { NavBar } from '../components/navigation'
import { Article } from '../components/article'
import { AvailableTags } from '../components/available-tags'

const Portfolio = props => {
  console.log(props.data)
  const projects = props.data.allMarkdownRemark.edges
  return (
    <div className={style.main}>
      <NavBar />
      <section className={style.promo}>
        <h1 className={style.title}>
          Here are some <strong>projects</strong> of mine:
        </h1>
      </section>
      <div className={style.showCases}>
        {projects.map(p => <ShowCase key={p.title} project={p} />)}
      </div>
    </div>
  )
}

const ShowCase = ({ project }) => {
  console.log(project)
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
