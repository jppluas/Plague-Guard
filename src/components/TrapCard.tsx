import React from 'react';
import { useNavigate } from 'react-router-dom';

interface TrapCardProps {
  trapKey: string; 
  id: string;
  name: string;
  location: string;
  status: boolean;
}

const TrapCard: React.FC<TrapCardProps> = ({ trapKey, id, name, location, status }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/app/trap/${trapKey}`); 
  };

  return (
    <div className="trap-card" onClick={handleCardClick}>
      <img src="src/images/trap-image.png" alt={name} className="trap-card-image" />
      <div className="trap-card-info">
        <h3>{name}</h3>
        <p>{location}</p>
        <p>{status ? 'Activo' : 'Inactivo'}</p>
      </div>
    </div>
  );
};

export default TrapCard;