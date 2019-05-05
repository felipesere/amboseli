import { darken, lighten } from 'polished'

export const coreWidth = () => {
  return `
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  `
}

export const shadow = () => {
 return `
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.15s ease-in-out;
  }
  `
}

const lightGrey = '#f9f9f9'
const graphite = '#9eabb3'

export const colors = {
  blue: `rgba(0, 159, 253, 1)`,
  lightBlue: `rgba(0, 159, 253, 0.25)`,
  graphite,
  darkerGraphite: '#5b6267',
  lighterGraphite: lighten(0.25, graphite),
  lightGrey,
  grey: darken(0.05, lightGrey),
}