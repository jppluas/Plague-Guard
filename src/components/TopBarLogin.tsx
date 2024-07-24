import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TopBar.css';


const TopBar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const redirectLanding = () => {
    navigate('/');
  };

  return (
    <div className="top-bar">
      <div className="logo-container" onClick={redirectLanding}>
      <img className="logo" src="../../icon.png" alt="PlagueGuard logo" width="30px" height="35px"/>
      <h2>PlagueGuard</h2>
      </div>

      <button onClick={handleLogin}>Ir a la App</button>
    </div>
  );
};

export default TopBar;
