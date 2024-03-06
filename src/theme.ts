import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
  palette: {
    primary: {
      main: "hsl(198, 15%, 13%)",
    },
    secondary: {
      main: "hsl(17, 96%, 56%)",
    },
  },
  typography: {
    fontFamily: [
        "Work Sans",
        "Inter",
        "Hind",
        "Fira Code",
    ].join(','),
  },
})

theme = responsiveFontSizes(theme)

export default theme