import * as React from 'react'
import Helmet from 'react-helmet'
import { NavBar } from '../components/navigation'
import { Promo } from '../components/promo'
import icon from '../assets/favicon.png'
import {colors} from '../styles'
import styled from 'styled-components'

export const PromoLayout = ({ title, top, bottom }) => {
  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <link rel={'shortcut icon'} type={'image/png'} href={icon} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Helmet>
      <NavBar center />
      <All>
        <Promo>{top}</Promo>
        <Bottom>{bottom}</Bottom>
      </All>
    </React.Fragment>
  )
}

const All = styled.div`
  background: ${colors.lightGrey};

  @media (min-width: 800px) {
    padding-bottom: 3rem;
  }
`

const Bottom = styled.section`
  padding: 5rem 0 2rem 0;
`
