import React, { useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';

// Auth
import Cookies from 'js-cookie';

// components
import AddInventory from '../components/AddInventory';
import InventoryTable from '../components/InventoryTable';


const ManagerInventoryPage = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const checkAuth = async () => {
      const token = Cookies.get('auth_token');
      if (!token) {
        navigate('/');
      }
    };
    checkAuth()
  }, [navigate]);


  const handleItemAdded = (item) => {
    setItems(prevItems => [...prevItems, item]);
  };

  return (
    <div>
      <h1>ManagerInventoryPage(Welcome, User...)</h1>
      <AddInventory onItemAdded={handleItemAdded} />
      <InventoryTable items={items} setItems={setItems}/>
    </div>
  )
}

export default ManagerInventoryPage