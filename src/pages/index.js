import React from 'react'
import Helmet from 'react-helmet'
import {SplitLayout} from '../components/split-layout'

export default function Me(props) {
  const siteTitle = "Someting"
  const siteDescription = "About something fancy"
  return (
    <SplitLayout location={props.location}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={siteTitle}
      />
      <p>This felipe</p>
    </SplitLayout>
  )
}
