import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Title } from '../components/title'
import { Links, Main, NavItem } from './404'

const Info = () => (
  <React.Fragment>
    <Main>
      <Title>Info</Title>
      <EnvironmentVariables />
      <Links>
        <NavItem to="/">Home</NavItem>
      </Links>
    </Main>
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
