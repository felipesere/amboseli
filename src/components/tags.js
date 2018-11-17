import React from 'react'
import { Link } from 'gatsby'
import style from './tags.module.scss'
import cx from 'classnames'

export const Tags = ({ tags, blue = false }) => {
  if (tags.length === 0) {
    return null
  } else {
    const className = cx(style.tags, {
      [style.blue]: blue,
    })

    tags.sort()

    return (
      <div className={className}>
        {tags.map((t) => (
          <Link className={style.tag} key={t} to={`/tags/${t}`}>
            {t}
          </Link>
        ))}
      </div>
    )
  }
}

export const TagLabels = ({ tags }) => {
  if (tags.length == 0) {
    return null
  } else {
    return (
      <div className={style.tags}>
        {tags.map((t) => (
          <div key={t} className={style.tagLabel}>
            {t}
          </div>
        ))}
      </div>
    )
  }
}
