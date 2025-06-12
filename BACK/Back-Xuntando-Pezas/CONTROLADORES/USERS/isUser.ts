import { Response } from "express";
import Jwt,{JwtPayload } from "jsonwebtoken";
import { execucionTodoBBDD } from "../../instruccions.base.sqlite";
import { listaInstruccions } from "../../datos/lista.instruccions.bbdd.israel";
import { datoUser } from "../../Tipos/bbdd.tipos";
import { AuthenticatedRequest } from "../../Tipos/request.extendido"; // archivo donde defines el tipo extendido
import { console } from "inspector";

class HttpError extends Error {
    httpStatus: number;

    constructor(message: string, httpStatus: number) {
        super(message);
        this.name = "HttpError";
        this.httpStatus = httpStatus;
    }
}

export const isUser = async (req: AuthenticatedRequest, res: Response,nextFunction:()=>void): Promise<void> => {
    
    const { authorization } = req.headers;

    try {
        console.log("authorization ",authorization)
        if (!authorization) {
            throw new HttpError("Falta cabeceira de autorización", 401);
        }

        const tokenInfo = Jwt.verify(authorization, process.env.SEGREDO || "default_secret");
        console.log("tokenInfo ")

        if (typeof tokenInfo === "object" && tokenInfo !== null) {
            
            const { user, pwd } = tokenInfo as JwtPayload;
            const datoArray : [string,string] = [user,pwd];
            
            console.log("datoArray ",datoArray)
            const instanciaBBDD = execucionTodoBBDD();
            
            const datoUserLido: datoUser = await instanciaBBDD.lerUnhaFila2Campos(
                listaInstruccions.instruccion.sqlLogin,
                datoArray
            ); 
         
            // FILTRO 
            if(!datoUserLido || datoUserLido === null || datoUserLido === undefined){
                throw new HttpError("Usuario o contraseña incorrectos", 403);
            }
            nextFunction()
        } else {
            console.log("El token no tiene formato válido (esperado: JwtPayload)");
        }

       

    } catch (error: any) {
        console.error("Error de autenticación:", error);
        const statusCode = error.httpStatus || 500;
        res.status(statusCode).send(error.message || "Erro interno do servidor");
    }
};
