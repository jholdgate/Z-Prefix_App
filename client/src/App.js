import './App.css';
import { useEffect, useState } from 'react';

const baseUrl= `http://localhost:8080/users/`

function App() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      })
  }, [])

  return (
    <div className="App">
      {JSON.stringify(users)}
    </div>
  );
}

export default App;
