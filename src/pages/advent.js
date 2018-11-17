import React from 'react'
import classnames from 'classnames'
import style from './advent.module.scss'
import { graphql } from 'gatsby'
import { PromoLayout } from '../components/promo-layout'
import { Title } from '../components/title'

const AdventCalendar = (props) => {
  const days = [3, 2, 1]
  console.log('Hi there')
  return (
    <PromoLayout
      title={'Advent of Coder'}
      top={
        <Title>
          Advent of <strong>Coder</strong>
        </Title>
      }
      bottom={days.map((day) => (
        <AdventDay
          key={day}
          day={day}
          title={'Vim text navigation'}
          prose={'Bla bla bla'}
        />
      ))}
    />
  )
}

const AdventDay = ({ day, title, prose }) => {
  return (
    <article className={style.adventDay}>
      <div className={classnames(style.day, style.square)}>{day}</div>
      <section className={style.main}>
        <div className={style.title}>{title}</div>
      </section>
    </article>
  )
}

/*
export const pageQuery = graphql`
  {
    allMarkdownRemark(filter: { fields: { slug: { regex: "/advent/" } } }) {
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
*/

export default AdventCalendar
