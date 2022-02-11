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

  return <form className='loginForm' onSubmit={handleSubmit}>
      <h2 className='loginForm__title'>Login to access your account</h2>

      <input
          type="email"
          id="username"
          className="loginForm__input"
          placeholder="Email address"
          name="username"
          value={formState.username}
          onChange={handleFormChange}
      />

      <input
          type="password"
          className="loginForm__input"
          placeholder="Password"
          name="password"
          id="password"
          value={formState.password}
          onChange={handleFormChange}
      />

      <input className='loginForm__submit' type="submit"
          value="Login"
      />
    </form>
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func
}


export default LoginForm