import React from 'react'
import style from './navigation.module.scss'
import { Link } from 'gatsby'
import cx from 'classnames'

export const NavBar = ({ center = false }) => {
  const className = cx(style.navbar, {
    [style.centered]: center,
  })

  return (
    <nav className={className}>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/portfolio">Portfolio</Link>
    </nav>
  )
}
