import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };


  return (
    <div className="landing">
      <h1>Welcome to PlagueGuard</h1>
      <button onClick={handleLogin}>Ir a la App</button>
    </div>
  );
};

export default Landing;
