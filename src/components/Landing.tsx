import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import '../styles/Landing.css';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const redirectTutoriales = () => {
    navigate('/tutoriales');
  }

  return (
    <div className="container landing">
      <h1>Bienvenido a PlagueGuard</h1>
      <div className="buttons">
      <button onClick={handleLogin}>Ir a la App</button>
      <button onClick={redirectTutoriales}> Tutoriales</button>
      </div>
      
    </div>
  );
};

export default Landing;
