import express from 'express';
import multer from 'multer';
import { storage } from './configuracion.multer';
import cors from 'cors';
import dotenv from 'dotenv';
import { accesoUser } from './CONTROLADORES/USERS/accesoUser';
import { crearNewUser } from './CONTROLADORES/crearNewUser';
dotenv.config();
const portNumber = 3000;
const app = express();

const upload = multer({ storage: storage })

app.use(cors())
app.use(express.json())

app.post("/acceso",accesoUser)
app.post("/usuarios", upload.single("file"), crearNewUser)


app.listen(portNumber, 'localhost', () => {
    console.log('Listening on localhost:' + portNumber);
});