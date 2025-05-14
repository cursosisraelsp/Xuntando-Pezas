# 📝 Notas

Dende outro arquivo compartin directamente o código seguinte:

```ts
 import { Request, Response } from "express";
import Jwt from "jsonwebtoken";
import { execucionTodoBBDD } from "../../instruccions.base.sqlite";
import { listaInstruccions } from "../../datos/lista.instruccions.bbdd.israel";

import { datoUser, datoUserEisUser,promesaEDatos } from "../../Tipos/bbdd.tipos";
import { isUserForm,isUser2 } from "../../helpers";
// debo decir que el retorno es asíncrono : Promise<void>
export const isUser = async (req:Request,res:Response): Promise<void>=>{
    // DESESTRUCTURACION CON TYPESCRIPT
    //const { username } : {username : string} = req.body
    const { username,pwd } = req.body
    const { authorization } = req.headers;
     try {

        const instanciaBBDD = execucionTodoBBDD()
        const datoUserLido : datoUser = await instanciaBBDD.lerUnhaFila(listaInstruccions.instruccion.sqlLecturaUser,username);
               
        // Lemos o resultado na base de datos
        const usuarioValido = isUserForm(req.body,datoUserLido)

        console.log("usuarioValido ",usuarioValido)
        
        if(!authorization){
        const error = new Error("Falta cabeceira de autorización ");
        error.httpStatus = 401;
        throw error
    }

    let tokenInfo;
    tokenInfo = jwt.verify(authorization,process.env.SEGREDO)
    req.userAuth = tokenInfo
    console.log("req.userAuth ",req.userAuth)
        
    } catch (error) {
        console.error("Error al firmar el token:", error);
        res.status(500).send("Error interno del servidor");
    } 
}
```

Gracias por compartir el código. Estás muy cerca de tener todo bien armado, pero hay algunos puntos que debes ajustar para que funcione correctamente en TypeScript con Node, Express y JWT.

---

### 🛠️ **Problemas principales a corregir:**

---

### ✅ 1. **Extender el tipo `Error` para añadir `httpStatus`**

Cuando haces:

```ts
const error = new Error("Falta cabeceira de autorización ");
error.httpStatus = 401;
```

Te dará error porque `httpStatus` **no está tipado** en el objeto `Error`.

**Solución:** Usa una clase personalizada o una técnica segura de casting (aunque menos recomendada). Aquí te dejo la clase personalizada:

```ts
class HttpError extends Error {
    httpStatus: number;

    constructor(message: string, httpStatus: number) {
        super(message);
        this.name = "HttpError";
        this.httpStatus = httpStatus;
    }
}
```

---

### ✅ 2. **Extender el tipo `Request` para añadir `userAuth`**

En esta línea:

```ts
req.userAuth = tokenInfo
```

Te marcará error porque TypeScript no sabe que `userAuth` existe en `req`.

**Solución:** Crea un tipo extendido:

```ts
import { Request } from "express";

export interface AuthenticatedRequest extends Request {
    userAuth?: string | Jwt.JwtPayload;
}
```

Y úsalo así en tu función:

```ts
export const isUser = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
```

---

### ✅ 3. **Verificación de token y manejo de errores**

No pongas la verificación del token después de comprobar al usuario. Deberías primero verificar el token y luego comprobar al usuario.

---

### 🧱 **Versión final recomendada:**

```ts
import { Response } from "express";
import Jwt from "jsonwebtoken";
import { execucionTodoBBDD } from "../../instruccions.base.sqlite";
import { listaInstruccions } from "../../datos/lista.instruccions.bbdd.israel";
import { datoUser } from "../../Tipos/bbdd.tipos";
import { isUserForm } from "../../helpers";
import { AuthenticatedRequest } from "../../Tipos/request.extendido"; // archivo donde defines el tipo extendido

class HttpError extends Error {
    httpStatus: number;

    constructor(message: string, httpStatus: number) {
        super(message);
        this.name = "HttpError";
        this.httpStatus = httpStatus;
    }
}

export const isUser = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    const { username, pwd } = req.body;
    const { authorization } = req.headers;

    try {
        if (!authorization) {
            throw new HttpError("Falta cabeceira de autorización", 401);
        }

        const tokenInfo = Jwt.verify(authorization, process.env.SEGREDO || "default_secret");
        req.userAuth = tokenInfo;

        const instanciaBBDD = execucionTodoBBDD();
        const datoUserLido: datoUser = await instanciaBBDD.lerUnhaFila(
            listaInstruccions.instruccion.sqlLecturaUser,
            username
        );

        const usuarioValido = isUserForm(req.body, datoUserLido);
        console.log("usuarioValido ", usuarioValido);

        if (!usuarioValido) {
            throw new HttpError("Usuario ou contrasinal incorrecto", 403);
        }

        // Si llegamos aquí, todo fue bien
        res.status(200).send("Usuario autenticado correctamente");

    } catch (error: any) {
        console.error("Error de autenticación:", error);
        const statusCode = error.httpStatus || 500;
        res.status(statusCode).send(error.message || "Erro interno do servidor");
    }
};
```

---

### ✅ **Extra: `AuthenticatedRequest` (tipado extendido)**

Crea este archivo `Tipos/request.extendido.ts`:

```ts
import { Request } from "express";
import Jwt from "jsonwebtoken";

export interface AuthenticatedRequest extends Request {
    userAuth?: string | Jwt.JwtPayload;
}
```

---

¿Quieres que te ayude a convertir esto en un middleware reutilizable para autenticar en varias rutas?
