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
      <img className="logo" src="https://lh3.googleusercontent.com/pw/AP1GczPUeg1FIB09d_Qs7Ll9JDudh1kx8b32NMPALu4GxsaXRdqPQyS4u4Fx0Bxgx-8-bfx0NYBBNuJII5ppZSkYPjU6FxfybDzdbp0zzAx-_VUoNNUI1IiIzoaGdch7cIKbm4vsmV4XYOHK7hNk7AtzY7DwPND4fPbjPy7K-AswxJJraHYGOsdTHXk4N1IeQNYc0spMzLTvrOxjzXXGke_Z5Mjw4qb3SkO4Va_CRuCOXQFYnD0JVIf72j9gqoOOH8YN4KZrnY2HLgnMzLKIxwmPpRudib5HvAj8m0FrXaZn68-AUIMu7TgcGcpaktViTovhos0us0G-PGVa0R1oO-a_VsEk-_UBs7H-UL-VfYcvyy4bOoVVwdKfpDVRzYRy5unPSkwvWidebVRgQwVcZD1HxSrU3xTcfvvFtUDRMHZ4jBsW41jCimGRL2QhlTIVIjToeYKc88li3dx0-5R3FkjX5F7u-rBF2ph4uFBmMg9f8E-R6pZocsjzHAdPf_S6-9O7Digft_EdM-y6bVuswZnUs7zukQ6aslVEWH9CFBqyYVfgaEu2PD3DL9pGxNxdssExgWXcCNenlz8PaaYEuVAG0av8e_qOy5J2HxGSliNU45nRfP3HWBqxtrU2yRGGZyrpcURJgGAW8K3qQzMmSfXN0H-VjDZ4t_dJIk4kOCrYfBdDmP10l5Hf5athmtnOS-GaXEE_XdE6cPgQOOBt2_U4hwvJ3N7PcU9Hb1tgDcrsFb8fhKHNoq6xBEamRiscLG7tu2NBDv9AjsJgIzRQh2y97U-E9HSSEDIZdSvvKIQiqrtXmxR9FEjGDeeEED1K2Q7q4T-ecI8VNeaFugKTNdZX5617eM_hN-l5s2Gk04TL_1NIGw97HLyH-H3rMmOhJF5OZbfBDkNAOVi-uoM1X8k1pFldbAY4EdjUjQDvD2EptpCxcmTR6o2_EWAuLEX1DQ=w405-h463-s-no-gm?authuser=0" alt="PlagueGuard logo" width="30px" height="35px"/>
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
