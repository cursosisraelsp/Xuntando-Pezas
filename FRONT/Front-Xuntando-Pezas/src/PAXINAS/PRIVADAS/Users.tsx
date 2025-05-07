import { Icono } from "../../Componentes/Icono";
import MenuLateral from "../../Componentes/MenuLateral";
import { Titulo } from "../../Componentes/Titulo";
import Wrapper from "../../Componentes/Wrapper";
import "../../estilo/Users.App.css"
const Users = ({icono}:{icono:string})=>{
    let estiloUsers = "estilo-paxinas-app height-100vh";
    let estiloSeccionUsers = "estilo-seccion-users";
    let estiloIconoUser = "icono-User";
    
    return <>
    <Wrapper estilo={estiloUsers}>
        <MenuLateral url={3}/>
        <Wrapper estilo={estiloSeccionUsers}>
        <Wrapper estilo="header-paxina">
                <Titulo titulo="Users" estilo="estilo-titulo"/>
                <Icono imaxeUser={icono} estilo={estiloIconoUser}/>
            </Wrapper>
            
        </Wrapper>
    </Wrapper>
    </>
}

export default Users;