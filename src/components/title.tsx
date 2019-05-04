import * as React from 'react'
import styled from 'styled-components';
import {coreWidth, colors} from '../styles';


export const Title = styled.h1`
  ${coreWidth()};
  text-align: center;

  strong {
    color: ${colors.blue};
  }
`

export const Subtitle = styled.h4`
  ${coreWidth()};
  font-style: italic;
  font-weight: lighter;
  text-align: center;
  
  strong {
    color: ${colors.blue};
  }
`

