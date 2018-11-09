const theme = {
  colors: {
    // base: '#121212', // Black
    base: '#373f49', // Dark Gray
    secondary: '#e9e9e9', // Medium Gray
    tertiary: '#f3f3f3', // Light Gray
    quaternary: '#fcfcfc', // Vary Light Gray
    highlight: '#5b8bf7', // Light Blue
  },
  sizes: {
    // maxWidth: '1050px',
    maxWidth: 'calc(90% - 15vmin);',
    maxWidthCentered: '1000px',
    // maxWidthCentered: 'calc(80% - 10vmin);',
    // maxWidthCenteredMax800px: 'calc(95% - 5vmin);',
    // maxWidthCenteredMax500px: 'calc(100% - 0vmin);',
  },
  responsive: {
    small: '35em',
    medium: '50em',
    large: '70em',
  },
  fonts: {
    article: {
      fontFamily: 'Georgia',
      letterSpacing: '0.01em',
      fontSize: '1.07em',
    },
    sansSerif: {
      fontWeight: '400',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    }
  }
}

export default theme
