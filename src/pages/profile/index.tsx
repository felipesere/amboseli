import * as React from 'react'
import showdown from 'showdown'

import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'
import { colors } from '../../styles'
import { Base } from '../../layout/base'
import styled from 'styled-components'

const converter = new showdown.Converter()
console.log(converter.makeHtml('# foo bar'))

const Title = styled.h1`
  &&& {
    font-size: 1.5rem;
    margin-bottom: 2px;
  }
`
const Subtitle = styled.h2`
  &&& {
    font-size: 1rem;
    font-weight: lighter;
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

export default () => (
  <Base>
    <MyTimeline lineColor={'#ddd'}>
      {personalTimeline.map( (entry, i) => {
        console.log(converter.makeHtml(entry.story))
        return (
          <TimelineEntry key={i} date={`${entry.from} - ${entry.to}`} highlight={entry.highlight}>
            <Title>{entry.title}</Title>
            <Subtitle>{entry.subtitle}</Subtitle>
            <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(entry.story) }}/>
          </TimelineEntry>
        )}
      )}
    </MyTimeline>
  </Base>
)


const personalTimeline = [
  {
    from: "July 2018",
    to: "present",
    title: "8th Light, London",
    subtitle: "Principal Software Crafter",
    story: "",
    highlight: true,
  },
  {
    from: "July 2014",
    to: "July 2018",
    title: "8th Light, London",
    subtitle: "Software Crafter",
    story: "",
    highlight: false,
  },
  {
    from: 'April 2012',
    to: 'May 2014',
    title: '1&1 Internet AG, Karlsruhe',
    subtitle: 'Software Engineer',
    story: 'As part of the "Hosting Core Services" department, I developed services for in-house applications as part of a Scrum team. ' +
      'Our focus was on RESTful APIs for service discovery, data storage and OAuth2 security.' +
      'I was also the bridge between German and Romanian development team.',
    highlight: false,
  },
  {
    from: 'October 2008',
    to: 'April 2012',
    title: 'Karlsruhe Institute of Technology',
    subtitle: 'Bachelors degree in Engineering/Industrial Management, Grade 2.2',
    story: `Industrial engineering is an interdisciplinary field combining computer science, classical engineering, economics and business administration.
      My personal focus was on computer science as well as management of eBusinesses and eServices.
      Thesis: Semi-Automatic Composition of BPMN Processes: A Platform Prototype. Grade 1.7`,
    highlight: false,
  },
  {
    from: '2002',
    to: 'October 2008',
    title: 'German School Nairobi, Kenya',
    subtitle: 'Abitur, Grade 1.4',
    story: `Student representative in parent teacher association 2007-2008.
    Extra curricular activities included working backstage (audio, lightning, stage props) for drama class,
    and playing Volleyball for the school team.`,
    highlight: false,
  },
]