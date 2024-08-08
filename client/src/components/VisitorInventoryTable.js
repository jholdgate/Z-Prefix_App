import React, { useState, useEffect } from 'react';

// Components
import ViewInventory from './ViewInventory';
import BackButton from '../components/NavButtons.js'

// PrimeReact Imports
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';



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

   const truncateDescription = (rowData) => {
    const description = rowData.description;
    if (description.length > 100) {
      return description.substring(0, 100) + '...';
    }
    return description;
   }

  return (
    <div>
      <h2 className="mx-0 my-1">Inventory Table</h2>
      <DataTable value={items} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
        <Column field="item_name" header="Item Name" sortable filter filterPlaceholder="Search by item name" />
        <Column field="quantity" header="Quantity" sortable filter filterPlaceholder="Search by quantity" />
        <Column field="description" header="Description" body={truncateDescription} filter filterPlaceholder="Search by description" />
        <Column field="lastName" header="Owner's Last Name" sortable filter filterPlaceholder="Search by last name" />
        <Column header="View" body={viewInventoryBtn} style={{ width: '100px' }}/>
      </DataTable>
      <BackButton />
    </div>
  );
};

export default VisitorInventoryTable;