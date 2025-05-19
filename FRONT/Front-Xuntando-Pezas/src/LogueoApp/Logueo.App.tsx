import { useDatosContext } from "../HOOKS/useDatosContext";
import RutasPrivadasApp from "../RUTAS/Rutas.Privadas.App";


export default function LogueoApp({ children }: { children: React.ReactNode }){
    const {isUserLogueado} = useDatosContext();

    return <>{isUserLogueado ? <div><RutasPrivadasApp /></div> : <div>{children}</div>}</>

}