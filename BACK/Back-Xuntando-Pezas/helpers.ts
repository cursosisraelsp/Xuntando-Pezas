import Jwt from "jsonwebtoken";
import { datoUser, datoUserEisUser, promesaEDatos } from "./Tipos/bbdd.tipos";
import { formAcceso } from "./Tipos/tipos.app";

const isUser = (userFormAcceso:formAcceso,usuarioBBDD: datoUser):boolean => {
    return userFormAcceso.username === usuarioBBDD.NAME_USER_TRABALLADOR && userFormAcceso.pwd === usuarioBBDD.PWD_TRABALLADOR
}
const isUser2 = (userFormAcceso:formAcceso,usuarioBBDD: promesaEDatos):boolean => {
    let salida = false
    //if(usuarioBBDD === false) salida = false
    //if (usuarioBBDD && typeof usuarioBBDD === 'object' && 'NAME_USER_TRABALLADOR' in usuarioBBDD) {
    if(usuarioBBDD !== undefined && typeof usuarioBBDD === 'object' && 'NAME_USER_TRABALLADOR' in usuarioBBDD){
        console.log(usuarioBBDD.NAME_USER_TRABALLADOR); // ahora TypeScript sabe que es datoUser
        console.log("paso por OKKKKK")
        salida = true
    } else {
        console.log("usuario no es un datoUser válido");
    }
    return salida
}
/* rosma a variable token
const tokenUser = (userFormAcceso:formAcceso, res:Response):void =>{
    const token = Jwt.sign({ user: userFormAcceso.username }, process.env.SEGREDO || "clavePorDefecto");
     res.json({ token });
}*/
export {
    isUser,
    isUser2
}