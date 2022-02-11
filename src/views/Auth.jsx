import {React, useContext} from 'react'
import LoginForm from '../components/LoginForm'
import { AuthContext } from '../App'
import {
  Navigate, useLocation, Link
} from "react-router-dom";

const Login = props => {

  const [state, actions] = useContext(AuthContext)
  const {
      Login
  } = actions

  const location = useLocation()

  return <section className='login__container'>
    {
      state.user && <Navigate 
        to={{pathname: "/"}}
      />
    }

    <section className='login__card'>
      <h1 className='login__title'>Connexion</h1>
      <LoginForm
        onSubmit={credentials => Login(credentials)}
      />
      {
        state.error && <p className='loginForm__status--error'>Echec de la connexion</p>
      }
    </section>

    <section className='login__card'>
      <a className='login__btnAlt' href="https://google.com">Se connecter avec Google</a>
      <a className='login__btnAlt' href="https://facebook.com">Se connecter avec Facebook</a>
      <span className='login__separator'>ou</span>
      <Link to='/register'>
        <p className='login__link'>Créer un compte</p>
      </Link>
    </section>

  </section>
}

const Logout = props => {

  const [state, actions] = useContext(AuthContext)
  console.log(state);

  return <div className="logout">
      {
        !state.loading && !state.user && <Navigate 
          to={'/login'}
        />
      }

    <h1 className='title'>Revenez vite !</h1>

    <Link to='/login' onClick={actions.Logout}>
      <p className="button button--primary">
          Déconnexion
      </p>
    </Link>
  </div>
}

export {Logout, Login}