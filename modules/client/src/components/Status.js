import React from 'react';

const Status = ({ isConnected, lastPong, sendPing  }) => {
  return (
    <div>
      <p>Connected: {'' + isConnected}</p>
      <p>Last pong: {lastPong || '-'}</p>
      <button onClick={sendPing}>Send ping</button>
    </div>
  );
};

export default Status
