import React, { useState, useEffect, useContext, useCallback} from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import BackButton from '../components/NavButtons.js'
import 'primeicons/primeicons.css';
import { AuthContext } from '../App';

const InventoryTable = ({ items, setItems }) => {
  const { userId } = useContext(AuthContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const [displayModal, setDisplayModal] = useState(false);

  const fetchItems = useCallback (async () => {
    try {
      const res = await fetch('http://localhost:8080/items');
      const data = await res.json();
      const filteredItems = data.filter(item => item.users_Id === userId)
      setItems(filteredItems);
    } catch (err) {
        console.error('Error fetching items:', err);
    }
  }, [userId, setItems]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const onRowEditComplete = async (e) => {
    let { newData } = e;

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

  const viewInventoryBtn = (rowData) => {
    return (
      <Button
        icon="pi pi-eye"
        className="p-button-rounded p-button-info"
        onClick={() => {
          setSelectedItem(rowData);
          setDisplayModal(true);
        }}
      />
    )
  }

  const deleteButton = (rowData) => {
    return (
        <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => deleteItem(rowData)} />
    );
  };

  const truncateDescription = (rowData) => {
    const description = rowData.description;
    if (description.length > 100) {
      return description.substring(0, 100) + '...';
    }
    return description;
   }

  const renderModal = () => {
    if (!selectedItem) return null;

    return (
      <Dialog
        header="Item Details"
        visible={displayModal}
        style={{ width: '50vw' }}
        onHide={() => setDisplayModal(false)}
      >
        <div className="p-grid p-fluid">
          <div className="p-col-12 p-md-6">
            <h3>Item Name</h3>
            <p>{selectedItem.item_name}</p>
          </div>
          <div className="p-col-12 p-md-6">
            <h3>Quantity</h3>
            <p>{selectedItem.quantity}</p>
          </div>
          <div className="p-col-12">
            <h3>Description</h3>
            <p>{selectedItem.description}</p>
          </div>
        </div>
      </Dialog>
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
        paginator rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: '50rem' }}
      >
        <Column field="item_name" header="Item Name" editor={(options) => textEditor(options)} />
        <Column field="quantity" header="Quantity" editor={(options) => numberEditor(options)} />
        <Column field="description" header="Description" body={truncateDescription} editor={(options) => textEditor(options)} />
        <Column rowEditor header="Edit" headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }} />
        <Column  header="View" body={viewInventoryBtn} style={{ width: '100px' }}/>
        <Column header="Delete" body={deleteButton} exportable={false} style={{ minWidth: '8rem' }} />
      </DataTable>
      {renderModal()}
      <BackButton />
    </div>
  );
};

export default InventoryTable;