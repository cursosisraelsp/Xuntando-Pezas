"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accesoUser = void 0;
const configuracion_db_1 = require("../../configuracion/configuracion.db"); // ✅ usa getDb
const lista_instruccions_bbdd_israel_1 = require("../../datos/lista.instruccions.bbdd.israel");
const accesoUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name_user_traballador, pwd_traballador } = req.body;
    try {
        const db = yield (0, configuracion_db_1.getDb)(); // ✅ usa await
        const rows = yield db.all(lista_instruccions_bbdd_israel_1.listaInstruccions.instruccion.sqlLecturaUser, [name_user_traballador]);
        if (rows.length === 0) {
            res.status(404).json({ error: 'Usuario no encontrado' });
            return;
        }
        const user = rows[0];
        if (user.pwd_traballador !== pwd_traballador) {
            res.status(401).json({ error: 'Contraseña incorrecta' });
            return;
        }
        res.json({ message: 'Acceso exitoso', user });
    }
    catch (error) {
        console.error('Error al autenticar usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});
exports.accesoUser = accesoUser;
