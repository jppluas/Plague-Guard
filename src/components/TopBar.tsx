import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useAppContext } from '../context/AppContext';
import '../styles/TopBar.css';

type TopBarProps = {
  onAddTrapClick: () => void;
};

const TopBar: React.FC<TopBarProps> = ({ onAddTrapClick }) => {
  const navigate = useNavigate();
  const { isPaidVersion, togglePaidVersion } = useAppContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) &&
          hamburgerRef.current && !hamburgerRef.current.contains(event.target as Node)) {
        setHamburgerOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
  };

  const redirectHome = () => {
    navigate('/app');
  };

  const redirectProfile = () => {
    navigate('/app/profile');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleHamburgerMenu = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className="top-bar">
      <div className="logo-container" onClick={redirectHome}>
        <img className="logo" src="https://i.ibb.co/2qL65rP/icon.png" height="35px" />
        <h2>PlagueGuard</h2>
      </div>

      <div className={`buttons ${hamburgerOpen ? 'open' : ''}`} ref={menuRef}>
        <button onClick={togglePaidVersion} className="nav-button">
          {isPaidVersion ? 'Vista usuario gratis' : 'Vista usuario plus'}
        </button>
        <button onClick={onAddTrapClick} className="nav-button">Nueva trampa</button>
        <button onClick={redirectTutoriales} className="nav-button"> Tutoriales </button>
        
      </div>

      <div className="profile-menu-container" ref={userMenuRef}>
        <img 
          src="https://via.placeholder.com/35" 
          className="profile-image" 
          alt="Profile" 
          onClick={toggleMenu} 
        />
        {menuOpen && (
          <div className="profile-menu">
            <button onClick={redirectProfile} className="nav-button">Ver Perfil</button>
            <button onClick={handleLogout} className="nav-button">Cerrar sesión</button>
          </div>
        )}
      </div>

      <div className="hamburger-menu" onClick={toggleHamburgerMenu} ref={hamburgerRef}>
        <div className={`hamburger ${hamburgerOpen ? 'open' : ''}`}></div>
      </div>
    </div>
  );
};

export default TopBar;
