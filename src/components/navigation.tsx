import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { colors } from '../styles'

export const NavBar = ({ center = false }) => {
  const Container = center ? CenteredNavBarContainer : NavBarContainer
  return (
    <Background>
      <Container>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/profile">Profile</Link>
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
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  padding-left: 0;
  padding-right: 0;

  @media (min-width: 800px) {
    max-width: 700px;
  }
`
