// src/components/AddObjectComponent.tsx
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import { addObjectToUser } from '../databaseService';

const AddObjectComponent: React.FC = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const handleAddObject = async () => {
    if (user) {
      try {
        await addObjectToUser(user.uid, { name, value });
        setName('');
        setValue('');
      } catch (error) {
        console.error('Error adding object:', error);
      }
    }
  };

  return (
    <div>
      <h1>Add Object</h1>
      <form onSubmit={e => { e.preventDefault(); handleAddObject(); }}>
        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </label>
        <label>
          Value:
          <input type="text" value={value} onChange={e => setValue(e.target.value)} required />
        </label>
        <button type="submit">Add Object</button>
      </form>
    </div>
  );
};

export default AddObjectComponent;
