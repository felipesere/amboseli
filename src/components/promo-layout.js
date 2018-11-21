import React from 'react'
import Helmet from 'react-helmet'
import { NavBar } from '../components/navigation'
import { Promo } from '../components/promo'
import style from './promo-layout.module.scss'
import icon from '../assets/favicon.png'

export const PromoLayout = ({ title, top, bottom }) => {
  return (
    <React.Fragment>
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <link rel={'shortcut icon'} type={'image/png'} href={'icon'} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </Helmet>
      <NavBar center />
      <div className={style.all}>
        <Promo>{top}</Promo>
        <section className={style.bottom}>{bottom}</section>
      </div>
    </React.Fragment>
  )
}
