// src/components/TopBar.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

type TopBarProps = {
  onAddTrapClick: () => void;
};

const TopBar: React.FC<TopBarProps> = ({ onAddTrapClick }) => {
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

  return (
    <div className="top-bar">
      <button onClick={onAddTrapClick}>Add Trap</button>
      <button onClick={redirectTutoriales}> Tutoriales </button>
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default TopBar;
