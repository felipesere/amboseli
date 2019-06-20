import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { colors } from '../styles'

export const NavBar = ({ center = false }) => {
  const Container = center ? CenteredNavBarContainer : NavBarContainer
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/profile">Profile</Link>
    </Container>
  )
}

const NavBarContainer = styled.nav`
  flex: 0;
  display: flex;
  justify-content: space-between;
  background: ${colors.grey};
  color: ${colors.graphite};

  padding: 1rem 1rem;
  font-weight: bolder;
  
  @media (min-width: 800px) {
    padding: 1rem 80px;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.6rem;
    text-align: center;
    color: ${colors.almostBlack};
    
    &:visited {
      color: ${colors.almostBlack};
    }
  }
`

const CenteredNavBarContainer = styled(NavBarContainer)`
  flex: 0;
  background: ${colors.grey};
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  padding-left: 0;
  padding-right: 0;

  @media (min-width: 800px) {
    max-width: 700px;
  }
`
