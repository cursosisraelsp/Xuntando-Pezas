import { Database } from "sqlite";

export class CRUD{
    
    private conexion: Promise<Database>;

    constructor(conexion:Promise<Database>){
        
        this.conexion = conexion;
    }

    async insertar(sentenciaSQL:String){
        try{
            (await this.conexion).run(`${sentenciaSQL}`)
        }catch(e){
            throw e
        }
    }

    async lerUnhaFila(sentenciaSQL:String):Promise<Object>{
        try{
            let dato = (await this.conexion).get(`${sentenciaSQL}`)
            console.log("dato en funcion ler ",await dato)
            return await dato
        }catch(e){
            throw e
        }
        
    }

    async lerTodasAsFilas(sentenciaSQL:String):Promise<Object>{
        try{
            let datos = (await this.conexion).all(`${sentenciaSQL}`)
            return await datos
        }catch(e){
            throw e
        }
        
    }
    
}