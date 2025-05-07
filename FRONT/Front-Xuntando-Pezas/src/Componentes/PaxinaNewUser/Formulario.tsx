import React, { useState } from "react";
import { DatosNewUser } from "../../TIPOS/INTERFACES.NewUser";



interface Props {
  onSubmit: (datos: DatosNewUser) => void;
}

const Formulario = ({ onSubmit }: Props) => {
  const [formulario, setFormulario] = useState<DatosNewUser>({
    nombre: "",
    apellidos: "",
    email: "",
    profesion: "",
    rol: "",
    image: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const nuevosDatos = { ...formulario, [name]: value };
    setFormulario(nuevosDatos);
    onSubmit(nuevosDatos);
  };

  return (
    <div className="formulario-perfil">
      <input type="text" name="nombre" placeholder="Nombre" value={formulario.nombre} onChange={handleChange} />
      <input type="text" name="apellidos" placeholder="Apellidos" value={formulario.apellidos} onChange={handleChange} />
      <input type="email" name="email" placeholder="Mail" value={formulario.email} onChange={handleChange} />
      <input type="text" name="profesion" placeholder="Profesión" value={formulario.profesion} onChange={handleChange} />
      <input type="text" name="rol" placeholder="Rol" value={formulario.rol} onChange={handleChange} />
    </div>
  );
};

export default Formulario;
