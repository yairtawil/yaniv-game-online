import React, { useCallback, useState } from 'react'
import _get from 'lodash/get'
import { useRecoilState } from 'recoil';
import { UserState } from '../../../state/user';
import { getAuth, signOut } from 'firebase/auth';
import {
  ClickAwayListener,
  Fab,
  FormControlLabel,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Switch,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  profileImage: {
    position: 'relative',
    overflow: 'hidden',
    '& img': {
      width: '100%',
    },
  },
})

const ProfileAvatar = () => {
  const classes = useStyles()
  const [{ user }] = useRecoilState(UserState);
  const [ anchorEl, setAnchorEl ] = useState(null)

  async function logout() {
    const auth = getAuth();
    await signOut(auth);
    handleClose()
  }

  function handleClose() {
    setAnchorEl(null)
  }

  const onThemeChange = useCallback(() => {
    // dispatch({ type: 'TOGGLE_THEME' })
  }, [ ])

  const onClick = useCallback((e) => setAnchorEl(anchorEl ? null : e.currentTarget), [ anchorEl ])

  return (
    <React.Fragment>
      <Fab
        className={classes.profileImage}
        size='medium'
        onClick={onClick}>
        <img alt='photoURL' src={_get(user, 'providerData[0].photoURL')} />
      </Fab>

      <Popper open={Boolean(anchorEl)} placement='bottom-end' anchorEl={anchorEl} role={undefined} transition
              disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  <MenuItem>
                    <FormControlLabel
                      control={<Switch color="primary" value={false} onChange={onThemeChange} />}
                      label="Dark"
                    />
                  </MenuItem>
                  <MenuItem onClick={logout}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>

    </React.Fragment>
  )
}

export default ProfileAvatar
