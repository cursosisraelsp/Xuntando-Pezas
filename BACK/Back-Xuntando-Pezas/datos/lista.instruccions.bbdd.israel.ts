import { sentencias } from "../Tipos/bbdd.tipos";

export const listaInstruccions: sentencias = {
    instruccion: {
        sqlLecturaUser: `select name_user_traballador,pwd_traballador from TRABALLADOR where name_user_traballador = ?`
    }
}
// listaInstruccions.instruccion.sqlLecturaUser