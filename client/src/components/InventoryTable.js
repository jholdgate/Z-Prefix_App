import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';


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

  const onRowEditComplete = async (e) => {
    let { newData, index } = e;

    try {
      const res = await fetch(`http://localhost:8080/items/${newData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
        credentials: 'include'
      });

      if (res.ok) {
        setItems(prevItems =>
          prevItems.map(item => item.id === newData.id ? newData : item)
        );
      } else {
        const errorData = await res.json();
        console.error('Error updating item:', errorData.error);
      }
    } catch (err) {
      console.error('Error updating item:', err);
    }
  };

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

  const textEditor = (options) => {
    return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
  };

  const numberEditor = (options) => {
    return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} />;
  };

  const actionButtons = (rowData) => {
    return (
      <React.Fragment>
        <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => deleteItem(rowData)} />
      </React.Fragment>
    );
  };

  return (
    <div>
      <h1>Inventory Table</h1>
      <DataTable
        value={items}
        editMode="row"
        dataKey="id"
        onRowEditComplete={onRowEditComplete}
      >
        <Column field="item_name" header="Item Name" editor={(options) => textEditor(options)} />
        <Column field="quantity" header="Quantity" editor={(options) => numberEditor(options)} />
        <Column field="description" header="Description" editor={(options) => textEditor(options)} />
        <Column rowEditor header="Edit" headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }} />
        <Column header="Delete" body={actionButtons} exportable={false} style={{ minWidth: '8rem' }} />
      </DataTable>
    </div>
  );
};

export default InventoryTable;