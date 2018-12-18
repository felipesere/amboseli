import React from 'react'
import style from './calendar-day.module.scss'
import moment from 'moment'

export const Day = ({ datetime }) => {
  const theday = moment(datetime)
  return (
    <time className={style.calendarDay}>
      <div className={style.month}>{theday.format('MMMM')}</div>
      <div className={style.date}>{theday.date()}</div>
      <div className={style.dayOfWeek}>{theday.format('dddd')}</div>
    </time>
  )
}
