import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Layout from './components/Layout'
import Instructors from './components/Instructors';
import Home from './views/Home'
import InstructorDetails from './views/InstructorDetails';
import PrivacyPolicy from './views/PrivacyPolicy';
import Legals from './views/Legals';

const App = () => {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
              <Route index={true} element={<Home />} />
              <Route path='/instructors' element={ <Instructors /> } />
              <Route path='/instructor'>
                <Route path=':id' element={ <InstructorDetails /> }/>
              </Route>
              <Route path='/legals' element={<Legals />} />
              <Route path='/privacy' element={<PrivacyPolicy />} />
            </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App
