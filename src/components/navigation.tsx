import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import moment from 'moment'
import { colors } from '../styles'

export const NavBar = ({ center = false }) => {
  const Container = center ? CenteredNavBarContainer : NavBarContainer
  return (
    <Background>
      <Container>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/portfolio">Portfolio</Link>
        {isXmas() && <Link to="/advent">Advent</Link>}
      </Container>
    </Background>
  )
}

const Background = styled.div`
  background: ${colors.grey};
`

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  color: ${colors.graphite};

  padding: 0.5rem 80px 0.25rem 80px;
  font-weight: normal;

  a {
    text-decoration: none;
    font-size: 0.6rem;
    text-align: center;
    color: ${colors.darkerGraphite};

    &:visited {
      color: ${colors.darkerGraphite};
    }
  }
`

const CenteredNavBarContainer = styled(NavBarContainer)`
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  padding-left: 0;
  padding-right: 0;

  @media (min-width: 800px) {
    max-width: 700px;
  }
`

const isXmas = () => {
  const decemberFirst = moment('2018-12-01').startOf('date')
  const now = moment()
  return now.isAfter(decemberFirst) || process.env.NODE_ENV !== 'production'
}
