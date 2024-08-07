import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Auth
import Cookies from 'js-cookie';

// components
import AddInventory from '../components/AddInventory';


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
    <div>
      <h1>ManagerInventoryPage(Welcome, User...)</h1>
      <AddInventory />
    </div>
  )
}

export default ManagerInventoryPage