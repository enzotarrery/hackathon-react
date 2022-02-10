import {React, useState} from 'react'
import PropTypes from 'prop-types'

const LoginForm = props => {

  const {
      onSubmit
  } = props


  const [formState, setFormState] = useState({
      username: '',
      password: ''
  })

  const handleFormChange = e => {
      setFormState({
          ...formState,
          [e.target.name]: e.target.value
      })
  }

  const handleSubmit = evt => {
      evt.preventDefault()
      return onSubmit(formState)
  }

  return <div className="">
    <form onSubmit={handleSubmit}>
      <label
          className=""
          htmlFor="username"
      >Email</label>
      <input
          type="email"
          id="username"
          className=""
          placeholder="Email"
          name="username"
          value={formState.username}
          onChange={handleFormChange}
      />

      <label
          className=""
          htmlFor="password"
      >Mot de passe</label>
      <input
          type="password"
          className=""
          placeholder="Mot de passe"
          name="password"
          id="password"
          value={formState.password}
          onChange={handleFormChange}
      />

      <input type="submit"
          value="Connexion"
      />
      </form>
  </div>
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func
}


export default LoginForm