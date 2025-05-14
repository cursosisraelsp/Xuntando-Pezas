import MenuLateral from "../../Componentes/MenuLateral";
import Wrapper from "../../Componentes/Wrapper";
import WrapperHeader from "../../Componentes/WrapperHeader";
import { DatosWrapperHeader } from "../../TIPOS/INTERFACES.App";
import "../../estilo/Invoices.App.css"
const Invoices = ({icono}:{icono:string})=>{
    let estiloInvoices = "estilo-paxinas-app height-100vh";
    let estiloSeccionInvoices = "estilo-seccion-invoices";
    

    // AQUÍ IRIA A LÓXICA DO COMPOÑENTE
    let estilos : DatosWrapperHeader = {
        seccion:"header-paxina",
        titulo:"estilo-titulo",
        icono:"icono-User" 
    }
    return <>
    <Wrapper estilo={estiloInvoices}>
        
        <Wrapper estilo={estiloSeccionInvoices}>
            <WrapperHeader estilos={estilos} titulo="Invoices" icono={icono}/>
        </Wrapper>
        <MenuLateral url={2}/>
    </Wrapper>
    
    </>
}

export default Invoices;