import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import ProfileAvatar from './ProfileAvatar';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar } from '@mui/material';
import { useRecoilState } from 'recoil';
import { IsConnected } from '../../../state/user';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    fontFamily: 'sans-serif',
    letterSpacing: .6,
    justifyContent: 'space-between',
    maxHeight: 64,
  },
  appBar: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
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
  leftSize: {},
  rightSize: {
    display: 'flex',
    alignItems: 'center',
  },
  showUsers: {
    marginRight: 10,
  },
}));


export default function Navbar() {
  const classes = useStyles();
  const [isConnected, setIsConnected] = useRecoilState(IsConnected);

  return (
    <AppBar className={classes.appBar} position='relative'>
      <Toolbar className={classes.root}>
        <div className={classes.rightSize}>
          <Logo style={{ maxHeight: '100%', width: 120 }} />
        </div>

        <div className={classes.leftSize}>
          <FontAwesomeIcon icon={faWifi} size={'lg'} style={{ marginRight: 20 }}/>

          <ProfileAvatar />
        </div>
      </Toolbar>
    </AppBar>
  );
}
