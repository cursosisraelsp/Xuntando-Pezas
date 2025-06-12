import express from 'express';
import multer from 'multer';
import { storage } from './configuracion.multer';
import cors from 'cors';
import dotenv from 'dotenv';
import { accesoUser } from './CONTROLADORES/USERS/accesoUser';
import { getCustomers, putCustomers } from './CONTROLADORES/CUSTOMERS';
import { getInvoices }  from './CONTROLADORES/INVOICES/getInvoices';

dotenv.config();
const portNumber = 3000;
const app = express();

const upload = multer({ storage: storage })

app.use(cors())
app.use(express.json())

app.post("/acceso",accesoUser);
app.get("/customers", getCustomers);

//Get invoices
app.get("/invoices", getInvoices);

// ENDPOINTS DE MODIFICACION - PUT

app.put("/customers/editar/:id",putCustomers)

app.listen(portNumber, 'localhost', () => {
    console.log('Listening on localhost:' + portNumber);
});