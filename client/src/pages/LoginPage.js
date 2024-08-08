import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import Cookies from 'js-cookie';
import LoginComponent from '../components/LoginComponent';
import RegisterComponent from '../components/RegisterComponent';

const LoginPage = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const alert = (msg) => {
    setMessage(msg);
    setVisible(true);
  }

  useEffect(() => {
    const rememberMe = Cookies.get('rememberMe') === 'true';
    if (rememberMe) {
      const savedUsername = Cookies.get('username');
      if (savedUsername) {
        // You can use this to pre-fill the username in the LoginComponent if needed
      }
    }
  }, [])

  return (
    <div className="card">
      {showRegister ? (
        <RegisterComponent onShowLogin={() => setShowRegister(false)} alert={alert} />
      ) : (
        <LoginComponent onShowRegister={() => setShowRegister(true)} alert={alert} />
      )}
      <Dialog header="Alert" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
        <p className="m-0">{message}</p>
      </Dialog>
    </div>
  )
}

export default LoginPage;