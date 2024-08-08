import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
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
    <div className="flex align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <h2 className="text-center mb-4">Register</h2>
        <div className="flex flex-column gap-2">
          <label htmlFor="firstName" className="block text-900 font-medium mb-2">First Name</label>
          <InputText id="firstName" type="text" className="w-full" value={firstName} onChange={(e) => setFirstName(e.target.value)} required minLength={2} maxLength={30} />

          <label htmlFor="lastName" className="block text-900 font-medium mb-2">Last Name</label>
          <InputText id="lastName" type="text" className="w-full" value={lastName} onChange={(e) => setLastName(e.target.value)} required minLength={2} maxLength={30} />

          <label htmlFor="username" className="block text-900 font-medium mb-2">Username</label>
          <InputText id="username" type="text" className="w-full" value={username} onChange={(e) => setUsername(e.target.value)} required minLength={5} maxLength={30} />

          <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
          <InputText id="password" type="password" className="w-full" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={5} maxLength={30} />

          <Button label="Register" icon="pi pi-user-plus" className="w-full mt-2" onClick={handleRegister} />
          <Button label="Back to Login" icon="pi pi-arrow-left" className="w-full p-button-secondary mt-2" onClick={onShowLogin} />
        </div>
      </div>
    </div>
  );
};

export default Register;