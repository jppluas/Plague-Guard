import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ref, get, update, remove } from 'firebase/database';
import { auth, database } from '../firebaseConfig';
import { useParams, useNavigate } from 'react-router-dom';

const TrapDetail: React.FC = () => {

    const { trapKey } = useParams<{ trapKey: string }>();
    const [user] = useAuthState(auth);
    const [object, setObject] = useState<{ trapKey: string, name: string, location: string, status: boolean, pheromones: number, pests: number}>({
      trapKey: '',
      name: '',
      location: '',
      status: false,
      pheromones: 0,
      pests: 0
    });

    useEffect(() => {
        if (user) {
            const userObjectsRef = ref(database, `users/${user!.uid}/objects/${trapKey}`);
            get(userObjectsRef).then((snapshot) => {
                const data = snapshot.val();
                if (data) {
                    setObject(data);
                }
            });
        }
    }, [user, trapKey]); // Añadir trapKey a la lista de dependencias

    const navigate = useNavigate();

    const handleStatusChange = () => {
        const userObjectsRef = ref(database, `users/${user!.uid}/objects/${trapKey}`);
        update(userObjectsRef, {
            status: !object.status
        });
        setObject({
            ...object,
            status: !object.status
        });
    };

    const handleRemove = () => {
        const userObjectsRef = ref(database, `users/${user!.uid}/objects/${trapKey}`);
        remove(userObjectsRef)
        navigate("/app");
    }


  return (
    <div className="trap-detail">
      <button onClick={() => navigate('/app')} className="back-button">Back</button>
      <h2>{object.name} - {object.location}</h2>
      <p>{object.status ? 'Activo' : 'Inactivo'}</p>
      <div className="slider-container">
        <label>Feromonas</label>
        <input type="range" min="0" max="100" value={object.pheromones} readOnly />
        <label>Plagas</label>
        <input type="range" min="0" max="100" value={object.pests} readOnly />
      </div>
      <div className="buttons">
        <button onClick={handleStatusChange} className="deactivate-button">
          {object.status ? 'Desactivar' : 'Activar'}
        </button>
        <button onClick={handleRemove} className="remove-button">Remove</button>
      </div>
    </div>
  );
};

export default TrapDetail;
