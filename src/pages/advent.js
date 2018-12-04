import React from 'react'
import Helmet from 'react-helmet'
import style from './advent.module.scss'
import { graphql } from 'gatsby'
import { PromoLayout } from '../components/promo-layout'
import { Title, Subtitle } from '../components/title'
import { Day } from '../components/calendar-day'
import { Separator } from '../components/separator'
import { Modal, initModal } from '../components/modal'
import moment from 'moment'
import queryString from 'query-string'

initModal()

const AdventCalendar = (props) => {
  const {
    data: {
      allMarkdownRemark: { edges: edges },
    },
  } = props

  const queryParams = queryString.parse(props.location.search)
  let day = parseInt(queryParams.day)

  const today = moment().startOf('day')
  const days = edges
    .map(({ node: { excerpt: excerpt, frontmatter: f, html: html } }) => {
      return {
        excerpt: excerpt,
        frontmatter: f,
        html: html,
        date: moment(f.date),
      }
    })
    .filter(
      ({ date: date }) =>
        !today.isBefore(date) || process.env.NODE_ENV !== 'production'
    )

  return (
    <PromoLayout
      title={'Advent of Coder'}
      top={
        <div className={style.adventTop}>
          <Title>
            Advent of <strong>Code</strong>
          </Title>
          <Subtitle>
            Welcome to my advent of code effort. I intend to share an
            interesting <strong>nugget</strong> each day up to Christmas. These
            could be pratical things for vim &amp; friends or more thought
            provoking bits around programming. Enjoy!
          </Subtitle>
        </div>
      }
      bottom={days.map(
        ({ excerpt: excerpt, frontmatter: f, html: html, date: date }) => (
          <AdventDay key={date} date={date} title={f.title} queriedDay={day}>
            <TwitterCard title={f.title} />
            <h1 className={style.modalTitle}>{f.title}</h1>
            <Separator />
            <Entry html={html} />
          </AdventDay>
        )
      )}
    />
  )
}

const Entry = ({ html }) => {
  return (
    <div className={style.prose}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

const TwitterCard = ({title}) => {
  return (
    <Helmet>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@felipesere" />
      <meta name="twitter:title" content={title} />
    </Helmet>
  )
}

class AdventDay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: props.date.date() === props.queriedDay || false,
    }
  }

  toggleModal = (e) => {
    this.setState((prevState) => {
      return { modalOpen: !prevState.modalOpen }
    })
  }

  render() {
    const { date, title, children } = this.props
    return (
      <React.Fragment>
        <Modal isOpen={this.state.modalOpen} onClose={this.toggleModal}>
          {children}
        </Modal>
        <article className={style.adventDay} onClick={this.toggleModal}>
          <Day datetime={date} />
          <div className={style.title}>{title}</div>
        </article>
      </React.Fragment>
    )
  }
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
