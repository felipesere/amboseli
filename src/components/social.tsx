import * as React from 'react'
import styled from 'styled-components'
import { colors } from '../styles'

export const Icons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px,1fr));
  grid-gap: 1rem;

  a {
    text-decoration: none;
  }
`

type BrandProps = {
  name: string,
  icon: [string, string]
  color: string
}

const brand = ({name, icon: [family, icon], color}: BrandProps) => {
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

export const Twitter = brand({ name: 'Twitter', icon: ['fab', 'twitter'], color: '#1da1f2' })
export const Github = brand({ name: 'Github', icon: ['fab', 'github'], color: '#333' })
export const Keybase = brand({ name: 'Keybase', icon: ['fab', 'keybase'], color: '#33A0FF' })
export const Email = brand({ name: 'Email', icon: ['far', 'envelope'], color: colors.graphite })
export const Xing = brand({ name: 'Xing', icon: ['fab', 'xing'], color: '#026466' })
export const LinkedIn = brand({ name: 'LinkedIn', icon: ['fab', 'linkedin'], color: '#0077b5' })
export const Reddit = brand({ name: 'Reddit', icon: ['fab', 'reddit-alien'], color: '#FF4301' })
export const Facebook = brand({ name: 'Facebook', icon: ['fab', 'facebook-f'], color: '#3C5898' })
