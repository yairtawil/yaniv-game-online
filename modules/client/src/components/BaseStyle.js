import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
    '@global': {
        '*::-webkit-scrollbar': {
            width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.primary.main,
            outline: '1px solid slategrey'
        }
    },
    root: {
        // background: 'rgb(22,143,80)',
        background: 'linear-gradient(90deg, rgba(21,65,39,1) 0%, rgba(14,250,127,1) 50%, rgba(21,65,39,1) 100%)',
        // backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        position: 'relative',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        boxSizing: 'border-box',
        flexDirection: 'column',
        overflow: 'hidden'
    }
}))

export default function BaseStyle({ children }) {
    const classes = useStyles()
    return <div className={classes.root}>{children}</div>
}
