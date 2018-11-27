import React from 'react'
import { Link } from 'gatsby'
import style from './404.module.scss'
import { NavBar } from '../components/navigation'

const NotFoundPage = () => (
  <div className={style.main}>
    <h1 className={style.title}>NOT FOUND</h1>
    <p className={style.subtitle}>
      You've just hit a route that doesn't exist... dang!
    </p>
    <p>Let's get you back on track:</p>
    <div className={style.links}>
      <Link className={style.link} to="/">
        Home
      </Link>
      <Link className={style.link} to="/blog">
        Blog
      </Link>
    </div>
  </div>
)

export default NotFoundPage
