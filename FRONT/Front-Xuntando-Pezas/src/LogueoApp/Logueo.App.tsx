import { useDatosContext } from "../HOOKS/useDatosContext";
import RutasPrivadasApp from "../RUTAS/Rutas.Privadas.App";


export default function LogueoApp({ children }: { children: React.ReactNode }){
    const {isUserLogueado} = useDatosContext();
    const estiloUn = { 
        display: "flex",
        justifyContent: "center"
    }
    return <>{isUserLogueado ? <div><RutasPrivadasApp /></div> : <div style={estiloUn}>{children}</div>}</>

}