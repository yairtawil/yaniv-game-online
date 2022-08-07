import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Users from './components/Users';
import { Box } from '@mui/material';
import Status from './components/Status';

const socket = io('http://localhost:5000');

function App_() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('allUsers', (data) => {
      console.log('allUsers? data?', data);
      setUsers(data)
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('pong', () => {
      setLastPong(new Date().toISOString());
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
    };
  }, []);

  const sendPing = () => {
    socket.emit('ping', 'what');
  };

  return (
    <Box sx={{
      position: 'absolute',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <img src={'https://upload.wikimedia.org/wikipedia/commons/7/72/Playing_card_heart_Q.svg'} />
      <Users users={users} />
      <Status {...{ isConnected, lastPong, sendPing }} />
    </Box>

  );
}

export default App_;
