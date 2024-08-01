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
  const [trampa, setTrampa] = useState('Activa');
  const [pheromones, setPheromones] = useState(100);
  const [contador, setContador] = useState(0);
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
      trampa,
      pheromones,
      contador,
    };

    try {
      await addTrapToUser(user.uid, trap);
      setName('');
      setLocation('');
      setTrampa('Activa');
      setPheromones(100);
      setContador(0);
      setError('');
      onClose();
    } catch (error) {
      setError('Failed to Nueva trampa');
    }
  };

  return (
    <div className="add-trap-popup">
      <div className="add-trap-content">
        <h1>Nueva trampa</h1>
        <form onSubmit={handleAddTrap}>
          <label>
            Nombre:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Ubicacion:
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
          </label>
          <label>
            Estado:
            <select value={trampa} onChange={(e) => setTrampa(e.target.value)} required>
              <option value="Activa">Activa</option>
              <option value="Inactiva">Inactiva</option>
            </select>
          </label>
          <label>
            Feromonas:
            <input type="number" value={pheromones} onChange={(e) => setPheromones(Number(e.target.value))} required />
          </label>
          <label>
            Plagas:
            <input type="number" value={contador} onChange={(e) => setContador(Number(e.target.value))} required />
          </label>
          {error && <p className="error">{error}</p>}
          <button type="submit">Añadir trampa</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
};

export default AddTrap;
