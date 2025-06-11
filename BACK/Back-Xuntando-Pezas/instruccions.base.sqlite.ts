import { CreoBBDD } from "./CLASES/BBDD/CreoBBDD";
import { CRUD } from "./CLASES/BBDD/CRUD";
import { arquivosBBDD, creacionTablasBBDD } from "./datos/datos.base";
import { InfoBBDD } from "./Tipos/bbdd.interfaces";

export function execucionTodoBBDD(){
    let datosBBDD: InfoBBDD = {
        bbdd: arquivosBBDD.persoal,
        ruta: '.',
        sentenciaTablas: creacionTablasBBDD
    }

    let bbdd = new CreoBBDD(datosBBDD);
    let instanciaBBDD = new CRUD(bbdd.conexionBBDD())

    return instanciaBBDD
}

