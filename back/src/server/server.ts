// src/index.ts
import express from 'express';
const router = require('../route/route')
import cookieParser from 'cookie-parser';
const cors = require('cors');
const app = express();
const port = 3001;

const opcoesCors = {
  origin: 'http://localhost:3000', // Substitua pela origem permitida
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos HTTP permitidos
  credentials: true, // Permite envio de credenciais (por exemplo, cookies)
  optionsSuccessStatus: 204, // Código de status para respostas OPTIONS bem-sucedidas
};

app.use(cors(opcoesCors));



app.use(cookieParser());

app.use(express.json());
app.use('/',router)

app.get('/home', (req, res) => {
  res.send('Hello, TypScript with Express!');
});

app.listen(port, () => {
  console.log(port)
  console.log(`Server is runnin at http://localhost:${port}`);
});
 