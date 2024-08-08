import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from "primereact/floatlabel";
import authenticate from '../components/Auth.js';

const Register = ({ onShowLogin, alert }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    let userValidation = formValidation(username, 'Username');
    let passValidation = formValidation(password, 'Password');
    let firstNameValidation = nameValidation(firstName, 'First Name');
    let lastNameValidation = nameValidation(lastName, 'Last Name');

    if (!userValidation && !passValidation && !firstNameValidation && !lastNameValidation) {
      const status = await authenticate(username, password, 'create', firstName, lastName);
      handleResponse(status);
    } else {
      let msg = userValidation || passValidation || firstNameValidation || lastNameValidation;
      alert(msg);
    }
  };

  const handleResponse = (res) => {
    if (res.userId) {
      alert('User created successfully. Please log in.');
      onShowLogin();
    } else {
      alert(res.message);
    }
  };

  const formValidation = (input, inputType) => {
    let strRegex = new RegExp(/^[a-z0-9]+$/i);
    let validChars = strRegex.test(input);
    let validLength = (input.length >= 5) && (input.length <= 30);
    if (!validChars) {
      return `Invalid characters in ${inputType}, only alphanumeric characters are acceptable.\n`;
    }
    if (!validLength) {
      return `Invalid length in ${inputType}, input must be 5-30 characters.\n`;
    }
    return false;
  }

  const nameValidation = (input, inputType) => {
    let strRegex = new RegExp(/^[a-zA-Z]+$/);
    let validChars = strRegex.test(input);
    let validLength = (input.length >= 2) && (input.length <= 30);
    if (!validChars) {
      return `Invalid characters in ${inputType}, only alphabetic characters are acceptable.\n`;
    }
    if (!validLength) {
      return `Invalid length in ${inputType}, input must be 2-30 characters.\n`;
    }
    return false;
  }

  return (
    <form className="flex-container flex-column align-items-center justify-content-center gap-3 py-5">
      <h2>Register</h2>
      <FloatLabel>
        <InputText id="firstName" type="text" className="w-12rem" minLength="2" maxLength="30" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
        <label>First Name</label>
      </FloatLabel>
      <FloatLabel>
        <InputText id="lastName" type="text" className="w-12rem" minLength="2" maxLength="30" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
        <label>Last Name</label>
      </FloatLabel>
      <FloatLabel>
        <InputText id="username" type="text" className="w-12rem" minLength="5" maxLength="30" value={username} onChange={(e) => setUsername(e.target.value)} required/>
        <label>Username</label>
      </FloatLabel>
      <FloatLabel>
        <InputText id="password" type="password" className="w-12rem" minLength="5" maxLength="30" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <label>Password</label>
      </FloatLabel>
      <Button label="Register" type="submit" icon="pi pi-user-plus" className="w-10rem mx-auto" onClick={handleRegister}></Button>
      <Button label="Back to Login" type="button" icon="pi pi-arrow-left" className="w-10rem mx-auto p-button-secondary" onClick={onShowLogin}></Button>
    </form>
  );
};

export default Register;