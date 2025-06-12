import MenuLateral from "../../Componentes/MenuLateral";
import Wrapper from "../../Componentes/Wrapper";
import WrapperHeader from "../../Componentes/WrapperHeader";

import BtnAddNew from "../../Componentes/Componentes-Edd/BtnAddNew";
import SortContentInvoices from "../../Componentes/Componentes-Edd/SortContentInvoices";
import ContentListedInvoices from "../../Componentes/Componentes-Edd/ContentListedInvoices";

import { DatosWrapperHeader } from "../../TIPOS/INTERFACES.App";
import "../../estilo/Invoices.App.css";

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
            <main className="main-content">
              <BtnAddNew></BtnAddNew>
              <SortContentInvoices></SortContentInvoices>
              <ContentListedInvoices></ContentListedInvoices>      
            </main> 
        </Wrapper>
         
        <MenuLateral url={2}/>
    </Wrapper>
    
    </>
}

export default Invoices;