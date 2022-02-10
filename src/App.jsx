import { React, createContext, useEffect, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import { Login, Logout } from "./views/Auth";
import { AuthReducer } from "./reducer";
import Tchat from "./views/Tchat";
import Dashboard from "./views/Dashboard";
// States
import { initialState } from "./states/states";

import PrivacyPolicy from "./views/PrivacyPolicy";
import Legals from "./views/Legals";
import Instructors from "./components/Instructors";

const AuthContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const handleLogin = (credentials) => {
    dispatch({ type: "login_start", payload: credentials });
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: credentials.username,
        password: credentials.password,
      }),
    };

    fetch(`/api/auth/login`, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          dispatch({ type: "login_error", payload: data });
        } else {
          dispatch({ type: "login_success", payload: data });
        }
      });
  };

  const handleLogout = () => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };

    fetch(`/api/auth/logout`, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          dispatch({ type: "logout_error", payload: data });
        } else {
          dispatch({ type: "logout", payload: data });
        }
      });
  };

  const isLoged = () => {
    dispatch({ type: "login_start" });
    fetch(`/api/auth/me`, {
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 401) {
          dispatch({ type: "not_connected" });
        }

        return res.json();
      })
      .then((data) => {
        if (data.email) {
          dispatch({
            type: "login_success",
            payload: {
              user: {
                username: data.email,
              },
            },
          });
        }
      });
  };

  const actions = {
    Login: handleLogin,
    Logout: handleLogout,
  };

  useEffect(() => {
    isLoged();
  }, []);

  return (
    <AuthContext.Provider value={[state, actions]}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index={true} element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="tchat" element={<Tchat />} />
            </Route>
            <Route path="/legals" element={<Legals />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
export { AuthContext };
