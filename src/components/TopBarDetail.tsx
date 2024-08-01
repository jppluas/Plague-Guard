import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useAppContext } from '../context/AppContext';
import '../styles/TopBar.css';
import Swal from 'sweetalert2';

const TopBar: React.FC = () => {
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

  const solicitarAsistencia = () => {
    Swal.fire({
      title: 'Asistencia',
      text: 'Se ha comunicado con un especialista para asistirle en su problema',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });
  };

  return (
    <div className="top-bar">
      <div className="logo-container" onClick={redirectHome}>
        <img className="logo" src="https://i.ibb.co/2qL65rP/icon.png" height="35px" />
        <h2>PlagueGuard</h2>
      </div>

      <div className={`buttons ${hamburgerOpen ? 'open' : ''}`} ref={menuRef}>
        <button onClick={togglePaidVersion} className="nav-button">
        {isPaidVersion ? 'Vista Basic' : 'Vista Premium'}
        </button>
        {isPaidVersion && <button className="nav-button" onClick={solicitarAsistencia}>
            Solicitar asistencia
          </button>}
        <button onClick={redirectTutoriales} className="nav-button"> Tutoriales </button>
        
      </div>

      <div className="profile-menu-container" ref={userMenuRef}>
        <img 
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
          className="profile-image" 
          alt="Profile" 
          onClick={toggleMenu} 
        />
        {menuOpen && (
          <div className="profile-menu">
            <button onClick={redirectProfile} className="nav-button">Ver Perfil</button>
            {!isPaidVersion && <button className="nav-button">Volverse Premium</button>}
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
