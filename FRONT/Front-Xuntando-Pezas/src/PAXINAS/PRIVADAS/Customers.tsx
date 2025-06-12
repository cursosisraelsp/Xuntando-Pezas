import { Icono } from "../../Componentes/Icono";
import { Titulo } from "../../Componentes/Titulo";
import MenuLateral from "../../Componentes/MenuLateral";
import Wrapper from "../../Componentes/Wrapper";
import "../../estilo/estilo-customers/Customers.css";
import { CustomersTable } from "../../Componentes/Customers/Customers.Table";

const Customers = ({icono}:{icono:string})=>{
let estiloCustomers = "estilo-paxinas-app height-100vh";
let estiloSeccionCustomers = "estilo-seccion-custormers";
let estiloIconoUser = "icono-User";
    return <>
    <Wrapper estilo={estiloCustomers}>
        <Wrapper estilo={estiloSeccionCustomers}>
            <Wrapper estilo="header-paxina">
                <Titulo titulo="Customers" estilo="estilo-titulo"/>
                <Icono imaxeUser={icono} estilo={estiloIconoUser}/>
            </Wrapper>
            <CustomersTable />
        </Wrapper>
        <MenuLateral url={1}/>
    </Wrapper>
    </>
    
        
}

export default Customers;