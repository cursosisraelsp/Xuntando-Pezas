import Jwt from "jsonwebtoken";
import { datoUser } from "./Tipos/bbdd.tipos";
import { formAcceso } from "./Tipos/tipos.app";

const isUser = (userFormAcceso:formAcceso,usuarioBBDD:datoUser):boolean => {
    return userFormAcceso.username === usuarioBBDD.NAME_USER_TRABALLADOR && userFormAcceso.pwd === usuarioBBDD.PWD_TRABALLADOR
}

/* rosma a variable token
const tokenUser = (userFormAcceso:formAcceso, res:Response):void =>{
    const token = Jwt.sign({ user: userFormAcceso.username }, process.env.SEGREDO || "clavePorDefecto");
     res.json({ token });
}*/
export {
    isUser
}