import { React, createContext, useEffect, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthReducer } from "./reducer";
import { initialState } from "./states/states";
import Layout from "./components/Layout";
import Courses from "./components/Courses";
import Home from "./views/Home";
import Instructors from "./views/Instructors";
import CourseDetails from "./views/CourseDetails";
import CourseForm from "./views/CourseForm";
import PrivacyPolicy from "./views/PrivacyPolicy";
import Legals from "./views/Legals";
import Register from "./views/Register";
import Reservation from "./views/Reservation";
import { Login, Logout } from "./views/Auth";
import Tchat from "./views/Tchat";
import Dashboard from "./views/Dashboard";
import Profile from "./views/Profile";
import Help from "./views/Help";
import CoursesIndex from "./components/Dashboard/blocs/CoursesIndex";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";
import Table from './components/Table';
import About from "./views/About";

/* Context */
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

  const isLogged = () => {
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
              user: data,
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
    isLogged();
  }, []);

  return (
    <AuthContext.Provider value={[state, actions]}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index={true} element={<Home />} />

            {/* Authentication */}
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />

            {/* Dashboard */}
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<CoursesIndex />} />
              <Route path="stats" element={<CoursesIndex />} />
              <Route path="tchat" element={<Tchat />} />
              <Route path="courses" element={ <Courses /> } />
              <Route path="payments" element={ <Table data='payments' /> } />
              <Route path="account" element={<Profile />} />
            </Route>

            {/* Instructor */}
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/instructor/:id">
              <Route path="courses" element={<Courses />} />
              <Route path="courses/booking" element={<Reservation />} />
            </Route>

            {/* Course */}
            <Route path="/courses">
              <Route path="add" element={<CourseForm />} />
            </Route>
            <Route path="/course">
              <Route path=":id" element={<CourseDetails />} />
            </Route>

            {/* Help */}
            <Route path="/help" element={<Help />} />

            {/* Miscellaneous */}
            <Route path="/legals" element={<Legals />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />

            {/* Other */}
            <Route path='/register' element={<Register />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />

          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
export { AuthContext };
