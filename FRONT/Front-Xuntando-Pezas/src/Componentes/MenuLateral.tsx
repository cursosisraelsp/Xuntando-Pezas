import { Link, Outlet } from "react-router-dom";
import { Imaxes } from "../assets/Imaxes";
import { Icono } from "./Icono";
import "../estilo/MenuLateral.App.css";
import Boton from "./Boton";
import { useDatosContext } from "../HOOKS/useDatosContext";
import { IconoFuncion } from "./IconoFuncion";

export default function MenuLateral({url}:{url:number}){
    const {logout} = useDatosContext();
    return <>
    <nav className="menu-lateral">
        <Link className="link-menu-lateral" to="/app">
            <Icono imaxeUser={Imaxes.iconoHome} estilo="icono-menu-lateral"/>
            <span style={{color:"white", width: "75px", fontSize:"15px"}}>Home</span>
        </Link>
                {url === 2 ? "" : <Link className="link-menu-lateral" to="/app/invoices">
                    <Icono imaxeUser={Imaxes.iconoFacturas} estilo="icono-menu-lateral" />
                    <span style={{color:"white", width: "75px", fontSize:"15px",fontWeight: "100"}}>Facturas</span>
            
                    
                </Link>}
                {
                url === 1 ? "": <Link className="link-menu-lateral" to="/app/customers">
                <Icono imaxeUser={Imaxes.iconoClientes} estilo="icono-menu-lateral" />
                <span style={{color:"white", width: "75px", fontSize:"15px",fontWeight: "100"}}>Clientes</span>
                
                </Link>}
                {
                    url === 4 ? "" : <Link className="link-menu-lateral" to="/app/products">
               
                    <Icono imaxeUser={Imaxes.iconoProductos} estilo="icono-menu-lateral" />
                    <span style={{color:"white", width: "75px", fontSize:"15px",fontWeight: "100"}}>Productos</span>
                   
                    </Link>
                }
                {url === 3 ? "":
                <Link className="link-menu-lateral" to="/app/users">
                <Icono imaxeUser={Imaxes.iconoUsuarios} estilo="icono-menu-lateral" />
                <span style={{color:"white", width: "75px", fontSize:"15px",fontWeight: "100"}}>Usuarios</span>
               
                </Link>}
                {/* <Boton estilo="" texto="Sair" funcion={logout}/> */}
                <IconoFuncion imaxeUser={Imaxes.iconoSair} estilo="icono-menu-lateral-exit" funcion={logout}/>
    </nav>
    
    <Outlet />
    </>
}