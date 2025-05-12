import { Database } from "sqlite";
import { datoUser, datoUserEisUser, promesaEDatos} from "../../Tipos/bbdd.tipos";

export class CRUD{
    
    private conexion: Promise<Database>;

    constructor(conexion:Promise<Database>){
        
        this.conexion = conexion;
    }

    async insertar(sentenciaSQL:string){
        try{
            (await this.conexion).run(`${sentenciaSQL}`)
        }catch(e){
            throw e
        }
    }

    async lerUnhaFila(sentenciaSQL:string,valorCampo:string):Promise<datoUser>{
        try{
           
            let dato = (await this.conexion).get(`${sentenciaSQL}`,`${valorCampo}`)
            console.log("dato en funcion ler ",await dato)
            return await dato
        }catch(e){
            throw Error("Entrada no valida")
        }
        
    }
    async lerUnhaFila2(sentenciaSQL:string,valorCampo:string):promesaEDatos{
        try{
           
            let dato = (await this.conexion).get(`${sentenciaSQL}`,`${valorCampo}`)
            console.log("dato en funcion ler ",await dato)
            
            return await dato
        }catch(e){
            throw e
        }
        
    }

    async lerTodasAsFilas(sentenciaSQL:string):Promise<Object>{
        try{
            let datos = (await this.conexion).all(`${sentenciaSQL}`)
            return await datos
        }catch(e){
            throw e
        }
        
    }
    
}