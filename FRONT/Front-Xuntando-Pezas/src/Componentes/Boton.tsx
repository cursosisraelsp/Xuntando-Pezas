export default function Boton({
    estilo,
    texto,
    funcion,
  }: {
    estilo: string;
    texto: string;
    funcion: React.MouseEventHandler;
  }) {
    return (
      <button onClick={funcion} className={estilo}>
        {texto}
      </button>
    );
  }