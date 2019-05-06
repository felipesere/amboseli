import React from 'react'
import { graphql } from 'gatsby'
import { PromoLayout } from '../layout/promo-layout'
import { Title, Subtitle } from '../components/title'
import { Day } from '../components/calendar-day'
import { Modal, initModal } from '../components/modal'
import moment, { Moment } from 'moment'
import queryString from 'query-string'
import styled from 'styled-components'
import { coreWidth, shadow } from '../styles'

initModal()

type Day = {
  excerpt: string
  frontmatter: Frontmatter,
  html: string,
  date: Moment,
}

type Node = {
  node: {
    excerpt: string,
    frontmatter: Frontmatter,
    html: string,
  }
}

type Frontmatter = {
  date: string,
  title: string,
}

type AdventCalendarState = {
  days: Day[],
  openedDay: Day | undefined
}

type AdventCalendarProps = {
  data: {
    allMarkdownRemark: {
      edges: Node[],
    }
  },
  location: {
    search: string
  }
}

class AdventCalendar extends React.Component<AdventCalendarProps, AdventCalendarState> {
  constructor(props) {
    super(props)
    const {
      data: {
        allMarkdownRemark: { edges: edges },
      },
    } = this.props
    const queryParams = queryString.parse(this.props.location.search) as { day: string }
    let day = parseInt(queryParams.day)
    const today = moment().startOf('day')
    const days = edges
      .map(({ node: { excerpt, frontmatter, html } }) => {
        return {
          excerpt,
          frontmatter,
          html,
          date: moment(frontmatter.date),
        }
      })
      .filter(({ date }) => {
        const midday = date.startOf('day')
        const isInPast = today.isSameOrAfter(midday)
        return isInPast || process.env.NODE_ENV === 'development'
      })

    this.state = {
      days: days,
      openedDay: days[days.length - day],
    }
  }

  openModal = (title) => {
    this.setState((prevState) => {
      const openedDay = prevState.days.find(
        (day) => day.frontmatter.title === title,
      )
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
          <AdventTop>
            <Title>
              Advent of <strong>Code</strong>
            </Title>
            <Subtitle>
              Welcome to my advent of code effort. I intend to share an
              interesting <strong>nugget</strong> each day up to Christmas.
              These could be pratical things for vim &amp; friends or more
              thought provoking bits around programming. Enjoy!
            </Subtitle>
          </AdventTop>
        }
        bottom={
          <React.Fragment>
            {this.state.days.map(
              ({
                 excerpt: excerpt,
                 frontmatter: f,
                 html: html,
                 date: date,
               }) => (
                <AdventDay
                  key={date.toISOString()}
                  date={date}
                  title={f.title}
                  onClick={this.openModal}
                />
              ),
            )}
            }<Modal day={this.state.openedDay} onClose={this.closeModal}/>
          </React.Fragment>
        }
      />
    )
  }
}

const AdventTop = styled.div`
  ${coreWidth()}
`

type AdventDayProps = {
  onClick: (string) => void,
  title: string,
  date: Moment,
}

class AdventDay extends React.Component<AdventDayProps> {
  constructor(props) {
    super(props)
  }

  reportTitle = () => {
    this.props.onClick(this.props.title)
  }

  render() {
    const { date, title } = this.props
    return (
      <AdventDayLayout onClick={this.reportTitle}>
        <Day datetime={date}/>
        <AdventTitle>{title}</AdventTitle>
      </AdventDayLayout>
    )
  }
}

const AdventDayLayout = styled.article`
  ${coreWidth()}
  ${shadow()}

  display: flex;
  margin-bottom: 25px;
  background: white;
  border-radius: 10px 0 0 10px;
`

const AdventTitle = styled.div`
  margin-left: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 70%;
`

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
