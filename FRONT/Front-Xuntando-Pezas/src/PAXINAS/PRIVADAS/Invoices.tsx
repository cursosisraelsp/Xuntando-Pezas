import { Icono } from "../../Componentes/Icono";
import MenuLateral from "../../Componentes/MenuLateral";
import { Titulo } from "../../Componentes/Titulo";
import Wrapper from "../../Componentes/Wrapper";
import "../../estilo/Invoices.App.css"
const Invoices = ({icono}:{icono:string})=>{
    let estiloInvoices = "estilo-paxinas-app height-100vh";
    let estiloSeccionInvoices = "estilo-seccion-invoices";
    let estiloIconoUser = "icono-User";
    return <>
    <Wrapper estilo={estiloInvoices}>
    <MenuLateral url={2}/>
        <Wrapper estilo={estiloSeccionInvoices}>
            <Wrapper estilo="header-paxina">
                <Titulo titulo="Invoices" estilo="estilo-titulo"/>
                <Icono imaxeUser={icono} estilo={estiloIconoUser}/>
            </Wrapper>
            
        </Wrapper>
    </Wrapper>
    
    </>
}

export default Invoices;