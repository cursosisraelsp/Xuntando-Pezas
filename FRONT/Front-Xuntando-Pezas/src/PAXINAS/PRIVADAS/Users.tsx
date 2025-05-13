import React, { useState, useEffect } from 'react';

type User = {
  name: string;
  email: string;
  status: 'Active' | 'Inactive';
  role: string;
};

const UsersApp: React.FC = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulación de una llamada a una API
    const fetchUsers = async () => {
      try {
        // Aquí podrías usar fetch o axios para obtener datos reales
        const response = await new Promise<User[]>((resolve, reject) =>
          setTimeout(() => {
            // Simula éxito o error
            Math.random() > 0.2
              ? resolve([
                  { name: 'Alice Johnson', email: 'alice@example.com', status: 'Active', role: 'Admin' },
                  { name: 'Bob Smith', email: 'bob@example.com', status: 'Inactive', role: 'User' },
                  { name: 'Carol Lee', email: 'carol@example.com', status: 'Active', role: 'Editor' },
                ])
              : reject(new Error('Failed to fetch users'));
          }, 1000)
        );
        setUsers(response);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      }
    };

    fetchUsers();
  }, []);

  if (error) {
    return (
      <main className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-700">{error}</p>
        </div>
      </main>
    );
  }

  if (!users) {
    return (
      <main className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
        <p className="text-gray-700 text-lg">Loading users...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6">
        <h1 className="text-3xl font-bold mb-6">User Management</h1>
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
            <tr>
              <th className="p-3">Users</th>
              <th className="p-3">Email</th>
              <th className="p-3">Status</th>
              <th className="p-3">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-t text-sm hover:bg-gray-50 transition">
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="p-3">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default UsersApp;
