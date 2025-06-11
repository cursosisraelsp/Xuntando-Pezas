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
      <div className="row">
        <div className="input-nombre">
          <label htmlFor="nombre">Nombre</label>
      <input type="text" name="nombre" value={formulario.nombre} onChange={handleChange} />
      </div>
      <div className="input-apellidos">
       <label htmlFor="apellidos">Apellidos</label>
      <input type="text" name="apellidos"  value={formulario.apellidos} onChange={handleChange} />
      </div>
      </div>
      <div className="input-linea">
      <label htmlFor="email">Email</label>
      <input type="email" name="email" value={formulario.email} onChange={handleChange} /></div>
     <div className="input-linea">
      <label htmlFor="profesion ">Profesión</label>
      <input type="text" name="profesion" value={formulario.profesion} onChange={handleChange} /></div>
     <div className="input-linea">
      <label htmlFor="rol">Rol</label>
      <input type="text" name="rol" value={formulario.rol} onChange={handleChange} /></div>
    </div>
    
  );
});

export default Formulario;