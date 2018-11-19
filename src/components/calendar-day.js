import React from 'react'
import style from './calendar-day.module.scss'
import moment from 'moment'

export const Day = ({ datetime }) => {
  const theday = moment(datetime)
  return (
    <time dateTime="2014-09-20" className={style.calendarDay}>
      <em>{theday.format('dddd')}</em>
      <strong>{theday.format('MMMM')}</strong>
      <span>{theday.date()}</span>
    </time>
  )
}
