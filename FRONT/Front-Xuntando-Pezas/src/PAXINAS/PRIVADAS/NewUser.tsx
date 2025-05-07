// src/paginas/NewUser.tsx
import React, { useState } from "react";
import "../../Componentes/PaxinaNewUser/index-newuser.css";
import Formulario from "../../Componentes/PaxinaNewUser/Formulario";
import ImaxenEngranaxe from "../../Componentes/PaxinaNewUser/ImaxenEngranaxe";
import Avatar from "../../Componentes/PaxinaNewUser/Avatar";
import BotonEnviar from "../../Componentes/PaxinaNewUser/BotonEnviar";
import { Imaxes } from "../../assets/imaxes_newuser";

interface DatosFormulario {
  [key: string]: string;
}

export default function NewUser() {
  const [imagenPerfil, setImagenPerfil] = useState<string>(Imaxes.avatar);
  const [datosFormulario, setDatosFormulario] = useState<DatosFormulario>({});

  const handleSubmit = async () => {
    const datos = { ...datosFormulario, imagen: imagenPerfil };
    try {
      const res = await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
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
              }
            }}
            eliminarImagen={() => setImagenPerfil(Imaxes.avatar)}
          />
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
