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

const upload = multer({ storage: storage })

app.use(cors())
app.use(express.json())

app.post("/acceso",accesoUser)
app.get("/customers", getCustomers);

app.listen(portNumber, 'localhost', () => {
    console.log('Listening on localhost:' + portNumber);
});