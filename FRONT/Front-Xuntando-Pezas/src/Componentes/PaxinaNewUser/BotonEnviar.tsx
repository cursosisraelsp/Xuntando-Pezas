interface Props {
  onClick: () => void;
}

const BotonEnviar = ({ onClick }: Props) => {
  return (
    <button type="button" className="boton-enviar" onClick={onClick}>
      Enviar
    </button>
  );
};

export default BotonEnviar;
