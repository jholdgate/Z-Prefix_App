import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

const VisitorInventoryTable = ({ newItem }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    if (newItem) {
      setItems(prevItems => [...prevItems, newItem]);
    }
  }, [newItem]);

  const fetchItems = async () => {
    try {
      const res = await fetch('http://localhost:8080/items');
      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.error('Error fetching items:', err);
    }
  };

  const viewMoreButton = (rowData) => {
    return (
      <Button
        icon="pi pi-eye"
        className="p-button-rounded p-button-info p-button-sm"
        onClick={() => handleViewMore(rowData)}
      />
    );
  };

  const handleViewMore = (rowData) => {
    // Implement view more functionality here
    console.log('View more for:', rowData);
  };

  return (
    <div>
      <h1>Inventory Table</h1>
      <DataTable value={items} dataKey="id">
        <Column field="item_name" header="Item Name" />
        <Column field="quantity" header="Quantity" />
        <Column field="description" header="Description" />
        <Column header="View More" body={viewMoreButton} style={{ width: '100px' }} />
      </DataTable>
    </div>
  );
};

export default VisitorInventoryTable;