import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const ViewInventory = ({ item, items }) => {
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