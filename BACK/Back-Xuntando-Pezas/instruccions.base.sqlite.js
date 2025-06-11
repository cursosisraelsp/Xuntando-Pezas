"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execucionTodoBBDD = execucionTodoBBDD;
const CreoBBDD_1 = require("./CLASES/BBDD/CreoBBDD");
const CRUD_1 = require("./CLASES/BBDD/CRUD");
const datos_base_1 = require("./datos/datos.base");
function execucionTodoBBDD() {
    let datosBBDD = {
        bbdd: datos_base_1.arquivosBBDD.persoal,
        ruta: '.',
        sentenciaTablas: datos_base_1.creacionTablasBBDD
    };
    let bbdd = new CreoBBDD_1.CreoBBDD(datosBBDD);
    let instanciaBBDD = new CRUD_1.CRUD(bbdd.conexionBBDD());
    return instanciaBBDD;
}
