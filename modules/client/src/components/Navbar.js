import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { faCommentDots } from '@fortawesome/free-solid-svg-icons/faCommentDots';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    fontFamily: 'sans-serif',
    letterSpacing: .6,
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  },
  msgBadge: {
    margin: '0 10px',
    cursor: 'pointer',
  },
  leftSize: {
    marginLeft: 'auto',
  },
  icon: {
    color: 'white',
    fontSize: 25,
  },
}));


export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position='relative'>
      <Toolbar className={classes.root}>
        <Typography color='inherit' className='flex'>
          <FontAwesomeIcon className={classes.icon} icon={faCommentDots} />
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
