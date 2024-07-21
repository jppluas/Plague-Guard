// src/components/TrapCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

type TrapCardProps = {
  id: string;
  name: string;
  location: string;
  status: 'Activa' | 'Inactiva';
};

const TrapCard: React.FC<TrapCardProps> = ({ id, name, location, status }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/trap/${id}`);
  };

  return (
    <div className="trap-card" onClick={handleClick}>
      <img src="/path/to/trap-image.png" alt="Trap" />
      <h3>{name}</h3>
      <p>{location}</p>
      <span className={`status ${status.toLowerCase()}`}>{status}</span>
    </div>
  );
};

export default TrapCard;
