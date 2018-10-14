import React from 'react'
import { Link } from 'gatsby'
import style from './tags.module.scss'

export const Tags = ({ tags }) => {
  if (tags.length == 0) {
    return null
  } else {
    return (
      <React.Fragment>
        <div className={style.tags}>
          {tags.map(t => (
            <Link className={style.tag} key={t} to={`/tags/${t}`}>{t}</Link>
          ))}
        </div>
      </React.Fragment>
    )
  }
}
