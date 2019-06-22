import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { colors } from '../styles'

export const NavBar = () => {
  return (
    <NavBarContainer>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/profile">Profile</Link>
    </NavBarContainer>
  )
}

const NavBarContainer = styled.nav`
  flex: 0;
  display: flex;
  justify-content: center;
  
  background: ${colors.grey};
  color: ${colors.graphite};

  padding: 1rem 1rem;
  font-weight: bolder;
  
  & > * {
    @media (min-width: 800px) {
      padding: 0 2rem;
    }
    
    padding: 0 1rem;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.6rem;
    color: ${colors.almostBlack};
    
    &:visited {
      color: ${colors.almostBlack};
    }
  }
`
