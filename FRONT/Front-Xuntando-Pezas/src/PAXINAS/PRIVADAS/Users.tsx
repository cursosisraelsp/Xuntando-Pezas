// src/PAXINAS/PRIVADAS/Users.tsx

import React, { useState, useEffect } from 'react';
import UsersTabla from '../../Componentes/UsersTabla'; // Ruta corregida

// Interfaz para los usuarios
interface User {
  id: number;
  nombre: string;
  correo: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Obtener los datos desde la API al cargar el componente
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://api.example.com/users'); // ⚠️ Cambia a tu URL real
        if (!response.ok) {
          throw new Error('Error al obtener usuarios');
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message || 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (id: number) => {
    console.log(`Editar usuario con ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Eliminar usuario con ID: ${id}`);
    setUsers((prevUsers) => prevUsers.filter((u) => u.id !== id));
  };

  if (loading) return <div>Cargando usuarios...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Gestión de Usuarios</h1>
      <UsersTabla data={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Users;
