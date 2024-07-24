import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/NotFound.css"; // Asegúrate de crear un archivo CSS para estilizar la página 404

const NotFound: React.FC = () => {
  return (
	<div className="not-found">
	  <h1>404</h1>
	  <p>Página no encontrada</p>
	  <Link to="/">Volver al inicio</Link>
	</div>
  );
};

export default NotFound;