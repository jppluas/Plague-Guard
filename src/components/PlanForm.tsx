import React, { useState } from 'react';
import '../styles/PlanForm.css';

const PlanForm: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="container">
      <button onClick={toggleFormVisibility}>
        {showForm ? 'Ocultar Formulario' : 'Responder Formulario'}
      </button>
      {showForm && (
        <iframe
          width="900px"
          height="480px"
          src="https://forms.office.com/Pages/ResponsePage.aspx?id=r4yvt9iDREaFrjF8VFIjwf8sLbr7JIJJlGLZEOBle1VUQlQ4MjZIN1A1TUo1WUVFVE9UQVkzNzJZOC4u&embed=true"
          frameBorder="0"
          marginWidth={0}
          marginHeight={0}
          style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default PlanForm;