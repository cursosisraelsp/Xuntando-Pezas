import {  TipoRespostaServidor } from "../TIPOS/TIPOS.Comunicacion.App";
import { adaptoToken } from "../FUNCIONS/funcions";
/**
 * @author Pepito Gutierrez
 * @class Comunicacion
 * @method metodoGet método que temos que utilizar para un GET
 * @method metodoPost métodos que temos que utilizar para un POST
 * @method metodoPaxinaGet método que a resposta a pasa a texto, xa que recibe o contido da páxina en formato texto
 * @method isUser este método comproba se o usuario que está intentando loguearse existe ou non, e sae unha mensaxe por consola en
 * caso de que non exista
 */

export class Comunicacion{
    
    static datos: Response;
    static paxina:string;
    /**
     * @method metodoGet que fai un GET
     * @param endpoint será un endpoint de tipo texto
     */
    static async metodoGet(endpoint: string){
        console.log("this.endpoint ",endpoint)
        let datoServidor = await fetch(endpoint);
        this.datos = await datoServidor.json();
    }
    /**
     * @method metodoPost é estático que fai un POST
     * @param endpoint  será un endpoint de tipo texto
     */
    static async metodoPost(endpoint: string,datos:any){

        if (!datos || !datos.username) {
            console.log('datos en metodoPost ',datos)
            console.error("El objeto 'datos' o la propiedad 'username' está vacío.");
            return;
        }else{
            
            let datoEnviados : RequestInit = {
                method: 'POST',
                headers:{
                    "Content-type":"application/json"
                },
                body: JSON.stringify(datos)
            }
            console.log("endpoint ",endpoint,datoEnviados)
            let resposta = await fetch(endpoint,datoEnviados); //  Son os datos que enviamos co endpoint
            
            let token = await resposta.json();

            console.log("token? ",token)
            return token.token
                   //  En resposta é que me está a enviar o Server
            //console.log("await resposta.json()",await resposta.json() )
            
        }
        
    }
    

    static async metodoPut(endpoint:string,datos:any){
        //RequestInit necesita que Authorizatin sexa string
        let datoEnviados : RequestInit = {
                method: 'PUT',
                headers:{
                "Authorization": adaptoToken(),
                "Content-Type":"application/json"
                },
                body: JSON.stringify(datos)
            }
           let datoString = adaptoToken()
            console.log("datosEnviados ",datos,endpoint,datoString)
            let resposta = await fetch(`http://localhost:3000${endpoint}`,datoEnviados); //  Son os datos que enviamos co endpoint
            this.datos = await resposta.json();         //  En resposta é que me está a enviar o Server
            console.log("this.datos ", this.datos)
    }

    static isUser(token:string):Boolean{
        let isUser = false;
        /* let datoResposta : TipoRespostaServidor ={
            estado: this.datos.status,
            mensage: this.datos.statusText
        } */
        console.log("estou en isUser token",token)
        if(token != "Usuario o contraseña incorrectos"){
            localStorage.setItem("usuario",token);
            isUser = true;
        }
        return isUser
    }

    
    /**
     * @method datoServidor que devolve os datos
     * @returns devolve datos
     */
    static get datoServidor(){
        return this.datos
    }

    
}

