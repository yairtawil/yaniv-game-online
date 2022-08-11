import React from 'react'

import { green, purple } from '@mui/material/colors'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
    palette: {
        background: {
            default: green[800],
            paper: green[500]
        },
        secondary: {
            main: purple[700]
        },
        primary: {
            main: green[600]
        }
    }
})

export default function Theme({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
