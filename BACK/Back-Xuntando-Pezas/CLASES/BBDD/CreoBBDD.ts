import { InfoBBDD } from "../../Tipos/bbdd.interfaces";
import  sqlite3 from "sqlite3";
import { open, Database } from "sqlite";
import { DatoBBDD } from "../../Tipos/datos.base.interfaces";

export class CreoBBDD{
    private basedatos:String;
    private rutaBBDD: String;
    constructor(infobasedatos:InfoBBDD){
        this.basedatos = infobasedatos.bbdd;
        this.rutaBBDD = infobasedatos.ruta;
        this.creoBBDD(infobasedatos.sentenciaTablas)
    }

    private async openDb():Promise<Database>{

        return open<sqlite3.Database,sqlite3.Statement>({
            filename: `${this.rutaBBDD}/${this.basedatos}`,
            driver: sqlite3.Database
        })

    }
    /**
     * @function conexionBBDD é unha función asíncrona
     * @returns devolve a execución da base de datos
     */
    async conexionBBDD():Promise<Database>{
        return await this.openDb()
    }

    private async creoBBDD(sentenciaCreacionTablas:DatoBBDD):Promise<void>{
        (await this.conexionBBDD()).exec(sentenciaCreacionTablas.bbdd).catch(error => console.error("O erro é: ",error))
        //(await this.openDb()).exec(`${sentenciaCreacionTablas}`)
    }
}