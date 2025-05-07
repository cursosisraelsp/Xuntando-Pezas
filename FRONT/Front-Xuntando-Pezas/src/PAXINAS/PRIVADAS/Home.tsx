import Wrapper from "../../Componentes/Wrapper";
import { useDatosContext } from "../../HOOKS/useDatosContext";
import { LinksRutasPrivadasApp } from "../../RUTAS/Links.PAXINAS.PRIVADAS";

const Home = () => {
  const { logout } = useDatosContext();
  const estiloHome = "height-100vh"
  return <>
  <Wrapper estilo={estiloHome}>
    <LinksRutasPrivadasApp />
    <h1>
      <div>HOME</div>
        <button onClick={logout}>Saír</button>
    </h1>
  </Wrapper>
  
  </>;
  };
  
  
  export default Home;