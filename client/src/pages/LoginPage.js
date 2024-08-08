import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import Login from '../components/Login';
import Register from '../components/Register';

// Auth Imports
import Cookies from 'js-cookie';

// PrimeReact Imports
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';



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
    navigate('/visitor');
  }

  useEffect(() => {
    const rememberMe = Cookies.get('rememberMe') === 'true';
    if (rememberMe) {
      const savedUsername = Cookies.get('username');
      if (savedUsername) {
      }
    }
  }, [])

  return (
    <div className="flex align-items-center justify-content-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-30rem">
        {showRegister ? (
          <Register onShowLogin={() => setShowRegister(false)} alert={alert} />
        ) : (
          <Login onShowRegister={() => setShowRegister(true)} alert={alert} />
        )}
        <Dialog header="Alert" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
          <p className="m-0">{message}</p>
        </Dialog>
        <div className="text-center mt-3">
          <Button label="Go to Visitors" onClick={navigateToVisitors} className="p-button-secondary" />
        </div>
      </Card>
    </div>
  )
}

export default LoginPage;