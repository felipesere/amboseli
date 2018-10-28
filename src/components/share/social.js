import React from 'react'
import style from './social.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faFacebookF,
  faRedditAlien,
  faLinkedinIn,
  faGithub,
  faKeybase,
  faXing,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  fas,
  faEnvelopeSquare,
  faTwitter,
  faFacebookF,
  faRedditAlien,
  faLinkedinIn,
  faGithub,
  faKeybase,
  faXing
)

export const Icons = ({ children }) => {
  return <div className={style.icons}>{children}</div>
}

export const Twitter = () => {
  return (
    <div className={style.twitter}>
      <span className={style.icon}>
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </span>
      <span className="text">Twitter</span>
    </div>
  )
}

export const Facebook = () => {
  return (
    <div className={style.facebook}>
      <span className={style.icon}>
        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
      </span>
      <span className="text">Facebook</span>
    </div>
  )
}

export const Github = () => {
  return (
    <div className={style.github}>
      <span className={style.icon}>
        <FontAwesomeIcon icon={['fab', 'github']} />
      </span>
      <span className="text">Github</span>
    </div>
  )
}

export const Keybase = () => {
  return (
    <div className={style.keybase}>
      <span className={style.icon}>
        <FontAwesomeIcon icon={['fab', 'keybase']} />
      </span>
      <span className="text">Keybase</span>
    </div>
  )
}

export const Email = () => {
  return (
    <div className={style.email}>
      <span className={style.icon}>
        <FontAwesomeIcon icon={['fa', 'envelope']} />
      </span>
      <span className="text">Email</span>
    </div>
  )
}

export const Xing = () => {
  return (
    <div className={style.xing}>
      <span className={style.icon}>
        <FontAwesomeIcon icon={['fab', 'xing']} />
      </span>
      <span className="text">Xing</span>
    </div>
  )
}

export const LinkedIn = () => {
  return (
    <div className={style.linkedin}>
      <span className={style.icon}>
        <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
      </span>
      <span className="text">LinkedIn</span>
    </div>
  )
}

export const Reddit = () => {
  return (
    <div className={style.reddit}>
      <span className={style.icon}>
        <FontAwesomeIcon icon={['fab', 'reddit-alien']} />
      </span>
      <span className="text">Reddit</span>
    </div>
  )
}
