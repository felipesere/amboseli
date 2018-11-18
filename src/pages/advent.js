import React from 'react'
import classnames from 'classnames'
import style from './advent.module.scss'
import { graphql } from 'gatsby'
import { PromoLayout } from '../components/promo-layout'
import { Title, Subtitle } from '../components/title'
import moment from 'moment'


const AdventCalendar = (props) => {
  console.log(props)
  const {data: {allMarkdownRemark: {edges: days}}} = props
  return (
    <PromoLayout
      title={'Advent of Coder'}
      top={
        <div className={style.adventTop}>
          <Title>Advent of <strong>Code</strong></Title>
          <Subtitle>Small nuggets worth looking at running up to Christmas.</Subtitle>
        </div>
      }
      bottom={days.map(({node: {excerpt: excerpt, frontmatter: f}}) => (
        <AdventDay
          key={f.date}
          date={f.date}
          title={f.title}
        />
      ))}
    />
  )
}

const AdventDay = ({ date, title, prose }) => {
  const day = moment(date).date()
  return (
    <article className={style.adventDay}>
      <Square><div className={style.day}>{day}</div></Square>
      <section className={style.main}>
        {title}
      </section>
    </article>
  )
}

const Square = ({children}) => {
  return (
    <div className={style.square}>
      <div className={style.squareContent}>
        {children}
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark(
    filter: { fields: { slug: { regex: "/advent/" } } }
    sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          html
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`

export default AdventCalendar
