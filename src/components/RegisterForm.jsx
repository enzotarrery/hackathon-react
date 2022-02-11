import {React, useRef, useState} from 'react';

const RegisterForm = ({onSubmit}) => {

  const fileRef = useRef(null)

  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
    favoritePlacesId: [],
    favoriteInstructorsId: [],
    instructorInfos : {
      car : '',
    },
    isAvailable: true,
  })

  const handleFormChange = e => {
    setFormState({
        ...formState,
        [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (evt) => {
    setFormState({
      ...formState,
      car : evt.target.files
    })
    console.log(evt.target.files);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    return onSubmit(formState)
  }

  return (<form className='registerForm' onSubmit={handleSubmit}>
      <label className='registerForm__label' htmlFor="lastName">Nom</label>
      <input className='registerForm__input' type="text" name="lastName" id="lastName" value={formState.lastName} onChange={handleFormChange} required/>
      
      <label className='registerForm__label' htmlFor="firstName">Prénom</label>
      <input className='registerForm__input' type="text" name="firstName" id="firstName" value={formState.firstName} onChange={handleFormChange} required/>

      <label className='registerForm__label' htmlFor="email">Email</label>
      <input className='registerForm__input' type="email" name="email" id="email" value={formState.email} onChange={handleFormChange} required/>

      <label className='registerForm__label' htmlFor="password">Mot de passe</label>
      <input className='registerForm__input' type="password" name="password" id="password" value={formState.password} onChange={handleFormChange} required/>

      <div className='registerForm__radioGroup'>
        <label className='registerForm__radioLabel' htmlFor="student">Élève</label>
        <input className='registerForm__radioInput' type="radio" name="role" id="student" value="student"  onChange={handleFormChange} required/>
      </div>
      <div className='registerForm__radioGroup'>
        <label className='registerForm__radioLabel' htmlFor="instructor">Moniteur</label>
        <input className='registerForm__radioInput' type="radio" name="role" id="instructor" value="instructor" onChange={handleFormChange} required/>
      </div>

      {
        formState.role === 'instructor' && <div className='registerForm__radioGroup'>
          <p onClick={() => fileRef.current.click()} className='registerForm__upload'>
            Choisir
          </p>
          <label className='registerForm__additionalLabel' htmlFor="car">Veuillez télécharger la photo de votre véhicule</label>
          <input className='hidden' ref={fileRef} type="file" name="car" id="car" onChange={handleFileChange}/>
        </div>
      }
      
      <input className='registerForm__submit' type="submit" value="Créer mon compte"/>
      <p className='registerForm__separator'>Ou</p>
      <input className='registerForm__submit' type="submit" value="Inscription avec Facebook"/>
      <input className='registerForm__submit' type="submit" value="Inscription avec Google"/>

    </form>
  );
}

export default RegisterForm
