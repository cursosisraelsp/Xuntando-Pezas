import React, { useRef, useState } from "react";
import Formulario, { FormularioRef } from "../../Componentes/PaxinaNewUser/Formulario";
import Avatar from "../../Componentes/PaxinaNewUser/Avatar";
import BotonEnviar from "../../Componentes/PaxinaNewUser/BotonEnviar";
import { DatosNewUser } from "../../TIPOS/INTERFACES.NewUser";
import { Imaxes } from "../../assets/imaxes_newuser"; 
import "../../Componentes/PaxinaNewUser/index-newuser.css";

const estadoInicial: DatosNewUser = {
  nombre: "",
  apellidos: "",
  email: "",
  profesion: "",
  rol: "",
  imagen: null
};

export default function NewUserAdri() {
  const [imagenPerfil, setImagenPerfil] = useState<string>(Imaxes.avatar);
  const [archivoImagen, setArchivoImagen] = useState<File | null>(null);
  const [datosFormulario, setDatosFormulario] = useState<DatosNewUser>(estadoInicial);
  const [mensajeConfirmacion, setMensajeConfirmacion] = useState<string>("");
  const formularioRef = useRef<FormularioRef>(null);

  const resetearFormulario = () => {
    formularioRef.current?.reset();
    setImagenPerfil(Imaxes.avatar);
    setArchivoImagen(null);
    setDatosFormulario(estadoInicial);
  };

  const manejarCambioImagen = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImagenPerfil(url);
      setArchivoImagen(file);
    }
  };

  const eliminarImagen = () => {
    setImagenPerfil(Imaxes.avatar);
    setArchivoImagen(null);
  };

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
      
      setMensajeConfirmacion("¡Datos enviados correctamente!");
      resetearFormulario();
      
      // Ocultar el mensaje después de 3 segundos
      setTimeout(() => {
        setMensajeConfirmacion("");
      }, 3000);

    } catch (err) {
      console.error("Error al crear usuario:", err);
      setMensajeConfirmacion("Error al enviar los datos. Por favor, inténtalo de nuevo.");
      
      // Ocultar el mensaje de error después de 3 segundos
      setTimeout(() => {
        setMensajeConfirmacion("");
      }, 3000);
    }
  };

  return (
    <div className="newuser-container">
      <div className="formulario-container">
        <h2>Profile</h2>
        {mensajeConfirmacion && (
          <div className={`mensaje-confirmacion ${mensajeConfirmacion.includes("Error") ? "error" : "exito"}`}>
            {mensajeConfirmacion}
          </div>
        )}
        <div className="avatar-bloque">
          <div className="avatar-contenedor">
            <Avatar
              imagen={imagenPerfil}
              manejarCambioImagen={manejarCambioImagen}
              eliminarImagen={eliminarImagen}
            />
          </div>
        </div>
        <Formulario ref={formularioRef} onChange={setDatosFormulario} />
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