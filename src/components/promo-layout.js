import React from 'react'
import { NavBar } from '../components/navigation'
import { Promo } from '../components/promo'
import style from './promo-layout.module.scss'

export const PromoLayout = ({ top, bottom }) => {
  return (
    <React.Fragment>
      <NavBar center />
      <div className={style.all}>
        <Promo>{top}</Promo>
        <section className={style.bottom}>{bottom}</section>
      </div>
    </React.Fragment>
  )
}
