import React from 'react';
import { useNavigate } from 'react-router-dom';


const TopBar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="top-bar">
      <button onClick={handleLogin}>Ir a la App</button>
    </div>
  );
};

export default TopBar;
