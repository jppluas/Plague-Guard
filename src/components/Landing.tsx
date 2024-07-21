import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="landing">
      <h1>Welcome to PlagueGuard</h1>
      <button onClick={handleLogin}>Iniciar Sesión</button>
      <button onClick={handleSignUp}>Crear Cuenta</button>
    </div>
  );
};

export default Landing;
