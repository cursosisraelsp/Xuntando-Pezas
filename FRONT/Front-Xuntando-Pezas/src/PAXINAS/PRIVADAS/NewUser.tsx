
import React, { useState } from "react";
import "../../Componentes/PaxinaNewUser/index-newuser.css";
import Formulario from "../../Componentes/PaxinaNewUser/Formulario";
import ImaxenEngranaxe from "../../Componentes/PaxinaNewUser/ImaxenEngranaxe";
import Avatar from "../../Componentes/PaxinaNewUser/Avatar";
import BotonEnviar from "../../Componentes/PaxinaNewUser/BotonEnviar";
import { Imaxes } from "../../assets/imaxes_newuser";
import MenuLateral from "../../Componentes/MenuLateral";
import { DatosNewUser } from "../../TIPOS/INTERFACES.NewUser";

/*const NewUser = ()=>{
    return <div className="estilo-paxinas-app">
    <NewUserAdri />
    <MenuLateral /></div>
}*/

export default function NewUser() {
  const [imagenPerfil, setImagenPerfil] = useState<string>(Imaxes.avatar);
  const [archivoImagen, setArchivoImagen] = useState<File | null>(null);
  const [datosFormulario, setDatosFormulario] = useState<DatosNewUser>({
    nombre: "",
  apellidos: "",
  email: "",
  profesion: "",
  rol: "",
  imagen: null,
  });

  const handleSubmit = async () => {
    
    try {
      const formData = new FormData();
      formData.append("nombre", datosFormulario.nombre); 
      formData.append("apellidos", datosFormulario.apellidos);
      formData.append("email", datosFormulario.email);
      formData.append("profesion", datosFormulario.profesion);
      formData.append("rol", datosFormulario.rol);
      if (archivoImagen) {
        formData.append("imagen", archivoImagen);
      } 
 const res = await fetch("http://localhost:3000/usuarios", {
  method: "POST",
  body: formData,
});


      const json = await res.json();
      console.log("Usuario creado correctamente:", json);
    } catch (err) {
      console.error("Error al crear usuario:", err);
    }
  };

  return (
    <div className="newuser-container">
      <div className="formulario-container">
        <h2>Profile</h2>
        <div className="avatar-y-botones">
          <Avatar
            imagen={imagenPerfil}
            manejarCambioImagen={(e: React.ChangeEvent<HTMLInputElement>) => {
              const file = e.target.files?.[0];
              if (file) {
                const url = URL.createObjectURL(file);
                setImagenPerfil(url);
                setArchivoImagen(file);
              }
            }}
           eliminarImagen={() => {
              setImagenPerfil(Imaxes.avatar);
              setArchivoImagen(null);
            }}/>
        </div>
        

        <Formulario onSubmit={setDatosFormulario} />
      </div>

      <div className="imagen-engranaje-container">
        <ImaxenEngranaxe />
        <BotonEnviar onClick={handleSubmit} />
      </div>
    </div>
  );
}
