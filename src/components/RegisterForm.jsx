import {React, useState} from 'react';

const RegisterForm = ({onSubmit}) => {

  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
  })

  const handleFormChange = e => {
    setFormState({
        ...formState,
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    return onSubmit(formState)
  }

  return (<form onSubmit={handleSubmit}>
      <label htmlFor="lastName">Nom</label>
      <input type="text" name="lastName" id="lastName" value={formState.lastName} onChange={handleFormChange} required/>
      
      <label htmlFor="firstName">Prénom</label>
      <input type="text" name="firstName" id="firstName" value={formState.firstName} onChange={handleFormChange} required/>

      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" value={formState.email} onChange={handleFormChange} required/>

      <label htmlFor="password">Mot de passe</label>
      <input type="password" name="password" id="password" value={formState.password} onChange={handleFormChange} required/>

      <p>Je suis un :</p>
      <label htmlFor="student">Élève</label>
      <input type="radio" name="role" id="student" value="student"  onChange={handleFormChange} required/>
      <label htmlFor="instructor">Moniteur</label>
      <input type="radio" name="role" id="instructor" value="instructor" onChange={handleFormChange} required/>

      <input type="submit" value="S'enregistrer"/>
    </form>
  );
}

export default RegisterForm
