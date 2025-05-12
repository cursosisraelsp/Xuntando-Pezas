import {Route, Routes} from "react-router-dom";
import AccesoApp from "../PAXINAS/PUBLICAS/Acceso.App";
import NewUser from "../PAXINAS/PRIVADAS/NewUser";
export default function RutasPublicasApp(){
    return <>
        <Routes>
            <Route path="/" element={<AccesoApp />}/>
            <Route path= "/newuser" element= {<NewUser/>} />
        </Routes>
    </>
}