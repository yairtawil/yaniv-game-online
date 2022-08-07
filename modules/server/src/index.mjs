import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(cors());

io.on('connection', (socket) => {
  console.log('A user just connected.');

  socket.emit('allUsers', [{ name: 'Ali Connors' }, { name: 'Sandra Adams' }]);

  socket.emit('allRooms', [{ name: 'Room1' }, { name: 'Room2' }]);

  socket.on('disconnect', () => {
    console.log('A user has disconnected.');
  });

  socket.on('ping', (msg) => {
    socket.emit('pong');
  });
});

app.get('/hello', (req, res) => res.send('world'));

server.listen(5000, () => {
  console.log('listen to http://localhost:5000/hello');
});
