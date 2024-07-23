import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ref, onValue } from 'firebase/database';
import { auth, database } from '../firebaseConfig';
import TrapCard from './TrapCard';
import AddTrap from './AddTrap';
import TopBar from './TopBar';
import '../styles/Home.css'; 

const App: React.FC = () => {
  const [user] = useAuthState(auth);
  const [objects, setObjects] = useState<{ trapKey: string, id: string, name: string, location: string, status: boolean}[]>([]);
  const [showAddTrap, setShowAddTrap] = useState(false);

  useEffect(() => {
    if (user) {
      const userObjectsRef = ref(database, `users/${user.uid}/objects`);
      onValue(userObjectsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const loadedObjects = Object.keys(data).map((key) => ({
            key: key,
            trapKey: key,
            ...data[key],
          }));
          setObjects(loadedObjects);
        } else {
          setObjects([]);
        }
      });
    }
  }, [user]);

  const handleAddTrapClick = () => {
    setShowAddTrap(true);
  };

  const handleCloseAddTrap = () => {
    setShowAddTrap(false);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container app">
      <TopBar onAddTrapClick={handleAddTrapClick} />
      {showAddTrap && <AddTrap onClose={handleCloseAddTrap} />}
      <div className="trap-list">
        {objects.map((object) => (
          <TrapCard key={object.trapKey} trapKey={object.trapKey} name={object.name} location={object.location} status={object.status} />
        ))}
      </div>
    </div>
  );
};

export default App;
