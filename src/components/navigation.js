import React from 'react'
import style from './navigation.module.scss'
import { Link } from 'gatsby'

export const NavBar = () => {
  return (
    <nav className={style.navbar}>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  )
}
