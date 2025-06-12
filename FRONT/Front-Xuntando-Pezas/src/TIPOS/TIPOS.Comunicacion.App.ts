export type TipoRespostaServidor = {
    estado: number;
    mensage:string
}

export type TipoDatosFormEnvio = {
    method: string,
    headers: Object,
    body: string
}