import Typography from 'typography'

const typography = new Typography({
  headerFontFamily: ['Open Sans', 'sans-serif'],
  bodyFontFamily: ['Montserrat', 'sans-serif'],
  bodyWeight: 'lighter',
  baseFontSize: '20px'
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
