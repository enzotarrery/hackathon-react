import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Layout from './components/Layout'
import Instructors from './views/Instructors';
import Home from './views/Home'
import CourseDetails from './views/CourseDetails';
import CourseForm from './views/CourseForm';
import PrivacyPolicy from './views/PrivacyPolicy';
import Legals from './views/Legals';
import Courses from './components/Courses';

const App = () => {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
              <Route index={ true } element={ <Home /> } />
          
              {/* Instructor */}
              <Route path='/instructors' element={ <Instructors /> } />
              <Route path='/instructor/:id/courses' element={ <Courses /> } />
          
              {/* Course */}
              <Route path='/courses'>
                <Route path='add' element={ <CourseForm /> } />
              </Route>
              <Route path='/course'>
                <Route path=':id' element={ <CourseDetails /> } />
              </Route>
          
              {/* Miscellaneous */}
              <Route path='/legals' element={ <Legals /> } />
              <Route path='/privacy' element={ <PrivacyPolicy /> } />
            </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App
