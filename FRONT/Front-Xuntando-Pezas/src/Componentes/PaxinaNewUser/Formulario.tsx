import React, { useState } from "react";
<<<<<<< HEAD
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
=======

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
>>>>>>> origin/logueo-con-bbdd-AUX
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
<<<<<<< HEAD
    const nuevosDatos = { ...formulario, [name]: value };
    setFormulario(nuevosDatos);
    onSubmit(nuevosDatos);
=======
    setFormulario({ ...formulario, [name]: value });
    onSubmit({ ...formulario, [name]: value }); 
>>>>>>> origin/logueo-con-bbdd-AUX
  };

  return (
    <div className="formulario-perfil">
      <input type="text" name="nombre" placeholder="Nombre" value={formulario.nombre} onChange={handleChange} />
      <input type="text" name="apellidos" placeholder="Apellidos" value={formulario.apellidos} onChange={handleChange} />
<<<<<<< HEAD
      <input type="email" name="email" placeholder="Mail" value={formulario.email} onChange={handleChange} />
=======
      <input type="email" name="mail" placeholder="Mail" value={formulario.mail} onChange={handleChange} />
>>>>>>> origin/logueo-con-bbdd-AUX
      <input type="text" name="profesion" placeholder="Profesión" value={formulario.profesion} onChange={handleChange} />
      <input type="text" name="rol" placeholder="Rol" value={formulario.rol} onChange={handleChange} />
    </div>
  );
};

export default Formulario;
