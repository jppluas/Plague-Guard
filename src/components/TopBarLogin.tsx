import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TopBar.css';


const TopBar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const redirectHome = () => {
    navigate('/app');
  };

  return (
    <div className="top-bar">
      <div className="logo-container" onClick={redirectHome}>
      <img className="logo" src="https://i.ibb.co/2qL65rP/icon.png" height="35px"/>
      <h2>PlagueGuard</h2>
      </div>
      
      <button onClick={handleLogin}>Ir a la App</button>
    </div>
  );
};

export default TopBar;
