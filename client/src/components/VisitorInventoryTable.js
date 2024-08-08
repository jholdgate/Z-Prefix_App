import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ViewInventory from './ViewInventory';
import BackButton from '../components/NavButtons.js'

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

  const viewInventoryBtn = (rowData) => {
    return <ViewInventory item={rowData} />
  }

  return (
    <div>
      <h1>Inventory Table</h1>
      <DataTable value={items} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
        <Column field="item_name" header="Item Name" />
        <Column field="quantity" header="Quantity" />
        <Column field="description" header="Description" />
        <Column  header="View" body={viewInventoryBtn} style={{ width: '100px' }}/>
      </DataTable>
      <BackButton />
    </div>
  );
};

export default VisitorInventoryTable;