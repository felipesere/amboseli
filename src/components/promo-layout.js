import React from 'react'
import Helmet from 'react-helmet'
import { NavBar } from '../components/navigation'
import { Promo } from '../components/promo'
import style from './promo-layout.module.scss'
import icon from '../assets/favicon.png'

export const PromoLayout = ({ title, top, bottom }) => {
  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title={title}
        link={[{ rel: 'shortcut icon', type: 'image/png', href: icon }]}
      />
      <NavBar center />
      <div className={style.all}>
        <Promo>{top}</Promo>
        <section className={style.bottom}>{bottom}</section>
      </div>
    </React.Fragment>
  )
}
