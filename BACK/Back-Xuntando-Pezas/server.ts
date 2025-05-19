import express from 'express';
import multer from 'multer';
import { storage } from './configuracion.multer';
import cors from 'cors';

import productosRouter from './rutas/productos.routes';


const portNumber = 3000;
const app = express();

const upload = multer({ storage: storage })

app.use(cors())

// app.post --> logueo user 'loginUser'




app.use('/api', productosRouter); // As rutas quedan en /api/productos

app.listen(portNumber, 'localhost', () => {
    console.log('Listening on localhost:' + portNumber);
});