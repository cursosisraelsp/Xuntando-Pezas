import { Link, Outlet } from "react-router-dom"
import { Imaxes } from "../assets/Imaxes"

export const LinksRutasPrivadasApp = ({ children }: { children: React.ReactNode }) => {
    let estilo = "links-dentro-app"
    return <div className="estilo-menu-lateral-home">
        {children}
    <nav className="estilo-nav-dentro">
        <ul>
            
            <li className={estilo}>
                <Link  to="invoices">
                    <div style={{color:"black"}}>Facturas</div>
            
                    <img style={{width:"200px"}} src={Imaxes.facturas}/>
                </Link>
            </li>
            <li>
                <Link to="customers">
                <div style={{color:"black"}}>Clientes</div>
                <img style={{width:"200px"}} src={Imaxes.clientes}/>
                </Link>

            </li>
            <li>
                <Link to="products">
               
                <div style={{color:"black"}}>Productos</div>
                <img style={{width:"200px"}} src={Imaxes.productos}/>
                </Link>
            </li>
            
            
            <li>
                <Link to="users">
                
                <div style={{color:"black"}}>Usuarios</div>
               <img style={{width:"200px"}} src={Imaxes.usuarios}/>
                </Link>
            </li>
            <li>
                <Link to="newcustomer">
                <div style={{color:"black"}}>Novo cliente</div>
                <img style={{width:"200px"}} src={Imaxes.cliente}/>
                </Link>
            </li>
            <li>
                <Link to="newinvoice">
                
                <div style={{color:"black"}}>Nova Factura</div>
                <img style={{width:"200px"}} src={Imaxes.factura}/>
                </Link>
            </li>
            <li>
                <Link to="newproduct">
                <div style={{color:"black"}}>Novo Producto</div>
                <img style={{width:"200px"}} src={Imaxes.producto}/>
                </Link>
            </li>
            <li>
                <Link to="newuser">
                
                <div style={{color:"black"}}>Novo Usuario</div>
                <img style={{width:"200px"}} src={Imaxes.usuarioHome}/>
                </Link>
            </li>
        </ul>
        
    </nav>
    <Outlet />
    </div>
}