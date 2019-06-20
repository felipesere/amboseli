import React from 'react'
import Img from 'gatsby-image'
import { NavBar } from '../components/navigation'
import styled from 'styled-components'

const SplitContent = ({ children }) => {
  return (
    <Split>
      <NavBar/>
      <Content>{children}</Content>
    </Split>
  )
}

export const SplitLayout = ({ children, image }) => {
  return (
    <SplitContainer>
      <HiddenOnMobile fluid={image.childImageSharp.fluid} durationFadeIn={1000} style={{ maxWidth: '50%' }}/>
      <SplitContent>{children}</SplitContent>
    </SplitContainer>
  )
}

const Content = styled.div`
  flex: 1;
  padding: 0;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 800px) {
    padding: 0 80px;
  }
`

const Split = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 800px) {
    max-width: 50%;
    min-height: 100vh;
    overflow: auto;
  }
`

const SplitContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`

const HiddenOnMobile = styled(Img)`
  display: none;

  @media (min-width: 800px) {
    width: 50%;
    background-size: cover;
    background-position: center center;
    display: block;
    overflow: hidden;
  }
`
