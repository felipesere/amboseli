import React from 'react'
import style from './promo.module.scss'

export const Promo = ({ children }) => {
  return <section className={style.promo}>{children}</section>
}
