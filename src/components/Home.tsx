import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ref, onValue } from 'firebase/database';
import { auth, database } from '../firebaseConfig';
import TrapCard from './TrapCard';
import AddTrap from './AddTrap';
import TopBar from './TopBar';
import AdSidebar from './AdSidebar';
import PlanForm from './PlanForm';
import { useAppContext } from '../context/AppContext';
import '../styles/Home.css';

const App: React.FC = () => {
  const [user] = useAuthState(auth);
  const { isPaidVersion } = useAppContext();
  const [objects, setObjects] = useState<{ trapKey: string; id: string; name: string; location: string; trampa: boolean }[]>([]);
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
      {!isPaidVersion && <AdSidebar position="left" />}
      {!isPaidVersion && <AdSidebar position="right" />}
      {!isPaidVersion && <AdSidebar position="bottom" />}
      {showAddTrap && <AddTrap onClose={handleCloseAddTrap} />}
      <div className="trap-list">
        {objects.length === 0 ? (
          <div className="no-traps-message">
            No hay trampas disponibles. Por favor, agregue una nueva trampa.
          </div>
        ) : (
          objects.map((object) => (
            <TrapCard key={object.trapKey} trapKey={object.trapKey} name={object.name} location={object.location} trampa={object.trampa} />
          ))
        )}
      </div>
      <PlanForm />
    </div>
  );
};

export default App;
