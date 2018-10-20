import Typography from 'typography'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Source Sans Pro',
      styles: ['200', '400', '400i', '700'],
    },
  ],
  headerFontFamily: ['Montserrat'],
  bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
  baseFontSize: '22px',
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
