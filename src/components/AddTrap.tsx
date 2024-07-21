// src/components/AddTrap.tsx
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import { addTrapToUser } from '../databaseService';

type AddTrapProps = {
  onClose: () => void;
};

const AddTrap: React.FC<AddTrapProps> = ({ onClose }) => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('Activa');
  const [pheromones, setPheromones] = useState(50);
  const [plagues, setPlagues] = useState(20);
  const [error, setError] = useState('');

  const handleAddTrap = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!user) {
      setError('User not logged in');
      return;
    }

    const trap = {
      id: `${user.uid}_${Date.now()}`, // Unique ID
      name,
      location,
      status,
      pheromones,
      plagues,
    };

    try {
      await addTrapToUser(user.uid, trap);
      setName('');
      setLocation('');
      setStatus('Activa');
      setPheromones(50);
      setPlagues(20);
      setError('');
      onClose();
    } catch (error) {
      setError('Failed to add trap');
    }
  };

  return (
    <div className="add-trap-popup">
      <div className="add-trap-content">
        <h1>Add Trap</h1>
        <form onSubmit={handleAddTrap}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Location:
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
          </label>
          <label>
            Status:
            <select value={status} onChange={(e) => setStatus(e.target.value)} required>
              <option value="Activa">Activa</option>
              <option value="Inactiva">Inactiva</option>
            </select>
          </label>
          <label>
            Pheromones:
            <input type="number" value={pheromones} onChange={(e) => setPheromones(Number(e.target.value))} required />
          </label>
          <label>
            Plagues:
            <input type="number" value={plagues} onChange={(e) => setPlagues(Number(e.target.value))} required />
          </label>
          {error && <p className="error">{error}</p>}
          <button type="submit">Add Trap</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default AddTrap;
