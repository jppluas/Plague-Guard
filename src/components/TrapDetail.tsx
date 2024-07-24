import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { useAuthState } from "react-firebase-hooks/auth";
import { ref, get, update, remove } from "firebase/database";
import { auth, database } from "../firebaseConfig";
import { useParams, useNavigate } from "react-router-dom";
import TopBar from "./TopBarDetail";
import "../styles/TrapDetail.css";

const TrapDetail: React.FC = () => {
  const { trapKey } = useParams<{ trapKey: string }>();
  const [user] = useAuthState(auth);
  const [object, setObject] = useState<{
    trapKey: string;
    name: string;
    location: string;
    status: boolean;
    pheromones: number;
    pests: number;
  }>({
    trapKey: "",
    name: "",
    location: "",
    status: false,
    pheromones: 0,
    pests: 0,
  });

  useEffect(() => {
    if (user) {
      const userObjectsRef = ref(
        database,
        `users/${user!.uid}/objects/${trapKey}`
      );
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
    swal({
      title: "¿Estás seguro?",
      text: `¿Quieres ${object.status ? "desactivar" : "activar"} la trampa?`,
      icon: "warning",
      buttons: {
        cancel: {
          text: "Cancelar",
          value: null,
          visible: true,
          className: "",
          closeModal: true,
        },
        confirm: {
          text: "Sí, cambiar",
          value: true,
          visible: true,
          className: "",
          closeModal: true,
        },
      },
      dangerMode: true,
    }).then((willChange) => {
      if (willChange) {
        const userObjectsRef = ref(
          database,
          `users/${user!.uid}/objects/${trapKey}`
        );
        update(userObjectsRef, {
          status: !object.status,
        });
        setObject({
          ...object,
          status: !object.status,
        });
      }
    });
  };

  const handleRemove = () => {
    swal({
      title: "¿Estás seguro?",
      text: "Una vez eliminada, no podrás recuperar esta trampa",
      icon: "warning",
      buttons: {
        cancel: {
          text: "Cancelar",
          value: null,
          visible: true,
          className: "",
          closeModal: true,
        },
        confirm: {
          text: "Sí, eliminar",
          value: true,
          visible: true,
          className: "",
          closeModal: true,
        },
      },
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const userObjectsRef = ref(
          database,
          `users/${user!.uid}/objects/${trapKey}`
        );
        remove(userObjectsRef);
        navigate("/app");
      }
    });
  };

  return (
    <div>
      <TopBar />

      <div className="sub-container">
      <div className="image-buttons">
          <img
            src="https://andasur.com/wp-content/uploads/2022/09/trampa-feromona-2-293x300.jpg"
            alt={object.name}
            className="trap-detail-image"
          />
          <button onClick={handleStatusChange} className="deactivate-button">
            {object.status ? "Desactivar" : "Activar"}
          </button>
          <button onClick={handleRemove} className="remove-button">
            Remove
          </button>
        </div>

      
        <div className="trap-info">
          <h2>
            {object.name} - {object.location}
          </h2>
          <p>{object.status ? "Activo" : "Inactivo"}</p>
          
            <label>Feromonas</label>
            <input
              type="range"
              min="0"
              max="100"
              value={object.pheromones}
              readOnly
            />
            <label>Plagas</label>
            <input
              type="range"
              min="0"
              max="100"
              value={object.pests}
              readOnly
            />
          

        
      </div>
      
      </div>

      
    </div>
  );
};

export default TrapDetail;
