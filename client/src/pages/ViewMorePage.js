import React from 'react'
import { useLocation } from 'react-router-dom';
import BackButton from '../components/NavButtons.js'

const ViewMorePage = () => {
  const location = useLocation();
  const { item } = location.state || {}

  console.log(item);


  return (
    <div className="card">
      {item ? (
        <div className="border-round border-1 surface-border p-4 surface-card">
          <div className="flex mb-3">
            <img src={item.imageUrl} alt={item.item_name} className="mr-2" style={{ borderRadius: '50%', width: '4rem', height: '4rem' }} />
            <div>
              <h2 className="mb-2" style={{ textTransform: 'uppercase' }}>{item.item_name}</h2>
              <p><strong>Quantity: </strong>{item.quantity}</p>
              <p><strong>Description: </strong>{item.description}</p>
            </div>
          </div>
          <div className="flex justify-content-between mt-3">
            <BackButton />
          </div>
        </div>
      ) : (
        <p>No Item Data Available</p>
      )}
    </div>
  );
}

export default ViewMorePage