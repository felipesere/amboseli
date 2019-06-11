import * as React from 'react'
import styled from 'styled-components'

export const Icons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px,1fr));
  grid-gap: 1rem;

  a {
    text-decoration: none;
  }
`

const roundIcon = (family: string, icon: string) => {
  return () => (
    <span className="fa-stack fa-lg">
      <i className="fas fa-circle fa-stack-2x"/>
      <i className={`${family} fa-${icon} fa-stack-1x fa-inverse`}/>
    </span>
  )
}


const coloredIcon = (family: string, icon: string, color: string, name: string) => {
  return () => (
    <BrandColor color={color}>
      <Icon>
        <i className={`${family} fa-${icon} fa-s`}/>
      </Icon>
      <BrandName>{name}</BrandName>
    </BrandColor>
  )
}

const BrandName = styled.span`
  margin-left: 5px;

`

const Icon = styled.span`
  margin-right: 2px;
`

const BrandColor = styled.div`
    color: ${(props) => props.color};
    border: 1px solid ${(props) => props.color};
    padding: 4px 7px;
    border-radius: 3px;
    font-size: 0.75rem;

    &:hover {
      background-color: ${(props) => props.color};
      border-color: ${(props) => props.color};
      color: #fff;
    }
`

export const Twitter = roundIcon('fab', 'twitter')
export const Github = roundIcon('fab', 'github')
export const Keybase = roundIcon('fab', 'keybase')
export const Email = roundIcon('far', 'envelope')
export const Xing = roundIcon('fab', 'xing')
export const LinkedIn = roundIcon('fab', 'linkedin')
export const Reddit = roundIcon('fab', 'reddit-alien')
export const Facebook = roundIcon('fab', 'facebook-f')


export const ColoredTwitter = coloredIcon('fab', 'twitter', '#1da1f2', 'Twitter')
export const ColoredFacebook = coloredIcon('fab', 'facebook-f', '#3C5898', 'Facebook')
export const ColoredLinkedIn = coloredIcon('fab', 'linkedin', '#0077b5', 'LinkedIn')
export const ColoredReddit = coloredIcon('fab', 'reddit-alien', '#FF4301', 'Reddit')
