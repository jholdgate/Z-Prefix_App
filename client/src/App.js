import './App.css';
import { useEffect, useState } from 'react';

const userUrl= `http://localhost:8080/users/`
const itemUrl= `http://localhost:8080/items/`

function App() {
  let [users, setUsers] = useState([]);
  let [items, setItems] = useState([]);

  useEffect(() => {
    fetch(userUrl)
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      })
  }, [])

  useEffect(() => {
    fetch(itemUrl)
      .then(res => res.json())
      .then(data => {
        setItems(data);
      })
  }, [])

  return (
    <div className="App">
      {JSON.stringify(users)}
      <div>
        {JSON.stringify(items)}
      </div>
    </div>
  );
}

export default App;









