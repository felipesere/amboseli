import React from 'react'
import { Link } from 'gatsby'
import style from './tags.module.scss'
import cx from 'classnames'

export const Tags = ({ tags, blue = false }) => {
  if (tags.length == 0) {
    return null
  } else {

    const className = cx(style.tags, {
      [style.blue]: blue
    })

    return (
      <React.Fragment>
        <div className={className}>
          {tags.map(t => (
            <Link className={style.tag} key={t} to={`/tags/${t}`}>
              {t}
            </Link>
          ))}
        </div>
      </React.Fragment>
    )
  }
}
