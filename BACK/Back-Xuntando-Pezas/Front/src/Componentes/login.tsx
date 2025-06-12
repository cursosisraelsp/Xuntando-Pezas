import { useState } from 'react';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enviando datos:', { usuario, password });

    // Aquí podrías hacer un fetch al backend:
    // fetch('/api/login', { method: 'POST', body: JSON.stringify({ usuario, password }) })
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Iniciar sesión</h1>
      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        /><br /><br />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
