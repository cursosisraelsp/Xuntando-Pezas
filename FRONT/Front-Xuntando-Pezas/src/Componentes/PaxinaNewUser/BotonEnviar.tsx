interface Props {
  onClick: () => void;
}

const BotonEnviar = ({ onClick }: Props) => {
  return (
<<<<<<< HEAD
    <button type="button" onClick={onClick}>
=======
    <button type="button" className="boton-enviar" onClick={onClick}>
>>>>>>> origin/logueo-con-bbdd-AUX
      Enviar
    </button>
  );
};

export default BotonEnviar;
