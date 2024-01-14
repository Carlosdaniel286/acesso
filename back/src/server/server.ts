// src/index.ts
import express from 'express';
const router = require('../route/route')
import cookieParser from 'cookie-parser';
import { createServer } from "node:http";
import { Server } from "socket.io";
import { socketAuthMiddleware } from "../middleware/soketmiddleware";
const cors = require('cors');
const app = express();
const httpServer = createServer(app);
import dotenv from 'dotenv';
import { sockets } from './socket';
dotenv.config();


const port = process.env.PORT 
const baseUrlClient = process.env.BASE_CLIENT as string;
const opcoesCors = {
  origin: baseUrlClient, // Substitua pela origem permitida
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos HTTP permitidos
  credentials: true, // Permite envio de credenciais (por exemplo, cookies)
  optionsSuccessStatus: 204, // Código de status para respostas OPTIONS bem-sucedidas
};


const io = new Server(httpServer, {
  cors:opcoesCors
  
});
io.use(socketAuthMiddleware)
sockets(io)
app.use(cors(opcoesCors));
app.use(cookieParser());
app.use(express.json());
app.use('/',router)

app.get('/home', (req, res) => {
  res.send('Hello, TypScript with Express!');
});

httpServer.listen(port, () => {
  
  console.log(`Server is runnin at http://localhost:${port}`);
});
 