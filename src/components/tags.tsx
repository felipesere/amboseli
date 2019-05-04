import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { colors } from '../styles'

export const Tags = ({ tags, blue = false }) => {
  if (tags.length === 0) {
    return null
  } else {
    tags.sort()

    return (
      <TagsContainer blue={blue}>
        {tags.map((t) => (
          <Item key={t} to={`/tags/${t}`}>
            {t}
          </Item>
        ))}
      </TagsContainer>
    )
  }
}

const TagsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px ,1fr));
  grid-gap: 0.25rem;
  color: ${props => props.blue ? colors.blue : 'inherit'};
  border: ${props => props.blue ? colors.blue : 'inherit'};
`

const activeClassName = 'active-nav-item'
export const Item = styled(Link).attrs({ activeClassName })`
  color: ${colors.darkerGraphite};
  border: 1px solid ${colors.graphite};
  text-decoration: none;
  padding: 4px 7px;
  border-radius: 3px;
  font-size: 0.5rem;

  &:hover {
    color: black;
    border-color: black;
    background-color: ${colors.lightGrey}
  }
`

export const TagLabels = ({ tags }) => {
  if (tags.length === 0) {
    return null
  } else {
    return (
      <TagsContainer>
        {tags.map((t) => (<TagLabel key={t}>{t}</TagLabel>))}
      </TagsContainer>
    )
  }
}

const TagLabel = styled.div`
  background: ${colors.lightBlue};
  border-radius: 3px;
  padding: 4px 7px;
`
