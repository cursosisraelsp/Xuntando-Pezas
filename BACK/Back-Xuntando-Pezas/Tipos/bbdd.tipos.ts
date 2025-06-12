export type arquivoBBDD = {
    xeral: string,
    persoal:string
}

export type datoUser = {
    NAME_USER_TRABALLADOR: string,
    PWD_TRABALLADOR: string
}

export type datoUserEisUser = datoUser | boolean | undefined  
export type promesaEDatos = Promise<datoUserEisUser>
type instruccions = {
    sqlLecturaUser: string
}

export type sentencias = {
    instruccion: instruccions
}