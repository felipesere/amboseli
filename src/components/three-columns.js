import React, {Fragment} from 'react'
import style from './three-columns.module.css'
import {scale} from './../utils/typography'

export const ThreeColumns = ({children}) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const [first, second, third] = children

  return (
    <div className={style.splitLists}>
      {first}
      {second}
      {third}
    </div>
  )
}

export const List = ({title, elements}) => {
  return (
    <div className={style.list}>
      <h1>{title}</h1>
      <ol>
        {elements.map(e => <li>{e}</li>)}
      </ol>
    </div>
  )
}
