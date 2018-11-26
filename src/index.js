const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const createServer = require('./createServer');

const server = createServer();
const db = require('./db');

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONT_END_URL
    }
  },
  () => console.log(`Server is running on http://localhost:${process.env.PORT}`)
);
