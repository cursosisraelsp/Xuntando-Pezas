export const Titulo = ({titulo,estilo} : {titulo:string,estilo:string})=>{
    console.log("O título? ",titulo)
    return <div className={estilo}>{titulo}</div>
}