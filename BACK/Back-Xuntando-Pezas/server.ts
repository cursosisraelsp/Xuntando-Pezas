import express from 'express';
import multer from 'multer';
import { storage } from './configuracion.multer';
import cors from 'cors';
import dotenv from 'dotenv';
import { accesoUser } from './CONTROLADORES/USERS/accesoUser';
import { getCustomers } from './CONTROLADORES/CUSTOMERS/getCustomers';

dotenv.config();
const portNumber = 3000;
const app = express();

// Configuración de Multer
const upload = multer({ storage });

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
  res.send('¡Bienvenido al backend de Xuntando Pezas!');
});

app.post('/acceso', accesoUser);
app.get('/customers', getCustomers);

// Inicio del servidor
app.listen(portNumber, 'localhost', () => {
  console.log(`Listening on localhost:${portNumber}`);
});
