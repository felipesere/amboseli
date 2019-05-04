import * as React from 'react'

export const Separator = () => {
  const style = {
    border: 0,
    height: '1px',
    width: '50%',
    margin: '0 auto 1em auto',
    background: '#333 linear-gradient(to right, #ccc, #333, #ccc)',
  }

  return <hr style={style} />
}
