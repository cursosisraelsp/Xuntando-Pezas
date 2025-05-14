// src/PAXINAS/PRIVADAS/UsersApp.tsx

import React, { useState } from 'react';
import UsersTabla from '../../Componentes/UsersTabla'; // Ruta corregida

const UsersApp: React.FC = () => {
  const [users, setUsers] = useState([
    { id: 1, nombre: 'Juan Pérez', correo: 'juan@example.com' },
    { id: 2, nombre: 'Ana López', correo: 'ana@example.com' },
  ]);

  const handleEdit = (id: number) => {
    console.log(`Editar usuario con ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1>Administración Avanzada de Usuarios</h1>
      <UsersTabla data={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default UsersApp;
