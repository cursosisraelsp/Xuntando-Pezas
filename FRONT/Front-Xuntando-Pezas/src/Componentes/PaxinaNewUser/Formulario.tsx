import React, { useState } from "react";

interface Props {
  onSubmit: (datos: any) => void;
}

const Formulario = ({ onSubmit }: Props) => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellidos: "",
    mail: "",
    profesion: "",
    rol: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormulario({ ...formulario, [name]: value });
    onSubmit({ ...formulario, [name]: value }); 

  };

  return (
    <div className="formulario-perfil">
      <input type="text" name="nombre" placeholder="Nombre" value={formulario.nombre} onChange={handleChange} />
      <input type="text" name="apellidos" placeholder="Apellidos" value={formulario.apellidos} onChange={handleChange} />
      <input type="email" name="mail" placeholder="Mail" value={formulario.mail} onChange={handleChange} />
      <input type="text" name="profesion" placeholder="Profesión" value={formulario.profesion} onChange={handleChange} />
      <input type="text" name="rol" placeholder="Rol" value={formulario.rol} onChange={handleChange} />
    </div>
  );
};

export default Formulario;
