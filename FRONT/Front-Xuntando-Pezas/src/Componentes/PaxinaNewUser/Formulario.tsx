import React, { useImperativeHandle, useState, forwardRef } from "react";
import { DatosNewUser } from "../../TIPOS/INTERFACES.NewUser";

interface Props {
  onChange: (datos: DatosNewUser) => void;
}

export interface FormularioRef {
  reset: () => void;
}

const estadoInicial: DatosNewUser = {
  nombre: "",
  apellidos: "",
  email: "",
  profesion: "",
  rol: "",
  imagen: null,
};

const Formulario = forwardRef<FormularioRef, Props>(({ onChange }, ref) => {
  const [formulario, setFormulario] = useState<DatosNewUser>(estadoInicial);

  useImperativeHandle(ref, () => ({
    reset: () => setFormulario(estadoInicial),
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const nuevoFormulario = { ...formulario, [name]: value };
    setFormulario(nuevoFormulario);
    onChange(nuevoFormulario);
  };

  return (
    <div className="formulario-perfil">
      <input type="text" name="nombre" placeholder="Nombre" value={formulario.nombre} onChange={handleChange} />
      <input type="text" name="apellidos" placeholder="Apellidos" value={formulario.apellidos} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formulario.email} onChange={handleChange} />
      <input type="text" name="profesion" placeholder="Profesión" value={formulario.profesion} onChange={handleChange} />
      <input type="text" name="rol" placeholder="Rol" value={formulario.rol} onChange={handleChange} />
    </div>
  );
});

export default Formulario;