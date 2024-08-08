import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import Cookies from 'js-cookie';
import Login from '../components/Login';
import Register from '../components/Register';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const alert = (msg) => {
    setMessage(msg);
    setVisible(true);
  }

  const navigateToVisitors = () => {
    navigate('/visitor'); // Navigate to the /visitors route
  }

  useEffect(() => {
    const rememberMe = Cookies.get('rememberMe') === 'true';
    if (rememberMe) {
      const savedUsername = Cookies.get('username');
      if (savedUsername) {
        // You can use this to pre-fill the username in the Login if needed
      }
    }
  }, [])

  return (
    <div className="card">
      {showRegister ? (
        <Register onShowLogin={() => setShowRegister(false)} alert={alert} />
      ) : (
        <Login onShowRegister={() => setShowRegister(true)} alert={alert} />
      )}
      <Dialog header="Alert" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
        <p className="m-0">{message}</p>
      </Dialog>
      <Button label="Go to Visitors" onClick={navigateToVisitors} className="p-button-secondary mt-3" />
    </div>
  )
}

export default LoginPage;