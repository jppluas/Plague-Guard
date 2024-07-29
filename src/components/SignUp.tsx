import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../authService';
import Swal from 'sweetalert2';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      Swal.fire({
        title: 'Error',
        text: 'Las contraseñas no coinciden.',
        icon: 'error',
      });
      return;
    }
    try {
      await signUp(email, password);
      navigate('/app');
    } catch (error: any) {
      let errorMessage = 'Error al crear la cuenta.';
      if (error.code === 'auth/invalid-email') {
        errorMessage = 'El formato del correo electrónico es incorrecto.';
      } else if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'El correo electrónico ya está registrado.';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'La contraseña no es lo suficientemente segura.';
      }
      Swal.fire({
        title: 'Error',
        text: errorMessage,
        icon: 'error',
      });
    }
  };

  return (
    <div className="container signup">
      <h1>Crear Cuenta</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Correo:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Contraseña:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <label>
          Confirmar Contraseña:
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </label>
        <button type="submit">Crear Cuenta</button>
      </form>
    </div>
  );
};

export default SignUp;
