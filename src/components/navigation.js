import React from 'react'
import style from './navigation.module.scss'
import { Link } from 'gatsby'
import cx from 'classnames'
import moment from 'moment'

export const NavBar = ({ center = false }) => {
  const className = cx(style.navbar, {
    [style.centered]: center,
  })

  return (
    <div className={style.background}>
      <nav className={className}>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/portfolio">Portfolio</Link>
        {isXmas() && <Link to="/advent">Advent</Link>}
      </nav>
    </div>
  )
}

const isXmas = () => {
  const decemberFirst = moment('2018-12-01').startOf('date')
  const now = moment()
  return now.isAfter(decemberFirst) || process.env.NODE_ENV !== 'production'
}
