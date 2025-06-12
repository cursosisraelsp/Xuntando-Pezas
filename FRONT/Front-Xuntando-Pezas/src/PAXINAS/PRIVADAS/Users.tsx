import { Icono } from "../../Componentes/Icono";
import MenuLateral from "../../Componentes/MenuLateral";
import { Titulo } from "../../Componentes/Titulo";
import Wrapper from "../../Componentes/Wrapper";
import WrapperHeader from "../../Componentes/WrapperHeader";
import "../../estilo/Users.App.css";
import { DatosWrapperHeader } from "../../TIPOS/INTERFACES.App";

const Users = ({icono}:{icono:string})=>{
    let estiloUsers = "estilo-paxinas-app height-100vh";
    let estiloSeccionUsers = "estilo-seccion-users";
   
    
    let estilos : DatosWrapperHeader = {
        seccion:"header-paxina",
        titulo:"estilo-titulo",
        icono:"icono-User" 
    }

    return <>
    <Wrapper estilo={estiloUsers}>
        
        <Wrapper estilo={estiloSeccionUsers}>
        
            <WrapperHeader estilos={estilos} titulo="Users" icono={icono}/>
        </Wrapper>
        <MenuLateral url={3}/>
    </Wrapper>
    </>
}

export default Users;