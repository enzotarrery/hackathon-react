import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Layout from './components/Layout'
import Home from './views/Home'

const App = () => {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
              <Route index={true} element={<Home />}/>
            </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App
