import express from 'express';
import multer from 'multer';
import { storage } from './configuracion.multer';
import cors from 'cors';
import dotenv from 'dotenv';
import { deleteCustomers, getCustomers, putCustomers } from './CONTROLADORES/CUSTOMERS';
import { accesoUser, isUser } from './CONTROLADORES/USERS';
import { endpoints } from './datos/endpoints';
import { crearNewUser } from './CONTROLADORES/NEWUSER/crearNewUser';
import { crearTablaUsuario } from './configuracion-NewUser-sqlite';
import path = require('path');

crearTablaUsuario();
dotenv.config();
const portNumber = 3000;
const app = express();
const upload = multer({ storage: storage })

app.use(cors())
app.use(express.json())

app.post("/acceso",accesoUser)

app.post("/usuarios", upload.single("file"), crearNewUser)
app.use('/imagenes', express.static(path.join(__dirname, 'public/imagenes')));


app.post(endpoints.acceso,accesoUser);
app.get(endpoints.customers, getCustomers);

// ENDPOINTS DE MODIFICACION - PUT

app.put(endpoints.customersEditar,isUser,putCustomers)

// ENDPOINTS DE BORRADO - DELETE

app.delete(endpoints.customersBorrar,isUser,deleteCustomers)

app.listen(portNumber, 'localhost', () => {
    console.log('Listening on localhost:' + portNumber);
});