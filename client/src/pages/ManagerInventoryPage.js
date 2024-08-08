import React, { useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';

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

  const navigateToVisitors = () => {
    navigate('/visitor'); // Navigate to the /visitors route
  }

  return (
    <div>
      <h1>Manager Inventory</h1>
      <AddInventory onItemAdded={handleItemAdded} />
      <InventoryTable items={items} setItems={setItems}/>
      <Button label="View All Inventory" onClick={navigateToVisitors} className="p-button-secondary mt-3" />
    </div>
  )
}

export default ManagerInventoryPage