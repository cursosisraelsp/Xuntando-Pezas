import { Routes, Route } from "react-router-dom";
import { Customers, Home, Invoices, NewCustomer, NewInvoice, NewProduct, NewUser, Products, Users } from "./PAXINAS.PRIVADAS";
//import { LinksRutasPrivadasApp } from "./Links.PAXINAS.PRIVADAS";
import NoPage from "../PAXINAS/NoPage";
import { Imaxes } from "../assets/Imaxes";

export default function RutasPrivadasApp(){
    Imaxes
    return <>
        <Routes>
            <Route path="/app">
                <Route index element={<Home />} /> 
                <Route path="customers" element={<Customers icono={Imaxes.fotoFakeUser}/>}/>  
                <Route path="invoices" element={<Invoices icono={Imaxes.fotoFakeUser} />}/>
                <Route path="products" element={<Products icono={Imaxes.fotoFakeUser}/>}/>
                <Route path="users" element={<Users icono={Imaxes.fotoFakeUser}/>} />
                <Route path="newcustomer" element={<NewCustomer /* icono={Imaxes.fotoFakeUser} *//>} />
                <Route path="newinvoice" element={<NewInvoice /* icono={Imaxes.fotoFakeUser} *//>} />
                 <Route path="newproduct" element={<NewProduct /* icono={Imaxes.fotoFakeUser} *//>} />
                <Route path="newuser" element={<NewUser /* icono={Imaxes.fotoFakeUser} *//>} />
                <Route path="*" element={<NoPage />} />  
            </Route>
            
        </Routes>

    </>
}