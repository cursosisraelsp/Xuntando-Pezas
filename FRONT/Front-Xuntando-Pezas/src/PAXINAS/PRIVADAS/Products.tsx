import MenuLateral from "../../Componentes/MenuLateral";
import Wrapper from "../../Componentes/Wrapper";
import WrapperHeader from "../../Componentes/WrapperHeader";
import "../../estilo/Products.App.css"
import { DatosWrapperHeader } from "../../TIPOS/INTERFACES.App";
const Products = ({icono}:{icono:string})=>{
    
let estiloProducts = "estilo-paxinas-app height-100vh";
let estiloSeccionCustomers = "estilo-seccion-products";

let estilos : DatosWrapperHeader = {
    seccion:"header-paxina",
    titulo:"estilo-titulo",
    icono:"icono-User" 
}
    return <>
    <Wrapper estilo={estiloProducts}>
    
        <Wrapper estilo={estiloSeccionCustomers}>
            <WrapperHeader estilos={estilos} titulo="Products" icono={icono}/>
        </Wrapper>
        <MenuLateral url={4}/>
    </Wrapper>
    
    </>
}

export default Products;