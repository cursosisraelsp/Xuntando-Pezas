import { Link, Outlet } from "react-router-dom"
import { Imaxes } from "../assets/Imaxes"

export const LinksRutasPrivadasApp = () => {
    let estilo = "links-dentro-app"
    return <>
    <nav className="estilo-nav-dentro">
        <ul>
            <li>
                <Link to="/app">Home</Link>
            </li>
            <li className={estilo}>
                <Link  to="invoices">
                    <div style={{color:"white"}}>Facturas</div>
            
                    <img style={{width:"200px"}} src={Imaxes.facturas}/>
                </Link>
            </li>
            <li>
                <Link to="customers">
                <div style={{color:"white"}}>Clientes</div>
                <img style={{width:"200px"}} src={Imaxes.clientes}/>
                </Link>

            </li>
            <li>
                <Link to="products">
               
                <div style={{color:"white"}}>Productos</div>
                <img style={{width:"200px"}} src={Imaxes.productos}/>
                </Link>
            </li>
            
            
            <li>
                <Link to="users">
                
                <div style={{color:"white"}}>Usuarios</div>
               <img style={{width:"200px"}} src={Imaxes.usuarios}/>
                </Link>
            </li>
            <li>
                <Link to="newcustomer">
                <div style={{color:"white"}}>Novo cliente</div>
                <img style={{width:"200px"}} src={Imaxes.cliente}/>
                </Link>
            </li>
            <li>
                <Link to="newinvoice">
                
                <div style={{color:"white"}}>Nova Factura</div>
                <img style={{width:"200px"}} src={Imaxes.factura}/>
                </Link>
            </li>
            <li>
                <Link to="newproduct">
                <div style={{color:"white"}}>Novo Producto</div>
                <img style={{width:"200px"}} src={Imaxes.producto}/>
                </Link>
            </li>
            <li>
                <Link to="newuser">
                
                <div style={{color:"white"}}>Novo Usuario</div>
                <img style={{width:"200px"}} src={Imaxes.usuarioHome}/>
                </Link>
            </li>
        </ul>
        
    </nav>
    <Outlet />
    </>
}