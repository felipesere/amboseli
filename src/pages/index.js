import React from 'react'
import Helmet from 'react-helmet'
import { SplitLayout } from '../components/split-layout'
import { ThreeColumns, List } from '../components/three-columns'
import style from './index.module.css'
import { graphql } from 'gatsby'

const Tagline = ({ children }) => {
  return (
    <h1 className={style.tagline}>{children}</h1>
  )
}

const Name = ({ children }) => {
  return (
    <p className={style.name}>{children}</p>
  )
}

const Prose = ({ children }) => {
  return (<div className={style.prose}>{children}</div>)
}

export default function Me({data, location}) {
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description

  return (
    <SplitLayout location={location}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={siteTitle}
      />
      <div className={style.content}>
        <Name>Felipe Seré</Name>

        <Tagline>Engineer. <strong>Coach.</strong> Photographer.</Tagline>

        <Prose>
          <p>
            Quisque in feugiat velit.
            Nulla facilisi.
            Maecenas accumsan, tortor ac lobortis cursus, quam velit luctus nunc, et tincidunt est magna quis lacus.
            Aenean facilisis neque leo, quis laoreet justo pellentesque ac.
          </p>
          <p>
            Donec at libero id lectus porta dapibus eu in nibh.
            Cras id mauris sapien.
            Fusce viverra luctus urna ac rutrum.
            Duis semper elit eu mi facilisis eleifend.
            Sit amet lacinia nibh enim sed massa.
          </p>
        </Prose>
        <ThreeColumns>
          <Connect/>
          <Social/>
          <Network/>
        </ThreeColumns>
      </div>
    </SplitLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const Network = () => {
  return (
    <List title="Network" elements={['Link 1', 'Link 2', 'Link 3']}/>
  )
}

const Social = () => {
  return (
    <List title="Social" elements={['Twitter', 'Github', 'Instagram']}/>
  )
}

const Connect = () => {
  return (
    <List title="Connect" elements={['Blog', 'Email', 'Newsletter']}/>
  )
}

