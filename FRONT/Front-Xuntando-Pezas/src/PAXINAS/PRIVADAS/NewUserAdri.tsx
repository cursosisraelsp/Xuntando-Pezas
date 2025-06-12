import React, { useState } from "react";
import Formulario from "../../Componentes/PaxinaNewUser/Formulario";
import ImaxenEngranaxe from "../../Componentes/PaxinaNewUser/ImaxenEngranaxe";
import Avatar from "../../Componentes/PaxinaNewUser/Avatar";
import BotonEnviar from "../../Componentes/PaxinaNewUser/BotonEnviar";
import { DatosNewUser } from "../../TIPOS/INTERFACES.NewUser";
import { Imaxes } from "../../assets/imaxes_newuser"; 
import "../../Componentes/PaxinaNewUser/index-newuser.css";

export default function NewUserAdri() {
  const [imagenPerfil, setImagenPerfil] = useState<string>(Imaxes.avatar);
  const [datosFormulario, setDatosFormulario] = useState<DatosNewUser>({
    nombre: "",
    apellidos: "",
    email: "",
    profesion: "",
    rol: "",
    imagen: null
  });

  const manejarCambioImagen = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImagenPerfil(url);
      setDatosFormulario({ ...datosFormulario, imagen: file });
    }
  };

  const eliminarImagen = () => {
    setImagenPerfil(Imaxes.avatar);
    setDatosFormulario({ ...datosFormulario, imagen: null });
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("nombre", datosFormulario.nombre);
      formData.append("apellidos", datosFormulario.apellidos);
      formData.append("email", datosFormulario.email);
      formData.append("profesion", datosFormulario.profesion);
      formData.append("rol", datosFormulario.rol);
      if (datosFormulario.imagen) {
        formData.append("imagen", datosFormulario.imagen);
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

      <div className="avatar-bloque">
      <div className="avatar-contenedor">
         <Avatar
           imagen={imagenPerfil}
           manejarCambioImagen={manejarCambioImagen}
           eliminarImagen={eliminarImagen}
    />
  </div>
</div>


        <Formulario onSubmit={setDatosFormulario} />

      </div>

      <div className="imagen-engranaxe-container">
  <div className="caja-imagen-blanca">
    <img src={Imaxes.engranaxe} alt="Engranaje" />
  </div>
  <BotonEnviar onClick={handleSubmit} />
   </div>
 </div>
  );
}
