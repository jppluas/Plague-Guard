import React from 'react';
import '../styles/UserProfile.css'; 
import TopBar from './TopBarDetail';
import AdSidebar from './AdSidebar';
import { useAppContext } from '../context/AppContext';

const UserProfile: React.FC = () => {
  const { isPaidVersion } = useAppContext();
  const user = {
    name: "Gerardo Suarez",
    email: "trampa@gmail.com",
    password: "********",
    phone: "0987654321",
    address: "Calle 123, Vinces, Los Rios",
    paymentMethod: "Tarjeta de Crédito",
    cardNumber: "**** **** **** 1234",
    expirationDate: "12/24",
  };

  return (
    <div>
        <TopBar />
        {!isPaidVersion && <AdSidebar position="left" />}
        {!isPaidVersion && <AdSidebar position="right" />}
        {!isPaidVersion && <AdSidebar position="bottom" />}
        <div className="user-profile">
          <h2>Perfil</h2>
          <div className="user-details">
            <div className="user-info">
              <h3>Información Personal</h3>
              <label>
                <strong>Nombre:</strong>
                <input type="text" defaultValue={user.name} />
              </label>
              <label>
                <strong>Correo:</strong>
                <input type="email" defaultValue={user.email} />
              </label>
            <label>
                <strong>Telefono:</strong>
                <input type="text" defaultValue={user.phone} />
            </label>
              <label>
                <strong>Contraseña:</strong>
                <input type="password" defaultValue={user.password} />
              </label>
            </div>
            <div className="payment-info">
              <h3>Información de Pago y Envío</h3>
              <label>
                <strong>Dirección:</strong>
                <input type="text" defaultValue={user.address} />
              </label>
              <label>
                <strong>Método de Pago:</strong>
                <input type="text" defaultValue={user.paymentMethod} readOnly/>
              </label>
              <label>
                <strong>Número de Tarjeta:</strong>
                <input type="text" defaultValue={user.cardNumber} />
              </label>
              <label>
                <strong>Fecha de Expiración:</strong>
                <input type="text" defaultValue={user.expirationDate} />
              </label>
            </div>
          </div>
          <button className="save-button">Guardar</button>
        </div>
    </div>
  );
};

export default UserProfile;
