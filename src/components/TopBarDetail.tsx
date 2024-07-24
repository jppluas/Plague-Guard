// src/components/TopBar.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import '../styles/TopBar.css';


const TopBar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const redirectTutoriales = () => {
    navigate('/tutoriales');
  }

  const redirectLanding = () => {
    navigate('/');
  }

  const redirectHome = () => {
    navigate('/app');
  }

  return (
    <div className="top-bar">
      <div className="logo-container" onClick={redirectLanding}>
      <img className="logo" src="../../icon.png" alt="PlagueGuard logo" width="30px" height="35px"/>
      <h2>PlagueGuard</h2>
      </div>

      <div className="buttons">
        <button onClick={redirectHome} className="nav-button"> Atrás</button>
        <button onClick={redirectTutoriales} className="nav-button"> Tutoriales </button>
        <button onClick={handleLogout} className="logout-button nav-button">Cerrar sesión</button>
      </div>
    </div>
  );
};

export default TopBar;
