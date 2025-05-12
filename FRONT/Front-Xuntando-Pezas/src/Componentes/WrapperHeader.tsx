import { Imaxes } from "../assets/Imaxes";
import { useDatosContext } from "../HOOKS/useDatosContext";
import { DatosWrapperHeader } from "../TIPOS/INTERFACES.App";
import { Icono } from "./Icono";
import { IconoFuncion } from "./IconoFuncion";
import { Titulo } from "./Titulo";
import Wrapper from "./Wrapper";

const WrapperHeader = ({estilos,titulo,icono}:{estilos: DatosWrapperHeader,titulo:string,icono:string})=>{
    const {logout} = useDatosContext();
    return <>
        <Wrapper estilo={estilos.seccion}>
            <Titulo titulo={titulo} estilo={estilos.titulo} />
            <Icono imaxeUser={icono} estilo={estilos.icono} />
           {/*  <IconoFuncion imaxeUser={Imaxes.iconoSair} estilo="icono-menu-lateral-exit" funcion={logout} /> */}
        </Wrapper>
    </>
}

export default WrapperHeader;