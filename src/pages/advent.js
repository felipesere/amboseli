import React from 'react'
import style from './advent.module.scss'
import { graphql } from 'gatsby'
import { PromoLayout } from '../components/promo-layout'
import { Title, Subtitle } from '../components/title'
import { Day } from '../components/calendar-day'
import { Modal, initModal } from '../components/modal'
import moment from 'moment'
import queryString from 'query-string'

initModal()

class AdventCalendar extends React.Component {
  constructor(props) {
    super(props)
    const {
      data: {
        allMarkdownRemark: { edges: edges },
      },
    } = this.props
    const queryParams = queryString.parse(this.props.location.search)
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
          !today.isBefore(date) || process.env.NODE_ENV !== 'production',
      )

    this.state = {
      days: days,
      openedDay: days[days.length - day],
    }
  }

  openModal = (title) => {
    this.setState((prevState) => {
      const openedDay = prevState.days.find((day) => day.frontmatter.title === title)
      console.log(openedDay)
      return { ...prevState, openedDay }
    })
  }

  closeModal = () => {
    this.setState({ openedDay: undefined })
  }


  render() {
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
        bottom={
          <React.Fragment>
            {this.state.days.map(
              ({ excerpt: excerpt, frontmatter: f, html: html, date: date }) => (
                <AdventDay key={date} date={date} title={f.title} onClick={this.openModal}/>
              ),
            )}}
            <Modal day={this.state.openedDay} onClose={this.closeModal} />
          </React.Fragment>
        }
      />
    )
  }
}

class AdventDay extends React.Component {
  constructor(props) {
    super(props)
  }

  reportTitle = () => {
    this.props.onClick(this.props.title)
  }

  render() {
    const { date, title } = this.props
    return (
      <React.Fragment>
        <article className={style.adventDay} onClick={this.reportTitle}>
          <Day datetime={date}/>
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
