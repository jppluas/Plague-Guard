import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TrapCard.css';

interface TrapCardProps {
  trapKey: string; 
  name: string;
  location: string;
  status: boolean;
}

const TrapCard: React.FC<TrapCardProps> = ({ trapKey, name, location, status }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/app/trap/${trapKey}`); 
  };

  return (
    <div className="trap-card" onClick={handleCardClick}>
      <img src="https://andasur.com/wp-content/uploads/2022/09/trampa-feromona-2-293x300.jpg" alt={name} className="trap-card-image" />
      <div className="trap-card-info">
        <h3>{name}</h3>
        <p>{location}</p>
        <p>{status ? 'Activo' : 'Inactivo'}</p>
      </div>
    </div>
  );
};

export default TrapCard;