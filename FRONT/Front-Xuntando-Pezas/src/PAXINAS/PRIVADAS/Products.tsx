import { Icono } from "../../Componentes/Icono";
import MenuLateral from "../../Componentes/MenuLateral";
import { Titulo } from "../../Componentes/Titulo";
import Wrapper from "../../Componentes/Wrapper";
import "../../estilo/Products.App.css"
const Products = ({icono}:{icono:string})=>{
let estiloProducts = "estilo-paxinas-app height-100vh"
let estiloSeccionCustomers = "estilo-seccion-products"
let estiloIconoUser = "icono-User";

    return <>
    <Wrapper estilo={estiloProducts}>
    <MenuLateral url={4}/>
        <Wrapper estilo={estiloSeccionCustomers}>
            <Wrapper  estilo="header-paxina">
                <Titulo titulo="Products" estilo="estilo-titulo"/>
                <Icono imaxeUser={icono} estilo={estiloIconoUser}/>
            </Wrapper>
            
        </Wrapper>
    </Wrapper>
    
    </>
}

export default Products;