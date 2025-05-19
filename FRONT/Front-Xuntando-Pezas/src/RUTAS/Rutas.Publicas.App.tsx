import {Route, Routes} from "react-router-dom";
import AccesoApp from "../PAXINAS/PUBLICAS/Acceso.App";
export default function RutasPublicasApp(){
    return <>
        <Routes>
            <Route path="/" element={<AccesoApp />}/>
        </Routes>
    </>
}