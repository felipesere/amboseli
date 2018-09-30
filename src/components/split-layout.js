import React from 'react'
import style from './split-layout.module.css'
import profile from './IMG_0002.jpg'

const SplitImage = () => {
  const image = {
    backgroundImage: `url(${profile})`
  }

  return (
    <div className={style.splitImage} style={image} />
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
