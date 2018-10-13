import React from 'react'
import style from './split-layout.module.css'
import Img from 'gatsby-image'

const SplitImage = ({ image }) => {
  return (
    <Img className={style.splitImage} fluid={image.childImageSharp.fluid} />
  )
}

const SplitContent = ({ children }) => {
  return <div className={style.splitContent}>{children}</div>
}

export const SplitLayout = ({ children, image }) => {
  return (
    <div className={style.splitContainer}>
      <SplitImage image={image} />
      <SplitContent>{children}</SplitContent>
    </div>
  )
}
