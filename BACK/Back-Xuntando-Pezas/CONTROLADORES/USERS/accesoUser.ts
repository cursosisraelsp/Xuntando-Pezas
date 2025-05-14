import { Request, Response } from "express";
import Jwt from "jsonwebtoken";
import { execucionTodoBBDD } from "../../instruccions.base.sqlite";
import { listaInstruccions } from "../../datos/lista.instruccions.bbdd.israel";

import { datoUser, datoUserEisUser,promesaEDatos } from "../../Tipos/bbdd.tipos";
import { isUserForm,isUser2 } from "../../helpers";
// debo decir que el retorno es asíncrono : Promise<void>
export const accesoUser = async (req:Request,res:Response): Promise<void>=>{
    // DESESTRUCTURACION CON TYPESCRIPT
    //const { username } : {username : string} = req.body
    const { username,pwd } = req.body
    
     try {

        const instanciaBBDD = execucionTodoBBDD()
        const datoUserLido : datoUser = await instanciaBBDD.lerUnhaFila(listaInstruccions.instruccion.sqlLecturaUser,username);
       
        //let datoUserLido : promesaEDatos = instanciaBBDD.lerUnhaFila2(listaInstruccions.instruccion.sqlLecturaUser,username);
       
        
        // Lemos o resultado na base de datos
        const usuarioValido = isUserForm(req.body,datoUserLido)
        //const usuarioValido = isUser2(req.body,datoUserLido)
        console.log("usuarioValido ",usuarioValido)
        if (usuarioValido == false || datoUserLido === null || datoUserLido === undefined) {
             console.log("dentro usuarioValido ",usuarioValido)
             res.status(401).json({ mensaje: "Usuario o contraseña incorrectos" });
        }else{
            const token = Jwt.sign({ user: username,pwd:pwd }, process.env.SEGREDO || "clavePorDefecto");
            console.log("token ",token)
            res.send({ token:token });
        }
            
        
    } catch (error) {
        console.error("Error al firmar el token:", error);
        res.status(500).send("Error interno del servidor");
    } 
      


}