import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { ref, get, update } from "firebase/database";
import { auth, database } from "../firebaseConfig";
import { useParams } from "react-router-dom";
import TopBar from "./TopBarDetail";
import AdSidebar from "./AdSidebar";
import { useAppContext } from "../context/AppContext";
import "../styles/TrapDetail.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLifeRing } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

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
        /* const userObjectsRef = ref(database, `users/${user!.uid}/objects/${trapKey}`);
        remove(userObjectsRef);
        navigate("/app"); */
        swal({
          title: "¡UPS!",
          text: "Esta función se encuentra desabilitada por el momento",
          icon: "info",
        });
      }
    });
  };

  const solicitarAsistencia = () => {
    Swal.fire({
      title: 'Asistencia',
      text: 'Se ha comunicado con un especialista para asistirle en su problema',
      icon: 'success',
      confirmButtonText: 'Aceptar',
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
          {isPaidVersion && <h4>Su cambio de feromonas llega en 56 días.</h4>}  
          <div className="action-buttons">
          <button onClick={handleStatusChange} className="deactivate-button">
            {object.trampa ? "Desactivar" : "Activar"}
          </button>
          <button onClick={handleRemove} className="remove-button">
            Eliminar
          </button>
          </div>         
          
         
        </div>

        <div className="trap-info">
          <h2>
            {object.name} - {object.location}
          </h2>
          <p className={object.trampa ? "status-active" : "status-inactive"}>
            {object.trampa ? "Activo" : "Inactivo"}
          </p>
          <div className="trap-data">
          <p>Siguiente cambio de feromonas</p>
          <h2>{object.pheromones} días restantes</h2>
          <p>Conteo de Plagas</p>
          <h2>{object.contador} capturados</h2>
          </div>
          
          {isPaidVersion && <button onClick={solicitarAsistencia}>
            Solicitar asistencia <FontAwesomeIcon icon={faLifeRing} />
          </button>}
          
          
        </div>
      </div>
      {!isPaidVersion && <AdSidebar position="bottom" />}

    </div>
  );
};

export default TrapDetail;
