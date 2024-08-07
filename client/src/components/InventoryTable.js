import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';


const InventoryTable = ({ newItem }) => {
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

  const actionButtons = (rowData) => {
    return (
      <React.Fragment>
        {/* <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => editItem(rowData)} /> */}
        <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => deleteItem(rowData)} />
      </React.Fragment>
    );
  };

  // const editItem = (item) => {

  //   console.log('Edit item:', item)
  // }

  const deleteItem = async (item) => {
    try {
      const res = await fetch(`http://localhost:8080/items/${item.id}`, {
        method: 'DELETE',
        credentials: 'include'
      });

      if (res.ok) {
        setItems(prevItems => prevItems.filter(i => i.id !== item.id));
      } else {
        const errorData = await res.json();
        console.error('Error deleting item:', errorData.error);
      }
    } catch (err) {
        console.error('Error deleting item:', err);
    }
  }

  return (
        <div>
            <h1>Inventory Table</h1>
            <DataTable value={items} >
                <Column field="id" header="ID"></Column>
                <Column field="item_name" header="Item Name"></Column>
                <Column field="quantity" header="Quantity"></Column>
                <Column field="description" header="Description"></Column>
                <Column body={actionButtons} exportable={false} style={{ minWidth: '8rem' }}></Column>
            </DataTable>
        </div>
    );
}

export default InventoryTable;