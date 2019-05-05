import { darken, lighten } from 'polished'

export const coreWidth = () => {
  return `
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
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