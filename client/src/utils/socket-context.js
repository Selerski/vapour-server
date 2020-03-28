import io from 'socket.io-client';
import React from 'react';

export const socket = io(`https://whispering-ocean-93586.herokuapp.com`);

export const SocketContext = React.createContext(
  socket
);