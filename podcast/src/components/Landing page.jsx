import React from 'react';
import Login from './Login';
import Register from './Register';




import './LandingPage.css';

export default function landingPage() {
  const [firstForm, setfirstForm] = React.useState('login');


  const toggleForm = (landingForm) => {
    setfirstForm(landingForm)
  }
  
  
  return (
    <div>  
    {
      firstForm === "login"? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
    }
    </div>
  )
}


