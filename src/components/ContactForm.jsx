import {React, useState} from 'react';

const ContactForm = ({onSubmit}) => {

  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    msg: ''
  })

  const handleFormChange = e => {
    setFormState({
        ...formState,
        [e.target.name]: e.target.value
    })
  }

  return (<form className='registerForm'>
      <label className='registerForm__label' htmlFor="lastName">Nom</label>
      <input className='registerForm__input' type="text" name="lastName" id="lastName" value={formState.lastName} onChange={handleFormChange} required/>
      
      <label className='registerForm__label' htmlFor="firstName">Prénom</label>
      <input className='registerForm__input' type="text" name="firstName" id="firstName" value={formState.firstName} onChange={handleFormChange} required/>

      <label className='registerForm__label' htmlFor="email">Email</label>
      <input className='registerForm__input' type="email" name="email" id="email" value={formState.email} onChange={handleFormChange} required/>

      <label className='registerForm__label' htmlFor="msg">Message</label>
      <textarea className='registerForm__input' rows="10" cols="50" name="msg" id="msg" value={formState.msg} onChange={handleFormChange} required/>

      <input className='registerForm__submit' type="submit" value="Envoyer"/>

    </form>
  );
}

export default ContactForm
