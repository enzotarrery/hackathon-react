import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import PrivacyPolicy from "./views/PrivacyPolicy";
import Legals from "./views/Legals";
import Dashboard from "./views/Dashboard";
import Tchat from "./views/Tchat";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index={true} element={<Home />} />
          <Route path="/legals" element={<Legals />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="tchat" element={<Tchat />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
