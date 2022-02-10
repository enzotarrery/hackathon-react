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

  return <div>
    <p>Login</p>
    <LoginForm 
      onSubmit={credentials => Login(credentials)}
    />
    {
      state.user && <Navigate 
        to={{pathname: "/"}}
      />
    }
    {
      state.error && <p>Echec de la connexion</p>
    }
  </div>
}

const Logout = props => {

  const [state, actions] = useContext(AuthContext)
  console.log(state);

  return <div className="">
      {
        !state.loading && !state.user && <Navigate 
          to={'/login'}
        />
      }

      <div className="">
          <div className="">
              <p>Revenez vite !</p>

              <Link to='/login' onClick={actions.Logout}>
                <p className="">
                    Déconnexion
                </p>
              </Link>
          </div>
      </div>
  </div>
}

export {Logout, Login}