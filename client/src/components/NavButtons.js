import React from 'react';
import {useNavigate} from 'react-router-dom';

// PrimeReact Imports
import { Button } from 'primereact/button';



export default function BackButton() {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  }
    return (
            <Button label="Back" onClick={()=> navigateBack()}/>
    )
}
