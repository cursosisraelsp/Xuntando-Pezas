
import MenuLateral from "../../Componentes/MenuLateral";
import Wrapper from "../../Componentes/Wrapper";
import WrapperHeader from "../../Componentes/WrapperHeader";
import { useDatosContext } from "../../HOOKS/useDatosContext";
import { LinksRutasPrivadasApp } from "../../RUTAS/Links.PAXINAS.PRIVADAS";

import { DatosWrapperHeader } from "../../TIPOS/INTERFACES.App";

const Home = ({icono}:{icono:string}) => {
  const { logout } = useDatosContext();

  const estiloHome = "height-100vh";

  let estilos : DatosWrapperHeader = {
    seccion:"header-paxina",
    titulo:"estilo-titulo",
    icono:"icono-User" 
}
  return <>
  <Wrapper estilo={estiloHome}>
    
      <MenuLateral url={0} />
    <LinksRutasPrivadasApp >
      <WrapperHeader estilos={estilos} titulo="Home" icono={icono}/>
    </LinksRutasPrivadasApp>
    
  </Wrapper>
  
  </>;
  };
  
  
  export default Home;