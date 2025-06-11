import Wrapper from "../../Componentes/Wrapper";
import WrapperHeader from "../../Componentes/WrapperHeader";
import MenuLateral from "../../Componentes/MenuLateral";
import "../../estilo/NewUser.App.css";
import { DatosWrapperHeader } from "../../TIPOS/INTERFACES.App";
import { Imaxes } from "../../assets/Imaxes";
import NewUserAdri from "./NewUserAdri";

const NewUser = () => {
  let estiloPagina = "estilo-paxinas-app height-100vh";
  let estiloSeccion = "estilo-seccion-newuser";

  let estilos: DatosWrapperHeader = {
    seccion: "header-paxina",
    titulo: "estilo-titulo",
    icono: "icono-User"
  };

  return (
    <Wrapper estilo={estiloPagina}>
      <Wrapper estilo={estiloSeccion}>
        <WrapperHeader estilos={estilos} titulo="Nuevo Usuario" icono={Imaxes.fotoFakeUser} />
        <NewUserAdri />
      </Wrapper>
      <MenuLateral url={3} />
    </Wrapper>
  );
};

export default NewUser;