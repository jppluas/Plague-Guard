import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../components/Home'; 
import TrapDetail from '../components/TrapDetail';
import Tutoriales from '../components/Tutoriales';
import AppAuth from '../components/AppAuth';
import ProtectedRoute from '../components/ProtectedRoute';
import RedirectAuthenticated from '../components/RedirectAuthenticated';
import UserProfile from '../components/UserProfile';
import NotFound from '../components/NotFound'; // Importa el componente NotFound

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route
          path="/"
          element={
            <RedirectAuthenticated>
              <AppAuth />
            </RedirectAuthenticated>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectAuthenticated>
              <AppAuth />
            </RedirectAuthenticated>
          }
        />
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          }
        />
        <Route
          path="/app/trap/:trapKey"
          element={
            <ProtectedRoute>
              <TrapDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/app/profile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route path="/tutoriales" element={<Tutoriales />} />
        <Route path="*" element={<NotFound />} /> {/* Ruta para la página 404 */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
