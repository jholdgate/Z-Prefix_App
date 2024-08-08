import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// PrimeReact CSS
import "primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";

// Auth
import Cookies from 'js-cookie';

// ROUTES
import LoginPage from './pages/LoginPage.js';
import ManagerInventoryPage from './pages/ManagerInventoryPage.js';
import VisitorInventoryPage from './pages/VisitorInventoryPage.js';
import ViewMorePage from './pages/ViewMorePage.js';

export const AuthContext = React.createContext();

function App() {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = Cookies.get('auth_token');
    if (token) {
      setAuth(true);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth, userId, setUserId }}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/inventory" element={auth ? <ManagerInventoryPage /> : <Navigate to="/" />} />
        <Route path="/visitor" element={<VisitorInventoryPage />} />
        <Route path="/view" element={<ViewMorePage />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;









