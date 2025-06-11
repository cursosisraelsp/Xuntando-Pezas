import React from "react";
import MenuLateral from "../../Componentes/MenuLateral";
import NewUserAdri from "./NewUserAdri";

const NewUser = () => {
  return (
    <div className="estilo-paxinas-app">
      <NewUserAdri />
      <MenuLateral url={3} />
    </div>
  );
};

export default NewUser;
