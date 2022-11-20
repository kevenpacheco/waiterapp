import path from 'node:path';
import http from 'node:http';
import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';
import { Server } from 'socket.io';

// const mongoDBURLConnection = 'mongodb://localhost:27017/';
const mongoDBURLConnection = 'mongodb://0.0.0.0:27017/';

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose.connect(mongoDBURLConnection).then(() => {
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');

    next();
  });
  app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
  app.use(express.json());
  app.use(router);

  const port = 3001;
  server.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
  });

}).catch((error) => {
  console.log('erro ao conectar ao mongo');
  console.log(error);
});

