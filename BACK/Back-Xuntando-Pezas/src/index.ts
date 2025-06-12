import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import usuariosRouter from './Rutas/usuariosRouter.js';
import loginRouter from './Rutas/loginRouter.js';
import registroRouter from './Rutas/registroRouter.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/api/registro', registroRouter);
app.use('/api/login', loginRouter);
app.use('/api/usuarios', usuariosRouter);

app.listen(3000, () => {
  console.log('Servidor escuchando en puerto 3000');
});