import * as React from 'react'
import { colors } from '../styles'
import styled from 'styled-components'
import { NavBar } from '../components/navigation'

export const Base = ({children}) => (
  <Background>
    <NavBar />
    {children}
  </Background>
)

const Background = styled.div`
  background: ${colors.lightGrey};
  
  @media (min-width: 800px) {
    padding-bottom: 3rem;
  }
`
