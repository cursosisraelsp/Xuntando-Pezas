import express from 'express';
import multer from 'multer';
import { storage } from './configuracion.multer';
import cors from 'cors';
import dotenv from 'dotenv';
import { accesoUser } from './CONTROLADORES/USERS/accesoUser';
<<<<<<< HEAD
import { crearNewUser } from './CONTROLADORES/crearNewUser';
=======
import { getCustomers, putCustomers } from './CONTROLADORES/CUSTOMERS';

>>>>>>> upstream/logueo-con-bbdd-AUX
dotenv.config();
const portNumber = 3000;
const app = express();

const upload = multer({ storage: storage })

app.use(cors())
app.use(express.json())

<<<<<<< HEAD
app.post("/acceso",accesoUser)
app.post("/usuarios", upload.single("file"), crearNewUser)
=======
app.post("/acceso",accesoUser);
app.get("/customers", getCustomers);
>>>>>>> upstream/logueo-con-bbdd-AUX

// ENDPOINTS DE MODIFICACION - PUT

app.put("/customers/editar/:id",putCustomers)

app.listen(portNumber, 'localhost', () => {
    console.log('Listening on localhost:' + portNumber);
});