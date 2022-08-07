import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Fragment } from 'react';

export default function Users({ users }) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {
        users?.map?.(({ name }) => (
          <Fragment key={name}>
            <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar alt="Yair Tawil"  />
              </ListItemAvatar>
              <ListItemText
                primary={name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component='span'
                      variant='body2'
                      color='text.primary'
                    >
                      {name}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant='inset' component='li' />
          </Fragment>
        ))
      }
    </List>
  );
}
