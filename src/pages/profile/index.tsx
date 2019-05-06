import * as React from 'react'

import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'
import { colors } from '../../styles'
import { Base } from '../../layout/base'
import styled from 'styled-components'
import { graphql } from 'gatsby'


const Title = styled.h1`
  &&& {
    font-size: 1.5rem;
    margin-bottom: 2px;
  }
`
const Subtitle = styled.h2`
  &&& {
    font-size: 1rem;
    font-weight: normal;
    margin-bottom: 10px;
  }
`

const MyTimeline = styled(Timeline)`
  && {
    padding-top: 50px;
    margin-top: 5px;
  }
`

type TimelineEntryProps = {
  date: string,
  children: JSX.Element | JSX.Element[],
  highlight?: boolean
}

const TimelineEntry = ({ date, children, highlight }: TimelineEntryProps) => {
  let lookAndFeel = {
    date: {
      background: colors.graphite,
      color: '#fff',
    },
    box: {
      background: 'none',
      borderRadius: '0',
      boxShadow: 'none',
      padding: '0 20px',
    },
  }

  if (highlight) {
    lookAndFeel = {
      date: {
        background: colors.blue,
        color: 'white',
      },
      box: {
        background: '#ddd',
        borderRadius: '5px',
        boxShadow: '10px 10px 11px -8px rgba(0,0,0,0.63)',
        padding: '15px 20px',
      },
    }
  }

  return (
    <TimelineItem
      dateText={date}
      dateInnerStyle={lookAndFeel.date}
      bodyContainerStyle={{
        padding: '15px 20px',
        marginBottom: '5em',
        ...lookAndFeel.box,
      }}
    >
      {children}
    </TimelineItem>
  )
}

export default function Index(props) {
  const entries = props.data.allMarkdownRemark.edges
  return (
    <Base>
      <MyTimeline lineColor={'#ddd'}>
        {entries.map(({node: {frontmatter, html}}, i) => {
            return (
              <TimelineEntry key={i} date={`${frontmatter.from} - ${frontmatter.to}`} highlight={frontmatter.highlight}>
                <Title>{frontmatter.title}</Title>
                <Subtitle>{frontmatter.subtitle}</Subtitle>
                <div dangerouslySetInnerHTML={{__html: html}}/>
              </TimelineEntry>
            )
          },
        )}
      </MyTimeline>
    </Base>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: fileAbsolutePath, order: DESC }
      filter: { fields: { slug: { regex: "/profile/" } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            subtitle
            from
            to
            highlight
          }
        }
      }
    }
  }
`

