import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from "primereact/checkbox";
import { AuthContext } from '../App';
import Cookies from 'js-cookie';
import authenticate from '../components/Auth.js';

const Login = ({ onShowRegister, alert }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const { setAuth, setUserId } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    let userValidation = formValidation(username, `Username`);
    let passValidation = formValidation(password, `Password`)
    if (!userValidation && !passValidation) {
      const status = await authenticate(username, password, 'login');
      if (checked) {
        Cookies.set('username', username);
        Cookies.set('rememberMe', 'true');
      } else {
        Cookies.remove('username');
        Cookies.set('rememberMe', 'false');
      }
      handleResponse(status);
    } else {
      let msg = userValidation || passValidation;
      alert(msg);
    }
  };

  const handleResponse = (res) => {
    if (res.token) {
      Cookies.set('auth_token', res.token);
      Cookies.set('user_id', res.userId)
      setAuth(true);
      setUserId(res.userId);
      navigate('/inventory')
    } else {
      alert(res.message)
    }
  };

  const handleRememberMe = () => {
    setChecked(!checked);
  };

  const formValidation = (input, inputType) => {
    let strRegex = new RegExp(/^[a-z0-9]+$/i);
    let validChars = strRegex.test(input);
    let validLength = (input.length >= 5) && (input.length <= 30);
    if (!validChars) {
      return `Invalid Characters in ${inputType}, only alphanumeric characters are acceptable.\n`;
    }
    if (!validLength) {
      return `Invalid Length in ${inputType}, input must be 5-30 characters.\n`;
    }
    return false;
  }

  return (
    <div className="flex align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <h2 className="text-center mb-4">Login</h2>
        <div className="flex flex-column gap-2">
          <label htmlFor="username" className="block text-900 font-medium mb-2">Username</label>
          <InputText id="username" type="text" className="w-full" value={username} onChange={(e) => setUsername(e.target.value)} required minLength={5} maxLength={30} />

          <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
          <InputText id="password" type="password" className="w-full" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={5} maxLength={30} />

          <div className="flex align-items-center justify-content-between mb-4 mt-2">
            <div className="flex align-items-center">
              <Checkbox inputId="rememberMe" onChange={handleRememberMe} checked={checked} className="mr-2" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
          </div>

          <Button label="Login" icon="pi pi-user" className="w-full" onClick={handleLogin} />
          <Button label="Register" icon="pi pi-user-plus" className="w-full p-button-secondary mt-2" onClick={onShowRegister} />
        </div>
      </div>
    </div>
  );
};

export default Login;