import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Title, Subtitle } from '../components/title'
import { colors } from '../styles'

const NotFoundPage = () => (
  <Main>
    <ErrorTitle>NOT FOUND</ErrorTitle>
    <Subtitle>
      You've just hit a route that doesn't exist... dang!
    </Subtitle>
    <p>Let's get you back on track:</p>
    <Links>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/blog">Blog</NavItem>
    </Links>
  </Main>
)

export const NavItem = styled(Link)`
  margin: 5px;
  color: ${colors.darkerGraphite};
  border: 1px solid ${colors.graphite};
  text-decoration: none;
  padding: 4px 7px;
  border-radius: 3px;
  font-size: 1rem;

  &:hover {
    color: black;
    border-color: black;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`

export const Links = styled.div`
  margin-top: 0.75rem;
  list-style: none;
  display: flex;
  flex-flow: row wrap;
`

const ErrorTitle = styled(Title)`
  color: ${colors.blue};
`

export const Main = styled.div`
  width: 90%;
  margin: 1rem auto;

  @media (min-width: 800px) {
    margin-top: 5rem;
    margin-bottom: 5rem;
    width: 700px;
  }
`

export default NotFoundPage
