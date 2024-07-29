import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { useAuthState } from "react-firebase-hooks/auth";
import { ref, get, update, remove } from "firebase/database";
import { auth, database } from "../firebaseConfig";
import { useParams, useNavigate } from "react-router-dom";
import TopBar from "./TopBarDetail";
import AdSidebar from "./AdSidebar";
import { useAppContext } from "../context/AppContext";
import "../styles/TrapDetail.css";

const TrapDetail: React.FC = () => {
  const { trapKey } = useParams<{ trapKey: string }>();
  const [user] = useAuthState(auth);
  const { isPaidVersion } = useAppContext();
  const [object, setObject] = useState<{
    trapKey: string;
    name: string;
    location: string;
    status: boolean;
    pheromones: number;
    pests: number;
    contador: number;
    trampa: boolean;
  }>({
    trapKey: "",
    name: "",
    location: "",
    status: false,
    pheromones: 0,
    pests: 0,
    contador: 0,
    trampa: true,
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
  }, [user, trapKey]);

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
        const userObjectsRef = ref(database, `users/${user!.uid}/objects/${trapKey}`);
        update(userObjectsRef, {
          trampa: !object.trampa,
        });
        setObject({
          ...object,
          trampa: !object.trampa,
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
        const userObjectsRef = ref(database, `users/${user!.uid}/objects/${trapKey}`);
        remove(userObjectsRef);
        navigate("/app");
      }
    });
  };

  return (
    <div>
      <TopBar />
      {!isPaidVersion && <AdSidebar position="left" />}
      {!isPaidVersion && <AdSidebar position="right" />}
      {!isPaidVersion && <AdSidebar position="bottom" />}
      <div className="sub-container">
        <div className="image-buttons">
          <img
            src="https://andasur.com/wp-content/uploads/2022/09/trampa-feromona-2-293x300.jpg"
            alt={object.name}
            className="trap-detail-image"
          />
          <button onClick={handleStatusChange} className="deactivate-button">
            {object.trampa ? "Desactivar" : "Activar"}
          </button>
          <button onClick={handleRemove} className="remove-button">
            Eliminar
          </button>
        </div>

        <div className="trap-info">
          <h2>
            {object.name} - {object.location}
          </h2>
          <p className={object.trampa ? "status-active" : "status-inactive"}>
            {object.trampa ? "Activo" : "Inactivo"}
          </p>
          <h3>Siguiente cambio de feromonas</h3>
          <p>{object.pheromones} días restantes</p>
          <h3>Conteo de Plagas</h3>
          <p>{object.contador}</p>
        </div>
      </div>
    </div>
  );
};

export default TrapDetail;
