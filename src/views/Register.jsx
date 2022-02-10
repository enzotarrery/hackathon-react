import React, { useState } from 'react';
import RegisterForm from '../components/RegisterForm';

const Register = () => {

  const [registered, setRegistered] = useState({
    status : false,
    msg : ""
  })

  const registerUser = (infos) => {
    // const formData = new FormData()
    // formData.append('firstName', infos.firstName)
    // formData.append('lastName', infos.lastName)
    // formData.append('email', infos.email)
    // formData.append('password', infos.password)
    // formData.append('role', infos.role)
    // formData.append('favoritePlacesId', infos.favoritePlacesId)
    // formData.append('favoriteInstructorsId', infos.favoriteInstructorsId)
    // formData.append('instructorInfos', infos.instructorInfos)
    // // formData.append('image', infos.car[0])
    // formData.append('isAvailable', infos.isAvailable)

    const options = {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      // headers: { "Content-Type": "multipart/form-data"},
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
