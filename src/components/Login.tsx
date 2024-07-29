import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../authService';
import Swal from 'sweetalert2';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await login(email, password);
      navigate('/app');
    } catch (error: any) {
      let errorMessage = 'Correo o contraseña inválidos.';
      Swal.fire({
        title: 'Error',
        text: errorMessage,
        icon: 'error',
      });
    }
  };

  return (
    <div className="container login">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleLogin}>
        <label>
          Correo:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Contraseña:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
