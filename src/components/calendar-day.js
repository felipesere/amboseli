import React from 'react'
import style from './calendar-day.module.scss'
import moment from 'moment'

export const Day = ({ datetime }) => {
  const theday = moment(datetime)
  return (
    <time dateTime="2014-09-20" className={style.calendarDay}>
      <div className={style.month}>{theday.format('MMMM')}</div>
      <div className={style.date}>{theday.date()}</div>
      <div className={style.dayOfWeek}>{theday.format('dddd')}</div>
    </time>
  )
}
