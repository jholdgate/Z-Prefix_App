import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from "primereact/floatlabel";
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
    <form className="flex-container flex-column align-items-center justify-content-center gap-3 py-5">
      <h2>Login</h2>
      <FloatLabel>
        <InputText id="username" type="text" className="w-12rem" minLength="5" maxLength="30" value={username} onChange={(e) => setUsername(e.target.value)} required/>
        <label>Username</label>
      </FloatLabel>
      <FloatLabel>
        <InputText id="password" type="password" className="w-12rem" minLength="5" maxLength="30" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <label>Password</label>
      </FloatLabel>
      <div>
        <input type="checkbox" checked={checked} onChange={handleRememberMe}/>
        <label>Remember Me</label>
      </div>
      <Button label="Login" type="submit" icon="pi pi-user" className="w-10rem mx-auto" onClick={handleLogin}></Button>
      <Button label="Register" type="button" icon="pi pi-user-plus" className="w-10rem mx-auto p-button-secondary" onClick={onShowRegister}></Button>
    </form>
  );
};

export default Login;