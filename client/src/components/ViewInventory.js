import React from 'react';
import { useNavigate } from 'react-router-dom';

// PrimeReact Imports
import { Button } from 'primereact/button';



const ViewInventory = ({ item }) => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate('/view', { state: { item }});
  };

  return (
    <Button
      icon="pi pi-eye"
      className="p-button-rounded p-button-info p-button-sm"
      onClick={handleViewMore}
    />
  );
}

export default ViewInventory;