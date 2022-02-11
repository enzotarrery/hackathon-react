import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Dashboard/navigation/Navigation";

const Dashboard = () => {
  return (
    <div>
      <Navigation />
      <div className="content">
        {/* dashboard moniteur - accueil */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
