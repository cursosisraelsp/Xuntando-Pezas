import './Titulo.css';

export const Titulo = ({ titulo, estilo }: { titulo: string; estilo?: string }) => {
    console.log("O título? ", titulo);
    return <div className={estilo || 'default-style'}>{titulo}</div>;
};

// Ejemplo de uso
<Titulo titulo="Users" estilo="miClaseEstilo" />
