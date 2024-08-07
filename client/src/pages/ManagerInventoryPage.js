import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Auth
import Cookies from 'js-cookie';


const ManagerInventoryPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const token = Cookies.get('auth_token');
      if (!token) {
        navigate('/');
      }
    };
    checkAuth()
  }, [navigate]);

  return (
    <div>ManagerInventoryPage</div>
  )
}

export default ManagerInventoryPage