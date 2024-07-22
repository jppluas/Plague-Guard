// src/components/SignUp.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../authService';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    try {
      await signUp(email, password);
      navigate('/app');
    } catch (error) {
      setError('Failed to create account.');
    }
  };

  return (
    <div class="container signup">
      <h1>Crear Cuenta</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <label>
          Confirm Password:
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit">Crear Cuenta</button>
      </form>
    </div>
  );
};

export default SignUp;
