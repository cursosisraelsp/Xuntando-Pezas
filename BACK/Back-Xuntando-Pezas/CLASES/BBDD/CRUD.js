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
exports.CRUD = void 0;
class CRUD {
    constructor(conexion) {
        this.conexion = conexion;
    }
    insertar(sentenciaSQL) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                (yield this.conexion).run(`${sentenciaSQL}`);
            }
            catch (e) {
                throw e;
            }
        });
    }
    lerUnhaFila(sentenciaSQL, valorCampo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //let dato = (await this.conexion).get(`${sentenciaSQL}`)
                let dato = (yield this.conexion).get(`${sentenciaSQL}`, `${valorCampo}`);
                console.log("dato en funcion ler ", yield dato);
                return yield dato;
            }
            catch (e) {
                throw e;
            }
        });
    }
    lerTodasAsFilas(sentenciaSQL) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let datos = (yield this.conexion).all(`${sentenciaSQL}`);
                return yield datos;
            }
            catch (e) {
                throw e;
            }
        });
    }
}
exports.CRUD = CRUD;
