import React, { useCallback, useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import classes from './Welcome.module.scss';
import Theme from '../Theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Grow from '@mui/material/Grow';
import { useRecoilState } from 'recoil';
import { UserState } from '../../state/user';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    background: 'rgb(0, 104, 62)',
  },
  page: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  margin: {
    marginTop: 40,
  },
  signIn: {
    display: 'flex',
    fontFamily: 'sans-serif',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));


export default function Welcome() {
  const [userState] = useRecoilState(UserState);
  const navigate = useNavigate();

  useEffect(() => {
    if (userState.user) {
      navigate('/')
    }
  }, [navigate, userState]);

  const googleSignIn = useCallback(() => {
    const auth = getAuth();
    const googleAuthProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleAuthProvider)
  }, []);

  return (
    <Theme>
      <div className={classes.root}>
        <div className={classes.page}>
          <Typography variant='h6' className={classes.margin}>
            <Grow in timeout={3000}><Logo /></Grow>

          </Typography>

          <div className={`${classes.signIn} ${classes.margin}`}>
            <Button
              className={classes.googleBtn}
              onClick={googleSignIn}
              color='primary'
              variant='contained'>
              <FontAwesomeIcon className={classes.icon} icon={faGoogle} />
              Sign up with Google
            </Button>
          </div>
        </div>
      </div>
    </Theme>
  );
}
