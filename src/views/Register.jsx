import React, { useState } from 'react';
import RegisterForm from '../components/RegisterForm';

const Register = () => {

  const [registered, setRegistered] = useState({
    status : false,
    msg : ""
  })

  const registerUser = (infos) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body : JSON.stringify(infos)
    }

    fetch(`/api/users`, options)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          console.log('error: ', data);
          setRegistered({
            status : false,
            msg : 'Une erreur est survenue, veuillez réessayer ultérieurement.'
          })
        } else {
          setRegistered({
            status : true,
            msg : 'Inscription éffectué avec succès !'
          })
        }
    })
  }

  return (<div>
    <p>Hello Register !</p>
    <RegisterForm onSubmit={infos => registerUser(infos)}/>
    <p>{registered.msg}</p>
  </div>
  );
}

export default Register
