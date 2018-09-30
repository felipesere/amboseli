import React, {Fragment} from 'react'
import Helmet from 'react-helmet'
import {SplitLayout} from '../components/split-layout'
import {ThreeColumns, List} from '../components/three-columns'
import style from './index.module.css'

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
      <div className={style.content}>
        <p className={style.name}>Felipe Sere</p>

        <h1 className={style.tagline}>Engineer. Thoughtful. Meticulous.</h1>

        <p>
          Donec at libero id lectus porta dapibus eu in nibh.
          Cras id mauris sapien.
          Fusce viverra luctus urna ac rutrum.
          Duis semper elit eu mi facilisis eleifend.
          Sit amet lacinia nibh enim sed massa.
        </p>
        <ThreeColumns>
          <Connect />
          <Social />
          <Network />
        </ThreeColumns>
      </div>
    </SplitLayout>
  )
}

const Network = () => {
  return (
    <List title="Network" elements={["Link 1", "Link 2", "Link 3"]} />
  )
}

const Social = () => {
  return (
    <List title="Social" elements={["Twitter", "Github", "Instagram"]} />
  )
}

const Connect = () => {
  return (
    <List title="Connect" elements={["Blog", "Email", "Newsletter"]} />
  )
}

