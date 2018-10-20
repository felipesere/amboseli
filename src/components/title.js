import React from 'react'
import style from './title.module.scss'

export const Title = ({ children }) => {
  return <h1 className={style.title}>{children}</h1>
}
