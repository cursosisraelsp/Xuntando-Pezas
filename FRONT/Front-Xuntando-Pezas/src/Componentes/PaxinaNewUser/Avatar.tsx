import React, { useRef } from "react";
import { Imaxes } from "../../assets/imaxes_newuser";

interface AvatarProps {
  imagen: string;
  manejarCambioImagen: (e: React.ChangeEvent<HTMLInputElement>) => void;
  eliminarImagen: () => void;
}

const Avatar = ({ imagen, manejarCambioImagen, eliminarImagen }: AvatarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="avatar-contenedor">
      <img
        src={imagen || Imaxes.avatar}
        alt="Avatar"
        className="avatar-imagen"
      />

      <div className="avatar-botones">
        <button
          className="boton-cambiar"
          type="button"
          onClick={() => inputRef.current?.click()}
        >
          Change picture
        </button>

        <input
          type="file"
          accept="image/*"
          onChange={manejarCambioImagen}
          ref={inputRef}
          style={{ display: "none" }}
        />

        <button
          className="boton-borrar"
          type="button"
          onClick={eliminarImagen}
        >
          Delete picture
        </button>
      </div>
    </div>
  );
};

export default Avatar;
