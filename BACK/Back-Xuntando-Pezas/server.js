"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const configuracion_multer_1 = require("./configuracion.multer");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const accesoUser_1 = require("./CONTROLADORES/USERS/accesoUser");
const getCustomers_1 = require("./CONTROLADORES/CUSTOMERS/getCustomers");
dotenv_1.default.config();
const portNumber = 3000;
const app = (0, express_1.default)();
// Configuración de Multer
const upload = (0, multer_1.default)({ storage: configuracion_multer_1.storage });
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Rutas
app.get('/', (req, res) => {
    res.send('¡Bienvenido al backend de Xuntando Pezas!');
});
app.post('/acceso', accesoUser_1.accesoUser);
app.get('/customers', getCustomers_1.getCustomers);
// Inicio del servidor
app.listen(portNumber, 'localhost', () => {
    console.log(`Listening on localhost:${portNumber}`);
});
