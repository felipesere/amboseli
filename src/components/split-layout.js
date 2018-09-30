import React from 'react'
import style from './split-layout.module.css'

const SplitImage = () => {
  return (
    <div className={style.splitImage} />
  )
}

const SplitContent = ({children}) => {
  return (
    <div className={style.splitContent}>
      {children}
    </div>
  )
}

export const SplitLayout = ({children}) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <div className={style.splitContainer}>
      <SplitImage />
      <SplitContent> 
        {children}
      </SplitContent>
    </div>
  )
}
