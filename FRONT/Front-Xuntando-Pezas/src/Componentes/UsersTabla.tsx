// src/Componentes/UsersTabla.tsx

import React from 'react';

interface User {
  id: number;
  nombre: string;
  correo: string;
}

interface UsersTablaProps {
  data: User[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const UsersTabla: React.FC<UsersTablaProps> = ({ data, onEdit, onDelete }) => {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.nombre}</td>
            <td>{user.correo}</td>
            <td>
              <button onClick={() => onEdit(user.id)}>Editar</button>
              <button onClick={() => onDelete(user.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTabla;
