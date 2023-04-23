//import  Express  from "express";
//console.log('hello world');
import app from './app';
import { Server as WebsocketServer} from 'socket.io';
import  http  from 'http';
import sockets from './sockets';

import { connectDB } from './db';
import { PORT } from './config';

connectDB();

const server = http.createServer(app);
const httpServer = server.listen(PORT);
console.log('Server is rinning on port ',PORT);

const io = new  WebsocketServer(httpServer)
sockets(io);