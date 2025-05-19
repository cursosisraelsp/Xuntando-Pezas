import { CreoBBDD } from "./CLASES/BBDD/CreoBBDD";
import { CRUD } from "./CLASES/BBDD/CRUD";
import { arquivosBBDD, creacionTablasBBDD } from "./datos/datos.base";
import { InfoBBDD } from "./Tipos/bbdd.interfaces";

let datosBBDD: InfoBBDD = {
    bbdd: arquivosBBDD.persoal,
    ruta: '.',
    sentenciaTablas: creacionTablasBBDD
}

let bbdd = new CreoBBDD(datosBBDD);

//let sentenciaInsertar = `INSERT INTO USERS('ID_USER','NOME_USER') VALUES(1,'Pepito')`;
//let sentenciaInsertar = `INSERT INTO USERS('ID_USER','NOME_USER') VALUES(2,'JUANITO')`;
//let sentenciaLer = `SELECT * FROM USERS`;

let instanciaBBDD = new CRUD(bbdd.conexionBBDD())

export {
    instanciaBBDD
}
//instanciaBBDD.insertar(sentenciaInsertar).catch((error) => console.error(error))
//instanciaBBDD.lerUnhaFila(sentenciaLer).then(dato => console.log("O dato no index.ts ",dato)).catch(error => console.error(error))
//instanciaBBDD.lerTodasAsFilas(sentenciaLer).then(datos => console.log("Os datos son ",datos)).catch(error => console.error(error))