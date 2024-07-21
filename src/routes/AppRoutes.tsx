import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from '../components/Landing';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import App from '../components/Home'; // Formerly TrapGrid
import TrapDetail from '../components/TrapDetail';
import ProtectedRoute from '../components/ProtectedRoute';
import RedirectAuthenticated from '../components/RedirectAuthenticated';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/login"
          element={
            <RedirectAuthenticated>
              <Login />
            </RedirectAuthenticated>
          }
        />
        <Route
          path="/signup"
          element={
            <RedirectAuthenticated>
              <SignUp />
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
          path="/app/trap/:id"
          element={
            <ProtectedRoute>
              <TrapDetail />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
