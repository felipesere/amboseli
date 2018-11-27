import React from 'react'
import { Link } from 'gatsby'
import style from './404.module.scss'
import { NavBar } from '../components/navigation'
import { graphql, StaticQuery } from 'gatsby'

const Info = () => (
  <React.Fragment>
    <div className={style.main}>
      <h1 className={style.title}>Info</h1>
      <EnvironmentVariables />
      <div className={style.links}>
        <Link className={style.link} to="/">
          Home
        </Link>
      </div>
    </div>
  </React.Fragment>
)

const EnvironmentVariables = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              gitSha
              buildTime
            }
          }
        }
      `}
      render={({
        site: {
          siteMetadata: { gitSha, buildTime },
        },
      }) => {
        return (
          <div>
            <p>Git Sha: {gitSha}</p>
            <p>Built on: {buildTime}</p>
          </div>
        )
      }}
    />
  )
}

export default Info
