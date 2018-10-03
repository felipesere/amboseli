import React from 'react'
import style from './three-columns.module.css'

export const ThreeColumns = ({children}) => {
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
        {elements.map((e, i) => <li key={i}>{e}</li>)}
      </ol>
    </div>
  )
}
