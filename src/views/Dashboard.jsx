import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Dashboard/navigation/Navigation";

const Dashboard = () => {
  return (
    <div className="dashboard-parent">
      <Navigation />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
