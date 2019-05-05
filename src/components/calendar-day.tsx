import * as React from 'react'
import moment from 'moment'
import { colors } from '../styles'
import styled from 'styled-components'

export const Day = ({ datetime }) => {
  const theDay = moment(datetime)
  return (
    <CalendarDay>
      <Month>{theDay.format('MMMM')}</Month>
      <Date>{theDay.date()}</Date>
      <DayOfWeek>{theDay.format('dddd')}</DayOfWeek>
    </CalendarDay>
  )
}

const CalendarDay = styled.time`
  font-size: 0.5em;

  display: block;
  position: relative;
  width: 7em;
  height: 7em;
  border-radius: 0.6em;
  overflow: hidden;
  transform-origin: 50% 10%;
  background-color: ${colors.lighterGraphite};
  
  * {
    display: block;
    width: 100%;
    font-size: 1em;
    font-weight: bold;
    font-style: normal;
    text-align: center;
  }
`

const Month = styled.div`
  position: absolute;
  top: 0;
  padding: 0.4em 0;
  color: #fff;
  background-color: ${colors.darkerBlue};
`

const Date = styled.div`
  width: 100%;
  font-size: 2.8em;
  padding-top: 0.8em;
`

const DayOfWeek = styled.div`
  position: absolute;
  bottom: 0.2em;
`
