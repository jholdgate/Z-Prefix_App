import React, { useState, useContext } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { AuthContext } from '../App';



const AddInventory = () => {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState();
  const [description, setDescription] = useState();
  const { userId } = useContext(AuthContext);


  const search = (e) => {
    setItems([...Array(10).keys()].map(item => e.query + '-' + item));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newItem = {
      item_name: value,
      quantity: quantity,
      description: description,
      users_id: userId
    };

    try {
      const res = await fetch('http://localhost:8080/items', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newItem),
        credentials: 'include'
      });
      if (res.ok) {
        const addedItem = await res.json();
        console.log('Added item:', addedItem);

        setValue('');
        setQuantity(null);
        setDescription('');
        alert('Item added successfully!');
      }
    } catch(err) {
      console.error(err.message);
    }
  }


  return (
    <>
      <div>AddInventory</div>
      <form onSubmit={handleSubmit}>
        <div className="card flex justify-content-center">
          <label className="font-bold block mb-2">Item Name:</label>
          <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} />
        </div>
        <div className="card flex flex-wrap gap-3 p-fluid">
          <div className="flex-auto">
            <label htmlFor="integeronly" className="font-bold block mb-2">Quantity:</label>
            <InputNumber inputId="integeronly" value={quantity} onValueChange={(e) => setQuantity(e.value)} />
          </div>
        </div>
        <div className="card flex flex-wrap gap-3 p-fluid">
          <div className="flex-auto">
            <label htmlFor="description" className="font-bold block mb-2">Description:</label>
            <InputTextarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              cols={30}
            />
          </div>
        </div>
        <div className="card flex justify-content-center">
            <Button type="submit" label="Submit" onClick={handleSubmit} />
        </div>
      </form>
    </>
  )
}

export default AddInventory;