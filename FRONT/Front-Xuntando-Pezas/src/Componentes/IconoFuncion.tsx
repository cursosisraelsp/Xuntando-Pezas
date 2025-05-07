export const IconoFuncion = ({imaxeUser,estilo,funcion}:{imaxeUser:string,estilo:string,funcion: React.MouseEventHandler})=>{
    return <img onClick={funcion} src={imaxeUser} className={estilo}/>
}