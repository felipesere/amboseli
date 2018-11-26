import React from 'react'
import style from './split-layout.module.scss'
import Img from 'gatsby-image'
import { NavBar } from '../components/navigation'

const SplitImage = ({ image }) => {
  return (
    <Img className={style.splitImage} fluid={image.childImageSharp.fluid} />
  )
}

const SplitContent = ({ children }) => {
  return (
    <div className={style.split}>
      <NavBar />
      <div className={style.content}>{children}</div>
    </div>
  )
}

export const SplitLayout = ({ children, image }) => {
  return (
    <div className={style.splitContainer}>
      <SplitImage image={image} />
      <SplitContent>
        {children}
      </SplitContent>
    </div>
  )
}
