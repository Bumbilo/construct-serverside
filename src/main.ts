import { app } from './app';
import * as http from 'http';

const PORT = 3300;
const server = http.createServer(app);
server.listen(PORT);
server.on('listening', () => {
  console.log('Listening on port' + PORT);
});

